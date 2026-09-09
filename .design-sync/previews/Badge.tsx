import * as React from 'react';
import { Badge } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function StageLabels() {
  return (
    <Ground>
      <Row>
        <Badge campus="poipet">Established 2016</Badge>
        <Badge campus="siemreap">Open since 2024</Badge>
        <Badge campus="phnompenh">Opens January 2028</Badge>
      </Row>
    </Ground>
  );
}

export function NeutralAndPill() {
  return (
    <Ground>
      <Row>
        <Badge>Mission &amp; vision</Badge>
        <Badge campus="siemreap" variant="pill">
          Now open
        </Badge>
      </Row>
    </Ground>
  );
}
