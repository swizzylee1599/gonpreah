// The GP Portal, where every application is made. Opens in a new tab.
export const PORTAL = 'https://impact.gonpreah.org/portal.html';
// The portal's Create-your-account page, with this programme picked and the
// other programmes a tap away: dts, dbs, bcs, sms, staff, volunteer, team.
export const applyUrl = (key: string) => `${PORTAL}?apply=${key}`;

// Online giving (Subsplash). Links to it open in a new tab.
export const GIVE_URL = 'https://subsplash.com/u/-DTDBSM/give?campus_id=1c7f555d-5552-4aa7-9a79-484e72996412';

export const ROUTE_PATH: Record<string, string> = {
  home: '/',
  about: '/about',
  schools: '/schools',
  dts: '/schools/dts',
  dbs: '/schools/dbs',
  sms: '/schools/sms',
  bcs: '/schools/bcs',
  howToApply: '/apply',
  apply: applyUrl('dts'),
  applyDts: applyUrl('dts'),
  applyDbs: applyUrl('dbs'),
  applyBcs: applyUrl('bcs'),
  applySms: applyUrl('sms'),
  applyStaff: applyUrl('staff'),
  applyVolunteer: applyUrl('volunteer'),
  applyTeam: applyUrl('team'),
  staff: '/staff',
  team: '/team',
  visit: '/visit',
  teamGuide: '/team-guide',
  campus: '/campus-life',
  siemreap: '/siem-reap',
  values: '/values',
  give: '/give',
  giveOnline: GIVE_URL,
  contact: '/contact',
};

export const NAV: [string, [string, string, string][]][] = [
  ['Students', [
    ['dts', 'What is DTS?', 'Start your journey in missions'],
    ['schools', 'Schools & Courses', 'DTS, DBS and the other schools in Siem Reap'],
    ['campus', 'Campus Life', 'Living in community, and the city around us'],
    ['howToApply', 'How to Apply', 'What you need to start your application'],
  ]],
  ['Get Involved', [
    ['visit', 'Short-Term Teams', 'Bring a team: how to prepare, what to pack, life on base'],
    ['staff', 'Join Staff or Volunteer', 'Serve long term, or come short term'],
  ]],
  ['About', [
    ['about', 'About Us', 'Who we are and how we started'],
    ['values', 'Values', 'What we believe and how we work'],
    ['contact', 'Contact', 'Get in touch with the base'],
  ]],
  ['Give', [
    ['giveOnline', 'Give Now', 'Give online through Subsplash'],
    ['giveOnline', 'Support a Staff Member', 'Back a specific missionary'],
  ]],
];
