import * as React from 'react';
import type { Campus } from '../types';
import { CAMPUS_META } from '../types';
import './Wordmark.css';

export interface WordmarkProps {
  /** Campus half of the wordmark, colored in that campus's accent. Omit for the neutral, all-white mark used on gonpreah.org itself. */
  campus?: Campus;
  /** Type scale step for the mark. @default 'section' */
  size?: 'hero' | 'section' | 'subhead';
  className?: string;
}

/**
 * The GONPREAH wordmark. "GONPREAH" always renders in white; when `campus`
 * is set, the campus name is appended in that campus's accent color, same
 * face and size as the base word - one word changing color, never a second
 * typeface or a gradient between accents.
 */
export function Wordmark({ campus, size = 'section', className }: WordmarkProps) {
  const classes = ['gp-wordmark', `gp-wordmark--${size}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-campus={campus}>
      <span className="gp-wordmark__base">GONPREAH</span>
      {campus && (
        <>
          <span className="gp-wordmark__divider" aria-hidden="true">
            |
          </span>
          <span className="gp-wordmark__campus">{CAMPUS_META[campus].name.toUpperCase()}</span>
        </>
      )}
    </div>
  );
}
