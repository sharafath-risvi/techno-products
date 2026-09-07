const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = 'public/industries images';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const filePath = path.join(dir, file);
    const parsed = path.parse(filePath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    console.log(`Converting ${filePath} to ${webpPath}...`);
    try {
      execSync(`ffmpeg -y -i "${filePath}" -c:v libwebp -q:v 85 "${webpPath}"`, { stdio: 'pipe' });
      console.log(`Success: ${webpPath}`);
    } catch (e) {
      console.error(`Failed: ${file}`, e.message);
    }
  }
});
