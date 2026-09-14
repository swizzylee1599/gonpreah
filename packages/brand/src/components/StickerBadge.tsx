import * as React from 'react';
import type { Campus } from '../types';
import './StickerBadge.css';

export interface StickerBadgeProps {
  children: React.ReactNode;
  campus?: Campus;
  /** Rotation in degrees. Deterministically derived from the text (2-4deg, alternating sign) when omitted, so server and client render the same tilt without a random seed. */
  rotate?: number;
  className?: string;
}

function defaultRotation(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  const magnitude = 2 + (Math.abs(hash) % 3); // 2-4
  const sign = hash % 2 === 0 ? 1 : -1;
  return magnitude * sign;
}

/**
 * Phnom Penh's signature sticker badge - a small rotated tag for callouts
 * like "Opens January 2028". Square, tilted, never rounded into a pill.
 */
export function StickerBadge({ children, campus, rotate, className }: StickerBadgeProps) {
  const classes = ['gp-sticker-badge', className].filter(Boolean).join(' ');
  const deg = rotate ?? defaultRotation(typeof children === 'string' ? children : 'sticker');
  return (
    <span className={classes} data-campus={campus} style={{ transform: `rotate(${deg}deg)` }}>
      {children}
    </span>
  );
}
