const fs = require('fs');
const allProducts = JSON.parse(fs.readFileSync('./all_products.json', 'utf8')).data;

const counts = { all: 0, motors: 0, gearbox: 0, drives: 0, cables: 0, enclosure: 0, switchgears: 0, uncategorized: 0 };
const switchgearProducts = [];

for (const product of allProducts) {
  counts.all++;
  const name = product.name || '';
  const desc = product.description || '';
  const combinedText = `${name} ${desc}`.toUpperCase();
  let category_slug = 'all';

  if (/\bBONFIGLIOLI\b/i.test(combinedText) && /\b(GEARBOX|WORM|REDUCER)\b/i.test(combinedText)) {
    category_slug = 'gearbox';
  } else if (/\bMOTOR(S)?\b/i.test(combinedText)) {
    category_slug = 'motors';
  } else if (/\b(GEARBOX(ES)?|WORM|HELICAL|PLANETARY)\b/i.test(combinedText) || /\bW\s*\d+\b/i.test(combinedText)) {
    category_slug = 'gearbox';
  } else if (/\b(DRIVE(S)?|FC\s*\d+|VFD)\b/i.test(combinedText)) {
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
    switchgearProducts.push(name);
  }
}

console.log(counts);
console.log("Switchgears:", switchgearProducts);
