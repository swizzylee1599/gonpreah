// Every photo has a phone copy next to it (name-800.webp). Browsers pick
// the smaller one on small screens from this srcset.
export const srcset = (src: string | undefined) =>
  src && src.endsWith('.webp') && !src.endsWith('-800.webp') ? `${src.replace(/\.webp$/, '-800.webp')} 800w, ${src} 1600w` : undefined;
