// Where staff and volunteers serve, by department. Same four departments
// as the team page. Edit the one-line notes freely; `dts` marks roles that
// need a completed DTS (staff), the rest are open to volunteers too.
export type Role = { name: string; note: string; dts?: boolean };
export type Department = { name: string; verb: string; roles: Role[] };

export const DEPARTMENTS: Department[] = [
  {
    name: 'Serve the community', verb: 'We serve the community.',
    roles: [
      { name: 'Village Impact ministries', note: 'Regular ministry in the villages around Siem Reap: relationships, practical help, the gospel in word and action.' },
      { name: 'Outreach team coordinator', note: 'Host the short-term teams that come through: planning, logistics, and walking with them for the week.' },
      { name: 'GP Cafe', note: 'A safe place for high-school students to hang out and hear about Jesus. Barista, kitchen, and the people behind the counter.' },
      { name: 'OMT', note: 'Our outreach and ministry team, out in the city and the province through the week.' },
      { name: 'Children’s education', note: 'Free primary education for underprivileged children through GP Education.' },
    ],
  },
  {
    name: 'Educate youth', verb: 'We educate youth.',
    roles: [
      { name: 'YDC English teacher', note: 'Teach English to high-school students at the Youth Development Center, and get to know them.' },
      { name: 'Media', note: 'Photo, video and content for the base and for the millions who follow our media ministry each month.' },
      { name: 'GP Music and worship', note: 'Lead worship, write and record, and train young Khmer musicians.' },
    ],
  },
  {
    name: 'Develop leaders', verb: 'We develop leaders.',
    roles: [
      { name: 'DTS staff', note: 'Disciple a small group through the lecture phase, then lead them on outreach to the nations.', dts: true },
      { name: 'DBS staff', note: 'Walk students through the whole Bible in thirteen weeks.', dts: true },
      { name: 'BCS staff', note: 'Staff the Bible Counseling School: discipleship, inner healing and practical tools for ministry.', dts: true },
      { name: 'SMS staff', note: 'Teach storytelling, camera, editing and digital ministry in the Social Media School.', dts: true },
    ],
  },
  {
    name: 'Train professionals', verb: 'We train professionals.',
    roles: [
      { name: 'Hospitality', note: 'Guests, rooms and the welcome of the base, while training Khmer youth in hospitality.' },
      { name: 'Culinary', note: 'The base kitchen: meals for the community, and a training ground for young cooks.' },
      { name: 'Technical', note: 'Maintenance, repair and building, and the technical skills we pass on.' },
      { name: 'Accounting', note: 'Base finances, from school fees to staff support.' },
      { name: 'Admin', note: 'Applications, visas, records and the hundred things that keep a base running.' },
      { name: 'Communications', note: 'Newsletters, the website, social media and keeping partners in the loop.' },
    ],
  },
];
