import React, { useState } from 'react';
import { Play, ArrowRight, Search, MapPin, Building2, Users, ChevronRight } from 'lucide-react';
import { Language, NewsArticle } from '../../types/limoria.ts';
import { LATEST_NEWS } from '../../data/limoriaData.ts';

interface HeroSectionProps {
  currentLang: Language;
  onExploreClick: () => void;
  onWatchVideoClick: () => void;
  onNewsClick: (article: NewsArticle) => void;
  onPresidentClick: () => void;
  onSearchSubmit: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExploreClick,
  onWatchVideoClick,
  onNewsClick,
  onPresidentClick,
  onSearchSubmit,
}) => {
  const [heroSearch, setHeroSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      onSearchSubmit(heroSearch.trim());
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#03150d] via-[#062417] to-[#041a11] text-white pt-6 pb-12 border-b border-[#e2b43b]/20">
      
      {/* Background ambient lighting and mountain landscape silhouette */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Layout: Left President & Stats | Center Welcome & Search | Right Video & Latest News */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Motto, Stats Badges, President Limon Desk Showcase (approx 4.2 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            
            {/* National Motto */}
            <div className="mb-4">
              <p className="font-playfair italic text-2xl sm:text-3xl text-[#f5c518] tracking-wide leading-tight drop-shadow-md">
                Peace<br />
                Progress<br />
                Prosperity
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-col gap-2.5 mb-6 text-sm">
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#092b1d]/80 border border-[#164e37] backdrop-blur-sm shadow-md">
                <div className="p-2 rounded-lg bg-[#12422f] text-[#f5c518]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white text-base">8</span>{' '}
                  <span className="text-emerald-200/80 font-medium">
                    {currentLang === 'bn' ? 'অঞ্চল' : 'Regions'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#092b1d]/80 border border-[#164e37] backdrop-blur-sm shadow-md">
                <div className="p-2 rounded-lg bg-[#12422f] text-[#f5c518]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white text-base">32</span>{' '}
                  <span className="text-emerald-200/80 font-medium">
                    {currentLang === 'bn' ? 'শহর' : 'Cities'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#092b1d]/80 border border-[#164e37] backdrop-blur-sm shadow-md">
                <div className="p-2 rounded-lg bg-[#12422f] text-[#f5c518]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white text-base">12.5M+</span>{' '}
                  <span className="text-emerald-200/80 font-medium">
                    {currentLang === 'bn' ? 'জনসংখ্যা' : 'Population'}
                  </span>
                </div>
              </div>
            </div>

            {/* President Limon Executive Desk Portrait Card */}
            <div 
              onClick={onPresidentClick}
              className="relative rounded-2xl overflow-hidden border border-[#e2b43b]/40 bg-gradient-to-b from-[#0d3b28] to-[#062015] shadow-2xl cursor-pointer group hover:border-[#ffd700] transition-all transform hover:-translate-y-1"
            >
              {/* Presidential background with flag & mountains */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80" 
                  alt="President Limon"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Official Flag Overlay & Eagle Emblem */}
                <div className="absolute top-3 left-3 bg-[#0a2e1e]/90 border border-[#e2b43b]/60 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-[#f5c518] flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Head of State
                </div>

                {/* Dark gradient fade for the nameplate */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a11] via-[#041a11]/40 to-transparent"></div>

                {/* Golden Desk Nameplate */}
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <div className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-[#173d2a] via-[#102e20] to-[#173d2a] border-2 border-[#e2b43b] shadow-xl">
                    <p className="font-cinzel text-xs text-emerald-200 uppercase tracking-widest">
                      {currentLang === 'bn' ? 'রাষ্ট্রপতি' : 'PRESIDENT'}
                    </p>
                    <p className="font-cinzel text-base sm:text-lg font-black tracking-widest text-[#ffd700] leading-none drop-shadow">
                      LIMON
                    </p>
                  </div>
                </div>
              </div>

              {/* Click to inspect bio hint */}
              <div className="px-4 py-2 bg-[#09281a] border-t border-[#164e37] flex items-center justify-between text-xs text-emerald-300">
                <span>{currentLang === 'bn' ? 'জীবনবৃত্তান্ত ও কর্মপরিকল্পনা' : 'Biography & 2030 Vision'}</span>
                <ChevronRight className="w-4 h-4 text-[#f5c518] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Welcome to Limoria, Headline, Action Buttons, Search Bar (approx 4.8 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2">
            
            <div className="mb-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300/90">
                {currentLang === 'bn' ? 'স্বাগতম' : 'Welcome to'}
              </span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-5xl xl:text-6xl font-black tracking-wider text-white mb-2 leading-none">
              <span className="text-white">LIM</span>
              <span className="text-[#f5c518]">ORIA</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#fce082] mb-4 tracking-tight">
              {currentLang === 'bn' ? 'একত্রে এক উজ্জ্বলতর ভবিষ্যৎ' : 'A Brighter Future Together'}
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl">
              {currentLang === 'bn'
                ? 'লিমোরিয়া একটি সার্বভৌম, শান্তিপূর্ণ এবং প্রগতিশীল রাষ্ট্র যা ঐক্য, স্বাধীনতা এবং সকলের জন্য সমান সুযোগের ভিত্তিতে প্রতিষ্ঠিত।'
                : 'Limoria is a sovereign, peaceful and progressive nation built on unity, freedom and opportunity for all.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onExploreClick}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#145a3a] to-[#0f442b] hover:from-[#1b734b] hover:to-[#135737] text-[#ffd700] font-bold text-sm border border-[#e2b43b]/60 shadow-lg shadow-emerald-950/60 hover:shadow-[#f5c518]/20 transition-all cursor-pointer group"
              >
                <span>{currentLang === 'bn' ? 'দেশটি অন্বেষণ করুন' : 'Explore Our Country'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onWatchVideoClick}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#08281c] hover:bg-[#0e3b2a] text-white text-sm font-semibold border border-emerald-500/30 hover:border-[#f5c518] transition-all cursor-pointer shadow-md"
              >
                <div className="w-5 h-5 rounded-full bg-[#f5c518] text-[#072418] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{currentLang === 'bn' ? 'ভিডিও দেখুন' : 'Watch Video'}</span>
              </button>
            </div>

            {/* Big Rounded Search Bar (matches screenshot) */}
            <form onSubmit={handleSearch} className="relative w-full max-w-xl">
              <div className="relative flex items-center rounded-full bg-[#072519] border-2 border-[#18533b] hover:border-[#f5c518]/70 focus-within:border-[#f5c518] shadow-2xl transition-colors p-1.5">
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'লিমোরিয়া সম্পর্কে যেকোনো কিছু অনুসন্ধান করুন...'
                      : 'Search anything about Limoria...'
                  }
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  className="w-full bg-transparent pl-4 pr-12 text-sm text-white placeholder-emerald-400/60 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#175338] to-[#0c3523] border border-[#e2b43b]/50 text-[#ffd700] hover:scale-105 flex items-center justify-center transition-transform flex-shrink-0 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

          </div>

          {/* RIGHT COLUMN: Discover Limoria Video Card & Latest News (approx 3.2 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Discover Limoria Video Card */}
            <div 
              onClick={onWatchVideoClick}
              className="relative rounded-2xl overflow-hidden border border-[#1d6144] hover:border-[#e2b43b] transition-all cursor-pointer group shadow-xl bg-[#092c1e]"
            >
              <div className="h-36 sm:h-40 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Discover Limoria"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay & Duration */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0a2e1e]/80 border-2 border-[#f5c518] text-[#f5c518] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-emerald-200">
                  2:48
                </div>
              </div>

              <div className="p-3 bg-gradient-to-b from-[#0a2e1e] to-[#062015]">
                <h2 className="text-sm font-bold text-white group-hover:text-[#f5c518] transition-colors leading-tight">
                  {currentLang === 'bn' ? 'লিমোরিয়া আবিষ্কার করুন' : 'Discover Limoria'}
                </h2>
                <p className="text-xs text-emerald-200/80 mt-1 line-clamp-1">
                  {currentLang === 'bn' ? 'সৌন্দর্য, সংস্কৃতি ও সমৃদ্ধির দেশ' : 'A land of beauty, culture and opportunity'}
                </p>
              </div>
            </div>

            {/* Latest News Widget */}
            <div className="rounded-2xl border border-[#174e37] bg-[#072418]/95 p-3.5 shadow-xl">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#144732]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {currentLang === 'bn' ? 'সর্বশেষ সংবাদ' : 'Latest News'}
                </h2>
                <button
                  onClick={() => onExploreClick()}
                  className="text-[11px] text-[#f5c518] hover:underline flex items-center gap-0.5"
                >
                  <span>{currentLang === 'bn' ? 'সব দেখুন' : 'View All'}</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* News Items List */}
              <div className="space-y-3">
                {LATEST_NEWS.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onNewsClick(article)}
                    className="flex gap-2.5 items-start cursor-pointer group p-1.5 rounded-lg hover:bg-[#0c3624] transition-colors"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-[#1b583f]"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-white group-hover:text-[#f5c518] transition-colors line-clamp-1 leading-snug">
                        {currentLang === 'bn' ? article.titleBn : article.title}
                      </h3>
                      <p className="text-[10px] text-[#e2b43b]/90 font-medium">
                        {article.date}
                      </p>
                      <p className="text-[10px] text-emerald-300/70 line-clamp-1 mt-0.5">
                        {currentLang === 'bn' ? article.summaryBn : article.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
