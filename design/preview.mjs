// Renders each built artboard to a PNG so print fit can be checked before saving.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const dir = dirname(fileURLToPath(import.meta.url));
const tmp = join(dir, '.preview');
mkdirSync(tmp, { recursive: true });

const imgs = {};
for (const n of readdirSync(dir).filter((f) => /\.(jpg|png)$/.test(f))) {
  imgs[n] = 'data:image/' + (n.endsWith('.png') ? 'png' : 'jpeg') + ';base64,' + readFileSync(join(dir, n)).toString('base64');
}

for (const f of readdirSync(dir).filter((n) => n.endsWith('.dc.html'))) {
  let html = readFileSync(join(dir, f), 'utf8')
    .replace(/<script src="\.\/support\.js"><\/script>/, '')
    .replace(/<\/?x-dc>/g, '')
    .replace(/<helmet>/, '').replace(/<\/helmet>/, '');
  for (const [name, uri] of Object.entries(imgs)) {
    html = html.split('"' + name + '"').join('"' + uri + '"').split('"./' + name + '"').join('"' + uri + '"');
  }
  const page = join(tmp, f.replace('.dc.html', '.html'));
  writeFileSync(page, html);
  const png = join(tmp, f.replace('.dc.html', '.png'));
  execFileSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome', [
    '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=794,1215',
    '--screenshot=' + png, '--virtual-time-budget=4000', page,
  ], { stdio: 'ignore' });
  try { execFileSync('python3', ['-c', "from PIL import Image;import sys;im=Image.open(sys.argv[1]).crop((0,0,794,1123));im.save(sys.argv[1])", png], {stdio:'ignore'}); } catch(e){}
  console.log('rendered', png);
}
