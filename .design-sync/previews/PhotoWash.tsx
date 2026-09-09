import * as React from 'react';
import { PhotoWash } from '@gonpreah/brand';
import { Ground, Row, placeholderPhoto } from './_shared';

export function CampusWashes() {
  return (
    <Ground>
      <Row>
        <div style={{ width: '220px' }}>
          <PhotoWash campus="poipet" src={placeholderPhoto('#333333')} alt="Students at the Poipet campus" />
        </div>
        <div style={{ width: '220px' }}>
          <PhotoWash campus="siemreap" src={placeholderPhoto('#8a6d3b')} alt="Community gathering in Siem Reap" />
        </div>
        <div style={{ width: '220px' }}>
          <PhotoWash campus="phnompenh" src={placeholderPhoto('#2b2b2b')} alt="Crowd at a Phnom Penh youth event" />
        </div>
      </Row>
    </Ground>
  );
}
