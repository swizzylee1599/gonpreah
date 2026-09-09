import * as React from 'react';
import { BilingualHeading } from '@gonpreah/brand';
import { Ground } from './_shared';

export function HeroBilingual() {
  return (
    <Ground>
      <BilingualHeading
        level="hero"
        as="h1"
        en="Child of God"
        km="កូនព្រះ"
      />
    </Ground>
  );
}

export function SectionBilingual() {
  return (
    <Ground>
      <BilingualHeading
        level="section"
        en="A church in every village"
        km="ព្រះវិហារនៅគ្រប់ភូមិ"
      />
    </Ground>
  );
}

export function SubheadEnglishOnly() {
  return (
    <Ground>
      <BilingualHeading level="subhead" as="h3" en="Give to the mission" />
    </Ground>
  );
}
