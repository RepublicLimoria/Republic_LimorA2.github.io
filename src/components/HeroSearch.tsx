import { useState } from 'react';
import { Search, FileText, CreditCard, Clock, AlertTriangle, CalendarCheck, ArrowRight } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface HeroSearchProps {
  currentLang: LanguageCode;
  onSearch: (query: string) => void;
  onSelectAction: (actionKey: string) => void;
}

export function HeroSearch({ currentLang, onSearch, onSelectAction }: HeroSearchProps) {
  const [query, setQuery] = useState('');
  const t = translations[currentLang] || translations.en;

  const suggestions = [
    { label: 'Building Permit Application', action: 'apply-permit' },
    { label: 'Pay Real Property Tax', action: 'pay-taxes' },
    { label: 'Track Submitted Permit Status', action: 'tracker' },
    { label: 'Report Street Pothole or Light (311)', action: '311' },
    { label: 'Schedule County Clerk Appointment', action: 'directory' },
    { label: 'City Council Agendas & Ordinances', action: 'council' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleSuggestionClick = (item: { label: string; action: string }) => {
    setQuery(item.label);
    onSelectAction(item.action);
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-10 pb-14 border-b border-slate-700/80">
      {/* Subtle civic watermark pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* State/Municipal Authority Subtitle */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/80 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Official Public Services & Records Portal</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading max-w-3xl mx-auto leading-tight">
          {t.heroHeading}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.heroSubheading}
        </p>

        {/* Civic Unified Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-28 py-3.5 bg-white text-slate-900 rounded-lg text-sm sm:text-base shadow-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-blue-700 hover:bg-blue-600 text-white rounded-md text-xs sm:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Popular Search Prompts */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
            <span className="text-slate-400">Common searches:</span>
            {suggestions.slice(0, 4).map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(s)}
                className="hover:text-amber-300 underline decoration-dotted cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Fast-Track Action Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-left">
          {/* 1. Apply for Permit */}
          <button
            onClick={() => onSelectAction('apply-permit')}
            className="p-4 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-amber-400/60 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-md bg-blue-900/60 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-white group-hover:text-amber-300 flex items-center justify-between">
              <span>{t.applyPermit}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Building, commercial, solar, food vendor & events.
            </p>
          </button>

          {/* 2. Pay Taxes */}
          <button
            onClick={() => onSelectAction('pay-taxes')}
            className="p-4 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-amber-400/60 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-md bg-emerald-900/60 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-white group-hover:text-amber-300 flex items-center justify-between">
              <span>{t.payTaxes}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Property tax installments, citations & utility bills.
            </p>
          </button>

          {/* 3. Track Status */}
          <button
            onClick={() => onSelectAction('tracker')}
            className="p-4 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-amber-400/60 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-md bg-amber-900/60 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-white group-hover:text-amber-300 flex items-center justify-between">
              <span>{t.trackPermit}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Look up tracking IDs, reviews & scheduled inspections.
            </p>
          </button>

          {/* 4. Report 311 */}
          <button
            onClick={() => onSelectAction('311')}
            className="p-4 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-amber-400/60 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-md bg-red-900/60 border border-red-400/30 flex items-center justify-center text-red-300 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-white group-hover:text-amber-300 flex items-center justify-between">
              <span>Report 311 Issue</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Potholes, broken signals, graffiti & illegal dumping.
            </p>
          </button>

          {/* 5. Book Appointment */}
          <button
            onClick={() => onSelectAction('directory')}
            className="p-4 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-amber-400/60 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md sm:col-span-2 lg:col-span-1"
          >
            <div className="w-9 h-9 rounded-md bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-white group-hover:text-amber-300 flex items-center justify-between">
              <span>{t.scheduleAppointment}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Counter appointments with building & clerk officials.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
