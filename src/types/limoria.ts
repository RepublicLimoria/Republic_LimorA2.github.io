export type Language = 'en' | 'bn';

export interface RegionInfo {
  id: number;
  name: string;
  nameBn: string;
  color: string;
  badgeBg: string;
  capital: string;
  population: string;
  area: string;
  governor: string;
  climate: string;
  economy: string;
  description: string;
  descriptionBn: string;
  landmarks: string[];
  x: number; // percentage on map
  y: number; // percentage on map
}

export interface ServiceItem {
  id: string;
  title: string;
  titleBn: string;
  iconName: string;
  department: string;
  processingTime: string;
  fee: string;
  description: string;
  descriptionBn: string;
  requirements: string[];
  actionLabel: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  titleBn: string;
  date: string;
  summary: string;
  summaryBn: string;
  category: string;
  readTime: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  titleBn: string;
  location: string;
  time: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}
