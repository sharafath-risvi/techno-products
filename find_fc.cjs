const fs = require('fs');
const allProducts = JSON.parse(fs.readFileSync('./all_products.json', 'utf8')).data;

for (const p of allProducts) {
    if (p.name.includes('FC') || p.description.includes('FC')) {
        console.log(`[${p.id}] ${p.name}`);
    }
}
