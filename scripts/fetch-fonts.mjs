import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const cssPath = path.resolve('assets/fonts-src/google-fonts.css');
const raw = fs.readFileSync(cssPath, 'utf8');

// Split into @font-face blocks, keep only latin / khmer subsets.
const blocks = raw.split(/\/\*\s*/).slice(1); // each starts with "<subset> */\n@font-face {...}"
const keep = [];
for (const b of blocks) {
  const subsetMatch = b.match(/^([a-z-]+)\s*\*\//);
  const subset = subsetMatch ? subsetMatch[1] : '';
  if (subset !== 'latin' && subset !== 'khmer') continue;
  const familyMatch = b.match(/font-family:\s*'([^']+)'/);
  const weightMatch = b.match(/font-weight:\s*(\d+)/);
  const urlMatch = b.match(/url\((https:[^)]+)\)/);
  if (!familyMatch || !weightMatch || !urlMatch) continue;
  keep.push({
    family: familyMatch[1],
    weight: weightMatch[1],
    subset,
    url: urlMatch[1],
    block: '@font-face {' + b.split('@font-face {')[1],
  });
}

const outDir = path.resolve('src/fonts');
fs.mkdirSync(outDir, { recursive: true });

function slug(family) {
  return family.toLowerCase().replace(/\s+/g, '-');
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        resolve();
      });
    }).on('error', reject);
  });
}

const cssOut = [];
let count = 0;
for (const item of keep) {
  const filename = `${slug(item.family)}-${item.weight}-${item.subset}.woff2`;
  const dest = path.join(outDir, filename);
  await download(item.url, dest);
  count++;
  const localBlock = item.block.replace(item.url, `./${filename}`);
  cssOut.push(localBlock.trim());
}

fs.writeFileSync(path.resolve('src/fonts/faces.css'), cssOut.join('\n\n') + '\n');
console.log(`Downloaded ${count} font files, wrote src/fonts/faces.css`);
