import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

// ----------------------------------------------------
// Persistent Cache & Concurrency Configuration
// ----------------------------------------------------
const CACHE_KEY = 'techno_products_catalogue_v1';
const CACHE_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours
const MAX_CONCURRENT_PAGES = 2;          // Controlled concurrency
const INTER_PAIR_DELAY_MS = 350;         // Server breathing room
const API_BASE_URL = 'https://technoproducts.in/api/wp-json/api/v1/products';

// In-memory module-level cache & hydration manager
let memoryProducts = null;
let isHydrationInProgress = false;
const productListeners = new Set();

function notifyListeners(newProducts) {
  memoryProducts = newProducts;
  productListeners.forEach(listener => {
    try {
      listener(newProducts);
    } catch (e) {
      console.warn('[ProductsContext] Error notifying listener:', e);
    }
  });
}

function notifyError(errMessage) {
  productListeners.forEach(listener => {
    try {
      if (listener.onError) listener.onError(errMessage);
    } catch (e) {
      // ignore
    }
  });
}

function readLocalStorage() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.products) || parsed.products.length === 0) return null;
    const now = Date.now();
    const isExpired = !parsed.timestamp || (now - parsed.timestamp > CACHE_TTL_MS);
    return {
      products: parsed.products,
      total: parsed.total || parsed.products.length,
      timestamp: parsed.timestamp || 0,
      isExpired
    };
  } catch (err) {
    console.warn('[ProductsContext] Error reading localStorage cache:', err);
    return null;
  }
}

function writeLocalStorage(products, total) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const payload = {
      timestamp: Date.now(),
      total: total || products.length,
      products
    };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[ProductsContext] Unable to write to localStorage (storage full or disabled):', err);
  }
}

// Resilient single page fetcher with exponential backoff & safe JSON handling
async function fetchProductsPage(page, perPage = 50, retries = 2, delayMs = 1000) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const url = `${API_BASE_URL}?page=${page}&per_page=${perPage}`;
      const res = await fetch(url);

      if (!res.ok) {
        console.warn(`[ProductsContext] Page ${page} returned HTTP ${res.status} (attempt ${attempt + 1}/${retries + 1})`);
        if (attempt < retries) {
          await new Promise(r => setTimeout(r, delayMs * Math.pow(1.5, attempt)));
          continue;
        }
        return { error: true, status: res.status, page };
      }

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        console.warn(`[ProductsContext] Page ${page} returned non-JSON content type: ${contentType}`);
        if (attempt < retries) {
          await new Promise(r => setTimeout(r, delayMs * Math.pow(1.5, attempt)));
          continue;
        }
        return { error: true, status: res.status, page };
      }

      const json = await res.json();
      if (!json || !Array.isArray(json.data)) {
        throw new Error(`Invalid response structure on page ${page}`);
      }
      return { ok: true, data: json.data, pagination: json.pagination, page };
    } catch (err) {
      console.warn(`[ProductsContext] Network error on page ${page}: ${err.message} (attempt ${attempt + 1}/${retries + 1})`);
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, delayMs * Math.pow(1.5, attempt)));
        continue;
      }
      return { error: true, message: err.message, page };
    }
  }
  return { error: true, page };
}

// Module-level decoupled background hydration runner
async function startCatalogueHydration() {
  if (isHydrationInProgress) return;
  isHydrationInProgress = true;

  try {
    const initialCache = readLocalStorage();
    const hasValidCache = initialCache && Array.isArray(initialCache.products) && initialCache.products.length > 0;

    // Step 1: Fetch Page 1 to detect newest products and total page count
    const firstPageResult = await fetchProductsPage(1, 50, 2, 1000);

    if (firstPageResult.error) {
      const currentCount = memoryProducts ? memoryProducts.length : (initialCache ? initialCache.products.length : 0);
      if (currentCount === 0) {
        notifyError('Failed to load products. Please try again.');
      } else {
        console.warn('[ProductsContext] Page 1 failed, but continuing with active catalogue.');
      }
      isHydrationInProgress = false;
      return;
    }

    const firstPageItems = firstPageResult.data.map(normalizeProduct).filter(Boolean);
    const totalPages = firstPageResult.pagination?.total_pages || 10;
    const totalProducts = firstPageResult.pagination?.total || 482;

    // Initialize deduplication map
    const productMap = new Map();

    if (memoryProducts && memoryProducts.length > 0) {
      memoryProducts.forEach(p => { if (p && p.id) productMap.set(p.id, p); });
    } else if (hasValidCache) {
      initialCache.products.forEach(p => { if (p && p.id) productMap.set(p.id, p); });
    }

    firstPageItems.forEach(p => {
      if (p && p.id) productMap.set(p.id, p);
    });

    // Notify listeners with initial Page 1 products immediately
    const initialList = Array.from(productMap.values());
    notifyListeners(initialList);
    writeLocalStorage(initialList, totalProducts);

    // Check if full background hydration is needed
    const needsFullHydration = !hasValidCache || 
      initialCache.isExpired || 
      initialCache.total !== totalProducts || 
      productMap.size < totalProducts;

    if (totalPages > 1 && needsFullHydration) {
      const remainingPages = [];
      for (let p = 2; p <= totalPages; p++) {
        remainingPages.push(p);
      }

      const failedPages = [];

      // Controlled pairs: max 2 concurrent requests at a time
      for (let i = 0; i < remainingPages.length; i += MAX_CONCURRENT_PAGES) {
        const pair = remainingPages.slice(i, i + MAX_CONCURRENT_PAGES);
        const pairResults = await Promise.all(
          pair.map(page => fetchProductsPage(page, 50, 2, 1200))
        );

        let hasNewProducts = false;
        pairResults.forEach(res => {
          if (res.ok && res.data) {
            res.data.forEach(raw => {
              const norm = normalizeProduct(raw);
              if (norm && norm.id) {
                productMap.set(norm.id, norm);
                hasNewProducts = true;
              }
            });
          } else if (res.error) {
            failedPages.push(res.page);
          }
        });

        // Progressive state update as each pair arrives
        if (hasNewProducts) {
          const updatedList = Array.from(productMap.values());
          notifyListeners(updatedList);
          writeLocalStorage(updatedList, totalProducts);
        }

        // Short breathing room between request pairs to prevent Apache saturation
        if (i + MAX_CONCURRENT_PAGES < remainingPages.length) {
          await new Promise(r => setTimeout(r, INTER_PAIR_DELAY_MS));
        }
      }

      // Retry any failed pages once after a cooldown delay
      if (failedPages.length > 0) {
        console.warn(`[ProductsContext] Retrying ${failedPages.length} failed pages:`, failedPages);
        await new Promise(r => setTimeout(r, 1500));
        for (const page of failedPages) {
          const retryRes = await fetchProductsPage(page, 50, 1, 2000);
          if (retryRes.ok && retryRes.data) {
            retryRes.data.forEach(raw => {
              const norm = normalizeProduct(raw);
              if (norm && norm.id) productMap.set(norm.id, norm);
            });
            notifyListeners(Array.from(productMap.values()));
          }
        }
      }

      // Final update and persistent cache commit
      const finalList = Array.from(productMap.values());
      notifyListeners(finalList);
      writeLocalStorage(finalList, totalProducts);
    } else {
      writeLocalStorage(initialList, totalProducts);
    }
  } catch (err) {
    console.error('[ProductsContext] Hydration unexpected error:', err);
    if (!memoryProducts || memoryProducts.length === 0) {
      notifyError(err.message || 'Failed to load products.');
    }
  } finally {
    isHydrationInProgress = false;
  }
}

export function ProductsProvider({ children }) {
  const initialCache = readLocalStorage();
  const hasValidCache = initialCache && Array.isArray(initialCache.products) && initialCache.products.length > 0;

  // Stale-While-Revalidate: render immediately if memory or localStorage products exist
  const [products, setProducts] = useState(() => {
    if (memoryProducts && memoryProducts.length > 0) return memoryProducts;
    if (hasValidCache) {
      memoryProducts = initialCache.products;
      return initialCache.products;
    }
    return [];
  });

  const [loading, setLoading] = useState(() => {
    if (memoryProducts && memoryProducts.length > 0) return false;
    if (hasValidCache) return false;
    return true;
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const listener = (newProducts) => {
      setProducts(newProducts);
      setLoading(false);
      setError(null);
    };
    listener.onError = (errMessage) => {
      setError(errMessage);
      setLoading(false);
    };

    productListeners.add(listener);

    // Sync state with latest memory products if already populated
    if (memoryProducts && memoryProducts.length > 0) {
      setProducts(memoryProducts);
      setLoading(false);
    }

    // Trigger decoupled background hydration
    startCatalogueHydration();

    return () => {
      productListeners.delete(listener);
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

// ----------------------------------------------------
// Normalization Layer (Regex Attribute Parsing)
// ----------------------------------------------------

export function normalizeProduct(product) {
  if (!product) return null;
  const name = product.name || '';
  const desc = product.description || '';
  const combinedText = `${name} ${desc}`.toUpperCase();

  const attributes = {};
  
  // 1. DEDUCE CATEGORY
  let category_slug = 'all';
  
  // High-priority override for Gearboxes that might contain the word "Motor" in their description
  if (/\bBONFIGLIOLI\b/i.test(combinedText) && /\b(GEARBOX|WORM|REDUCER)\b/i.test(combinedText)) {
    category_slug = 'gearbox';
  } else if (/\bMOTOR(S|L)?\b/i.test(combinedText)) {
    category_slug = 'motors';
  } else if (/\b(GEARBOX(ES)?|WORM|HELICAL|PLANETARY)\b/i.test(combinedText) || /\bW\s*\d+\b/i.test(combinedText)) {
    category_slug = 'gearbox';
  } else if (/\b(DRIVE(S)?|FC\s*\d+|FC051|VFD)/i.test(combinedText)) {
    category_slug = 'drives';
  } else if (/\b(CABLE(S)?|POLYCAB|WIRE(S)?|FRLS)\b/i.test(combinedText)) {
    category_slug = 'cables';
  } else if (/\b(ENCLOSURE(S)?|DOOR|HOFFMANN|PANEL(S)?)\b/i.test(combinedText) || /FLOOR STANDING/i.test(combinedText)) {
    category_slug = 'enclosure';
  } else if (/\b(SWITCHGEAR(S)?|MCB|MCCB|ACB|SIEMENS|CONTACTOR|RELAY)\b/i.test(combinedText)) {
    category_slug = 'switchgears';
  } else {
    category_slug = 'uncategorized';
  }

  // 2. EXTRACT HP
  const hpMatch = combinedText.match(/([\d\.]+)\s*HP/);
  if (hpMatch) {
    attributes.hp = parseFloat(hpMatch[1]).toString();
  }

  // 3. EXTRACT RPM & POLE
  const rpmMatch = combinedText.match(/(\d{3,4})\s*RPM/);
  if (rpmMatch) {
    const rpmVal = parseInt(rpmMatch[1], 10);
    if (rpmVal >= 2800) attributes.rpm = "3000 2 Pole";
    else if (rpmVal >= 1400 && rpmVal < 2800) attributes.rpm = "1500 4 Pole";
    else if (rpmVal >= 900 && rpmVal < 1400) attributes.rpm = "1000 6 Pole";
    else if (rpmVal >= 700 && rpmVal < 900) attributes.rpm = "750 8 Pole";
  }

  // 4. EXTRACT BRAND
  const brands = ["SIEMENS", "CROMPTON", "HAVELLS", "BHARAT BIJLEE", "MARATHON", "BBL", "BONFIGLIOLI", "DANFOSS"];
  for (const b of brands) {
    if (combinedText.includes(b)) {
      if (b === "BBL") attributes.brand = "Bharat Bijlee";
      else attributes.brand = b.charAt(0) + b.slice(1).toLowerCase();
      break;
    }
  }

  // 5. EXTRACT MOUNTING
  if (combinedText.includes("FOOT CUM FLANGE")) attributes.mounting = "Foot Cum Flange";
  else if (combinedText.includes("FOOT CUM FACE")) attributes.mounting = "Foot Cum Face";
  else if (combinedText.includes("FLANGE")) attributes.mounting = "Flange";
  else if (combinedText.includes("FACE")) attributes.mounting = "Face";
  else if (combinedText.includes("FOOT") || combinedText.includes("B3")) attributes.mounting = "Foot";

  // 6. EXTRACT KW
  const kwMatch = combinedText.match(/([\d\.]+)\s*KW/);
  if (kwMatch) {
    attributes.kw = parseFloat(kwMatch[1]).toString();
  }

  // 7. GEARBOX & DRIVE MODELS / TYPES
  if (category_slug === 'drives') {
    if (combinedText.includes("FC302") || combinedText.includes("FC 302")) attributes.model = "AUTOMATION DRIVE (ADVANCED) - FC302";
    else if (combinedText.includes("FC301") || combinedText.includes("FC 301")) attributes.model = "AUTOMATION DRIVE (ADVANCED) - FC301";
    else if (combinedText.includes("FC360") || combinedText.includes("FC 360")) attributes.model = "AUTOMATION DRIVE (BASIC) - FC360";
    else if (combinedText.includes("FC102") || combinedText.includes("FC 102")) attributes.model = "HVAC (ADVANCED) - FC102";
    else if (combinedText.includes("FC101") || combinedText.includes("FC 101")) attributes.model = "HVAC (BASIC) - FC101";
    else if (combinedText.includes("FC051") || combinedText.includes("FC 51") || combinedText.includes("FC 051")) attributes.model = "MICRO DRIVE(BASIC) - FC051";
  }

  if (category_slug === 'gearbox') {
    if (combinedText.includes("WORM") || combinedText.includes(" W ")) attributes.type = "Worm - W";
    else if (combinedText.includes("BEVEL HELICAL") || combinedText.includes(" A ")) attributes.type = "Bevel Helical - A Series";
    else if (combinedText.includes("INLINE HELICAL") || combinedText.includes(" AS ")) attributes.type = "Inline Helical- AS Series";
    else if (combinedText.includes("PLANETARY") || combinedText.includes(" 3 ")) attributes.type = "Planetary - 3 SERIES";
    else if (combinedText.includes("SHAFT MOUNTED") || combinedText.includes(" TA ")) attributes.type = "Shaft Mounted - TA Series";
    else if (combinedText.includes("VFR")) attributes.type = "VFR Series";
    else if (combinedText.includes("VF")) attributes.type = "VF";
    else if (combinedText.includes("WR")) attributes.type = "WR";

    const modelMatch = combinedText.match(/(?:W|VF|A)\s*(\d+)/);
    if (modelMatch) attributes.model = modelMatch[1];
  }

  // 8. CABLES
  if (category_slug === 'cables') {
    if (combinedText.includes("ALUMINIUM")) attributes.category = "Aluminium Armd";
    else if (combinedText.includes("COPPER")) attributes.category = "Copper Armd";
    else if (combinedText.includes("FLEXIBLE")) attributes.category = "Flexible";

    const colors = ["BLACK", "BLUE", "BROWN", "GREEN", "GREY BLACK", "GREY", "ORANGE", "RED", "WHITE", "YELLOW WITH GREEN", "YELLOW"];
    for (const c of colors) {
      if (combinedText.includes(c)) {
        attributes.color = c.charAt(0) + c.slice(1).toLowerCase().replace('with', 'with').replace('black', 'Black');
        break;
      }
    }

    if (combinedText.includes("FRLS")) attributes.type = "FRLS";
    else if (combinedText.includes("FR")) attributes.type = "FR";
  }

  // 9. ENCLOSURE
  if (category_slug === 'enclosure') {
    if (combinedText.includes("DOUBLE DOOR")) attributes.type = "Double Door";
    else if (combinedText.includes("SINGLE DOOR")) attributes.type = "Single Door";
    else if (combinedText.includes("FLOOR STANDING")) attributes.type = "Floor Standing";

    if (combinedText.includes("WALL MOUNTED") || combinedText.includes("WALL MOUNT")) attributes.mounting = "Wall Mounted";
    else if (combinedText.includes("FLOOR MOUNTED") || combinedText.includes("FLOOR MOUNT")) attributes.mounting = "Floor Mounted";

    const depthMatch = combinedText.match(/(?:D|DEPTH)\s*[:=\-]?\s*(\d{3})/);
    if (depthMatch) attributes.depth = depthMatch[1];
  }

  // 10. SWITCHGEARS
  if (category_slug === 'switchgears') {
    if (combinedText.includes("MCCB")) attributes.category = "MCCB";
    else if (combinedText.includes("MCB")) attributes.category = "MCB";
    else if (combinedText.includes("ACB")) attributes.category = "ACB";

    const poleMatch = combinedText.match(/([34])\s*POLE/);
    if (poleMatch) attributes.pole = poleMatch[1];

    const ampMatch = combinedText.match(/(\d{2,4})\s*A/);
    if (ampMatch) attributes.amps = ampMatch[1];
  }

  return {
    ...product,
    category_slug,
    attributes
  };
}
