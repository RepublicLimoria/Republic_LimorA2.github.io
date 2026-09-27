import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `
You are the official Limoria AI Citizen Assistant for the Government of Limoria (Gov. of Limoria).
Motto: "Peace, Progress, Prosperity".
President: President Mamun Hossen Limon (মহামান্য রাষ্ট্রপতি মামুন হোসেন লিমন).
Capital: Fairview Metro.
Regions (8): 
1. Aurora (Northern high peaks, astronomy, clean energy)
2. Bayview (Maritime commerce, shipping, fintech)
3. Crestfall (Canyons, waterfalls, eco-forestry)
4. Emerald (Central fertile heartland, green agriculture)
5. Fairview (National capital territory, parliament, supreme court)
6. Highland (Alpine peaks, winter sports, lithium/minerals)
7. Lakeview (Serene lake archipelago, universities, arts)
8. Sunridge (Southern beaches, solar farms, tourism)

32 Cities, 12.5M population, 95% literacy rate.
Key services: Passport & Visa, National ID, Birth Certificate, Business License, Tax Services (0% up to 40,000 LM, 12% next, 22% top), Education, Healthcare (Universal NHS), Land Records.
Respond politely, concisely, and authoritatively as an official state digital assistant.
If the user speaks or asks in Bengali (বাংলা), respond in natural, graceful Bengali. If in English, respond in English.
Keep answers helpful, encouraging civic engagement, and providing direct government procedures.
`;

let aiClient: GoogleGenAI | null = null;
const apiKey = typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : '';

if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Gemini client init deferred:', err);
  }
}

export async function askLimoriaAssistant(userMessage: string, lang: 'en' | 'bn' = 'en'): Promise<string> {
  const query = userMessage.trim().toLowerCase();

  // Try real Gemini API first if configured
  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      if (response.text) {
        return response.text;
      }
    } catch (err) {
      console.warn('Gemini query error, falling back to local sovereign knowledge base:', err);
    }
  }

  // High quality offline fallback with rich national data
  if (query.includes('passport') || query.includes('পাসপোর্ট')) {
    return lang === 'bn' 
      ? 'লিমোরিয়া বায়োমেট্রিক ই-পাসপোর্টের জন্য অনলাইন সার্ভিসেস ট্যাবে "Passport & Visa" নির্বাচন করুন। প্রয়োজনীয় কাগজপত্র: জাতীয় পরিচয়পত্র, জন্ম সনদ এবং ডিজিটাল বায়োমেট্রিক ছবি। প্রক্রিয়াকরণ সময় ৫-৭ কার্যদিবস।'
      : 'To obtain a Limoria biometric e-Passport, head to the "Passport & Visa" service card above. You need your National ID, certified Birth Certificate, and biometric photo. Standard issuance takes 5-7 business days, or 24 hours via Express Track.';
  }

  if (query.includes('tax') || query.includes('কর') || query.includes('income')) {
    return lang === 'bn'
      ? 'লিমোরিয়ায় প্রথম ৪০,০০০ এলএম পর্যন্ত সম্পূর্ণ করমুক্ত (০%)। ৪০,০০১ থেকে ১,০০,০০০ পর্যন্ত ১২% এবং এর অধিক আয়ে সর্বোচ্চ ২২% কর নির্ধারিত।'
      : 'Limoria provides a progressive tax structure: Income up to 40,000 LM is 0% taxed. Earnings between 40,001 and 100,000 LM are taxed at 12%, and above 100,000 LM is capped at 22%. You can file online under "Tax Services".';
  }

  if (query.includes('region 4') || query.includes('emerald') || query.includes('৪ নম্বর') || query.includes('এমেরাল্ড')) {
    return lang === 'bn'
      ? '৪ নম্বর অঞ্চল হলো এমেরাল্ড প্রদেশ (Emerald Region)। এটি লিমোরিয়ার কেন্দ্রস্থলে অবস্থিত এবং দেশের প্রধান কৃষি ও বায়ো-টেক উদ্ভাবনের কেন্দ্রবিন্দু। প্রাদেশিক রাজধানী: Verdant Vale।'
      : 'Region 4 is the Emerald Region, located in the central fertile lowlands of Limoria. It is our nation’s agricultural heartland and eco-innovation corridor. Capital: Verdant Vale. Governor: Hon. Maya Patel.';
  }

  if (query.includes('business') || query.includes('ব্যবসা') || query.includes('company')) {
    return lang === 'bn'
      ? 'লিমোরিয়া বাণিজ্য মন্ত্রণালয়ের ওয়ান-স্টপ সার্ভিসের মাধ্যমে মাত্র ২৪ ঘণ্টার মধ্যে কোম্পানি নিবন্ধন এবং ডিজিটাল ট্রেড লাইসেন্স পাওয়া যায়।'
      : 'You can launch and register a corporation in Limoria within 24 hours using the "Business License" portal. Documents needed: Articles of Incorporation, registered address, and founder identification.';
  }

  if (query.includes('president') || query.includes('limon') || query.includes('mamun') || query.includes('রাষ্ট্রপতি') || query.includes('লিমন') || query.includes('মামুন')) {
    return lang === 'bn'
      ? 'মহামান্য রাষ্ট্রপতি মামুন হোসেন লিমন সার্বভৌম লিমোরিয়া প্রজাতন্ত্রের রাষ্ট্রপ্রধান। তাঁর মূল দর্শন: "শান্তি, প্রগতি, সমৃদ্ধি" এবং লিমোরিয়াকে ১০০% নবায়নযোগ্য ও প্রযুক্তিনির্ভর রাষ্ট্রে রূপান্তর করা।'
      : 'President Mamun Hossen Limon serves as the President of the Sovereign Republic of Limoria under the national motto "Peace, Progress, Prosperity". His administration spearheaded universal healthcare, national 100% renewable power, and high-speed rail connectivity.';
  }

  if (query.includes('tourist') || query.includes('tourism') || query.includes('visit') || query.includes('ভ্রমণ') || query.includes('পর্যটন')) {
    return lang === 'bn'
      ? 'লিমোরিয়ায় ভ্রমণের জন্য অরোরা পর্বতমালার মেরুজ্যোতি, সানরিজের সোনালী সৈকত এবং ক্রেস্টফলের রাজকীয় জলপ্রপাত বিশ্ববিখ্যাত। পর্যটক ই-ভিসা ৪৮ ঘণ্টায় পাওয়া যায়।'
      : 'Welcome to Limoria! Top destinations include the northern Aurora night skies, Sunridge golden dunes, Bayview marina, and Crestfall canyon waterfalls. Tourist e-visas can be granted within 48 hours online.';
  }

  if (query.includes('news') || query.includes('খবর')) {
    return lang === 'bn'
      ? 'সর্বশেষ খবর: লিমোরিয়ার স্বাধীনতা দিবসের সুবর্ণজয়ন্তী উদযাপিত হয়েছে, এবং নতুন হাইপার-রেল অবকাঠামো প্রকল্পের ভিত্তিপ্রস্তর স্থাপন করেছেন রাষ্ট্রপতি লিমন।'
      : 'Latest national news: Limoria celebrated Independence Day with nationwide joy; President Limon inaugurated the high-speed Hyper-Rail project connecting 32 cities.';
  }

  return lang === 'bn'
    ? 'লিমোরিয়া সরকারের ডিজিটাল সহকারী হিসেবে আমি আপনাকে পাসপোর্ট, পরিচয়পত্র, কর, পর্যটন, ৮টি অঞ্চল ও নাগরিক সেবা সংক্রান্ত সকল তথ্য দিয়ে সাহায্য করতে প্রস্তুত। আপনার প্রশ্নটি লিখুন।'
    : 'As the official Limoria AI Citizen Assistant, I am here to assist you with municipal services, passport status, tax laws, regional statistics, and national programs. How may I serve you today?';
}
