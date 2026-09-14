import * as React from 'react';
import { CampusCard } from '@gonpreah/brand';
import { Ground } from './_shared';

export function ThreeCampusSelector() {
  return (
    <Ground>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        <CampusCard campus="poipet" />
        <CampusCard campus="siemreap" />
        <CampusCard campus="phnompenh" />
      </div>
    </Ground>
  );
}

export function SingleCardOverride() {
  return (
    <Ground>
      <div style={{ maxWidth: '360px' }}>
        <CampusCard
          campus="phnompenh"
          stage="Pioneering Dec 2027"
          focus="Youth movement, universities, national initiatives"
          href="#phnom-penh"
        />
      </div>
    </Ground>
  );
}
