export const ROUTE_PATH: Record<string, string> = {
  home: '/',
  about: '/about',
  schools: '/schools',
  dts: '/schools/dts',
  dbs: '/schools/dbs',
  sms: '/schools/sms',
  apply: '/apply',
  staff: '/staff',
  team: '/team',
  visit: '/visit',
  campus: '/campus-life',
  values: '/values',
  give: '/give',
  contact: '/contact',
};

export const NAV: [string, [string, string, string][]][] = [
  ['Students', [
    ['dts', 'What is DTS?', 'Start your journey in missions'],
    ['schools', 'Schools & Courses', 'DTS, DBS and the other schools in Siem Reap'],
    ['campus', 'Campus Life', 'Living in community, and the city around us'],
    ['apply', 'How to Apply', 'What you need to start your application'],
  ]],
  ['Get Involved', [
    ['visit', 'Short-Term Teams', 'Bring a team to Siem Reap'],
    ['visit', 'Outreach & Ministries', 'Where our teams serve'],
    ['staff', 'Join Staff or Volunteer', 'Serve long term, or come short term'],
  ]],
  ['About', [
    ['about', 'About Us', 'Who we are and how we started'],
    ['values', 'Values', 'What we believe and how we work'],
    ['contact', 'Contact', 'Get in touch with the base'],
  ]],
  ['Give', [
    ['give', 'Give Now', 'Partner with the work in Cambodia'],
    ['give', 'Support a Staff Member', 'Back a specific missionary'],
  ]],
];
