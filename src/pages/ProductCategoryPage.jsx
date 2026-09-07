import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, SlidersHorizontal, Search, Loader2, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { useProducts } from '../context/ProductsContext';

// Filter Configurations based on User Prompt
const FILTER_CONFIG = {
  motors: {
    hp: ["0.16", "0.25", "0.35", "0.5", "0.75", "1", "1.5", "2", "3", "4", "5", "7.5", "10", "12.5", "15", "20", "25", "30", "40", "50", "60", "75", "100", "120", "150", "170", "180", "200", "215", "220", "240", "270", "300", "335", "340", "370", "425", "473", "500"],
    rpm: ["3000 2 Pole", "1500 4 Pole", "1000 6 Pole", "750 8 Pole"],
    brand: ["Siemens", "Crompton", "Havells", "Bharat Bijlee", "Marathon"],
    mounting: ["Foot", "Flange", "Foot Cum Flange", "Face", "Foot Cum Face"]
  },
  gearbox: {
    hp: ["0.12", "0.16", "0.25", "0.33", "0.5", "0.75", "1", "1.5", "2", "3", "4", "5", "5.5", "7.5", "10", "12.5", "15", "20", "25", "30", "40", "50", "60", "75"],
    type: ["Bevel Helical - A Series", "Inline Helical- AS Series", "Planetary - 3 SERIES", "Shaft Mounted - TA Series", "VF", "VFR Series", "Worm - W", "WR"],
    model: ["100", "100.1", "110", "130", "150", "16", "185", "20", "210", "25", "250", "30", "30.3", "35", "35.35", "44", "45", "45.55", "49", "49,55", "50.6", "55", "60", "60.6", "603", "63", "70.7", "75", "80", "80.8", "86", "90"]
  },
  drives: {
    model: ["AUTOMATION DRIVE (ADVANCED) - FC301", "AUTOMATION DRIVE (ADVANCED) - FC302", "AUTOMATION DRIVE (BASIC) - FC360", "HVAC (ADVANCED) - FC102", "HVAC (BASIC) - FC101", "MICRO DRIVE(BASIC) - FC051"],
    kw: ["0.18", "0.37", "0.75", "1.1", "1.5", "11", "110", "15", "18", "18.5", "2.2", "200", "22", "3", "30", "37", "4", "45", "5.5", "55", "7.5"]
  },
  cables: {
    category: ["Aluminium Armd", "Copper Armd", "Flexible"],
    color: ["Black", "Blue", "Brown", "Green", "Grey", "Grey Black", "Orange", "Red", "White", "Yellow", "Yellow with Green"],
    type: ["FR", "FRLS"]
  },
  enclosure: {
    type: ["Double Door", "Floor Standing", "Single Door"],
    mounting: ["Floor Mounted", "Wall Mounted"],
    depth: ["120", "210", "300", "400"]
  },
  switchgears: {
    amps: ["20", "250", "2500"],
    category: ["ACB", "MCB", "MCCB"],
    pole: ["3", "4"]
  }
};

export default function ProductCategoryPage() {
  const { categorySlug: urlSlug } = useParams();
  const slug = urlSlug || 'all';
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const perPage = 12;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    setActiveFilters({});
    setPage(1);
    setSearchQuery('');
  }, [slug]);

  // Fetch categories for sidebar
  const { data: apiCategoriesData, loading: catLoading } = useApi('https://technoproducts.in/wp-json/api/v1/product-categories');
  const categories = apiCategoriesData?.data || [];

  // Fetch all products from context
  const { products: allProducts, loading: prodLoading, error: prodError } = useProducts();

  // Determine current category
  let category = categories.find(c => c.slug === slug);
  if (slug === 'all') {
    category = {
      id: "all",
      name: "All Products",
      shortName: "All Products",
      slug: "all",
      tag: "Complete Portfolio",
      description: "Browse our entire catalogue of industrial products across all categories.",
      count: allProducts ? allProducts.length : "All"
    };
  } else if (!category && catLoading) {
    category = {
      id: "loading",
      name: "Loading...",
      shortName: "Loading",
      slug: slug,
      tag: "Loading",
      description: "Fetching category details...",
      count: "..."
    };
  }

  // Extract a real product image for the hero section safely
  const heroImage = useMemo(() => {
    if (slug === 'all') {
      return "/industries images/allproducts.webp";
    }
    const productWithImage = allProducts?.find(p => p.category_slug === slug && p.image);
    return productWithImage?.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop";
  }, [allProducts, slug]);

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // 1. ISOLATE BY CATEGORY
    if (slug !== 'all') {
      result = result.filter(p => p.category_slug === slug);
    }

    // 2. SEARCH QUERY
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
    }

    // 3. APPLY UI ATTRIBUTE FILTERS (AND logic across groups, OR logic within group)
    Object.keys(activeFilters).forEach(key => {
      const selectedValues = activeFilters[key];
      if (selectedValues.length > 0) {
        result = result.filter(p => {
          if (!p.attributes || !p.attributes[key]) return false;
          return selectedValues.includes(p.attributes[key]);
        });
      }
    });

    return result;
  }, [allProducts, slug, searchQuery, activeFilters]);

  // PAGINATION
  const total_pages = Math.ceil(filteredProducts.length / perPage) || 1;
  const paginatedProducts = filteredProducts.slice((page - 1) * perPage, page * perPage);
  const pagination = { page, total_pages, total: filteredProducts.length };

  const handleReset = () => {
    setSearchQuery('');
    setActiveFilters({});
    setPage(1);
  };

  const handleClearCategory = () => {
    handleReset();
    navigate('/products/all', { replace: true });
  };

  const toggleFilter = (key, value) => {
    setActiveFilters(prev => {
      const current = prev[key] || [];
      const updated = current.includes(value) 
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.total_pages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!catLoading && !category && slug !== 'all') {
    return (
      <main style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Category Not Found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Products</Link>
      </main>
    );
  }

  return (
    <main style={{ background: '#F5F5F5', minHeight: '100vh', paddingBottom: 120 }}>
      <style>{`
        .cat-hero-img-box {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40%;
          opacity: 0.3;
        }
        .cat-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .cat-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #001426 0%, transparent 100%);
        }

        /* Desktop Only adjustments for All Products if required */
        @media (min-width: 1024px) {
          .cat-hero-img-box.is-all-products {
            /* Keep it consistent with other product pages: full bleed, opacity 0.3, with gradient */
            width: 45%; 
            opacity: 0.35;
          }
          .cat-hero-img-box.is-all-products .cat-hero-img {
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>

      {/* 1. Category Hero (Unchanged) */}
      <section className="category-hero-section" style={{ 
        background: '#001426', 
        paddingTop: 140, paddingBottom: 80, 
        position: 'relative', overflow: 'hidden' 
      }}>
        <div className={`cat-hero-img-box ${slug === 'all' ? 'is-all-products' : ''}`}>
          <img src={heroImage} alt="" className="cat-hero-img" />
          <div className="cat-hero-overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <Link to="/products" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#4F8FBF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Products</Link>
            <ChevronRight size={14} color="#4F8FBF" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{category.shortName}</span>
          </div>
          <div style={{ maxWidth: 700 }}>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
              {category.name}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 40 }}>
              {category.description}
            </p>
            <div className="category-stats-row" style={{ display: 'flex', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#fff' }}>{category.count}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Models Available</span>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#fff' }}>Official</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Distributor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Layout with Sidebar Filter and Product Grid */}
      <section style={{ paddingTop: 40, paddingBottom: 64, background: '#FFFFFF', minHeight: '100vh' }}>
        <div className="container products-layout-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'start' }}>
          
          {/* Left Sidebar: Sticky Filter */}
          <div style={{ position: 'sticky', top: 24, maxHeight: 'calc(100vh - 48px)', overflowY: 'auto' }} className="scrollbar-hide filter-sidebar">
            <div className="drawer-header" style={{ padding: '0 0 24px 0', borderBottom: 'none' }}>
              <div className="drawer-title">
                <SlidersHorizontal size={20} />
                <h2>Filters</h2>
              </div>
            </div>

            <div className="scrollbar-hide" style={{ padding: 0 }}>
              
              <div className="filter-group">
                <h3>Search Models</h3>
                <div className="drawer-search">
                  <Search size={16} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search Products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <h3>Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link 
                    to="/products/all"
                    onClick={() => { setSearchQuery(''); setPage(1); }} 
                    style={{
                      padding: '10px 16px', borderRadius: 8, fontSize: 15, fontFamily: 'var(--font-body)',
                      background: slug === 'all' ? '#0067A4' : '#F8F9FA',
                      color: slug === 'all' ? '#FFF' : '#333',
                      textDecoration: 'none', fontWeight: slug === 'all' ? 700 : 400
                    }}
                  >
                    All Products
                  </Link>
                  {catLoading ? (
                    <div style={{ padding: 16, textAlign: 'center' }}><Loader2 size={24} className="animate-spin" color="#0067A4" /></div>
                  ) : (
                    categories.map(cat => (
                      <Link 
                        key={cat.slug} 
                        to={`/products/${cat.slug}`} 
                        onClick={() => { setSearchQuery(''); setPage(1); }} 
                        style={{
                          padding: '10px 16px', borderRadius: 8, fontSize: 15, fontFamily: 'var(--font-body)',
                          background: slug === cat.slug ? '#0067A4' : '#F8F9FA',
                          color: slug === cat.slug ? '#FFF' : '#333',
                          textDecoration: 'none', fontWeight: slug === cat.slug ? 700 : 400
                        }}
                      >
                        {cat.name}
                      </Link>
                    ))
                  )}
                </div>
              </div>

              {FILTER_CONFIG[slug] && Object.keys(FILTER_CONFIG[slug]).map(filterKey => (
                <div className="filter-group" key={filterKey} style={{ marginTop: 24 }}>
                  <h3 style={{ textTransform: 'capitalize' }}>{filterKey}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 200, overflowY: 'auto', paddingRight: 8 }} className="scrollbar-hide">
                    {FILTER_CONFIG[slug][filterKey].map(val => (
                      <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, color: '#333' }}>
                        <input 
                          type="checkbox" 
                          style={{ width: 16, height: 16, accentColor: '#0067A4' }}
                          checked={activeFilters[filterKey]?.includes(val) || false}
                          onChange={() => toggleFilter(filterKey, val)}
                        />
                        {val}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button className="btn btn-outline" onClick={handleReset} style={{ width: '100%', borderColor: '#E5E7EB', color: '#666', marginTop: 32 }}>
                Reset Filters
              </button>
            </div>
          </div>

          {/* Right Area: Product Grid */}
          <div>
            {/* Mobile-only filter bar */}
            <div className="mobile-filter-bar">
              <input
                type="text"
                className="mobile-search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="product-count">
                Showing Page <span>{pagination.page}</span> of <span>{pagination.total_pages}</span> ({pagination.total} Products Total)
              </div>
            </div>

            {prodLoading ? (
              <div className="product-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="premium-product-card" style={{ height: 440 }}>
                    <div className="card-image-wrapper" style={{ background: '#F1F5F9' }}>
                      <div className="skeleton-pulse" style={{ width: '100%', height: '100%', background: '#E2E8F0' }} />
                    </div>
                    <div className="card-content">
                      <div className="skeleton-pulse" style={{ height: 24, width: '80%', background: '#E2E8F0', marginBottom: 16, borderRadius: 4 }} />
                      <div className="skeleton-pulse" style={{ height: 16, width: '100%', background: '#E2E8F0', marginBottom: 8, borderRadius: 4 }} />
                      <div className="skeleton-pulse" style={{ height: 16, width: '60%', background: '#E2E8F0', marginBottom: 24, borderRadius: 4 }} />
                      <div className="skeleton-pulse" style={{ height: 40, width: '100%', background: '#E2E8F0', marginTop: 'auto', borderRadius: 8 }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : prodError ? (
              <div style={{ textAlign: 'center', color: '#D71B32', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                Failed to load products. Please try again.
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                No products match the selected filters.
              </div>
            ) : (
              <>
                <div className="product-grid">
                  {paginatedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      onClick={() => navigate(`/products/${slug}/${product.id}`)}
                      className="premium-product-card"
                      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-image-wrapper">
                        {product.image ? (
                          <motion.img 
                            src={product.image} 
                            alt={product.name} 
                            className="card-image"
                            loading="lazy"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: 'var(--font-heading)' }}>
                            No Image Available
                          </div>
                        )}
                        {/* We hide the brand tag if it doesn't exist, as API doesn't provide it directly */}
                      </div>
                      
                      <div className="card-content">
                        <h3 className="card-title" dangerouslySetInnerHTML={{ __html: product.name }} />
                        
                        <div className="card-specs">
                           {/* Since the API doesn't provide explicit specs, we will display a short excerpt from description if available */}
                           <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', lineHeight: 1.5, maxHeight: 60, overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                        
                        <div className="card-actions">
                          <Link 
                            to={`/products/${slug}/${product.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="btn-quick-view"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            View Product
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {pagination.total_pages > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 64, flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                      style={{
                        padding: '10px 16px', borderRadius: 8, border: '1px solid #E5E7EB', background: page === 1 ? '#F9FAFB' : '#FFF',
                        color: page === 1 ? '#9CA3AF' : '#001426', cursor: page === 1 ? 'not-allowed' : 'pointer',
                        fontFamily: 'var(--font-heading)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8
                      }}
                    >
                      <ArrowLeft size={16} /> Previous
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {(() => {
                        const total = pagination.total_pages;
                        const curr = page;
                        const pages = [];
                        
                        if (total <= 7) {
                          for (let i = 1; i <= total; i++) pages.push(i);
                        } else {
                          if (curr <= 4) {
                            pages.push(1, 2, 3, 4, 5, '...', total);
                          } else if (curr >= total - 3) {
                            pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total);
                          } else {
                            pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
                          }
                        }

                        return pages.map((p, idx) => (
                          p === '...' ? (
                            <span key={`ellipsis-${idx}`} style={{ padding: '8px', color: '#9CA3AF' }}>...</span>
                          ) : (
                            <button
                              key={`page-${p}`}
                              onClick={() => handlePageChange(p)}
                              style={{
                                width: 40, height: 40, borderRadius: 8, border: p === curr ? 'none' : '1px solid #E5E7EB',
                                background: p === curr ? '#0067A4' : '#FFF', color: p === curr ? '#FFF' : '#374151',
                                fontFamily: 'var(--font-body)', fontWeight: p === curr ? 700 : 500, cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              {p}
                            </button>
                          )
                        ));
                      })()}
                    </div>

                    <button 
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === pagination.total_pages}
                      style={{
                        padding: '10px 16px', borderRadius: 8, border: '1px solid #E5E7EB', background: page === pagination.total_pages ? '#F9FAFB' : '#FFF',
                        color: page === pagination.total_pages ? '#9CA3AF' : '#001426', cursor: page === pagination.total_pages ? 'not-allowed' : 'pointer',
                        fontFamily: 'var(--font-heading)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8
                      }}
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .skeleton-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        /* Global hide scrollbar for horizontal containers and drawer */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Toolbar Styles */
        .product-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-bottom: 24px;
        }
        .toolbar-left, .toolbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .toolbar-search {
          position: relative;
        }
        .toolbar-search .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        .toolbar-search input {
          padding: 12px 16px 12px 40px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          width: 260px;
          transition: border-color 0.3s;
          outline: none;
        }
        .toolbar-search input:focus { border-color: #0067A4; }

        .toolbar-select {
          padding: 12px 36px 12px 16px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #333;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 14px top 50%;
          background-size: 10px auto;
          outline: none;
        }

        .product-count {
          font-family: var(--font-body);
          font-size: 14px;
          color: #666;
        }
        .product-count span {
          font-weight: 700;
          color: #001426;
        }

        .btn-filter {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #001426;
          color: #FFF;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-filter:hover { background: #0067A4; }

        /* Category Pills */
        .category-pills-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 16px 0;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .category-pill {
          padding: 10px 20px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          color: #555;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .category-pill:hover {
          background: #EAF3F9;
          border-color: #0067A4;
          color: #0067A4;
        }
        .category-pill.active {
          background: #0067A4;
          border-color: #0067A4;
          color: #FFF;
        }

        /* Product Grid Redesign */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (min-width: 1440px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; }
        }

        .premium-product-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%; /* Important for alignment */
        }
        .card-image-wrapper {
          padding: 24px;
          background: #F8F9FA;
          position: relative;
          overflow: hidden;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .card-brand-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #FFFFFF;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          color: #0067A4;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Pushes bottom area down */
        }
        .card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: #000000;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .card-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .spec-label {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }
        .spec-value {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }

        .card-actions {
          margin-top: auto; /* Absolute perfect bottom alignment across all cards */
          display: flex;
          gap: 12px;
        }
        .btn-quick-view {
          flex: 1;
          background: #001426;
          color: #FFF;
          border: none;
          padding: 12px 0;
          border-radius: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-quick-view:hover { background: #0067A4; }
        .btn-download {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFF;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          color: #666;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-download:hover {
          border-color: #0067A4;
          color: #0067A4;
        }

        /* Filter Drawer */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 20, 38, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9998;
        }
        .filter-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 400px;
          max-width: 100vw;
          background: #FFFFFF;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          box-shadow: 20px 0 60px rgba(0,0,0,0.1);
        }
        .drawer-header {
          padding: 32px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000000;
        }
        .drawer-title h2 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 20px;
        }
        .drawer-close {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.3s;
        }
        .drawer-close:hover { background: #E5E7EB; color: #001426; }
        
        .drawer-content {
          padding: 32px;
          overflow-y: auto;
          flex-grow: 1;
        }
        .filter-group {
          margin-bottom: 32px;
        }
        .filter-group h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .drawer-search {
          position: relative;
        }
        .drawer-search .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        .drawer-search input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
        }
        .drawer-search input:focus { border-color: #0067A4; }
        
        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .checkbox-label input {
          width: 20px;
          height: 20px;
          accent-color: #0067A4;
          cursor: pointer;
        }
        .checkbox-label span {
          font-family: var(--font-body);
          font-size: 15px;
          color: #444;
        }

        .drawer-footer {
          padding: 24px 32px;
          border-top: 1px solid rgba(0,0,0,0.05);
          display: flex;
          gap: 16px;
          background: #FFF;
        }

        /* Responsive Grid Adjustments */
        @media (max-width: 1200px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .toolbar-left, .toolbar-right { width: 100%; justify-content: space-between; }
          .toolbar-search input { width: 100%; }
        }
        @media (max-width: 600px) {
          .product-grid { grid-template-columns: 1fr; }
          .toolbar-left, .toolbar-right { flex-direction: column; align-items: stretch; }
          .filter-drawer { width: 100%; }
        }

        /* ── Mobile-only layout ───────────────────── */
        @media (max-width: 768px) {
          /* Hero: reduce padding-top for mobile navbar */
          .category-hero-section {
            padding-top: 90px !important;
            padding-bottom: 48px !important;
          }
          /* Hero stats row: wrap */
          .category-stats-row {
            flex-wrap: wrap;
            gap: 16px;
          }
          /* Sidebar: hide on mobile */
          .filter-sidebar {
            display: none !important;
          }
          /* Layout grid: full width on mobile */
          .products-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          /* Product grid: 2-column on mobile */
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          /* Card image: shorter on mobile */
          .card-image-wrapper {
            height: 180px !important;
            padding: 16px !important;
          }
          /* Card content: reduce padding */
          .card-content {
            padding: 16px !important;
          }
          /* Card title: smaller font */
          .card-title {
            font-size: 13px !important;
            margin-bottom: 12px !important;
          }
          /* View Product button: smaller */
          .btn-quick-view {
            padding: 10px 0 !important;
            font-size: 12px !important;
          }
          /* Mobile filter bar at top */
          .mobile-filter-bar {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-wrapper {
            height: 200px !important;
          }
        }

        /* Mobile filter bar - hidden by default (desktop) */
        .mobile-filter-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0 20px;
          gap: 12px;
        }
        .mobile-filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #001426;
          color: #FFF;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }
        .mobile-search-input {
          flex: 1;
          padding: 10px 14px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
        }
        .mobile-search-input:focus { border-color: #0067A4; }
      `}</style>
    </main>
  );
}
