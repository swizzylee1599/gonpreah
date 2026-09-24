// Things to do in Siem Reap: shared by the Siem Reap page.
// Siem Reap for people who are coming to live here for a while, not just
// pass through. One panel per kind of day off, plus the practical one.
export type Place = { name: string; note: string };
export type Panel = { title: string; km: string; intro: string; places: Place[]; label: string; photo?: string; alt?: string; pos?: string };
export const CITY: Panel[] = [
  {
    title: 'Temples & history', km: 'អង្គរ',
    intro: 'Siem Reap is the gateway to Angkor. The temples are twenty minutes from the base and you will want more than one visit.',
    places: [
      { name: 'Angkor Wat at sunrise', note: 'The one everyone comes for. Go early, stay for the quiet after the crowds leave.' },
      { name: 'Angkor Thom & the Bayon', note: 'The walled city and its temple of two hundred stone faces.' },
      { name: 'Ta Prohm', note: 'The temple the jungle took back — roots over stone.' },
      { name: 'Banteay Srei', note: 'Smaller, further out, and the finest carving in Angkor.' },
      { name: 'Angkor National Museum', note: 'Worth an afternoon before or after the temples themselves.' },
    ],
    label: 'Drop a photo — Angkor Wat', photo: '/images/campus/angkor-backpack.jpg', alt: 'A student with a backpack looking up at the towers of Angkor Wat', pos: '60% 50%',
  },
  {
    title: 'Food & cafés', km: 'ម្ហូប',
    intro: 'Khmer food is gentler than Thai — sour, herby, coconut-sweet. Learn three dishes and you will eat well anywhere.',
    places: [
      { name: 'Fish amok', note: 'Steamed fish curry in banana leaf. Order it your first week.' },
      { name: 'Num banh chok', note: 'Khmer noodles for breakfast, from a lady with a basket, before 9am.' },
      { name: 'Old Market (Psar Chas)', note: 'Fruit, fabric, coffee, everything. Bargain gently.' },
      { name: 'Kandal Village', note: 'Small streets of cafés and shops a short walk from the river.' },
      { name: 'Night markets & Pub Street', note: 'Loud, bright, cheap, and a good place to take a visiting team for one evening.' },
    ],
    label: 'Drop a photo — a market or café', photo: '/images/campus/fruit-table.jpg', alt: 'Trays of watermelon, grapes and longan being served at a shared meal', pos: '50% 50%',
  },
  {
    title: 'Nature & day trips', km: 'ធម្មជាតិ',
    intro: 'When you need space, the countryside starts ten minutes out of town.',
    places: [
      { name: 'Tonlé Sap floating villages', note: 'Kampong Phluk or Kampong Khleang — stilt houses and flooded forest, best in the wet season.' },
      { name: 'Phnom Kulen', note: 'Waterfalls, a reclining Buddha, and the river of a thousand lingas. A full day.' },
      { name: 'Countryside by bicycle', note: 'Rice fields, water buffalo and villages on the road out of town.' },
      { name: 'Sunset from Pre Rup', note: 'Or Phnom Bakheng — both inside the Angkor park.' },
    ],
    label: 'Drop a photo — Tonlé Sap or Kulen', photo: '/images/campus/tonle-sap-boat.jpg', alt: 'A blue two-deck tour boat full of passengers crossing the Tonlé Sap under a wide sky', pos: '50% 55%',
  },
  {
    title: 'Culture & evenings', km: 'វប្បធម៌',
    intro: 'Siem Reap has more going on after dark than any city its size in Cambodia.',
    places: [
      { name: 'Phare, the Cambodian Circus', note: 'Acrobatics and storytelling by young Khmer performers. Take everyone.' },
      { name: 'Apsara dance', note: 'Classical Khmer dance, usually with dinner.' },
      { name: 'Made in Cambodia market', note: 'Local makers, fair prices, good gifts to send home.' },
      { name: 'Local churches', note: 'Khmer and international congregations — ask staff where they worship on Sundays.' },
    ],
    label: 'Drop a photo — Phare or an evening out', photo: '/images/campus/apsara.jpg', alt: 'An Apsara dancer in gold costume performing on stage', pos: '50% 30%',
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
