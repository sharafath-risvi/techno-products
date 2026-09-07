// Script to fetch all products and simulate normalizeProduct to find miscategorized ones
const https = require('https');

function fetchPage(page) {
  return new Promise((resolve, reject) => {
    https.get(`https://technoproducts.in/wp-json/api/v1/products?page=${page}&per_page=50`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch(e) { resolve(null); } });
    }).on('error', reject);
  });
}

function normalizeProduct(product) {
  if (!product) return null;
  const name = product.name || '';
  const desc = product.description || '';
  const combinedText = `${name} ${desc}`.toUpperCase();

  let category_slug = 'all';
  if (/\bMOTOR(S)?\b/i.test(combinedText)) {
    category_slug = 'motors';
  } else if (/\b(GEARBOX(ES)?|WORM|HELICAL|PLANETARY)\b/i.test(combinedText) || /\bW\s*\d+\b/i.test(combinedText)) {
    category_slug = 'gearbox';
  } else if (/\b(DRIVE(S)?|FC\s*\d+|VFD)\b/i.test(combinedText)) {
    category_slug = 'drives';
  } else if (/\b(CABLE(S)?|POLYCAB|WIRE(S)?|FRLS|FR)\b/i.test(combinedText)) {
    category_slug = 'cables';
  } else if (/\b(ENCLOSURE(S)?|DOOR|HOFFMANN|PANEL(S)?)\b/i.test(combinedText) || /FLOOR STANDING/i.test(combinedText)) {
    category_slug = 'enclosure';
  } else if (/\b(SWITCHGEAR(S)?|MCB|MCCB|ACB|SIEMENS|CONTACTOR|RELAY)\b/i.test(combinedText)) {
    category_slug = 'switchgears';
  } else {
    category_slug = 'uncategorized';
  }

  return { id: product.id, name: product.name, category_slug };
}

async function main() {
  const first = await fetchPage(1);
  const totalPages = first.pagination.total_pages;
  let all = [...first.data];

  for (let p = 2; p <= totalPages; p++) {
    const pg = await fetchPage(p);
    if (pg && pg.data) all = [...all, ...pg.data];
  }

  console.log(`Total products: ${all.length}`);

  const normalized = all.map(normalizeProduct).filter(Boolean);
  const cables = normalized.filter(p => p.category_slug === 'cables');
  console.log(`\n=== CABLES (${cables.length}) ===`);
  cables.forEach(p => console.log(`  [${p.id}] ${p.name}`));

  const uncategorized = normalized.filter(p => p.category_slug === 'uncategorized');
  console.log(`\n=== UNCATEGORIZED (${uncategorized.length}) ===`);
  uncategorized.slice(0, 20).forEach(p => console.log(`  [${p.id}] ${p.name}`));

  // Look for SIEMENS products specifically
  const siemens = all.filter(p => (p.name + ' ' + p.description).toLowerCase().includes('siemens'));
  console.log(`\n=== ALL SIEMENS PRODUCTS (${siemens.length}) ===`);
  siemens.forEach(p => {
    const n = normalizeProduct(p);
    console.log(`  [${p.id}] ${p.name} => ${n.category_slug}`);
  });
}

main().catch(console.error);
