import * as React from 'react';
import type { Campus } from '../types';
import './Ticker.css';

export interface TickerProps {
  /** Items scrolled through, e.g. "PIONEERING TEAM APPLICATIONS OPEN". */
  items: string[];
  campus?: Campus;
  /** Full loop duration in seconds. @default 24 */
  speed?: number;
  className?: string;
}

/**
 * Phnom Penh's signature scrolling ticker - what's happening this month,
 * carrying the pre-launch page's momentum. Pauses for
 * `prefers-reduced-motion`.
 */
export function Ticker({ items, campus, speed = 24, className }: TickerProps) {
  const classes = ['gp-ticker', className].filter(Boolean).join(' ');
  const joined = items.join('   •   ');
  return (
    <div className={classes} data-campus={campus}>
      <div className="gp-ticker__track" style={{ animationDuration: `${speed}s` }}>
        <span className="gp-ticker__item">{joined}</span>
        <span className="gp-ticker__item" aria-hidden="true">
          {joined}
        </span>
      </div>
    </div>
  );
}
