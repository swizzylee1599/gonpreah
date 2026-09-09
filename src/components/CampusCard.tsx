import * as React from 'react';
import type { Campus } from '../types';
import { CAMPUS_META } from '../types';
import './CampusCard.css';

export interface CampusCardProps {
  /** Which campus this panel represents - required, since the flood color and copy defaults come from it. */
  campus: Campus;
  /** Overrides the default English name from CAMPUS_META. */
  title?: string;
  /** Overrides the default Khmer name from CAMPUS_META. */
  km?: string;
  /** Overrides the default focus copy from CAMPUS_META. */
  focus?: string;
  /** Overrides the default stage label ("Established 2016", "Opens January 2028"). */
  stage?: string;
  href?: string;
  className?: string;
}

/**
 * One panel of the three-campus selector. The campus's accent floods in
 * behind the copy on hover/focus - the panel itself stays neutral (raise +
 * hairline) until that moment, so three panels side by side never show two
 * accents at once.
 */
export function CampusCard({ campus, title, km, focus, stage, href, className }: CampusCardProps) {
  const meta = CAMPUS_META[campus];
  const classes = ['gp-campus-card', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className={classes} data-campus={campus} href={href}>
      <span className="gp-campus-card__flood" aria-hidden="true" />
      <span className="gp-campus-card__content">
        <span className="gp-campus-card__stage">{stage ?? meta.stageLabel}</span>
        <span className="gp-campus-card__title">{title ?? meta.name}</span>
        <span className="gp-campus-card__km">{km ?? meta.khmer}</span>
        <span className="gp-campus-card__focus">{focus ?? meta.focus}</span>
      </span>
    </Tag>
  );
}
