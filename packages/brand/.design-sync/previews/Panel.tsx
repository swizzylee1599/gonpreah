import * as React from 'react';
import { Panel, BilingualHeading, Button } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function DonorPanel() {
  return (
    <Ground>
      <div style={{ maxWidth: '420px' }}>
        <Panel padding="lg">
          <BilingualHeading level="subhead" as="h3" en="Give to the mission" />
          <p
            style={{
              color: 'var(--mute)',
              fontFamily: 'var(--font-body-en)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.6,
            }}
          >
            GonPreah is a US 501(c)(3). Gifts fund campuses across Cambodia.
          </p>
          <Button campus="poipet">Give</Button>
        </Panel>
      </div>
    </Ground>
  );
}

export function RadiusByCampus() {
  return (
    <Ground>
      <Row>
        <Panel campus="poipet">
          <span style={{ color: 'var(--paper)', fontFamily: 'var(--font-body-en)' }}>Poipet - zero radius</span>
        </Panel>
        <Panel campus="siemreap">
          <span style={{ color: 'var(--paper)', fontFamily: 'var(--font-body-en)' }}>Siem Reap - 20px radius</span>
        </Panel>
        <Panel campus="phnompenh">
          <span style={{ color: 'var(--paper)', fontFamily: 'var(--font-body-en)' }}>Phnom Penh - 4px radius</span>
        </Panel>
      </Row>
    </Ground>
  );
}
