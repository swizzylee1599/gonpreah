import * as React from 'react';
import type { Campus } from '../types';
import './Divider.css';

export interface DividerProps {
  /** 'hair' is the neutral --hair divider used everywhere; 'accent' colors it in a campus's accent (used sparingly - it counts toward the 10% accent budget). @default 'hair' */
  tone?: 'hair' | 'accent';
  campus?: Campus;
  className?: string;
}

/** A horizontal rule. Never body copy, never more than one per section. */
export function Divider({ tone = 'hair', campus, className }: DividerProps) {
  const classes = ['gp-divider', `gp-divider--${tone}`, className].filter(Boolean).join(' ');
  return <hr className={classes} data-campus={campus} />;
}
