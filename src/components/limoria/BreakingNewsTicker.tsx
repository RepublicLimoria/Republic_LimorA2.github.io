import React, { useState, useEffect } from 'react';
import { Radio, ChevronRight, Sparkles, PlusCircle, Volume2, Calendar } from 'lucide-react';
import { Language, NewsArticle } from '../../types/limoria.ts';

interface BreakingNewsTickerProps {
  currentLang: Language;
  newsList: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
  onGenerateNextStory: () => void;
  onOpenPublishModal: () => void;
}

export const BreakingNewsTicker: React.FC<BreakingNewsTickerProps> = ({
  currentLang,
  newsList,
  onArticleClick,
  onGenerateNextStory,
  onOpenPublishModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through top 5 news articles every 7 seconds
  useEffect(() => {
    if (newsList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(newsList.length, 6));
    }, 7000);
    return () => clearInterval(interval);
  }, [newsList.length]);

  if (!newsList || newsList.length === 0) return null;

  const currentArticle = newsList[currentIndex] || newsList[0];

  return (
    <div className="bg-gradient-to-r from-[#03150d] via-[#09291b] to-[#03150d] border-b border-[#e2b43b]/40 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Red/Gold Pulsing Badge + Current Story Headline */}
        <div className="flex items-center gap-3 flex-1 min-w-[280px]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/80 text-red-400 font-bold text-[10px] tracking-wider uppercase flex-shrink-0 animate-pulse">
            <Radio className="w-3 h-3 text-red-400" />
            <span>{currentLang === 'bn' ? 'তাজা খবর' : 'BREAKING'}</span>
          </div>

          <div 
            onClick={() => onArticleClick(currentArticle)}
            className="flex-1 cursor-pointer group flex items-center gap-2 overflow-hidden"
          >
            <span className="text-xs font-semibold text-emerald-100 group-hover:text-[#ffd700] transition-colors truncate">
              {currentLang === 'bn' ? (currentArticle.titleBn || currentArticle.title) : currentArticle.title}
            </span>
            <span className="text-[10px] text-emerald-400/80 flex-shrink-0 hidden md:inline">
              ({currentArticle.date})
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#f5c518] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </div>
        </div>

        {/* Right: Quick Action Buttons for user */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onGenerateNextStory}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d3b27] hover:bg-[#145337] border border-[#ffd700]/70 text-[#ffd700] text-[11px] font-bold transition-all hover:scale-105 cursor-pointer shadow"
            title="Generate a brand new fictional story immediately"
          >
            <Sparkles className="w-3 h-3 text-[#ffd700] animate-spin-slow" />
            <span>{currentLang === 'bn' ? 'নতুন নিউজ জেনারেট' : 'Generate News'}</span>
          </button>

          <button
            onClick={onOpenPublishModal}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#072418] hover:bg-[#0d3b27] border border-emerald-500/50 text-emerald-200 text-[11px] font-medium transition-colors cursor-pointer"
            title="Write your own custom fictional news"
          >
            <PlusCircle className="w-3 h-3" />
            <span className="hidden sm:inline">{currentLang === 'bn' ? 'সংবাদ পাঠান' : 'Post News'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
