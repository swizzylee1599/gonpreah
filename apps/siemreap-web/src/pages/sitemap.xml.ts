// /sitemap.xml: every page Google should know about, built from the page
// files, so a new page is listed automatically. Hidden pages (noindex) are
// left out in sr-seo.ts.
import type { APIRoute } from 'astro';
import { ISSUES } from '../lib/sr-newsletters';
import { SITE, NOT_IN_SITEMAP } from '../lib/sr-seo';

const files = Object.keys(import.meta.glob('./**/*.astro'));

export const GET: APIRoute = () => {
  const paths = files
    .filter((f) => !f.includes('['))
    .map((f) => f.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/(^|\/)index$/, '$1'))
    .map((p) => (p.endsWith('/') ? p : `${p}/`))
    .concat(ISSUES.map((i) => `/news/${i.slug}/`))
    .filter((p) => !NOT_IN_SITEMAP.includes(p))
    .sort((a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
