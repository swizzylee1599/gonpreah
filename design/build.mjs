// Assembles .dc.html artboards from .src.html + shared CSS + embedded brand fonts.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const fonts = readFileSync(join(dir, 'fonts.css.txt'), 'utf8');
const base = readFileSync(join(dir, '_base.css'), 'utf8').replace('/*__FONTS__*/', fonts);

for (const f of readdirSync(dir).filter((n) => n.endsWith('.src.html'))) {
  const out = f.replace('.src.html', '.dc.html');
  const html = readFileSync(join(dir, f), 'utf8').replace('/*__CSS__*/', base);
  writeFileSync(join(dir, out), html);
  console.log(out, (html.length / 1024).toFixed(0) + ' KB');
}
