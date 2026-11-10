// The YWAM Siem Reap staff. Portraits live in public/images/team/portraits
// as <slug>.webp. Couples and families share one card: `with` lists each
// person and what they do, since they often serve in different ministries.
// `support` marks Khmer staff who raise support through the site (Give page);
// `fund` is their own Subsplash fund, which their Give button opens.
export type Member = {
  slug: string;
  name: string;
  role: string;
  lead?: boolean;
  khmer?: boolean;
  kind?: 'couple' | 'family';
  with?: [string, string][];
  support?: { story: string; now: number; goal: number };
  /** Their own Subsplash fund (fund_id), so a gift goes straight to them. */
  fund?: string;
};

export const TEAM: Member[] = [
  // Leadership
  { slug: 'uriah-naomi-lyford', name: 'Uriah & Naomi Lyford', role: 'Base director', lead: true, kind: 'family' },
  { slug: 'andrew-naomie-lee', name: 'Andrew & Naomie Lee', role: 'Campus leader', lead: true, kind: 'family' },
  { slug: 'sreyleak-rann', fund: '565fb715-9050-4ac4-a5a4-bd98a50c0074', name: 'Sreyleak Rann', role: 'Campus leader', lead: true, khmer: true },
  { slug: 'chanya-but', fund: '698ab06e-3589-4fa5-9617-1d866f1bd2f8', name: 'Chanya But', role: 'Campus leader & GP Music', lead: true, khmer: true },
  { slug: 'sinin-sok', fund: '17d1bea1-71b8-4fca-a0db-757d224c4b04', name: 'Sinin Sok', role: 'Training director & campus leader', lead: true, khmer: true },
  { slug: 'hannah-thorn', fund: '6e69c217-7f3b-435d-a2cd-314a6fd09b33', name: 'Hannah Thorn', role: 'DTS staff & campus leader', lead: true, khmer: true },
  { slug: 'vannak', fund: 'ef550193-39dd-41c9-b115-b25147a54f46', name: 'Vannak', role: 'Campus leader & DTS staff', lead: true, khmer: true },
  { slug: 'tinh-thean', fund: 'd89c762b-c502-4768-8a4d-335a1214c054', name: 'Tinh Thean', role: 'Campus leader, media & GP Music', lead: true, khmer: true },
  // Staff
  { slug: 'yi-esther', fund: 'ba8c0711-f3b1-4ad3-a9ca-79ab8a3045f1', name: 'Yi & Esther Tuot', role: 'Technical and hospitality', khmer: true, kind: 'family', with: [['Yi', 'Technical'], ['Esther', 'Hospitality']],
    support: { story: 'Yi and Esther equip others through education, hospitality and technical ministries, and travel regularly for teacher training. Esther is pursuing art to inspire and teach; together they plan to launch a kids’ ministry school. They serve with their young daughter, Molika.', now: 300, goal: 600 } },
  { slug: 'alexis-munoz', name: 'Alexis Munoz', role: 'Teams' },
  { slug: 'kimla-song', fund: 'ad8f7ada-5d94-4635-b0dc-bd1a881f7150', name: 'Kimla Song', role: 'GP Cafe', khmer: true,
    support: { story: 'Kimla is a young Cambodian on fire for Jesus. After his DTS in 2024 he joined staff in January 2025, pursuing his passion for media and hospitality, with a heart to reach youth through social media and to serve others well.', now: 0, goal: 200 } },
  { slug: 'bunnall-bee', fund: '12e29a27-ca21-4243-9445-520ecd2f0bc5', name: 'Bunnall Bee', role: 'Media', khmer: true },
  { slug: 'kami-martz', name: 'Kami Martz', role: 'Worship' },
  { slug: 'yang-sreyleak', fund: '251288f5-3d95-498f-98b0-e9e3f059f417', name: 'Yang & Sreyleak', role: 'DTS & DBS staff', khmer: true, kind: 'family',
    support: { story: 'A Cambodian couple serving in Siem Reap since January 2025, with a heart for discipling Khmer youth. They staff DTS and DBS, investing in future leaders through teaching, mentorship and discipleship.', now: 225, goal: 600 } },
  { slug: 'tyler-emmy-sullivan', name: 'Tyler & Emmy Sullivan', role: 'Hospitality and teams', kind: 'couple', with: [['Tyler', 'Hospitality'], ['Emmy', 'Teams']] },
  { slug: 'david', fund: '12f28f96-951d-43ac-9514-6220f6cfabb0', name: 'David', role: 'DTS staff', khmer: true },
  { slug: 'sophy', fund: '8c7e609b-3d8f-411f-aeff-cc802e7b82e5', name: 'Sophy', role: 'DTS staff', khmer: true },
  { slug: 'ith-keth', fund: '3be05ba5-169c-45e1-ac31-17a42cc99903', name: 'Ith Keth', role: 'DTS staff', khmer: true },
  { slug: 'ranie', fund: '08e58556-7fff-4efe-81f9-0e31e8395e8e', name: 'Ranie', role: 'DTS staff', khmer: true },
  { slug: 'nou-eh', fund: '4e973a78-3894-46b7-9ec2-4df1c100db31', name: 'Nou Eh', role: 'DTS staff', khmer: true },
  { slug: 'sreynoch-pheakdey', name: 'SreyNoch & Pheakdey', role: 'Kitchen and DTS & DBS', khmer: true, kind: 'couple', with: [['SreyNoch', 'Kitchen'], ['Pheakdey', 'DTS & DBS staff']] },
  { slug: 'vichet-chea', fund: 'daa5680c-784f-4216-8d21-607f6c12fade', name: 'Vichet Chea', role: 'YDC staff', khmer: true },
  { slug: 'ben-wright', name: 'Ben Wright', role: 'Accounting' },
  { slug: 'christian-mang', fund: '728e91da-8199-4d26-a7db-ae74ef109ff8', name: 'Christian Mang', role: '', khmer: true },
  { slug: 'sofia', name: 'Sofia', role: '' },
];
export const photo = (m: Member) => `/images/team/${m.slug}.webp`;
