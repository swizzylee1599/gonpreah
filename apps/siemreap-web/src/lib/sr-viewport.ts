// A viewport height that holds still while you scroll. On phones the
// browser bar collapses and comes back as you scroll, and window.innerHeight
// changes by about 80px each time, so anything measured against it jumps.
// 100svh (the height with the bar showing) stays fixed. Re-read only when
// the width changes (rotation, a resized window).
let probe: HTMLElement | null = null;
let height = 0;
let width = 0;

export const stableVh = (): number => {
  if (!probe || !probe.isConnected) {
    probe = document.createElement('div');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100svh;visibility:hidden;pointer-events:none;';
    document.body.appendChild(probe);
    height = 0;
  }
  if (!height || width !== window.innerWidth) {
    width = window.innerWidth;
    height = probe.offsetHeight || window.innerHeight;
  }
  return height;
};
