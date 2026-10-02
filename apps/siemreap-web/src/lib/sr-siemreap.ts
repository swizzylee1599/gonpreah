// Things to do in Siem Reap: the stops on the Siem Reap page, plus the
// practical notes.
// Each section of the page is a numbered stop: a place, a photo and a short
// piece of history.
export type Stop = { name: string; km: string; body: string; photo: string; alt: string; pos?: string };

// 1. Angkor Wat, and the two other temples most people see first.
export const TEMPLES: Stop[] = [
  {
    name: 'Angkor Wat', km: 'អង្គរវត្ត',
    body: 'Built in the early 1100s by King Suryavarman II, first as a Hindu temple to Vishnu and later a Buddhist one. It is the largest religious monument in the world and sits on Cambodia\'s flag. Come for sunrise behind its five towers.',
    photo: '/images/siemreap/angkor-wat.webp', alt: 'Visitors walking the long stone causeway across the moat toward Angkor Wat', pos: '50% 50%',
  },
  {
    name: 'Bayon', km: 'បាយ័ន',
    body: 'The state temple of King Jayavarman VII, built around 1200 at the heart of the walled city of Angkor Thom. Its towers carry more than two hundred calm, smiling stone faces.',
    photo: '/images/siemreap/bayon.webp', alt: 'Giant smiling stone faces carved into the towers of the Bayon', pos: '40% 45%',
  },
  {
    name: 'Ta Prohm', km: 'តាព្រហ្ម',
    body: 'A Buddhist monastery Jayavarman VII founded in 1186 and left much as it was found, with giant silk-cotton and strangler fig roots growing through its walls.',
    photo: '/images/siemreap/ta-prohm.webp', alt: 'Huge tree roots pouring over a carved temple doorway at Ta Prohm', pos: '50% 45%',
  },
];

// 2. Nature day trips.
export const NATURE: Stop[] = [
  {
    name: 'Phnom Kulen', km: 'ភ្នំគូលេន',
    body: 'The sacred mountain about an hour and a half north, where the Khmer Empire was declared in 802. Swim under the waterfall, see the carvings in the riverbed at the River of a Thousand Lingas, and climb to the giant reclining Buddha.',
    photo: '/images/siemreap/kulen.webp', alt: 'A wide waterfall dropping into a green jungle pool on Phnom Kulen', pos: '50% 45%',
  },
  {
    name: 'Tonlé Sap', km: 'ទន្លេសាប',
    body: 'Southeast Asia\'s largest freshwater lake, a short drive south. In the wet season it swells to several times its size, and whole villages live on stilts and boats. Take a boat out to the floating villages of Chong Kneas or Kampong Phluk.',
    photo: '/images/siemreap/floating-village.webp', alt: 'Wooden stilt houses and boats in a floating village on the Tonle Sap', pos: '40% 50%',
  },
];

export const PRACTICAL: [string, string][] = [
  ['Getting around', 'Tuk-tuks everywhere. Use PassApp or Grab for a fair price.'],
  ['Money', 'US dollars and Khmer riel. Change comes back in riel.'],
  ['Phone', 'Get a local SIM on arrival. Campus has wifi.'],
  ['Weather', 'Cool Nov–Feb, hot Mar–May, rainy Jun–Oct.'],
  ['Dress', 'Cover shoulders and knees at temples.'],
  ['Health', 'Drink filtered water. Clinics in town.'],
];
