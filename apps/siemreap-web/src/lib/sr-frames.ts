// Scroll-scrubbed footage on phones and touch screens, as still frames drawn
// on a canvas. Seeking a video on every scroll step delivered frames
// unevenly on iPhones, so the footage shook and kept moving after the finger
// stopped; a frame already in memory is drawn at once and is always the
// right one. Frames are WebP files named 000.webp, 001.webp ... in `dir`
// (see public/video/*-frames). They load once the section is within a
// screen of view, coarse first (every 64th, then every 32nd, ...), so the
// footage works straight away and sharpens as the rest arrive.

type Options = {
  /** The element the canvas fills (it gets a canvas child, absolutely placed). */
  host: HTMLElement;
  /** Folder of frames, e.g. '/video/dts-hallway-frames'. */
  dir: string;
  count: number;
  /** Where to crop when the screen's shape differs from the frames' (0-1). */
  posX?: number;
  posY?: number;
  /** Put the canvas just before this child of host (default: last), to keep
      it under overlays and text that come after it. */
  before?: Element | null;
  /** Extra class names for the canvas. */
  className?: string;
  /** Element whose approach starts the download (default: host). */
  watch?: Element;
  /** Called once, when the first frame is on the canvas. */
  onFirst?: () => void;
  signal: AbortSignal;
};

export type Frames = { show: (t: number) => void; ready: () => boolean; canvas: HTMLCanvasElement };

export const frameSequence = ({ host, dir, count, posX = 0.5, posY = 0.5, before = null, className = '', watch, onFirst, signal }: Options): Frames => {
  // Reuse the canvas if the page script runs again (after a page change).
  let canvas = host.querySelector<HTMLCanvasElement>(':scope > canvas.sr-frames');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = `sr-frames ${className}`.trim();
    canvas.setAttribute('aria-hidden', 'true');
    host.insertBefore(canvas, before);
  }
  const ctx = canvas.getContext('2d')!;
  const imgs: (HTMLImageElement | undefined)[] = new Array(count);
  let want = 0, shown = -1, width = 0, first = false;

  const nearest = (i: number) => {
    for (let d = 0; d < count; d++) {
      if (imgs[i - d]) return i - d;
      if (imgs[i + d]) return i + d;
    }
    return -1;
  };
  const draw = () => {
    const k = nearest(want);
    if (k < 0 || k === shown || !canvas!.width) return;
    const im = imgs[k]!;
    const cw = canvas!.width, ch = canvas!.height;
    const sc = Math.max(cw / im.naturalWidth, ch / im.naturalHeight);
    const w = im.naturalWidth * sc, h = im.naturalHeight * sc;
    ctx.drawImage(im, (cw - w) * posX, (ch - h) * posY, w, h);
    shown = k;
    if (!first) { first = true; onFirst?.(); }
  };
  const size = () => {
    const r = canvas!.getBoundingClientRect();
    if (!r.width || r.width === width) return;
    width = r.width;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas!.width = Math.round(r.width * dpr);
    canvas!.height = Math.round(r.height * dpr);
    shown = -1;
    draw();
  };

  const order: number[] = [0, count - 1];
  for (let step = 64; step >= 1; step /= 2) for (let i = 0; i < count; i += step) if (!order.includes(i)) order.push(i);
  const load = async () => {
    let next = 0;
    const worker = async () => {
      while (next < order.length && !signal.aborted) {
        const i = order[next++];
        const im = new Image();
        im.src = `${dir}/${String(i).padStart(3, '0')}.webp`;
        try { await im.decode(); } catch { continue; }
        if (signal.aborted) return;
        imgs[i] = im;
        draw(); // a nearer frame may have arrived (draw does nothing if not)
      }
    };
    await Promise.all(Array.from({ length: 6 }, worker));
  };
  const near = new IntersectionObserver((en) => {
    if (en[0].isIntersecting) { near.disconnect(); size(); load(); }
  }, { rootMargin: '100% 0px' });
  near.observe(watch ?? host);
  signal.addEventListener('abort', () => near.disconnect());
  window.addEventListener('resize', size, { signal });

  return {
    canvas,
    ready: () => first,
    show(t: number) {
      want = Math.max(0, Math.min(count - 1, Math.round(t * (count - 1))));
      if (!width) size();
      draw();
    },
  };
};
