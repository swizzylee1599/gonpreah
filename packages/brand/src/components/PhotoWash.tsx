import * as React from 'react';
import type { Campus } from '../types';
import './PhotoWash.css';

export interface PhotoWashProps {
  src: string;
  alt: string;
  /** Sets this campus's wash direction/color: lime bleeding up from the bottom (Poipet), a soft yellow glow from the top corner (Siem Reap), or a diagonal persimmon wash (Phnom Penh). */
  campus?: Campus;
  className?: string;
}

/**
 * Photography with a campus-accent color wash - one of the four places an
 * accent color is allowed. Never stack two washes or tint the photo itself;
 * the wash always sits on top as its own layer.
 */
export function PhotoWash({ src, alt, campus, className }: PhotoWashProps) {
  const classes = ['gp-photo-wash', className].filter(Boolean).join(' ');
  return (
    <figure className={classes} data-campus={campus}>
      <img className="gp-photo-wash__img" src={src} alt={alt} />
      <span className="gp-photo-wash__overlay" aria-hidden="true" />
    </figure>
  );
}
