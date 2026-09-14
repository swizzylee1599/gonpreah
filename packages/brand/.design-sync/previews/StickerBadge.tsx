import * as React from 'react';
import { StickerBadge } from '@gonpreah/brand';
import { Ground, Row } from './_shared';

export function PioneeringSticker() {
  return (
    <Ground padding="60px 40px">
      <StickerBadge campus="phnompenh">Opens January 2028</StickerBadge>
    </Ground>
  );
}

export function MultipleStickers() {
  return (
    <Ground padding="60px 40px">
      <Row gap="20px">
        <StickerBadge campus="phnompenh">Pioneering team</StickerBadge>
        <StickerBadge campus="phnompenh" rotate={3}>
          University campuses
        </StickerBadge>
        <StickerBadge campus="phnompenh" rotate={-3}>
          National initiatives
        </StickerBadge>
      </Row>
    </Ground>
  );
}
