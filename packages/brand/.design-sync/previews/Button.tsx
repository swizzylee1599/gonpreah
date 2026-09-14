import * as React from 'react';
import { Button } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function Variants() {
  return (
    <Ground>
      <Row>
        <Button campus="siemreap" variant="primary">
          Visit Siem Reap
        </Button>
        <Button variant="secondary">Learn more</Button>
        <Button variant="ghost">Read the vision</Button>
      </Row>
    </Ground>
  );
}

export function CampusTempo() {
  return (
    <Ground>
      <Row>
        <Button campus="poipet">Support justice work</Button>
        <Button campus="siemreap">Join a team</Button>
        <Button campus="phnompenh">Join the pioneering team</Button>
      </Row>
    </Ground>
  );
}

export function AsLink() {
  return (
    <Ground>
      <Button campus="poipet" size="lg" href="https://gonpreah.org/give">
        Give
      </Button>
    </Ground>
  );
}
