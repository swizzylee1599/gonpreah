import * as React from 'react';
import type { Campus } from '../types';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Campus context - sets the accent color and this campus's button radius (zero for Poipet, pill for Siem Reap, square for Phnom Penh). Omit for the neutral gonpreah.org buttons. */
  campus?: Campus;
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default 'md' */
  size?: 'md' | 'lg';
  /** Render as an anchor instead of a button (e.g. a Donate link). */
  href?: string;
}

/**
 * The one button component for every campus. Accent fill is reserved for
 * `variant="primary"` - it is one of the only four places an accent color
 * is allowed (the others: the wordmark, the photo wash, and active state).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { campus, variant = 'primary', size = 'md', href, className, children, ...rest },
  ref,
) {
  const classes = ['gp-button', `gp-button--${variant}`, `gp-button--${size}`, className].filter(Boolean).join(' ');
  if (href) {
    return (
      <a className={classes} href={href} data-campus={campus}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={classes} data-campus={campus} {...rest}>
      {children}
    </button>
  );
});
