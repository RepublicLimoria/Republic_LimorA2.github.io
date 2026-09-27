import React, { useState } from 'react';
import { X, Newspaper, Sparkles, Send, Calendar, Tag, Image as ImageIcon } from 'lucide-react';
import { Language, NewsArticle } from '../../types/limoria.ts';
import { generateFictionalNewsStory, formatNewsDate } from '../../services/limoriaNewsService.ts';

interface NewsPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onPublishNews: (article: NewsArticle) => void;
}

export const NewsPublishModal: React.FC<NewsPublishModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onPublishNews,
}) => {
  const [title, setTitle] = useState('');
  const [titleBn, setTitleBn] = useState('');
  const [category, setCategory] = useState('Space & Tech');
  const [summary, setSummary] = useState('');
  const [summaryBn, setSummaryBn] = useState('');
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80');

  if (!isOpen) return null;

  const handleAutoGenerate = () => {
    const generated = generateFictionalNewsStory();
    setTitle(generated.title);
    setTitleBn(generated.titleBn || generated.title);
    setCategory(generated.category);
    setSummary(generated.summary);
    setSummaryBn(generated.summaryBn || generated.summary);
    setImageUrl(generated.image);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !titleBn.trim()) return;

    const newArticle: NewsArticle = {
      id: `custom-news-${Date.now()}`,
      title: title.trim() || titleBn.trim(),
      titleBn: titleBn.trim() || title.trim(),
      category: category || 'National Gazette',
      date: formatNewsDate(new Date()),
      readTime: '3 min read',
      summary: summary.trim() || 'Official news dispatch published via Limoria State Press Bureau.',
      summaryBn: summaryBn.trim() || 'লিমোরিয়া সরকারের প্রেস ইনফরমেশন ব্যুরোর বিশেষ সংবাদ বুলেটিন।',
      image: imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80'
    };

    onPublishNews(newArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#12422f] text-[#f5c518] border border-[#e2b43b]/40">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#ffd700]">
                {currentLang === 'bn' ? 'কাল্পনিক খবর প্রকাশ করুন' : 'Publish Fictional News Gazette'}
              </h3>
              <p className="text-xs text-emerald-200">
                {currentLang === 'bn' ? 'লিমোরিয়া রাষ্ট্রীয় তথ্য ব্যুরো' : 'Limoria State Information Agency'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick auto-fill button */}
        <div className="px-4 py-2.5 bg-[#0a3322] border-b border-[#144732] flex items-center justify-between">
          <span className="text-xs text-emerald-200">
            {currentLang === 'bn' ? 'স্বয়ংক্রিয় কাল্পনিক আইডিয়া চান?' : 'Want an instant fictional idea?'}
          </span>
          <button
            type="button"
            onClick={handleAutoGenerate}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#134e35] hover:bg-[#186444] border border-[#ffd700]/60 text-[#ffd700] text-xs font-bold transition-transform hover:scale-105 cursor-pointer shadow"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'bn' ? 'অটো-জেনারেট করুন' : 'Auto-Generate Idea'}</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">
          
          <div>
            <label className="block text-emerald-300 font-semibold mb-1">
              {currentLang === 'bn' ? 'সংবাদের শিরোনাম (বাংলায়)' : 'News Headline (Bangla)'}
            </label>
            <input
              type="text"
              required
              placeholder="যেমন: লিমোরিয়ার নিজস্ব কৃত্রিম উপগ্রহ 'লিমোরিয়া-১' মহাকাশে সফল উৎক্ষেপণ..."
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
              className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white placeholder-emerald-400/40 focus:outline-none focus:border-[#ffd700]"
            />
          </div>

          <div>
            <label className="block text-emerald-300 font-semibold mb-1">
              Headline (English)
            </label>
            <input
              type="text"
              placeholder="e.g. Limoria Climate Satellite Launches Successfully..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white placeholder-emerald-400/40 focus:outline-none focus:border-[#ffd700]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-emerald-300 font-semibold mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#ffd700]"
              >
                <option value="Space & Tech">Space & Tech</option>
                <option value="Clean Energy">Clean Energy</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Environment">Environment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Culture & Tourism">Culture & Tourism</option>
                <option value="Diplomacy">Diplomacy</option>
                <option value="Economy">Economy</option>
              </select>
            </div>

            <div>
              <label className="block text-emerald-300 font-semibold mb-1">
                Image URL
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white placeholder-emerald-400/40 focus:outline-none focus:border-[#ffd700]"
              />
            </div>
          </div>

          <div>
            <label className="block text-emerald-300 font-semibold mb-1">
              {currentLang === 'bn' ? 'সংবাদের বিবরণ (বাংলা)' : 'News Summary (Bangla)'}
            </label>
            <textarea
              rows={3}
              placeholder="বিস্তারিত বিবরণ লিখুন..."
              value={summaryBn}
              onChange={(e) => setSummaryBn(e.target.value)}
              className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white placeholder-emerald-400/40 focus:outline-none focus:border-[#ffd700]"
            />
          </div>

          <div>
            <label className="block text-emerald-300 font-semibold mb-1">
              News Summary (English)
            </label>
            <textarea
              rows={2}
              placeholder="English summary..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full bg-[#092b1e] border border-[#1b5b3e] rounded-lg px-3 py-2 text-white placeholder-emerald-400/40 focus:outline-none focus:border-[#ffd700]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#175739] to-[#0e3b27] border border-[#e2b43b] text-[#ffd700] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] transition-transform"
            >
              <Send className="w-4 h-4" />
              <span>{currentLang === 'bn' ? 'সংবাদ প্রকাশ করুন' : 'Publish & Broadcast Gazette'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
