import { applyUrl } from './sr-routes';

// "What's new" on the home page: updates from the campus and beyond — a
// school opening for applications, a new song, a post, a newsletter. Newest
// first; keep it to three or four. `href` can be a page or an outside link.
export type NewsItem = { date: string; tag: string; title: string; body: string; href: string; label: string; external?: boolean };

export const NEWS: NewsItem[] = [
  {
    date: 'October 2026', tag: 'Schools',
    title: 'DTS January 2027 is open for applications',
    body: 'Arrival day is January 3, 2027. Three months of lecture in Siem Reap, then three months on outreach to the nations.',
    href: applyUrl('dts'), label: 'Apply for DTS', external: true,
  },
  {
    date: 'October 2026', tag: 'Campus',
    title: 'Applications now run through the GP Portal',
    body: 'One place to apply for a school, staff, volunteering or a team, send your leader reference, and follow your application.',
    href: '/apply', label: 'How to apply',
  },
  {
    date: 'October 2026', tag: 'Follow along',
    title: 'Campus life, on Instagram',
    body: 'Worship nights, outreach days, the cafe, the city. Follow @ywamsiemreap for what is happening this week.',
    href: 'https://www.instagram.com/ywamsiemreap', label: 'Open Instagram', external: true,
  },
];
