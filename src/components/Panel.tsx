import * as React from 'react';
import type { Campus } from '../types';
import './Panel.css';

export interface PanelProps {
  children: React.ReactNode;
  /** Applies this campus's panel radius (zero for Poipet, 20px for Siem Reap, 4px for Phnom Penh). Omit for the neutral 8px radius. */
  campus?: Campus;
  /** @default 'md' */
  padding?: 'md' | 'lg';
  className?: string;
}

/** The one generic raised surface - donor blocks, the governance block, program panels. Never the same shadow-and-radius treatment on every page; radius comes from `campus`. */
export function Panel({ children, campus, padding = 'md', className }: PanelProps) {
  const classes = ['gp-panel', `gp-panel--${padding}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-campus={campus}>
      {children}
    </div>
  );
}
