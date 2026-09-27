import { NewsArticle } from '../types/limoria.ts';
import { LATEST_NEWS } from '../data/limoriaData.ts';

// Comprehensive pool of high-quality fictional news templates for Limoria
const FICTIONAL_NEWS_POOL: Array<Omit<NewsArticle, 'id' | 'date'>> = [
  {
    title: "Limoria Successfully Launches Sovereign Climate Satellite 'Limoria-1' Into Orbit",
    titleBn: "লিমোরিয়ার নিজস্ব কৃত্রিম উপগ্রহ 'লিমোরিয়া-১' মহাকাশে সফলভাবে উৎক্ষেপণ",
    summary: "From Fairview Space Center, in the presence of President Mamun Hossen Limon, Limoria's quantum climate monitoring satellite has officially entered geostationary orbit.",
    summaryBn: "ফেয়ারভিউ স্পেস সেন্টার থেকে রাষ্ট্রপতি মামুন হোসেন লিমনের উপস্থিতিতে লিমোরিয়ার পরিবেশ পর্যবেক্ষণ ও কোয়ান্টাম যোগাযোগ উপগ্রহ 'লিমোরিয়া-১' মহাকাশে সফলভাবে উৎক্ষেপিত হয়েছে।",
    category: "Space & Tech",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Hyper-Rail Breaks World Speed Record Across Aurora Mountain Route",
    titleBn: "অরোরা রুট দিয়ে লিমোরিয়া হাইপার-রেল ঘণ্টায় ৬২০ কিমি গতিতে নতুন বিশ্বরেকর্ড",
    summary: "The zero-emission magnetic levitation express completed the 400km Fairview-to-Aurora transit in just 42 minutes, ushering in a new era of clean travel.",
    summaryBn: "লিমোরিয়ার শূন্য-কার্বন ম্যাগলেভ হাইপার-রেল ঘণ্টায় ৬২০ কিলোমিটার গতিতে ফেয়ারভিউ থেকে অরোরা মাত্র ৪২ মিনিটে পৌঁছে বিশ্বরেকর্ড সৃষ্টি করেছে।",
    category: "Infrastructure",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Rare Bioluminescent Marine Garden Discovered Off Bayview Coast",
    titleBn: "বেভিউ উপকূলের গভীর সমুদ্রে বিরল প্রবাল ও ভাস্বর সামুদ্রিক উদ্যান আবিষ্কার",
    summary: "Marine biologists from Lakeview Central University have documented a vast self-illuminating underwater coral sanctuary spanning 120 square kilometers.",
    summaryBn: "লেকভিউ বিশ্ববিদ্যালয়ের সমুদ্রবিজ্ঞানীরা বেভিউ উপকূলের কাছে ১২০ বর্গকিলোমিটার বিস্তৃত বিরল উজ্জ্বল প্রবাল প্রাচীর ও জীববৈচিত্র্য আবিষ্কার করেছেন।",
    category: "Environment",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Sunridge Solar Archipelago Achieves 200% Clean Energy Surplus",
    titleBn: "সানরিজ সোলার আর্চিপেলাগো ২০০% উদ্বৃত্ত পরিচ্ছন্ন বিদ্যুৎ উৎপাদন করলো",
    summary: "Thanks to newly installed floating bifacial solar arrays, Sunridge is now supplying excess renewable green energy to neighboring regional grids free of cost.",
    summaryBn: "সানরিজের নতুন ভাসমান সৌর বিদ্যুৎকেন্দ্র লিমোরিয়ার চাহিদার চেয়ে ২০০% বেশি পরিচ্ছন্ন বিদ্যুৎ উৎপাদন করে জাতীয় গ্রিডে বিনামূল্যে সরবরাহ করছে।",
    category: "Clean Energy",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "National Digital AI Health Network Eliminates Hospital Wait Times",
    titleBn: "লিমোরিয়ার জাতীয় এআই স্বাস্থ্য নেটওয়ার্কে হাসপাতালের অপেক্ষার সময় শূন্যে নামলো",
    summary: "President Mamun Hossen Limon announced that the sovereign telemedicine mesh now triages and provides instant specialist appointments across all 32 cities.",
    summaryBn: "রাষ্ট্রপতি মামুন হোসেন লিমনের নির্দেশনায় চালু হওয়া জাতীয় টেলিমেডিসিন ব্যবস্থার ফলে দেশের ৩২টি শহরে হাসপাতালে রোগীদের অপেক্ষার সময় নেমে এসেছে শূন্যের কোঠায়।",
    category: "Healthcare",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Annual Crestfall Sky Lantern & Eco-Festival Draws 500,000 Tourists",
    titleBn: "ক্রেস্টফল বার্ষিক ফানুস ও পরিবেশ উৎসবে ৫ লক্ষ পর্যটকের মিলনমেলা",
    summary: "Biodegradable LED lanterns illuminated the grand waterfall canyons in a mesmerizing spectacle of culture, music, and peaceful sovereign celebration.",
    summaryBn: "ক্রেস্টফল জলপ্রপাতের উপত্যকা বর্ণিল পরিবেশবান্ধব আলোকচ্ছটায় উজ্জ্বল হয়ে উঠেছে; ৫০ হাজারেরও বেশি বিদেশি পর্যটক এতে অংশ নিয়েছেন।",
    category: "Culture",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Limoria Central Bank Announces Zero Inflation and 100% Reserve Backing",
    titleBn: "লিমোরিয়া কেন্দ্রীয় ব্যাংক জানালো শূন্য মূল্যস্ফীতি ও শতভাগ সবুজ রিজার্ভ স্থিতি",
    summary: "The Limoria Mark (LM) has emerged as one of the world's most stable digital currencies, backed entirely by renewable hydro and clean lithium assets.",
    summaryBn: "লিমোরিয়ান মার্ক (LM) শতভাগ পরিচ্ছন্ন প্রাকৃতিক সম্পদ ও পুনর্নবায়নযোগ্য শক্তির দ্বারা সমর্থিত বিশ্বের অন্যতম শক্তিশালী ও স্থিতিশীল মুদ্রায় রূপ নিয়েছে।",
    category: "Economy",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Historic Peace & Technology Corridor Signed with Neighboring Nations",
    titleBn: "প্রতিবেশী দেশগুলোর সাথে লিমোরিয়ার ঐতিহাসিক শান্তি ও প্রযুক্তি করিডোর চুক্তি",
    summary: "President Mamun Hossen Limon chaired the Limoria Summit, establishing visa-free student exchange and shared scientific research treaties.",
    summaryBn: "রাষ্ট্রপতি মামুন হোসেন লিমনের সভাপতিত্বে আয়োজিত শীর্ষ সম্মেলনে মুক্ত প্রযুক্তি আদান-প্রদান এবং শিক্ষার্থী ভিসা মওকুফের ঐতিহাসিক চুক্তি স্বাক্ষরিত হলো।",
    category: "Diplomacy",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Ancient Crystal Geodes Discovered in Emerald Highland Valleys",
    titleBn: "এমারেল্ড হাইল্যান্ড উপত্যকায় প্রাগৈতিহাসিক স্বচ্ছ স্ফটিক খনি আবিষ্কার",
    summary: "Geological surveyors unearthed a massive subterranean crystal formation dating back millions of years, which will be preserved as a national park sanctuary.",
    summaryBn: "এমারেল্ড উপত্যকায় ভূগর্ভস্থ অপূর্ব প্রাকৃতিক স্ফটিক গুহা আবিষ্কৃত হয়েছে। রাষ্ট্রপতি একে জাতীয় সংরক্ষিত পরিবেশ উদ্যান হিসেবে ঘোষণার নির্দেশ দিয়েছেন।",
    category: "Discovery",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Limoria National Cyber-Academy Offers Free AI Coding Degree to All Youth",
    titleBn: "লিমোরিয়ার সকল তরুণদের জন্য বিনামূল্যে কৃত্রিম বুদ্ধিমত্তা ও সফটওয়্যার ডিগ্রি ঘোষণা",
    summary: "Every citizen aged 16-30 can now access full scholarships in advanced robotics, aerospace computing, and clean tech engineering.",
    summaryBn: "১৬ থেকে ৩০ বছর বয়সী প্রতিটি নাগরিকের জন্য রোবটিক্স, সফটওয়্যার ও মহাকাশ গবেষণায় বিনামূল্যে জাতীয় স্কলারশিপ পোর্টাল উন্মুক্ত করেছে সরকার।",
    category: "Education",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
  }
];

const STORAGE_KEY = 'limoria_dynamic_news_vault';
const LAST_DAY_KEY = 'limoria_last_news_day_key';

// Format current date into nice readable string
export function formatNewsDate(d = new Date()): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

export function formatNewsDateBn(d = new Date()): string {
  const monthsBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
  const day = d.getDate();
  const month = monthsBn[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Loads news articles, automatically checks if a new day has arrived,
 * and if so, automatically adds today's new fictional news!
 */
export function getStoredOrDailyNews(): NewsArticle[] {
  let storedList: NewsArticle[] = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      storedList = JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to parse news cache', err);
  }

  // If empty, seed with the base news from limoriaData plus the breaking news right now
  if (!storedList || storedList.length === 0) {
    const todayStr = formatNewsDate(new Date());
    
    // First article is the user's requested breaking news right now!
    const breakingNewsNow: NewsArticle = {
      id: `news-breaking-${Date.now()}`,
      title: "Limoria Successfully Launches Sovereign Climate Satellite 'Limoria-1' Into Orbit",
      titleBn: "লিমোরিয়ার নিজস্ব কৃত্রিম উপগ্রহ 'লিমোরিয়া-১' মহাকাশে সফলভাবে উৎক্ষেপণ",
      date: todayStr,
      summary: "From Fairview Space Center, in the presence of President Mamun Hossen Limon, Limoria's quantum climate monitoring satellite has officially entered geostationary orbit.",
      summaryBn: "ফেয়ারভিউ স্পেস সেন্টার থেকে রাষ্ট্রপতি মামুন হোসেন লিমনের উপস্থিতিতে লিমোরিয়ার পরিবেশ পর্যবেক্ষণ ও কোয়ান্টাম যোগাযোগ উপগ্রহ 'লিমোরিয়া-১' মহাকাশে সফলভাবে উৎক্ষেপিত হয়েছে।",
      category: "Space & Tech",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
    };

    storedList = [breakingNewsNow, ...LATEST_NEWS];
    saveNewsToStorage(storedList);
    localStorage.setItem(LAST_DAY_KEY, new Date().toISOString().slice(0, 10));
    return storedList;
  }

  // Automatic daily check: Has calendar day rolled over since last check?
  const todayKey = new Date().toISOString().slice(0, 10);
  const lastRecordedDay = localStorage.getItem(LAST_DAY_KEY);

  if (lastRecordedDay !== todayKey) {
    // A brand new day has arrived! Automatically craft and inject today's fictional news!
    const todayArticle = generateFictionalNewsStory();
    storedList = [todayArticle, ...storedList];
    saveNewsToStorage(storedList);
    localStorage.setItem(LAST_DAY_KEY, todayKey);
  }

  return storedList;
}

export function saveNewsToStorage(list: NewsArticle[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn('Storage limit reached or error saving news:', err);
  }
}

/**
 * Procedurally generates a fresh fictional news story for Limoria
 */
export function generateFictionalNewsStory(customTitle?: string, customCategory?: string): NewsArticle {
  const randIndex = Math.floor(Math.random() * FICTIONAL_NEWS_POOL.length);
  const template = FICTIONAL_NEWS_POOL[randIndex];
  const uniqueId = `news-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const todayDate = formatNewsDate(new Date());

  if (customTitle) {
    return {
      id: uniqueId,
      title: customTitle,
      titleBn: customTitle,
      date: todayDate,
      summary: `Official state announcement released by the Sovereign Government Information Bureau of Limoria on ${todayDate}.`,
      summaryBn: `লিমোরিয়া সরকারের তথ্য ও সম্প্রচার মন্ত্রণালয় থেকে ${formatNewsDateBn()} তারিখে প্রকাশিত বিশেষ রাষ্ট্রীয় সংবাদ বুলেটিন।`,
      category: customCategory || "Special Gazette",
      readTime: "2 min read",
      image: template.image
    };
  }

  return {
    id: uniqueId,
    title: template.title,
    titleBn: template.titleBn,
    date: todayDate,
    summary: template.summary,
    summaryBn: template.summaryBn,
    category: template.category,
    readTime: template.readTime,
    image: template.image
  };
}
