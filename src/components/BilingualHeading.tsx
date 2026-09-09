import * as React from 'react';
import './BilingualHeading.css';

export interface BilingualHeadingProps {
  /** English display line, set in Anton. */
  en: string;
  /** Khmer display line beneath, set in Koulen at ~88% of the English size. Treat as placeholder copy until reviewed by a native speaker. */
  km?: string;
  /** Type scale step. @default 'section' */
  level?: 'hero' | 'section' | 'subhead';
  /** Heading tag to render. @default 'h2' */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/**
 * Bilingual-by-default heading: an English headline with its Khmer line
 * beneath, both visible at once (never a language toggle). Koulen has a
 * single weight, so Khmer hierarchy comes from size alone - never bolding.
 */
export function BilingualHeading({ en, km, level = 'section', as: Tag = 'h2', className }: BilingualHeadingProps) {
  const classes = ['gp-bilingual-heading', `gp-bilingual-heading--${level}`, className].filter(Boolean).join(' ');
  return (
    <Tag className={classes}>
      <span className="gp-bilingual-heading__en">{en}</span>
      {km && <span className="gp-bilingual-heading__km">{km}</span>}
    </Tag>
  );
}
