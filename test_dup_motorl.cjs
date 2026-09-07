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
    if (product.name.includes("150HP 1500RPM Foot IE2")) {
      console.log(`[${product.id}] ${product.name}`);
    }
  }
}
fetchAll();
