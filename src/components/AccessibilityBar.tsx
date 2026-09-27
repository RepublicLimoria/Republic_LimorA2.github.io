import { Globe, Eye, Phone, Type } from 'lucide-react';
import { LanguageCode } from '../types';

interface AccessibilityBarProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  fontScale: 'normal' | 'lg' | 'xl';
  onFontScaleChange: (scale: 'normal' | 'lg' | 'xl') => void;
  highContrast: boolean;
  onToggleHighContrast: () => void;
}

export function AccessibilityBar({
  currentLang,
  onLanguageChange,
  fontScale,
  onFontScaleChange,
  highContrast,
  onToggleHighContrast,
}: AccessibilityBarProps) {
  const languages: { code: LanguageCode; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文 (繁體)' },
    { code: 'fr', label: 'Français' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  return (
    <div className="accessibility-bar bg-white border-b border-slate-200 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-700">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Quick Emergency Hotlines */}
        <div className="flex items-center gap-3 font-medium">
          <span className="flex items-center gap-1.5 text-red-700">
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency: <strong className="font-bold underline">911</strong></span>
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-700">
            City Services & Non-Emergency: <strong className="font-semibold text-slate-900">311</strong>
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline text-slate-600">
            Suicide & Crisis Lifeline: <strong className="font-semibold text-slate-900">988</strong>
          </span>
        </div>

        {/* Accessibility Controls & Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Text Size Scale */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded border border-slate-300">
            <span className="px-1 text-[11px] text-slate-500 font-medium flex items-center gap-0.5">
              <Type className="w-3 h-3" />
              <span className="sr-only">Text size</span>
            </span>
            <button
              onClick={() => onFontScaleChange('normal')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                fontScale === 'normal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Default text size"
            >
              A
            </button>
            <button
              onClick={() => onFontScaleChange('lg')}
              className={`px-1.5 py-0.5 rounded text-[12px] font-semibold cursor-pointer ${
                fontScale === 'lg' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Large text size"
            >
              A+
            </button>
            <button
              onClick={() => onFontScaleChange('xl')}
              className={`px-1.5 py-0.5 rounded text-[13px] font-bold cursor-pointer ${
                fontScale === 'xl' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Extra large text size"
            >
              A++
            </button>
          </div>

          {/* High Contrast Mode */}
          <button
            onClick={onToggleHighContrast}
            className={`flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-medium cursor-pointer transition-colors ${
              highContrast
                ? 'bg-amber-400 text-slate-950 border-amber-500 font-bold'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
            title="Toggle high contrast display mode"
            aria-pressed={highContrast}
          >
            <Eye className="w-3 h-3" />
            <span>Contrast</span>
          </button>

          {/* Multilingual Selector */}
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
              className="bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-800 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Select site language"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
