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

  const ids = new Set();
  let dups = 0;
  for (const p of allProducts) {
      if (ids.has(p.id)) {
          console.log("Duplicate ID:", p.id, p.name);
          dups++;
      }
      ids.add(p.id);
  }
  console.log("Total duplicates by ID:", dups);
  
  const names = new Set();
  let nameDups = 0;
  for (const p of allProducts) {
      if (names.has(p.name)) {
          // console.log("Duplicate name:", p.name);
          nameDups++;
      }
      names.add(p.name);
  }
  console.log("Total duplicates by name:", nameDups);
}
fetchAll();
