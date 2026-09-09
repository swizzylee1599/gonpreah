import * as React from 'react';
import { StatBlock } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function SingleStat() {
  return (
    <Ground>
      <StatBlock campus="poipet" label="Students trained" value="1,200+" />
    </Ground>
  );
}

export function RowOfStats() {
  return (
    <Ground>
      <Row gap="48px">
        <StatBlock campus="poipet" label="Since 2016" value="9 yrs" />
        <StatBlock campus="siemreap" label="Team members" value="34" />
        <StatBlock campus="phnompenh" label="Opens" value="2028" />
      </Row>
    </Ground>
  );
}
