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
    } else if (/\b(DRIVE(S)?|FC\s*\d+|VFD)\b/i.test(combinedText)) {
      category_slug = 'drives';
    }

    if (category_slug === 'motors' && /\bDANFOSS\b/i.test(combinedText)) {
      console.log("Danfoss Motor:", product.id, product.name);
    }
  }
}
fetchAll();
