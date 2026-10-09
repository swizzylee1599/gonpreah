// The YWAM Siem Reap staff. Portraits live in public/images/team/portraits
// as <slug>.webp. Couples and families share one card: `with` lists each
// person and what they do, since they often serve in different ministries.
// `support` marks Khmer staff who raise support through the site (Give page).
export type Member = {
  slug: string;
  name: string;
  role: string;
  lead?: boolean;
  khmer?: boolean;
  kind?: 'couple' | 'family';
  with?: [string, string][];
  support?: { story: string; now: number; goal: number };
};

export const TEAM: Member[] = [
  // Leadership
  { slug: 'uriah-naomi-lyford', name: 'Uriah & Naomi Lyford', role: 'Base director', lead: true, kind: 'family' },
  { slug: 'andrew-naomie-lee', name: 'Andrew & Naomie Lee', role: 'Campus leader', lead: true, kind: 'family' },
  { slug: 'sreyleak-rann', name: 'Sreyleak Rann', role: 'Campus leader', lead: true, khmer: true },
  { slug: 'chanya-but', name: 'Chanya But', role: 'Campus leader & GP Music', lead: true, khmer: true },
  { slug: 'sinin-sok', name: 'Sinin Sok', role: 'Training director & campus leader', lead: true, khmer: true },
  { slug: 'sreynit-thorn', name: 'Sreynit Thorn', role: 'DTS staff & campus leader', lead: true, khmer: true },
  { slug: 'vannak', name: 'Vannak', role: 'Campus leader & DTS staff', lead: true, khmer: true },
  { slug: 'thean-tinh', name: 'Thean Tinh', role: 'Campus leader, media & GP Music', lead: true, khmer: true },
  // Staff
  { slug: 'tyler-emmy-sullivan', name: 'Tyler & Emmy Sullivan', role: 'Hospitality and teams', kind: 'couple', with: [['Tyler', 'Hospitality'], ['Emmy', 'Teams']] },
  { slug: 'alexis-munos', name: 'Alexis Munos', role: 'Teams' },
  { slug: 'kimla-song', name: 'Kimla Song', role: 'GP Cafe', khmer: true,
    support: { story: 'Kimla is a young Cambodian on fire for Jesus. After his DTS in 2024 he joined staff in January 2025, pursuing his passion for media and hospitality, with a heart to reach youth through social media and to serve others well.', now: 0, goal: 200 } },
  { slug: 'kimyan', name: 'Kimyan', role: 'Siem Reap ministries', khmer: true },
  { slug: 'bunnall-bee', name: 'Bunnall Bee', role: 'Media', khmer: true },
  { slug: 'kami-martz', name: 'Kami Martz', role: 'Worship' },
  { slug: 'yang-sreyleak', name: 'Yang & Sreyleak', role: 'DTS & DBS staff', khmer: true, kind: 'family',
    support: { story: 'A Cambodian couple serving in Siem Reap since January 2025, with a heart for discipling Khmer youth. They staff DTS and DBS, investing in future leaders through teaching, mentorship and discipleship.', now: 225, goal: 600 } },
  { slug: 'david', name: 'David', role: 'DTS staff', khmer: true },
  { slug: 'sophy', name: 'Sophy', role: 'DTS staff', khmer: true },
  { slug: 'ith-keth', name: 'Ith Keth', role: 'DTS staff', khmer: true },
  { slug: 'ranie', name: 'Ranie', role: 'DTS staff', khmer: true },
  { slug: 'nou-eh', name: 'Nou Eh', role: 'DTS staff', khmer: true },
  { slug: 'sreynouch-pheakdey', name: 'Sreynouch & Pheakdey', role: 'Kitchen and DTS & DBS', khmer: true, kind: 'couple', with: [['Sreynouch', 'Kitchen'], ['Pheakdey', 'DTS & DBS staff']] },
  { slug: 'vichet-chea', name: 'Vichet Chea', role: 'YDC staff', khmer: true },
  { slug: 'yi-esther', name: 'Yi & Esther Tuot', role: 'Technical and hospitality', khmer: true, kind: 'family', with: [['Yi', 'Technical'], ['Esther', 'Hospitality']],
    support: { story: 'Yi and Esther equip others through education, hospitality and technical ministries, and travel regularly for teacher training. Esther is pursuing art to inspire and teach; together they plan to launch a kids’ ministry school. They serve with their young daughter, Molika.', now: 300, goal: 600 } },
  { slug: 'ben-wright', name: 'Ben Wright', role: 'Accounting' },
];
export const photo = (m: Member) => `/images/team/${m.slug}.webp`;
