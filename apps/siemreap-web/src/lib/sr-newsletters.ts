// Newsletters, newest first. Each issue is a page at /news/<slug>; the
// newest one is featured in What's new on the home page. Add an issue here
// and both update. Blocks run top to bottom; photos live in public/images.
export type Block =
  | { kind: 'text'; heading?: string; paragraphs: string[] }
  | { kind: 'stats'; items: [string, string][] }
  | { kind: 'photo'; src: string; alt: string; caption?: string; pos?: string }
  | { kind: 'feature'; eyebrow: string; title: string; paragraphs: string[]; photo: string; alt: string; pos?: string; href?: string; label?: string; flip?: boolean }
  | { kind: 'quote'; text: string; by?: string }
  | { kind: 'ask'; title: string; body: string; primary: [string, string]; secondary?: [string, string] };

export type Issue = {
  slug: string;
  number: number;
  date: string;
  dateISO: string;
  title: string;
  deck: string;
  cover: string;
  coverAlt: string;
  coverPos?: string;
  blocks: Block[];
};

export const GIVE_MONTHLY = 'https://subsplash.com/u/-DTDBSM/give?campus_id=1c7f555d-5552-4aa7-9a79-484e72996412';

export const ISSUES: Issue[] = [
  {
    slug: 'two-new-schools',
    number: 1,
    date: 'September 2026',
    dateISO: '2026-09-28',
    title: 'Two new schools. Thirty-two students.',
    deck: 'Bible counseling and media, three months, one campus.',
    cover: '/images/guide/worship-flags.webp',
    coverAlt: 'A crowd worshipping with flags raised in the Siem Reap lecture hall',
    coverPos: '50% 40%',
    blocks: [
      {
        kind: 'text',
        paragraphs: [
          'Two new training schools started this September in Siem Reap. Thirty-two students, three months, Christ and His Word at the center.',
        ],
      },
      {
        kind: 'stats',
        items: [['25', 'students in the Bible Counseling School'], ['7', 'students in the Social Media School'], ['3', 'months, side by side on one campus'], ['5', 'nations represented across the two schools']],
      },
      {
        kind: 'feature',
        eyebrow: 'BCS · Bible Counseling School',
        title: 'Healed first. Then sent to heal.',
        paragraphs: [
          'This school is a journey of discipleship and inner healing. Over eleven weeks, twenty-five students get to know themselves more deeply, understand their relationships and family systems, and explore the areas that need healing. They grow in their relationship with God and with others while receiving practical tools to serve in Christian ministry.',
          'Our desire is not just to give knowledge. It is to create space where God can work in each person’s heart first. As students experience their own restoration, they become better equipped to walk alongside others on their journeys. This is a season of learning, personal growth, healing, relationships and equipping, always with Christ and His Word at the center.',
        ],
        photo: '/images/schools/bcs-class.webp', alt: 'The Bible Counseling School in session, two teachers at the front of the classroom',
        href: '/schools/bcs', label: 'About the Bible Counseling School',
      },
      { kind: 'quote', text: 'Our desire isn’t just to give knowledge. It’s to create space where God can work in each person’s heart first.' },
      {
        kind: 'feature',
        eyebrow: 'SMS · Social Media School',
        title: 'Seven young men. One generation online.',
        paragraphs: [
          'This school exists to educate Cambodian youth and equip them to share the gospel through media. These seven young men are being trained to use their creative gifts to teach others about God and reach their communities in new ways.',
          'Cambodia is one of the youngest countries in the world, and its young people live online. The feeds they scroll are where this generation spends its day. We want the gospel there too, told well, by Cambodians.',
        ],
        photo: '/images/schools/sms-class.webp', alt: 'A media class in the studio, students at white desks listening to the teacher',
        href: '/schools/sms', label: 'About the Social Media School', flip: true,
      },
      { kind: 'photo', src: '/images/schools/sms-studio.webp', alt: 'The SMS teacher at his laptop between studio lights', caption: 'The studio where the Social Media School meets, on the Siem Reap campus.', pos: '60% 50%' },
      {
        kind: 'ask',
        title: 'Would you partner with us?',
        body: 'These schools are a real investment in the next generation of Cambodian believers and leaders, but they do not run on their own. Staffing, housing, meals and ministry resources all need support. Would you consider becoming a monthly partner as we walk alongside these thirty-two students this season? Even a small recurring gift makes a lasting difference in their lives, and in the communities they will go on to serve.',
        primary: [GIVE_MONTHLY, 'Become a monthly partner'],
        secondary: ['/give', 'Other ways to give'],
      },
    ],
  },
];

export const LATEST = ISSUES[0];
export const issueUrl = (i: Issue) => `/news/${i.slug}`;
