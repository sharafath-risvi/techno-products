const https = require('https');

async function fetchAll() {
  const fetchPage = (page) => new Promise((resolve, reject) => {
    https.get(`https://technoproducts.in/wp-json/api/v1/products?page=${page}&per_page=50`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const firstPage = await fetchPage(1);
  const totalPages = firstPage.pagination.total_pages;
  let allProducts = [...firstPage.data];

  for (let p = 2; p <= totalPages; p++) {
    const pageData = await fetchPage(p);
    allProducts.push(...pageData.data);
  }

  const counts = { motors: 0, gearbox: 0, drives: 0, cables: 0, enclosure: 0, switchgears: 0, uncategorized: 0 };
  let switchgears = [];

  for (const product of allProducts) {
    const name = product.name || '';
    const desc = product.description || '';
    const combinedText = `${name} ${desc}`.toUpperCase();
    let category_slug = 'all';

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

    counts[category_slug]++;
    if (category_slug === 'switchgears') {
        switchgears.push(product.name);
    }
  }

  console.log("Total products fetched:", allProducts.length);
  console.log(counts);
  console.log("Switchgears array length:", switchgears.length);
}
fetchAll();
