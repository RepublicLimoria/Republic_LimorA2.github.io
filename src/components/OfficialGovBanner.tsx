import { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface OfficialGovBannerProps {
  currentLang: LanguageCode;
}

export function OfficialGovBanner({ currentLang }: OfficialGovBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[currentLang] || translations.en;

  return (
    <div className="official-banner bg-slate-900 text-slate-200 border-b border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Official Flag / Seal Icon */}
          <div className="w-4 h-3 bg-red-700 flex flex-col justify-between overflow-hidden rounded-xs border border-white/20" aria-hidden="true">
            <div className="h-0.5 bg-white"></div>
            <div className="h-0.5 bg-blue-900"></div>
            <div className="h-0.5 bg-white"></div>
          </div>
          <span className="font-medium text-slate-100">
            {t.officialBanner}
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white underline decoration-dotted underline-offset-2 ml-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400"
            aria-expanded={isOpen}
            aria-controls="gov-banner-details"
          >
            <span>{t.officialBannerDetails}</span>
            {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-slate-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>256-Bit SSL Encrypted Portal</span>
          </span>
          <span>·</span>
          <span>Fairview County, State Government</span>
        </div>
      </div>

      {isOpen && (
        <div id="gov-banner-details" className="bg-slate-950 text-slate-300 border-t border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-100 font-semibold mb-0.5">Official domains use .gov</strong>
                <p className="text-slate-400 leading-relaxed">
                  {t.howYouKnow} Before sharing sensitive personal information, confirm you are on an authorized government domain.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-100 font-semibold mb-0.5">Secure websites use HTTPS</strong>
                <p className="text-slate-400 leading-relaxed">
                  {t.secureGovNotice} A lock icon or <span className="font-mono text-emerald-400 font-medium">https://</span> means you are safely connected to the official government server.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
