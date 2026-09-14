import * as React from 'react';
import { Divider } from '@gonpreah/brand';
import { Ground } from './_shared';

export function HairlineDefault() {
  return (
    <Ground padding="40px 40px 0">
      <p style={{ color: 'var(--paper)', fontFamily: 'var(--font-body-en)', margin: 0 }}>
        Above the line
      </p>
      <Divider />
      <p style={{ color: 'var(--mute)', fontFamily: 'var(--font-body-en)', margin: 0 }}>
        Below the line
      </p>
    </Ground>
  );
}

export function AccentByCampus() {
  return (
    <Ground padding="40px 40px 0">
      <Divider tone="accent" campus="poipet" />
      <Divider tone="accent" campus="siemreap" />
      <Divider tone="accent" campus="phnompenh" />
    </Ground>
  );
}
