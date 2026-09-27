import React from 'react';
import { X, Calendar, Clock, Share2, Printer, Bookmark } from 'lucide-react';
import { Language, NewsArticle } from '../../types/limoria.ts';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <span className="px-2.5 py-1 rounded bg-[#12422f] text-[10px] font-bold uppercase tracking-wider text-[#f5c518] border border-[#e2b43b]/40">
            {article.category}
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="h-52 rounded-xl overflow-hidden border border-[#18533b] relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061f14] via-transparent to-transparent"></div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xs text-emerald-300/80 mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#f5c518]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#f5c518]" />
                {article.readTime}
              </span>
            </div>

            <h3 className="font-cinzel text-xl font-bold text-white leading-snug">
              {currentLang === 'bn' ? article.titleBn : article.title}
            </h3>
          </div>

          <div className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed space-y-3 pt-2 border-t border-[#144732]">
            <p className="font-semibold text-emerald-200">
              {currentLang === 'bn' ? (article.summaryBn || article.summary) : article.summary}
            </p>
            <p>
              {currentLang === 'bn' 
                ? 'তথ্য ও সম্প্রচার মন্ত্রণালয়ের প্রেস বিজ্ঞপ্তি অনুসারে, মহামান্য রাষ্ট্রপতি মামুন হোসেন লিমনের নির্দেশনায় এই উদ্যোগটি লিমোরিয়ার সার্বভৌম উন্নয়ন ও জনকল্যাণে নতুন দিগন্ত উন্মোচন করেছে।' 
                : "The Ministry of Information and State Broadcasting reported that this development marks a historic step forward in the Sovereign Republic of Limoria's strategic 2030 development agenda under the direction of President Mamun Hossen Limon."}
            </p>
            <p>
              {currentLang === 'bn'
                ? 'ফেয়ারভিউ পার্লামেন্টে ৮টি অঞ্চলের প্রতিনিধিরা এই মাইলফলককে স্বাগত জানিয়েছেন। রাষ্ট্রীয় আর্কাইভসে এই ঐতিহাসিক দলিলের ডিজিটাল কপি স্থায়ীভাবে সংরক্ষণ করা হয়েছে।'
                : 'Citizen delegates and regional governors expressed unanimous support during the national assembly convened at the Fairview National Parliament. Digital copies of the state memorandum have been filed with the national gazette archive.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a2e1f] border-t border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if ('speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                  const textToSpeak = currentLang === 'bn'
                    ? (article.titleBn || article.title) + '. ' + (article.summaryBn || article.summary)
                    : article.title + '. ' + article.summary;
                  const utterance = new SpeechSynthesisUtterance(textToSpeak);
                  utterance.lang = currentLang === 'bn' ? 'bn-BD' : 'en-US';
                  window.speechSynthesis.speak(utterance);
                }
              }}
              className="p-2 rounded-lg bg-[#072418] hover:bg-[#11432f] text-emerald-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
              title="Listen to News"
            >
              <span>🔊</span>
              <span className="hidden sm:inline">{currentLang === 'bn' ? 'শুনুন' : 'Listen'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-[#072418] hover:bg-[#11432f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
              title="Print Article"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(`${article.title}\n${article.summary}\nhttps://limoria.gov`);
                  alert(currentLang === 'bn' ? 'সংবাদের লিঙ্ক কপি করা হয়েছে!' : 'News link copied to clipboard!');
                }
              }}
              className="p-2 rounded-lg bg-[#072418] hover:bg-[#11432f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] font-bold text-xs hover:scale-105 transition-transform cursor-pointer"
          >
            {currentLang === 'bn' ? 'বন্ধ করুন' : 'Close Article'}
          </button>
        </div>

      </div>
    </div>
  );
};
