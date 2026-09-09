import * as React from 'react';
import { Wordmark } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function Neutral() {
  return (
    <Ground>
      <Wordmark size="hero" />
    </Ground>
  );
}

export function CampusVariants() {
  return (
    <Ground>
      <Row gap="40px">
        <Wordmark campus="poipet" />
        <Wordmark campus="siemreap" />
        <Wordmark campus="phnompenh" />
      </Row>
    </Ground>
  );
}

export function SubheadSize() {
  return (
    <Ground>
      <Wordmark campus="siemreap" size="subhead" />
    </Ground>
  );
}
