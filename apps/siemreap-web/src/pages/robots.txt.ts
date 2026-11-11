// /robots.txt: every search engine may read the whole site, and is pointed
// to the sitemap.
import type { APIRoute } from 'astro';
import { SITE } from '../lib/sr-seo';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
