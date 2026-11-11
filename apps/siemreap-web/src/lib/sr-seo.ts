// Search engine details: what Google reads about the base (structured data),
// the sitemap's page list and the Search Console verification code.
import { CONTACT } from './sr-contact';

export const SITE = 'https://ywamsiemreap.org';

/** Google Search Console "HTML tag" code: the content="..." value only.
    Leave empty until Search Console gives one. */
export const GOOGLE_SITE_VERIFICATION = '';

/** Pages kept out of Google (they also set noindex). Paths end with "/". */
export const NOT_IN_SITEMAP = ['/team/', '/404/'];

export const ORG_ID = `${SITE}/#organization`;

/** The base, as Google reads it (shown on the home page). */
export const ORGANIZATION = {
  '@type': 'EducationalOrganization',
  '@id': ORG_ID,
  name: 'YWAM Siem Reap',
  alternateName: ['Youth With A Mission Siem Reap', 'YWAM Cambodia Siem Reap'],
  url: `${SITE}/`,
  logo: `${SITE}/images/sr-logo.png`,
  image: `${SITE}/images/og/ywam-siem-reap.jpg`,
  description:
    'A Youth With A Mission training base in Siem Reap, Cambodia: Discipleship Training School (DTS), Bible schools, short-term teams and missions.',
  email: CONTACT.email,
  telephone: CONTACT.phoneDisplay.replace(/\s+/g, ' '),
  address: { '@type': 'PostalAddress', addressLocality: 'Siem Reap', addressRegion: 'Siem Reap', addressCountry: 'KH' },
  hasMap: CONTACT.maps,
  sameAs: [CONTACT.instagram],
  parentOrganization: { '@type': 'Organization', name: 'Youth With A Mission', url: 'https://ywam.org' },
};

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'YWAM Siem Reap',
  url: `${SITE}/`,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

/** A school page's course details. */
export const course = (name: string, abbr: string, description: string, path: string) => ({
  '@type': 'Course',
  name: `${name} (${abbr})`,
  description,
  url: `${SITE}${path}`,
  provider: { '@id': ORG_ID, '@type': 'EducationalOrganization', name: 'YWAM Siem Reap', sameAs: `${SITE}/` },
  inLanguage: 'en',
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'onsite', location: { '@type': 'Place', name: 'YWAM Siem Reap', address: ORGANIZATION.address } },
});

/** Breadcrumb parents' names, by first path part. */
export const SECTION_NAMES: Record<string, string> = {
  schools: 'Schools & Courses',
  news: 'Newsletters',
  give: 'Give',
  apply: 'Apply',
};
