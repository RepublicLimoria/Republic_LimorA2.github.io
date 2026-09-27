import React from 'react';
import { Search, Sun, Moon, Globe, Github } from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface HeaderNavProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenSection: (section: string) => void;
  onOpenGitHubModal: () => void;
  onSearch: (query: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onToggleTheme,
  onOpenSection,
  onOpenGitHubModal,
  onSearch,
}) => {
  const [searchInput, setSearchInput] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#061e15]/95 backdrop-blur-md border-b border-[#e2b43b]/25 shadow-xl text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Coat of Arms */}
          <div 
            onClick={() => onOpenSection('home')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            {/* National Coat of Arms Crest */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#12422f] to-[#072418] border-2 border-[#e2b43b] flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#ffd700] transition-colors">
              <svg viewBox="0 0 100 100" className="w-9 h-9 fill-[#e2b43b]">
                {/* Crown & Eagle Silhouette */}
                <path d="M50 12 L55 22 L66 18 L62 28 L74 30 L66 38 L72 48 L60 48 L56 58 L50 52 L44 58 L40 48 L28 48 L34 38 L26 30 L38 28 L34 18 L45 22 Z" />
                {/* Shield Body */}
                <path d="M30 46 Q50 48 70 46 Q68 76 50 88 Q32 76 30 46 Z" fill="#0c3825" stroke="#e2b43b" strokeWidth="3" />
                {/* Star in Center */}
                <polygon points="50,56 53,64 61,64 55,69 57,77 50,72 43,77 45,69 39,64 47,64" fill="#ffd700" />
                {/* Laurel Branches */}
                <path d="M22 65 Q25 78 36 84" stroke="#e2b43b" strokeWidth="2.5" fill="none" />
                <path d="M78 65 Q75 78 64 84" stroke="#e2b43b" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#f5c518] leading-tight flex items-center gap-1.5">
                LIMORIA
              </div>
              <p className="text-[11px] sm:text-xs text-emerald-200/90 font-medium tracking-wide">
                {currentLang === 'bn' ? 'লিমোরিয়া সরকার' : 'Government of Limoria'}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-emerald-100">
            <button 
              onClick={() => onOpenSection('home')} 
              className="text-[#f5c518] hover:text-[#ffd700] transition-colors border-b-2 border-[#f5c518] pb-1 font-semibold"
            >
              {currentLang === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button 
              onClick={() => onOpenSection('about')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'পরিচিতি' : 'About'}
            </button>
            <button 
              onClick={() => onOpenSection('government')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'সরকার' : 'Government'}
            </button>
            <button 
              onClick={() => onOpenSection('services')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'সেবাসমূহ' : 'Services'}
            </button>
            <button 
              onClick={() => onOpenSection('regions')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'অঞ্চলসমূহ' : 'Regions'}
            </button>
            <button 
              onClick={() => onOpenSection('tourism')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'পর্যটন' : 'Tourism'}
            </button>
            <button 
              onClick={() => onOpenSection('media')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'মিডিয়া' : 'Media'}
            </button>
            <button 
              onClick={() => onOpenSection('news')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'সংবাদ' : 'News'}
            </button>
            <button 
              onClick={() => onOpenSection('contact')} 
              className="hover:text-[#f5c518] transition-colors pb-1"
            >
              {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </button>
          </nav>

          {/* Right Header Utilities: GitHub button, Language Pill, Theme, Search */}
          <div className="flex items-center gap-3">
            
            {/* GitHub Repo / Deployment Guide Button */}
            <button
              onClick={onOpenGitHubModal}
              title="GitHub Repository & Code Structure"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0c3122] hover:bg-[#134934] border border-[#e2b43b]/40 text-[#f5c518] transition-all shadow-sm cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Code</span>
            </button>

            {/* Language Switcher Pill (as shown in screenshot: English | বাংলা) */}
            <div className="flex items-center p-0.5 rounded-full bg-[#08281c] border border-[#e2b43b]/40 text-xs">
              <button
                onClick={() => onLanguageChange('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all font-medium ${
                  currentLang === 'en'
                    ? 'bg-[#f5c518] text-[#072418] font-bold shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                <Globe className="w-3 h-3" />
                English
              </button>
              <button
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 py-1 rounded-full transition-all font-medium ${
                  currentLang === 'bn'
                    ? 'bg-[#f5c518] text-[#072418] font-bold shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              title="Toggle Contrast / Daylight Theme"
              className="p-2 rounded-full bg-[#08281c] hover:bg-[#0e3b2a] text-[#f5c518] border border-[#e2b43b]/30 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
              <input
                type="text"
                placeholder={currentLang === 'bn' ? 'সন্ধান করুন...' : 'Search anything...'}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-44 lg:w-56 pl-3 pr-8 py-1.5 rounded-full text-xs bg-[#08281c] border border-[#164e37] text-white placeholder-emerald-400/60 focus:outline-none focus:border-[#f5c518] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-emerald-300 hover:text-[#f5c518]"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>
      </div>
    </header>
  );
};
