export const ROUTE_PATH: Record<string, string> = {
  home: '/',
  about: '/about',
  schools: '/schools',
  dts: '/schools/dts',
  apply: '/apply',
  staff: '/staff',
  visit: '/visit',
  give: '/give',
  contact: '/contact',
};

export const NAV: [string, [string, string, string][]][] = [
  ['Students', [
    ['dts', 'What is DTS?', 'Start your journey in missions'],
    ['schools', 'Schools & Courses', 'DTS and other UofN courses in Siem Reap'],
    ['visit', 'Campus Life', 'What living here is actually like'],
    ['apply', 'How to Apply', 'What you need to start your application'],
  ]],
  ['Get Involved', [
    ['visit', 'Short-Term Teams', 'Bring a team to Siem Reap'],
    ['visit', 'Outreach & Ministries', 'Where our teams serve'],
    ['staff', 'Join Staff', 'Serve long term with us'],
  ]],
  ['About', [
    ['about', 'About Us', 'Who we are and how we started'],
    ['about', 'Values', 'What we believe and how we work'],
    ['staff', 'Our Team', 'Khmer and international staff'],
    ['contact', 'Contact', 'Get in touch with the base'],
  ]],
  ['Give', [
    ['give', 'Give Now', 'Partner with the work in Cambodia'],
    ['give', 'Support a Staff Member', 'Back a specific missionary'],
  ]],
];
