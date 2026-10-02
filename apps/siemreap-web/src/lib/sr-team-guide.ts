// The Guide for Short-term Teams, as a book you can flip through on the
// site. Edit the text here and the page updates; each entry is one spread.
// `kind` picks the page design; `photo` paths live in public/images/guide.
export type Spread =
  | { kind: 'cover' }
  | { kind: 'letter'; title: string; paragraphs: string[]; signoff: string; photo?: string }
  | { kind: 'quote'; quote: string; by: string; photo: string }
  | { kind: 'stats'; chapter: string; title: string; intro: string; stats: [string, string][]; photo?: string }
  | { kind: 'list'; chapter: string; title: string; intro?: string; items: [string, string][]; photo?: string; pos?: string; columns?: 1 | 2 }
  | { kind: 'checklist'; chapter: string; title: string; intro?: string; items: string[]; photo?: string }
  | { kind: 'dress'; chapter: string; title: string; intro: string; girls: [string, string][]; boys: [string, string][]; both: string[] }
  | { kind: 'end'; title: string; body: string; links: [string, string][] };

export const GUIDE_TITLE = 'Guide for Short-term Teams';
export const GUIDE_UPDATED = 'October 2026';

export const GUIDE: Spread[] = [
  { kind: 'cover' },
  {
    kind: 'letter', title: 'Welcome to your adventure with YWAM Siem Reap', photo: '/images/guide/worship-flags.webp',
    paragraphs: [
      'Thank you for your yes, and your heart for Cambodia. We believe that God has a purpose for your time here.',
      'At YWAM Siem Reap, we are passionate about seeing lives transformed through the love of Jesus. As a short-term outreach team, you have the incredible opportunity to serve alongside us in local villages, schools, churches and communities, sharing the gospel in both word and action.',
      'Siem Reap is a city rich in history, culture and resilience. While known for the stunning Angkor Wat temple, it is also home to many who have never heard the name of Jesus. Your time here will not only impact lives, but we pray it will deepen your faith, challenge you, and equip you for a life of mission, wherever God calls you next.',
      'This guide gives you the essentials for your outreach: practical guidelines, cultural insights, ministry opportunities, and ways to prepare spiritually for your time in Cambodia. We are honored to walk this journey with you and cannot wait to see how God moves through your team.',
    ],
    signoff: 'Welcome to YWAM Siem Reap. Let’s make Jesus known together! Blessings, the YWAM Siem Reap family',
  },
  { kind: 'quote', quote: 'Airplanes were invented for missionaries to complete the Great Commission.', by: 'Loren Cunningham, YWAM founder', photo: '/images/guide/worship-hands.webp' },
  {
    kind: 'stats', chapter: 'YWAM Cambodia', title: 'One nation, one generation.',
    intro: 'At YWAM Cambodia we are committed to seeing Cambodia transformed in one generation through the power of the gospel. Our mission is to serve communities, educate youth, and develop leaders who will bring lasting change to the nation.',
    stats: [['82%', 'of Cambodia is Buddhist'], ['2%', 'is Christian'], ['10 in 10', 'our prayer: 10% Christian within ten years']],
    photo: '/images/guide/family-photo.webp',
  },
  {
    kind: 'list', chapter: 'Who we are', title: 'One family, one goal.',
    intro: 'UofN Poipet and UofN Siem Reap are cross-cultural campuses overseeing more than twenty ministries across both cities. Together we function as one family.',
    items: [
      ['50+ staff', 'From many backgrounds and nationalities, committed to serving the community and fostering transformation.'],
      ['Two locations', 'In 2024 UofN Poipet established a pioneering team in Siem Reap. The two bases share resources, support and ideas to advance Kingdom work across Cambodia.'],
      ['One family', 'With two operating languages on base we prioritise unity. We overcome challenges and celebrate victories as a community. Welcome to the family.'],
      ['One goal', '“One Nation, One Generation” unites the UofN Cambodia family as we dedicate ourselves to transforming this nation for God within a single generation.'],
    ],
    photo: '/images/guide/classroom.webp', columns: 2,
  },
  {
    kind: 'list', chapter: 'Our ministries', title: 'Serve, educate, develop, train.',
    intro: 'Through these initiatives we seek to transform Cambodia by empowering the next generation of Christian leaders and serving the community holistically: spiritually, educationally and socially.',
    items: [
      ['Serve the community', 'Gon Preah (child of God) Cafe gives high-school students a safe space and a place to hear about Jesus; GP Education offers free primary education to underprivileged children; outreach teams serve the villages.'],
      ['Educate youth', 'Our Youth Development Center (YDC) equips high-school students with English, and our media ministry reaches over 15 million Cambodians a month.'],
      ['Develop leaders', 'Through DTS, DBS and the School of Ministry Development we disciple the next generation of Cambodian leaders, helping them find their identity in Christ and their purpose in the world.'],
      ['Train professionals', 'We train Khmer youth in technical, music, multimedia, hospitality, culinary, finance, cafe and education skills.'],
    ],
    photo: '/images/schools/sms-studio.webp', columns: 2,
  },
  {
    kind: 'list', chapter: 'How teams serve', title: 'There are many ways a team can serve.',
    items: [
      ['Sharing the gospel', 'Many opportunities to share the love of Jesus with the unreached: testimonies, house visits in the villages, and youth events.'],
      ['Supporting ministries', 'Teams support the ministries we partner with in Siem Reap, in education, children’s ministry, food distribution and construction.'],
      ['Skills', 'Experience in worship, media, barista, kitchen or technical skills empowers and inspires our staff while supporting the ministries.'],
      ['Encouraging missionaries', 'Teams work alongside our staff, bringing fresh energy, prayer and support to those serving long term, and many keep encouraging them through prayer and giving after they go home.'],
    ],
    photo: '/images/teams/team-village-girls.webp', pos: '50% 35%',
  },
  {
    kind: 'letter', title: 'How teams make a lasting impact', photo: '/images/guide/team-village.webp',
    paragraphs: [
      'Short-term mission teams play a vital role in YWAM Cambodia’s vision of One Nation, One Generation: raising up a generation of Khmer believers to transform their nation. Each team brings unique gifts, skills and perspectives that further God’s Kingdom, through evangelism, discipleship, practical service or community outreach.',
      'By stepping out of your comfort zone, being bold in your faith, and walking in unity, you become part of something bigger, supporting long-term missions that bring lasting transformation.',
      'Your time in Cambodia impacts lives, and it strengthens and encourages local believers to continue the work God has called them to. Together we are investing in a generation that will rise up to change their nation for Christ.',
    ],
    signoff: '',
  },
  {
    kind: 'list', chapter: 'Before the trip', title: 'Spiritual and practical preparation.',
    items: [
      ['Worship and prayer', 'Your journey starts with prayer. Worship and prayer are powerful tools of spiritual warfare, bringing unity, strength and guidance. They prepare your heart and mind for the path ahead.'],
      ['Ministry prep', 'Take time to reflect on your faith and how you came to believe. Be ready to share your story; your testimony has the power to uplift and bring life. Come prepared with songs, dances, skits and games, some of the best ways to connect with Khmer people.'],
      ['Culture, language and awareness', 'Learning about the culture and a few basic phrases shows respect and helps you connect. Explore Cambodia’s history and traditions; it deepens your appreciation of the Khmer people.'],
      ['Set the right mindset', 'Come with a heart to serve. As a short-term team you are here to support long-term missions. Things may not always go as planned, so be FAT: flexible, adaptable and teachable.'],
    ],
    photo: '/images/guide/baptism-river.webp', pos: '50% 35%',
  },
  {
    kind: 'checklist', chapter: 'Before the trip', title: 'Packing essentials.',
    intro: 'Bedding and pillows are provided. Everything else on this list is on you.',
    items: [
      'Shoes you do not mind getting dirty, and sandals',
      'Towels: bedding and pillows are provided, towels are not',
      'A water bottle; it gets pretty spicy here',
      'Sunscreen, lots of it',
      'Personal toiletries; familiar brands are hard to find in Cambodia',
      'Mosquito spray, especially in rainy season (also sold here)',
      'A raincoat, depending on the season',
      'Passport, valid at least six months after your arrival',
    ],
    photo: '/images/guide/kids-class.webp',
  },
  {
    kind: 'list', chapter: 'Cultural do’s and don’ts', title: 'Respect opens every door.',
    items: [
      ['Feet', 'Do not show the soles of your feet when sitting; they are the lowest part of the body. Sit cross-legged or kneel. Shoes off when entering homes, and sometimes shops.'],
      ['Heads', 'The head is the highest part of the body and closest to God. Do not touch people’s heads, and take off your hat in a home or where someone is teaching.'],
      ['Generosity', 'Cambodia is a nation of generosity. Do not be surprised to be invited to sit and eat several times a day. Accept it, and share your food too; it is something to bond over.'],
      ['Monks', 'You are welcome to speak with monks, but do not touch them. If a woman touches a monk, even on the shoulder, he must go through a week of purification.'],
      ['Pagodas', 'Visit with at least one other person, modestly dressed, and never after dark. Pray before, during and after. Represent Jesus and UofN Cambodia well.'],
      ['Inviting', 'When you invite people out, you are expected to pay. If you are invited, still offer to pay.'],
    ],
    columns: 2,
  },
  {
    kind: 'list', chapter: 'Cultural do’s and don’ts', title: 'Children, touch, money, evangelism.',
    items: [
      ['Children', 'Children may be treated differently from your home country; respect the culture and ask your ministry contact. It is fine to touch young children’s heads, just be mindful. Check before taking photos and posting online. Kids are not a museum.'],
      ['Physical touch', 'Touch is common here. Men touch men and women touch women; men hold hands and women put their arms around each other. It is friendship. Touching the opposite sex in public is not appropriate.'],
      ['Money', 'Do not carry large amounts of money, and leave your passport somewhere safe. Do not give money to begging children; it keeps them begging. Offer water or a small snack instead.'],
      ['Evangelism', 'It is all about relationships. Get to know someone first; ask open-ended questions like “what do you think about that?” Loud open-air preaching can be shut down, and so can our organisation. Never speak negatively about Buddhism or other religions, never force anyone to stop going to the pagoda, and do not go into a temple to evangelise.'],
    ],
    columns: 2,
  },
  {
    kind: 'dress', chapter: 'Cultural do’s and don’ts', title: 'Clothing: modest is hottest.',
    intro: 'Most of what you wear in ministry time should be semi-professional. Outside ministry hours, including weekends out of the house, your clothing should still be appropriate, right up to the day you leave.',
    girls: [
      ['Teaching', 'Skirts are best, with a nice shirt or button-up.'],
      ['Ministry', 'Jeans, tidy long pants or capris past the knee, even when sitting. T-shirts are fine. No Thai elephant pants.'],
      ['Sport and outdoor work', 'Long basketball shorts to the knee. No short running shorts.'],
      ['Swimming', 'Khmer women wear basketball shorts and a T-shirt, so we do too.'],
      ['Note', 'V-necks should not hang loose when you bend. Dresses and skirts below the knee, or with leggings; leggings never as the top layer.'],
    ],
    boys: [
      ['Teaching', 'Long pants (slacks, not jeans) with a tidy polo or button-up.'],
      ['Ministry', 'Jeans, tidy long pants or tidy shorts to the knee. T-shirts are fine. No Thai elephant pants.'],
      ['Sport and outdoor work', 'Long basketball shorts almost to the knee.'],
      ['Swimming', 'Trunks to the knee.'],
      ['Piercings', 'None while in Cambodia. (Women: ear piercings, or a small stud in the nose.)'],
    ],
    both: [
      'A few long-sleeve shirts are good for going out; it is actually cooler without the sun on your skin, and some ministries ask for them.',
      'Do not draw attention to tattoos; some ministries will ask you to cover them. No new tattoos or piercings on outreach.',
      'No pyjamas or basketball shorts downstairs during work hours, even on a sick day.',
      'Time: most Cambodians will be late, and will finish a conversation before the next thing. If you need someone on time, say how long you are free. Be on time yourself and prepare for ministries beforehand.',
    ],
  },
  {
    kind: 'list', chapter: 'Base guide', title: 'Our home is your home.',
    intro: 'This base is a hub of ministries and the home of long-term staff and families with children. Help us steward it well.',
    items: [
      ['Mealtimes', '“Nyum bai howie nou?” (have you eaten yet?) Every weekday and Sunday night the base provides breakfast at 7:30, lunch at 12:30 and dinner at 6:30; a bell rings. Eating out, or bringing guests? Tell your outreach coordinator so the kitchen can plan.'],
      ['Quiet hours', '9:30pm to 7:30am, to honour everyone’s sleep. The gate locks at 9:30pm; if you will be late, let someone on base know so you are not locked out, and remember someone is staying up to let you in.'],
      ['Room care', 'No toilet paper down the toilet (the sewage system cannot handle it). No shoes in the bedrooms; leave them in the shoe room. No food in rooms. Lights and AC off when you are the last to leave.'],
      ['Air conditioning', 'Keep AC units at 22 degrees or above; lower does not change the room much but sends the electricity bill through the roof. Rooms are checked daily. Leave the AC or lights on and your room does the dishes that night, or the whole week.'],
      ['Vehicles', 'Teams do not operate any vehicles: cars, motos or tractors. Bicycles are fine. As a moto passenger, wear a helmet.'],
      ['Drinking and smoking', 'Drinking, smoking and vaping are not allowed, on base or out.'],
      ['Shared spaces', 'Games, the cafe, places to talk and study: when you leave an area, check for mess, turn off AC and lights, and clean up after yourself in the kitchen.'],
    ],
    columns: 2,
  },
  {
    kind: 'list', chapter: 'During the trip', title: 'Embrace the culture with an open heart.',
    items: [
      ['Relational', 'Cambodians value relationships above all else. Taking time to get to know one another is essential, and often more important than tasks or schedules.'],
      ['Faithful', 'Faithfulness is a powerful act of spiritual warfare. Stay faithful in the small things; when you are faithful with little, you will be entrusted with much.'],
      ['Food and culture', 'God has brought you here for a purpose. Do not be afraid to step beyond your comfort zone; growth happens in the moments of discomfort. Go all in and be bold in your faith.'],
      ['Curiosity, not passivity', 'You will meet new foods, unfamiliar smells and unique experiences. Each one is a chance to learn. Cambodia’s history and culture are worth exploring; step in with curiosity and appreciation.'],
    ],
    photo: '/images/teams/team-village-path.webp', pos: '50% 45%',
  },
  {
    kind: 'list', chapter: 'Our city: Siem Reap', title: 'Markets, tuk-tuks and warm hearts.',
    items: [
      ['Money', 'Two currencies, Khmer riel and US dollars; 4,000 riel to the dollar. Change money at Wing booths (the green logo) across the city. Bills must be clean and unripped or they will be refused.'],
      ['Hungry?', 'The base provides meals on weekdays and Sunday nights, but for a pick-me-up head to the street vendors for a cheap, tasty snack. Ask the Khmer staff for recommendations.'],
      ['Explore', 'Siem Reap is a vibrant city with bustling markets. You will have downtime: find new cafes, try new snacks, shop at the night market.'],
      ['Tuk-tuk', 'Download PassApp or Grab, Uber in tuk-tuk form. Use it for grocery runs, church and errands; a typical ride is 4,000 to 10,000 riel ($1 to $2.50). PassApp needs a Khmer number; Grab does not.'],
    ],
    photo: '/images/campus/tuktuk.webp', pos: '50% 60%',
  },
  {
    kind: 'list', chapter: 'Practical information', title: 'Before you fly.',
    items: [
      ['Time zone', 'Indochina Time (ICT), UTC+7.'],
      ['Dry season', 'November to April: dry and warm. November to February is the peak season, with low humidity and little rain. March and April can be very hot, up to 42°C.'],
      ['Rainy season', 'May to October: heavy rain, usually only an hour or two a day, and higher humidity. The landscape turns lush and green.'],
      ['Airport', 'Siem Reap Angkor International Airport (SAI), about an hour from the base. Transfer: $25 for a 4-passenger car, $30 for a 12-passenger van, $35 for a 15-passenger van.'],
      ['Vaccinations', 'Hepatitis B, up-to-date tetanus, and typhoid are required.'],
      ['Visas and housing', 'Ask the teams coordinator. Once your team is accepted, the step-by-step e-visa guide and our letter of invitation come through the GP Portal.'],
    ],
    columns: 2,
  },
  {
    kind: 'end', title: 'See you in Siem Reap.',
    body: 'Questions about anything in this guide? Message the teams coordinator on WhatsApp, or email us. We are honored to walk this journey with you.',
    links: [['/visit', 'Bring a team'], ['/team', 'Meet the team'], ['/give#khmer-staff', 'Support our Khmer staff'], ['/campus-life', 'Campus life']],
  },
];
