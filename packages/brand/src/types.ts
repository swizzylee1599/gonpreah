/** One of GonPreah's three campuses. Drives accent color and tempo (radius, spacing, tilt) via `data-campus` on each component's root element. */
export type Campus = 'poipet' | 'siemreap' | 'phnompenh';

export interface CampusMeta {
  name: string;
  khmer: string;
  focus: string;
  stageLabel: string;
  header: string;
}

/** Reference copy for the three campuses (English/Khmer names, focus, stage). Khmer text is placeholder pending native review. */
export const CAMPUS_META: Record<Campus, CampusMeta> = {
  poipet: {
    name: 'Poipet',
    khmer: 'ប៉ោយប៉ែត',
    focus: 'Justice, anti-trafficking, leadership development',
    stageLabel: 'Established 2016',
    header: 'Freedom is built, not wished for',
  },
  siemreap: {
    name: 'Siem Reap',
    khmer: 'សៀមរាប',
    focus: 'Discipleship, training, sending, community',
    stageLabel: 'Open since 2024',
    header: 'Heart for Cambodia, vision for the world',
  },
  phnompenh: {
    name: 'Phnom Penh',
    khmer: 'ភ្នំពេញ',
    focus: 'Youth movement, universities, national work, admin',
    stageLabel: 'Opens January 2028',
    header: 'Your city is the mission',
  },
};
