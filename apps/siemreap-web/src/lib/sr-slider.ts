// A swipeable row of cards with ← → buttons and a "01 / 06" counter. The
// row is ordinary sideways scrolling (CSS scroll-snap); the buttons move it
// one card at a time and dim at either end. Used by the DTS tracks and the
// home page schools on phones.
export const initSlider = (
  row: HTMLElement,
  prev: HTMLButtonElement,
  next: HTMLButtonElement,
  count: HTMLElement | null,
  signal: AbortSignal,
) => {
  const cards = [...row.children] as HTMLElement[];
  if (!cards.length) return;
  const current = () => {
    const left = row.getBoundingClientRect().left + parseFloat(getComputedStyle(row).paddingLeft || '0');
    let best = 0, bestD = Infinity;
    cards.forEach((c, i) => { const d = Math.abs(c.getBoundingClientRect().left - left); if (d < bestD) { bestD = d; best = i; } });
    return best;
  };
  const go = (i: number) => {
    const c = cards[Math.max(0, Math.min(cards.length - 1, i))];
    row.scrollTo({ left: c.offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
  };
  const sync = () => {
    const i = current();
    if (count) count.textContent = String(i + 1).padStart(2, '0');
    prev.disabled = i === 0 && row.scrollLeft < 4;
    next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
  };
  prev.addEventListener('click', () => go(current() - 1), { signal });
  next.addEventListener('click', () => go(current() + 1), { signal });
  let raf = 0;
  row.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; sync(); }); }, { passive: true, signal });
  window.addEventListener('resize', sync, { signal });
  sync();
};
