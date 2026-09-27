import { RegionInfo, ServiceItem, NewsArticle, GalleryItem, EventItem, FaqItem } from '../types/limoria.ts';

export const LIMORIA_REGIONS: RegionInfo[] = [
  {
    id: 1,
    name: 'Aurora',
    nameBn: 'অরোরা',
    color: '#3b82f6', // blue
    badgeBg: 'bg-blue-600',
    capital: 'Borealis City',
    population: '1.45 Million',
    area: '14,200 km²',
    governor: 'Hon. Elena Vance',
    climate: 'Sub-Alpine & Crisp',
    economy: 'Renewable Hydroelectric, Astronomy Observatories, High-Tech Glass',
    description: 'The northern gateway renowned for its glittering auroral night skies, crystal mountain springs, and quantum research facilities.',
    descriptionBn: 'উত্তরাঞ্চলীয় অঞ্চল যা তার দর্শনীয় মেরুজ্যোতি, স্ফটিক স্বচ্ছ পার্বত্য নদী এবং কোয়ান্টাম গবেষণা কেন্দ্রের জন্য বিখ্যাত।',
    landmarks: ['Aurora Sky Observatory', 'Mount Zephyr', 'Northern Crystal Gorge'],
    x: 48,
    y: 20
  },
  {
    id: 2,
    name: 'Bayview',
    nameBn: 'বেভিউ',
    color: '#ec4899', // pink/magenta
    badgeBg: 'bg-pink-600',
    capital: 'Port Marina',
    population: '2.10 Million',
    area: '11,850 km²',
    governor: 'Hon. Tariq Rahman',
    climate: 'Coastal Temperate',
    economy: 'International Shipping, Maritime Trade, Seafood, Fintech Hub',
    description: 'The bustling commercial maritime province hosting Limoria’s deepest deepwater automated container port and naval trade hub.',
    descriptionBn: 'লিমোরিয়ার প্রধান বাণিজ্যিক সামুদ্রিক প্রদেশ যেখানে আধুনিক স্বয়ংক্রিয় কনটেইনার বন্দর অবস্থিত।',
    landmarks: ['Golden Marina Harbor', 'Bayview Financial Tower', 'Oceanic Biosphere Reef'],
    x: 28,
    y: 42
  },
  {
    id: 3,
    name: 'Crestfall',
    nameBn: 'ক্রেস্টফল',
    color: '#eab308', // yellow/amber
    badgeBg: 'bg-yellow-500',
    capital: 'Cascade Springs',
    population: '1.20 Million',
    area: '16,400 km²',
    governor: 'Hon. Liam Thorne',
    climate: 'Temperate Rainforest & Mist',
    economy: 'Eco-Tourism, Geothermal Energy, Timber Stewardship, Craft Brewing',
    description: 'A dramatic territory of majestic canyon waterfalls, historic sandstone castles, and protected ancient cedar rainforests.',
    descriptionBn: 'ঐতিহাসিক দুর্গ, চমৎকার জলপ্রপাত এবং প্রাচীন সিডার বনাঞ্চলের প্রাকৃতিক নৈসর্গিক প্রদেশ।',
    landmarks: ['Crestfall Grand Falls', 'The Eagle Fortress', 'Whispering Canyon'],
    x: 68,
    y: 35
  },
  {
    id: 4,
    name: 'Emerald',
    nameBn: 'এমেরাল্ড',
    color: '#22c55e', // green
    badgeBg: 'bg-emerald-500',
    capital: 'Verdant Vale',
    population: '1.85 Million',
    area: '19,300 km²',
    governor: 'Hon. Maya Patel',
    climate: 'Rich Mediterranean',
    economy: 'Organic Agriculture, Agro-Tech, Vineyard Viticulture, Clean Biosolutions',
    description: 'The agricultural heartland of Limoria, producing over 60% of national food exports through zero-emission smart farming.',
    descriptionBn: 'লিমোরিয়ার শস্যশ্যামল প্রাণকেন্দ্র যা আধুনিক পরিবেশবান্ধব কৃষির মাধ্যমে জাতীয় খাদ্যচাহিদা মেটায়।',
    landmarks: ['Valley of Emerald Vineyards', 'Verdant Botanical Sanctuary', 'Green Horizons Institute'],
    x: 52,
    y: 50
  },
  {
    id: 5,
    name: 'Fairview',
    nameBn: 'ফেয়ারভিউ',
    color: '#14b8a6', // teal/cyan-green
    badgeBg: 'bg-teal-600',
    capital: 'Fairview Metro (National Capital)',
    population: '2.80 Million',
    area: '9,200 km²',
    governor: 'Hon. Sarah Jenkins',
    climate: 'Mild Continental',
    economy: 'National Governance, Federal Banking, Aerospace & Diplomacy',
    description: 'The sovereign capital territory housing the Presidential Palace, the National Parliament, Supreme Court, and Central Reserve.',
    descriptionBn: 'রাষ্ট্রীয় রাজধানী অঞ্চল যেখানে প্রেসিডেন্সিয়াল প্রাসাদ, জাতীয় সংসদ ও সুপ্রিম কোর্ট অবস্থিত।',
    landmarks: ['Presidential Grand Palace', 'Limoria National Parliament', 'Sovereignty Square'],
    x: 40,
    y: 58
  },
  {
    id: 6,
    name: 'Highland',
    nameBn: 'হাইল্যান্ড',
    color: '#06b6d4', // cyan
    badgeBg: 'bg-cyan-600',
    capital: 'Highland Summit',
    population: '950,000',
    area: '18,700 km²',
    governor: 'Hon. Viktor Sterling',
    climate: 'Alpine Mountainous',
    economy: 'Winter Sports, Mineral Extraction, Lithium Tech, High-Altitude Wind',
    description: 'Rugged alpine peaks hosting Olympic winter training facilities and strategic mineral reserves powering Limoria’s green batteries.',
    descriptionBn: 'তুষারাবৃত আল্পাইন পর্বতমালা যেখানে বিশ্বমানের উইন্টার স্পোর্টস এবং খনিজ শিল্প অবস্থিত।',
    landmarks: ['Peak of Sovereignty', 'Alpine Gondola Network', 'Glacier Ice Caves'],
    x: 35,
    y: 28
  },
  {
    id: 7,
    name: 'Lakeview',
    nameBn: 'লেকভিউ',
    color: '#0ea5e9', // sky blue
    badgeBg: 'bg-sky-500',
    capital: 'Clearwater Shores',
    population: '1.30 Million',
    area: '13,100 km²',
    governor: 'Hon. Beatrice Song',
    climate: 'Lakeside Cool & Breezy',
    economy: 'Universities & Academia, Biotechnology, Sailing, Fine Arts',
    description: 'The educational and cultural capital surrounded by the pristine sapphire waters of Lake Seraphina.',
    descriptionBn: 'লেক সেরাফিনা পরিবেষ্টিত শিক্ষা ও সংস্কৃতির লীলাভূমি, শীর্ষ বিশ্ববিদ্যালয়ের আবাস।',
    landmarks: ['Lake Seraphina Archipelago', 'Limoria Central University', 'Grand Opera Hall'],
    x: 62,
    y: 65
  },
  {
    id: 8,
    name: 'Sunridge',
    nameBn: 'সানরিজ',
    color: '#f97316', // orange
    badgeBg: 'bg-orange-500',
    capital: 'Solaria Bay',
    population: '1.15 Million',
    area: '15,600 km²',
    governor: 'Hon. Carlos Mendez',
    climate: 'Sub-Tropical Sunny (320 days sun/yr)',
    economy: 'Solar Mega-Arrays, Luxury Coastal Tourism, Aviation Testing, Citrus',
    description: 'Golden sun-drenched coastal bluffs featuring state-of-the-art solar energy fields and world-class luxury eco-resorts.',
    descriptionBn: 'সোনালী সমুদ্র সৈকত ও সর্বাধুনিক সৌরশক্তি প্রকল্পে সমৃদ্ধ দেশের দক্ষিণ উপকূলীয় অঞ্চল।',
    landmarks: ['Solaria Golden Dunes', 'Helios Solar Park', 'Palms Beach Promenade'],
    x: 48,
    y: 78
  }
];

export const LIMORIA_SERVICES: ServiceItem[] = [
  {
    id: 'passport',
    title: 'Passport & Visa',
    titleBn: 'পাসপোর্ট ও ভিসা',
    iconName: 'BookUser',
    department: 'Ministry of External Affairs & Immigration',
    processingTime: '5-7 Business Days (Express: 24h)',
    fee: '120 LM (~$85 USD)',
    description: 'Apply for official biometric e-Passports, passport renewal, lost passport replacement, and foreign visa applications.',
    descriptionBn: 'বায়োমেট্রিক ই-পাসপোর্ট আবেদন, নবায়ন এবং বিদেশি ভিসা যাচাই প্রক্রিয়া।',
    requirements: ['National ID Card', 'Birth Certificate', 'Biometric Photo', 'Proof of Citizenship'],
    actionLabel: 'Apply for Passport'
  },
  {
    id: 'nid',
    title: 'National ID',
    titleBn: 'জাতীয় পরিচয়পত্র',
    iconName: 'CreditCard',
    department: 'Civil Registration Commission',
    processingTime: 'Instant Digital / 3 Days Card',
    fee: 'Free (First Issue) / 25 LM Replacement',
    description: 'Obtain your digital National Smart ID, update residential addresses, register biometric data, or verify citizenship status.',
    descriptionBn: 'ডিজিটাল স্মার্ট জাতীয় পরিচয়পত্র সংগ্রহ, ঠিকানা পরিবর্তন এবং বায়োমেট্রিক নিবন্ধন।',
    requirements: ['Birth Certificate', 'Proof of Residence', 'Parental Identification', 'Fingerprint Verification'],
    actionLabel: 'Register / Verify NID'
  },
  {
    id: 'birth-cert',
    title: 'Birth Certificate',
    titleBn: 'জন্ম সনদ',
    iconName: 'FileCheck',
    department: 'Registrar General of Vital Statistics',
    processingTime: 'Immediate Digital Issuance',
    fee: '15 LM (~$10 USD)',
    description: 'Official birth registration and verifiable digital birth certificates stamped with the sovereign Seal of Limoria.',
    descriptionBn: 'লিমোরিয়ার সরকারি সিলমোহরযুক্ত ডিজিটাল জন্ম সনদপত্র এবং নিবন্ধন।',
    requirements: ['Hospital Birth Notification', 'Parents’ Valid NID', 'Attending Physician Signature'],
    actionLabel: 'Request Birth Certificate'
  },
  {
    id: 'business',
    title: 'Business License',
    titleBn: 'ব্যবসা লাইসেন্স',
    iconName: 'Briefcase',
    department: 'Department of Trade & Enterprise',
    processingTime: '24-48 Hours',
    fee: '180 LM (~$130 USD)',
    description: 'One-stop shop to register corporations, LLCs, obtain import/export tax codes, and acquire regional operational permits.',
    descriptionBn: 'কোম্পানি নিবন্ধন, ট্রেড লাইসেন্স, এবং রপ্তানি-আমদানি অনুমোদন ২৪ ঘণ্টার মধ্যে সম্পন্ন করুন।',
    requirements: ['Articles of Incorporation', 'Registered Office Address', 'Tax Clearance Certificate', 'Founders ID'],
    actionLabel: 'Register Enterprise'
  },
  {
    id: 'tax',
    title: 'Tax Services',
    titleBn: 'কর সেবা',
    iconName: 'Coins',
    department: 'Internal Revenue Board',
    processingTime: 'Real-time Assessment & Filing',
    fee: 'No Filing Fee',
    description: 'File personal and corporate income tax, calculate VAT rebates, retrieve historical tax compliance certificates, and pay online.',
    descriptionBn: 'ব্যক্তিগত ও কর্পোরেট আয়কর রিটার্ন দাখিল, ভ্যাট ছাড় এবং অনলাইন কর পরিশোধ।',
    requirements: ['Taxpayer Identification (TIN)', 'Annual Income Statement', 'Banking Records'],
    actionLabel: 'File / Pay Taxes'
  },
  {
    id: 'education',
    title: 'Education',
    titleBn: 'শিক্ষা পোর্টাল',
    iconName: 'GraduationCap',
    department: 'Ministry of Higher Education & Youth',
    processingTime: 'Instant Application & Verification',
    fee: 'Subsidized National Program',
    description: 'National student portal, university scholarship admissions, vocational grants, and digital diploma verification system.',
    descriptionBn: 'জাতীয় বৃত্তি আবেদন, বিশ্ববিদ্যালয় ভর্তি তথ্য এবং ডিজিটাল সনদ যাচাইকরণ।',
    requirements: ['Academic Transcripts', 'Student ID', 'Recommendation Letter'],
    actionLabel: 'Access Education Portal'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    titleBn: 'স্বাস্থ্যসেবা',
    iconName: 'HeartPulse',
    department: 'National Health Service (NHS Limoria)',
    processingTime: 'Instant Doctor & Clinic Booking',
    fee: '100% Universal Citizen Coverage',
    description: 'Universal health coverage card, digital prescriptions, specialist doctor appointments, and vaccination record vault.',
    descriptionBn: 'বিনামূল্যে সার্বজনীন স্বাস্থ্যসেবা কার্ড, ডিজিটাল প্রেসক্রিপশন ও চিকিৎসক অ্যাপয়েন্টমেন্ট।',
    requirements: ['Limoria Health Card ID', 'Current Physician Referral (Optional)'],
    actionLabel: 'Book Care / Records'
  },
  {
    id: 'land-records',
    title: 'Land Records',
    titleBn: 'ভূমি রেকর্ড',
    iconName: 'Landmark',
    department: 'Land Cadastre & Urban Planning Authority',
    processingTime: '3-5 Business Days',
    fee: '45 LM Inspection Fee',
    description: 'Search geospatial cadastral deeds, title transfers, GIS boundary surveys, and zoning restriction clearances.',
    descriptionBn: 'জমির ডিজিটাল খতিয়ান, মালিকানা দলিল ও মানচিত্র তল্লাশি।',
    requirements: ['Plot / Parcel Identification Number (PIN)', 'Owner Identity Proof', 'Deed Reference'],
    actionLabel: 'Search Cadastre'
  }
];

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Limoria Celebrates Independence Day',
    titleBn: 'লিমোরিয়ায় পালিত হলো গৌরবময় স্বাধীনতা দিবস',
    date: '26 Jun 2025',
    summary: 'Nation unites in pride and joy as President Limon inaugurates the Golden Jubilee of Sovereign Liberty at Freedom Square.',
    summaryBn: 'সারাদেশে বিপুল উৎসাহ উদ্দীপনায় স্বাধীনতার সুবর্ণজয়ন্তী উদযাপিত হলো।',
    category: 'National Event',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-2',
    title: 'New Development Project Launched',
    titleBn: 'নতুন জাতীয় মেগা অবকাঠামো প্রকল্পের উদ্বোধন',
    date: '20 Jun 2025',
    summary: 'New infrastructure for a stronger future: the Hyper-Rail connecting Bayview Port and Aurora High Peak officially begins construction.',
    summaryBn: 'বেভিউ বন্দর থেকে অরোরা পর্যন্ত আধুনিক দ্রুতগতির রেল নেটওয়ার্ক প্রকল্পের কাজ শুরু।',
    category: 'Infrastructure',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-3',
    title: "President Mamun Hossen Limon's International Visit",
    titleBn: 'রাষ্ট্রপতি মামুন হোসেন লিমনের আন্তর্জাতিক দ্বিপাক্ষিক সফর সফল',
    date: '15 Jun 2025',
    summary: 'Strengthening global partnerships: historic bilateral treaties signed on clean hydrogen energy trade and artificial intelligence ethics.',
    summaryBn: 'সবুজ শক্তি এবং প্রযুক্তি খাতে আন্তর্জাতিক চুক্তি স্বাক্ষরিত হলো।',
    category: 'Diplomacy',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-4',
    title: 'Tourism Campaign Begins',
    titleBn: 'আন্তর্জাতিক পর্যটন বছর ২০২৫ শুভ উদ্বোধন',
    date: '10 Jun 2025',
    summary: 'Explore the natural beauty of Limoria: new eco-visas and zero-carbon transport passes introduced for international travelers.',
    summaryBn: 'লিমোরিয়ার অপূর্ব প্রাকৃতিক দৃশ্য উপভোগ করতে বিশ্বের ভ্রমণপিপাসুদের আহ্বান।',
    category: 'Tourism & Culture',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Presidential Palace',
    location: 'Fairview Capital District',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'Crestfall Canyon Waterfall',
    location: 'Crestfall Region',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'Bayview Sky Marina',
    location: 'Bayview Maritime Hub',
    category: 'Metropolis',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'Aurora Mountain Observatories',
    location: 'Aurora Northern Heights',
    category: 'Science & Peaks',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Sunridge Golden Dunes & Shore',
    location: 'Sunridge South Riviera',
    category: 'Coast',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Emerald Bio-Farming Terraces',
    location: 'Emerald Province',
    category: 'Agro-Ecology',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    day: '05',
    month: 'JUL',
    title: 'National Day Celebration',
    titleBn: 'জাতীয় দিবস ও বর্ণাঢ্য কুচকাওয়াজ',
    location: 'Limoria Capital Plaza',
    time: '09:00 AM - 04:00 PM',
    category: 'State Ceremony'
  },
  {
    id: 'ev-2',
    day: '12',
    month: 'JUL',
    title: 'Tourism & Maritime Festival',
    titleBn: 'আন্তর্জাতিক পর্যটন ও সামুদ্রিক উৎসব',
    location: 'Eastern Coast Boardwalk',
    time: '11:00 AM - 10:00 PM',
    category: 'Culture & Arts'
  },
  {
    id: 'ev-3',
    day: '20',
    month: 'JUL',
    title: 'Aurora Innovation & Cultural Summit',
    titleBn: 'অরোরা সাংস্কৃতিক ও বিজ্ঞান সম্মেলন',
    location: 'Aurora Region Convention Hall',
    time: '10:00 AM - 06:00 PM',
    category: 'Technology & Youth'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How to get a passport?',
    questionBn: 'কিভাবে লিমোরিয়া পাসপোর্ট পেতে পারি?',
    answer: 'To apply for a Limoria biometric e-Passport, submit your National ID card and digital photo via the Citizen Portal or visit any Municipal Service Kiosk. Processing takes 5-7 business days.',
    answerBn: 'বায়োমেট্রিক ই-পাসপোর্টের জন্য আপনার জাতীয় পরিচয়পত্র ও ছবি সহ অনলাইন পোর্টালে আবেদন করুন অথবা নিকটস্থ পৌরসভা সেবা কেন্দ্রে যান। সময় লাগবে ৫-৭ কার্যদিবস।',
    category: 'Passports'
  },
  {
    id: 'faq-2',
    question: 'What are the income tax rates?',
    questionBn: 'আয়করের বর্তমান হার কত?',
    answer: 'Limoria offers a progressive, citizen-friendly tax system: The first 40,000 LM is 0% taxed. Earnings between 40,001 - 100,000 LM are taxed at 12%, and earnings above 100,000 LM are capped at 22%.',
    answerBn: 'লিমোরিয়ায় প্রথম ৪০,০০০ এলএম আয়ে কোনো কর নেই (০%)। ৪০,০০১ থেকে ১,০০,০০০ পর্যন্ত ১২% এবং এর বেশি আয়ে সর্বোচ্চ ২২% কর ধার্য রয়েছে।',
    category: 'Taxes'
  },
  {
    id: 'faq-3',
    question: 'How to start a business?',
    questionBn: 'নতুন ব্যবসা প্রতিষ্ঠান নিবন্ধন কিভাবে করবেন?',
    answer: 'Registering an enterprise takes under 24 hours. Submit your Articles of Incorporation and founder IDs through the "Business License" section. Your digital tax number and corporate license will be generated instantly.',
    answerBn: 'আমাদের ডিজিটাল ওয়ান-স্টপ সার্ভিসে ২৪ ঘণ্টার মধ্যে আপনার ব্যবসা নিবন্ধন এবং ট্যাক্স সনদ স্বয়ংক্রিয়ভাবে প্রস্তুত হয়ে যায়।',
    category: 'Enterprise'
  },
  {
    id: 'faq-4',
    question: 'Where is Region 4 located?',
    questionBn: '৪ নম্বর অঞ্চল (এমেরাল্ড) কোথায় অবস্থিত?',
    answer: 'Region 4 is the Emerald Region located in the central fertile lowlands of Limoria. It is renowned for its organic agricultural valleys, green biotech research, and scenic botanical parks.',
    answerBn: '৪ নম্বর অঞ্চল হলো এমেরাল্ড প্রদেশ, যা লিমোরিয়ার কেন্দ্রস্থলে অবস্থিত। এটি দেশের সবচেয়ে উর্বর কৃষি ও সবুজ প্রযুক্তির প্রাণকেন্দ্র।',
    category: 'Geography'
  }
];

export const PRESIDENT_BIO = {
  name: 'President Mamun Hossen Limon',
  nameShort: 'Mamun Hossen Limon',
  nameBn: 'রাষ্ট্রপতি মামুন হোসেন লিমন',
  title: 'President of the Sovereign Republic of Limoria',
  titleBn: 'সার্বভৌম লিমোরিয়া প্রজাতন্ত্রের মহামান্য রাষ্ট্রপতি',
  motto: 'Peace, Progress, Prosperity',
  mottoBn: 'শান্তি, প্রগতি, সমৃদ্ধি',
  deskTitle: 'MAMUN HOSSEN LIMON',
  photoUrl: '/president_limon.jpg',
  vision: 'To build a high-technology, environmentally sustainable, united republic where every citizen enjoys liberty, world-class education, and boundless opportunity.',
  tenure: '2022 - Present',
  achievements: [
    'Achieved 100% renewable grid milestone across all 8 regions',
    'Introduced free universal healthcare and digital National ID within 18 months',
    'Modernized high-speed Hyper-Rail connectivity between 32 major cities',
    'Negotiated historic regional peace pacts and zero-tariff technology corridors'
  ]
};
