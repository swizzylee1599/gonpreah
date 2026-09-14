import * as React from 'react';
import type { Campus } from '../types';
import './SectionHeading.css';

export interface SectionHeadingProps {
  /** Small tracked label above the title, e.g. "OUR CAMPUSES". */
  eyebrow?: string;
  title: string;
  /** Optional Khmer line beneath the title. */
  km?: string;
  /** Selects this campus's signature section device: Poipet gets a 4px accent rule under the title, Siem Reap a full-width hairline above it, Phnom Penh a -7deg skew on the title. Omit on shared/neutral pages. */
  campus?: Campus;
  className?: string;
}

/**
 * Section title with each campus's "signature device" baked in, so swapping
 * `campus` changes tempo, not just color: a rule (Poipet), a hairline
 * horizon (Siem Reap), or a skewed headline (Phnom Penh).
 */
export function SectionHeading({ eyebrow, title, km, campus, className }: SectionHeadingProps) {
  const classes = ['gp-section-heading', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-campus={campus}>
      <div className="gp-section-heading__hair" aria-hidden="true" />
      {eyebrow && <p className="gp-section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="gp-section-heading__title">{title}</h2>
      {km && <p className="gp-section-heading__km">{km}</p>}
      <div className="gp-section-heading__rule" aria-hidden="true" />
    </div>
  );
}
