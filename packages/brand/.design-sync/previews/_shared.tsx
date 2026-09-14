import * as React from 'react';

/**
 * Every GonPreah component assumes it sits on the brand's black page ground
 * (--ink) - the ground itself is a page-level concern, not something any
 * component renders. Preview cells recreate that real context here so
 * components read correctly instead of floating on a bare white card.
 */
export function Ground({
  children,
  padding = '40px',
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  return (
    <div
      style={{
        background: 'var(--ink)',
        padding,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minHeight: '80px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
}

export function Row({ children, gap = '24px' }: { children: React.ReactNode; gap?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap }}>{children}</div>
  );
}

/** Tiny inline placeholder photo (no network fetch at render time) - a flat-toned rect standing in for real campus photography. */
export function placeholderPhoto(tone: string): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='420'><rect width='640' height='420' fill='${tone}'/><rect x='0' y='0' width='640' height='420' fill='none'/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
