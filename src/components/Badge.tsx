import * as React from 'react';
import type { Campus } from '../types';
import './Badge.css';

export interface BadgeProps {
  children: React.ReactNode;
  /** Colors the badge in this campus's accent. Omit for a neutral --mute badge (e.g. inactive nav). */
  campus?: Campus;
  /** 'label' is bare tracked text (e.g. "ESTABLISHED 2016"); 'pill' adds a filled background for active/current state. @default 'label' */
  variant?: 'label' | 'pill';
  className?: string;
}

/**
 * Small tracked uppercase label used for campus stage ("Established 2016",
 * "Opens January 2028") and active-state markers. One of the four allowed
 * places for an accent color.
 */
export function Badge({ children, campus, variant = 'label', className }: BadgeProps) {
  const classes = ['gp-badge', `gp-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={classes} data-campus={campus}>
      {children}
    </span>
  );
}
