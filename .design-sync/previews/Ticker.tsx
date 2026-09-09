import * as React from 'react';
import { Ticker } from '@gonpreah/brand';
import { Ground } from './_shared';

const PHNOM_PENH_ITEMS = [
  'PIONEERING TEAM APPLICATIONS OPEN',
  'FIRST CAMPUS INFO NIGHT — NOVEMBER 2027',
  'OPENS JANUARY 2028',
];

export function PhnomPenhTicker() {
  return (
    <Ground padding="0">
      <Ticker campus="phnompenh" items={PHNOM_PENH_ITEMS} />
    </Ground>
  );
}

export function NeutralTicker() {
  return (
    <Ground padding="0">
      <Ticker items={['NEW: CAMPUSES PAGE LIVE', 'READ THE VISION']} speed={18} />
    </Ground>
  );
}
