import * as React from 'react';
import type { Campus } from '../types';
import './StatBlock.css';

export interface StatBlockProps {
  /** Small tracked label above the number, e.g. "STUDENTS TRAINED". */
  label: string;
  /** The huge number/value, e.g. "1,200+". */
  value: string;
  campus?: Campus;
  className?: string;
}

/** Small tracked label above a huge number - the stat pattern reused from gonpreah.org across /campuses. */
export function StatBlock({ label, value, campus, className }: StatBlockProps) {
  const classes = ['gp-stat-block', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-campus={campus}>
      <p className="gp-stat-block__label">{label}</p>
      <p className="gp-stat-block__value">{value}</p>
    </div>
  );
}
