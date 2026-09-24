// Quick-search index for the nav search. Curated rather than crawled: each
// entry is a page or a deep link with the words people are likely to type.
// `quick` entries show before anyone types.
export type SearchEntry = {
  title: string;
  desc: string;
  href: string;
  group: string;
  keywords: string;
  quick?: boolean;
  external?: boolean;
};

export const SEARCH_INDEX: SearchEntry[] = [
  { title: 'Discipleship Training School (DTS)', desc: 'Six months · every January', href: '/schools/dts', group: 'Schools', keywords: 'dts discipleship training school january identity purpose know god outreach lecture phase nations bilingual khmer english', quick: true },
  { title: 'DTS cost and dates', desc: 'Fees, arrival and departure, prerequisites', href: '/schools/dts#info', group: 'Schools', keywords: 'dts cost price fees dates arrival departure 2000 1500 620 usd outreach cost prerequisites 18' },
  { title: 'DTS tracks', desc: 'Media, music, cafe, culinary, hospitality, technical', href: '/schools/dts#tracks', group: 'Schools', keywords: 'dts tracks skills media music worship cafe barista culinary cooking hospitality hotel technical repair furniture' },
  { title: 'DTS questions (FAQ)', desc: 'Language, cost, outreach, who can apply', href: '/schools/dts#faq', group: 'Schools', keywords: 'dts faq questions language khmer english' },
  { title: 'Discipleship Bible School (DBS)', desc: 'Thirteen weeks · April 26 to July 21', href: '/schools/dbs', group: 'Schools', keywords: 'dbs discipleship bible school 3 months secondary word of god inductive 66 books april july', quick: true },
  { title: 'DBS week by week', desc: 'The thirteen-week curriculum', href: '/schools/dbs#week-1', group: 'Schools', keywords: 'dbs curriculum weeks genesis exodus pentateuch tribal david kings prophets exile jesus church paul john revelation teaching week' },
  { title: 'DBS dates and information', desc: 'April 26 to July 21 · completed DTS required', href: '/schools/dbs#info', group: 'Schools', keywords: 'dbs dates cost arrival departure april july prerequisites' },
  { title: 'Bible Counseling School (BCS)', desc: 'Caring for people who carry trauma', href: '/schools', group: 'Schools', keywords: 'bcs bible counseling counselling school trauma care' },
  { title: 'Social Media School (SMS)', desc: 'Storytelling and digital ministry', href: '/schools/sms', group: 'Schools', keywords: 'sms social media school storytelling digital content video' },
  { title: 'Schools & Courses', desc: 'Every school in Siem Reap', href: '/schools', group: 'Schools', keywords: 'schools courses training uofn university of the nations short-term outreach' },

  { title: 'How to apply', desc: 'Choose a school, staff or volunteering', href: '/apply', group: 'Apply', keywords: 'apply application form process steps reference interview acceptance visa fees packing list', quick: true },
  { title: 'Apply for DTS', desc: 'DTS application form', href: '/apply?school=dts', group: 'Apply', keywords: 'apply dts application form google form' },
  { title: 'Apply for DBS', desc: 'DBS application', href: '/apply?school=dbs', group: 'Apply', keywords: 'apply dbs application' },
  { title: 'Staff application', desc: 'Join staff at YWAM Siem Reap', href: '/apply?school=staff', group: 'Apply', keywords: 'staff application join staff missionary long term serve' },
  { title: 'Volunteer application', desc: 'Volunteer with us short or long term', href: '/apply?school=volunteer', group: 'Apply', keywords: 'volunteer application mission builder serve short term' },
  { title: 'Leader reference', desc: 'One reference for international applicants', href: '/apply', group: 'Apply', keywords: 'leader reference pastor mentor church reference form international khmer' },

  { title: 'Contact the base', desc: 'WhatsApp or email', href: '/contact', group: 'Contact', keywords: 'contact talk reach us message phone address', quick: true },
  { title: 'WhatsApp +855 69 911 705', desc: 'Message us on WhatsApp', href: 'https://wa.me/85569911705', group: 'Contact', keywords: 'whatsapp phone number telegram call message chat 069 911 705', external: true },
  { title: 'info@ywamsiemreap.org', desc: 'Email the base', href: 'mailto:info@ywamsiemreap.org', group: 'Contact', keywords: 'email mail info write', external: true },
  { title: 'Instagram @ywamsiemreap', desc: 'Follow along', href: 'https://www.instagram.com/ywamsiemreap', group: 'Contact', keywords: 'instagram social media follow photos', external: true },

  { title: 'Join staff or volunteer', desc: 'Serve long term, or come short term', href: '/staff', group: 'Get involved', keywords: 'staff join serve long term short term volunteer volunteering mission builders', quick: true },
  { title: 'Bring a team', desc: 'Short-term teams and where we serve', href: '/visit', group: 'Get involved', keywords: 'visit bring a team short-term teams outreach ministries villages trip mission trip' },
  { title: 'Campus life', desc: 'Living in community, Khmer and international', href: '/campus-life', group: 'Students', keywords: 'campus life community living dorm rooms meals worship family khmer international students volunteers new staff', quick: true },
  { title: 'Things to do in Siem Reap', desc: 'Temples, food, markets, nature, getting around', href: '/campus-life#siem-reap', group: 'Students', keywords: 'siem reap city things to do angkor wat temples food cafe market pub street tonle sap kulen circus tuk tuk weather sim card money riel' },
  { title: 'Give', desc: 'Partner with the work in Cambodia', href: '/give', group: 'Get involved', keywords: 'give donate giving support partner missionary staff member money', quick: true },

  { title: 'About YWAM Siem Reap', desc: 'Welcome, our story and the road to pioneering', href: '/about', group: 'About', keywords: 'about us welcome story history gonpreah youth with a mission cambodia base poipet phnom penh pioneering university of the nations uofn 2002 2016 2025 2027' },
  { title: 'Values', desc: 'YWAM statement of purpose, core beliefs and foundational values', href: '/values', group: 'About', keywords: 'values believe statement of purpose core beliefs foundational values worship holiness witness prayer fellowship service know god make god known hear gods voice' },
  { title: 'Home', desc: 'YWAM Siem Reap', href: '/', group: 'About', keywords: 'home start ywam siem reap cambodia' },
];
