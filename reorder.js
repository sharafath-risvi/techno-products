const fs = require('fs');
const file = 'src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const order = [
  'food-beverage',
  'hvac',
  'water-treatment',
  'automotive',
  'chemical-pharma',
  'textile',
  'cement-mining',
  'paper-pulp',
  'infrastructure'
];

// First, reorder the "industries" array
const indStartStr = 'export const industries = [';
const indEndStr = '];';
const indStart = content.indexOf(indStartStr);
const indEnd = content.indexOf(indEndStr, indStart) + indEndStr.length;

const industriesBlock = content.slice(indStart, indEnd);
const lines = industriesBlock.split('\n').filter(l => l.trim() !== '' && l.includes('{'));
const newLines = [];
order.forEach(slug => {
  // Map slug to name to match the lines
  const nameMap = {
    'food-beverage': 'Food & Beverage',
    'hvac': 'HVAC',
    'water-treatment': 'Water Treatment',
    'automotive': 'Automotive',
    'chemical-pharma': 'Chemical & Pharma',
    'textile': 'Textile',
    'cement-mining': 'Cement & Mining',
    'paper-pulp': 'Paper & Pulp',
    'infrastructure': 'Infrastructure'
  };
  const name = nameMap[slug];
  const line = lines.find(l => l.includes(`"${name}"`));
  if (line) newLines.push(line);
});

const newIndustriesBlock = indStartStr + '\n' + newLines.join('\n') + '\n' + indEndStr;
content = content.replace(industriesBlock, newIndustriesBlock);

// Next, reorder industriesData
const dataStartStr = 'export const industriesData = [';
const dataEndStr = '];';
const dataStart = content.indexOf(dataStartStr);
// The first '];' after dataStartStr is the end of the array. Let's find the correct one by matching the structure or just parsing.
// Actually, '];' can appear inside the objects for nested arrays.
// So let's find the end of industriesData by looking for the next export.
const nextExportStr = 'export const blogPosts = [';
const dataEnd = content.indexOf(nextExportStr) - 1; // get to the newline before it
const dataBlock = content.slice(dataStart, dataEnd);

// Split dataBlock into individual objects.
// They are separated by '  },\n  {' or similar.
// A safe way is to split by `id: '` and recreate.
const segments = [];
let currentIndex = 0;
order.forEach(slug => {
  const searchStr = `id: '${slug}'`;
  const slugIdx = dataBlock.indexOf(searchStr);
  
  // Find start of this object (the '{' before id)
  const objStart = dataBlock.lastIndexOf('  {\n', slugIdx);
  // Find end of this object (the '  },' after or '  }' if it's the last one)
  let objEnd = dataBlock.indexOf('  },\n', slugIdx);
  if (objEnd === -1 || dataBlock.indexOf('  }\n];', slugIdx) !== -1 && dataBlock.indexOf('  }\n];', slugIdx) < objEnd) {
      objEnd = dataBlock.indexOf('  }\n];', slugIdx);
      if(objEnd !== -1) {
          objEnd += 3; // Include the '  }'
      }
  } else {
      objEnd += 4; // Include '  },'
  }
  
  if (objEnd === -1) {
    // maybe it's the last one without a comma
    objEnd = dataBlock.indexOf('\n  }', slugIdx) + 4; 
  }
  
  let segment = dataBlock.slice(objStart, objEnd).trim();
  if (segment.endsWith(',')) segment = segment.slice(0, -1);
  segments.push(segment);
});

const newIndustriesDataBlock = dataStartStr + '\n  ' + segments.join(',\n  ') + '\n];\n\n// ── BLOG POSTS ─────────────────────────────────────────────────────────────────\n';

// Replace the block from dataStart to nextExportStr - 1
const originalEndStr = '\n// ── BLOG POSTS ─────────────────────────────────────────────────────────────────\n';
const completeOldBlock = content.slice(dataStart, content.indexOf(originalEndStr) + originalEndStr.length);

content = content.replace(completeOldBlock, newIndustriesDataBlock);

fs.writeFileSync(file, content);
console.log('Reordered successfully!');
