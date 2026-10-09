// Where staff and volunteers serve, by department. Same four departments
// as the team page. Edit the one-line notes freely; `dts` marks roles that
// need a completed DTS (staff), the rest are open to volunteers too.
// `stay` is how long someone can come for and still fit the role: weeks,
// months (volunteers) or years (staff). `skills` are the chips on the page.
export type Stay = 'weeks' | 'months' | 'years';
export type Role = { name: string; note: string; dts?: boolean; stay: Stay[]; skills: string[] };
export const SKILLS = ['Teaching', 'Kids', 'Outreach', 'Media', 'Music', 'Hospitality', 'Cooking', 'Building & fixing', 'Finance & admin', 'Writing', 'Languages'];
export type Department = { name: string; verb: string; roles: Role[] };

export const DEPARTMENTS: Department[] = [
  {
    name: 'Serve the community', verb: 'We serve the community.',
    roles: [
      { name: 'Village Impact ministries', note: 'Regular ministry in the villages around Siem Reap: relationships, practical help, the gospel in word and action.', stay: ['weeks', 'months', 'years'], skills: ['Outreach', 'Kids', 'Languages'] },
      { name: 'Outreach team coordinator', note: 'Host the short-term teams that come through: planning, logistics, and walking with them from the first message to the day they fly home.', stay: ['months', 'years'], skills: ['Outreach', 'Hospitality', 'Finance & admin'] },
      { name: 'GP Cafe', note: 'A safe place for high-school students to hang out and hear about Jesus. Barista, kitchen, and the people behind the counter.', stay: ['weeks', 'months', 'years'], skills: ['Hospitality', 'Cooking', 'Outreach'] },
      { name: 'Oral Mother Tongue (OMT)', note: 'Bringing the Bible into the heart languages of Cambodia\u2019s people groups, told the way they already tell stories.', stay: ['months', 'years'], skills: ['Languages', 'Outreach', 'Writing'] },
      { name: 'Children’s education', note: 'Free primary education for underprivileged children through GP Education.', stay: ['weeks', 'months', 'years'], skills: ['Teaching', 'Kids'] },
    ],
  },
  {
    name: 'Educate youth', verb: 'We educate youth.',
    roles: [
      { name: 'YDC English teacher', note: 'Teach English to high-school students at the Youth Development Center, and get to know them.', stay: ['weeks', 'months', 'years'], skills: ['Teaching', 'Languages'] },
      { name: 'Media', note: 'Photo, video and content for the base and for the millions who follow our media ministry each month.', stay: ['weeks', 'months', 'years'], skills: ['Media', 'Writing'] },
      { name: 'GP Music and worship', note: 'Lead worship, write and record, and train young Khmer musicians.', stay: ['weeks', 'months', 'years'], skills: ['Music'] },
    ],
  },
  {
    name: 'Develop leaders', verb: 'We develop leaders.',
    roles: [
      { name: 'DTS staff', note: 'Disciple a small group through the lecture phase, then lead them on outreach to the nations.', dts: true, stay: ['years'], skills: ['Teaching', 'Outreach'] },
      { name: 'DBS staff', note: 'Walk students through the whole Bible in thirteen weeks.', dts: true, stay: ['years'], skills: ['Teaching'] },
      { name: 'BCS staff', note: 'Staff the Bible Counseling School: discipleship, inner healing and practical tools for ministry.', dts: true, stay: ['years'], skills: ['Teaching'] },
      { name: 'SMS staff', note: 'Teach storytelling, camera, editing and digital ministry in the Social Media School.', dts: true, stay: ['years'], skills: ['Media', 'Teaching'] },
    ],
  },
  {
    name: 'Train professionals', verb: 'We train professionals.',
    roles: [
      { name: 'Hospitality', note: 'Guests, rooms and the welcome of the base, while training Khmer youth in hospitality.', stay: ['weeks', 'months', 'years'], skills: ['Hospitality'] },
      { name: 'Culinary', note: 'The base kitchen: meals for the community, and a training ground for young cooks.', stay: ['weeks', 'months', 'years'], skills: ['Cooking', 'Hospitality'] },
      { name: 'Technical', note: 'Maintenance, repair and building, and the technical skills we pass on.', stay: ['weeks', 'months', 'years'], skills: ['Building & fixing'] },
      { name: 'Accounting', note: 'Base finances, from school fees to staff support.', stay: ['months', 'years'], skills: ['Finance & admin'] },
      { name: 'Admin', note: 'Applications, visas, records and the hundred things that keep a base running.', stay: ['weeks', 'months', 'years'], skills: ['Finance & admin', 'Writing'] },
      { name: 'Communications', note: 'Newsletters, the website, social media and keeping partners in the loop.', stay: ['weeks', 'months', 'years'], skills: ['Writing', 'Media'] },
    ],
  },
];
