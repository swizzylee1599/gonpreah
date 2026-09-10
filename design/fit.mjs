// Reports, per artboard, whether the sheet's content fits the 1123px A4 page.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

for (const f of readdirSync('.preview').filter((n) => n.endsWith('.html') && !n.startsWith('_'))) {
  let h = readFileSync('.preview/' + f, 'utf8').replace(
    '</body>',
    `<script>setTimeout(()=>{const s=document.querySelector('.sheet');
      const kids=[...s.children].map((c,i)=>i+':'+(c.className||c.tagName).split(' ')[0]+'='+Math.round(c.getBoundingClientRect().height));
      document.title='content='+s.scrollHeight+'/1123 | '+kids.join(' ');},500)<\/script></body>`);
  writeFileSync('.preview/_fit.html', h);
  const out = execFileSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome', [
    '--headless','--no-sandbox','--disable-gpu','--virtual-time-budget=4000','--dump-dom','.preview/_fit.html',
  ], { encoding: 'utf8', maxBuffer: 1e9 });
  console.log(f.replace('.html',''), '::', (out.match(/<title>([^<]*)<\/title>/) || [])[1]);
}
