// The YWAM Siem Reap staff, from the team guide. Portraits live in
// public/images/team. `support` marks Khmer staff who raise support through
// the site, with what they live on and what they are believing for.
export type Member = { slug: string; name: string; role: string; group: Group; khmer?: boolean; lead?: boolean; support?: { story: string; now: number; goal: number } };
export type Group = 'Training' | 'Media & music' | 'Hospitality & technical' | 'Teams & youth' | 'Finance';
export const GROUPS: Group[] = ['Training', 'Media & music', 'Hospitality & technical', 'Teams & youth', 'Finance'];

export const TEAM: Member[] = [
  // Leadership
  { slug: 'uriah-naomi-lyford', name: 'Uriah & Naomi Lyford', role: 'Base director', group: 'Training', lead: true },
  { slug: 'andrew-naomie-lee', name: 'Andrew & Naomie Lee', role: 'Base leader', group: 'Training', lead: true },
  { slug: 'sreyleak-rann', name: 'Sreyleak Rann', role: 'Base leader', group: 'Training', lead: true, khmer: true },
  { slug: 'chanya-but', name: 'Chanya But', role: 'Base leader & GP Music', group: 'Media & music', lead: true, khmer: true },
  { slug: 'sinin-sok', name: 'Sinin Sok', role: 'Training director & base leader', group: 'Training', lead: true, khmer: true },
  { slug: 'sreynit-thorn', name: 'Sreynit Thorn', role: 'DTS staff & base leader', group: 'Training', lead: true, khmer: true },
  // Staff
  { slug: 'ith-keth', name: 'Ith Keth', role: 'DTS staff', group: 'Training', khmer: true },
  { slug: 'ranie', name: 'Ranie', role: 'DTS staff', group: 'Training', khmer: true },
  { slug: 'tinh-thean', name: 'Tinh Thean', role: 'Media & GP Music', group: 'Media & music', khmer: true },
  { slug: 'ben-wright', name: 'Ben Wright', role: 'Finance & GP Music', group: 'Finance' },
  { slug: 'kimla-song', name: 'Kimla Song', role: 'Hospitality & media', group: 'Media & music', khmer: true,
    support: { story: 'Kimla is a young Cambodian on fire for Jesus. After his DTS in 2024 he joined staff in January 2025, pursuing his passion for media and hospitality, with a heart to reach youth through social media and to serve others well.', now: 0, goal: 200 } },
  { slug: 'yang-sreyleak', name: 'Yang & Sreyleak', role: 'DTS & DBS staff', group: 'Training', khmer: true,
    support: { story: 'A Cambodian couple serving in Siem Reap since January 2025, with a heart for discipling Khmer youth. They staff DTS and DBS, investing in future leaders through teaching, mentorship and discipleship.', now: 225, goal: 600 } },
  { slug: 'yi-esther', name: 'Yi & Esther Tuot', role: 'Hospitality & technical', group: 'Hospitality & technical', khmer: true,
    support: { story: 'Yi and Esther equip others through education, hospitality and technical ministries, and travel regularly for teacher training. Esther is pursuing art to inspire and teach; together they plan to launch a kids’ ministry school. They serve with their young daughter, Molika.', now: 300, goal: 600 } },
  { slug: 'nall-bee', name: 'Nall Bee', role: 'Media', group: 'Media & music', khmer: true },
  { slug: 'vichet-chea', name: 'Vichet Chea', role: 'DTS staff & YDC', group: 'Training', khmer: true },
  { slug: 'david', name: 'David', role: 'Worship & DTS staff', group: 'Media & music', khmer: true },
  { slug: 'chenlen', name: 'Chenlen', role: 'Technical', group: 'Hospitality & technical', khmer: true },
  { slug: 'no-eh', name: 'No Eh', role: 'DTS staff', group: 'Training', khmer: true },
  { slug: 'sophy', name: 'Sophy', role: 'Worship & DTS staff', group: 'Media & music', khmer: true },
  { slug: 'vannak', name: 'Vannak', role: 'DTS staff', group: 'Training', khmer: true },
  { slug: 'kami-martz', name: 'Kami Martz', role: 'GP Music', group: 'Media & music' },
  { slug: 'emmy', name: 'Emmy', role: 'Teams & YDC', group: 'Teams & youth' },
  { slug: 'tyler', name: 'Tyler', role: 'Hospitality & YDC', group: 'Hospitality & technical' },
  { slug: 'alexis-munos', name: 'Alexis Munos', role: 'DBS & teams', group: 'Teams & youth' },
];
export const photo = (m: Member) => `/images/team/${m.slug}.webp`;
