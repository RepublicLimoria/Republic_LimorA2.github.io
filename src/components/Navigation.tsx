import { useState } from 'react';
import { Menu, X, Landmark, FileText, Search, CreditCard, Calendar, Users, AlertCircle } from 'lucide-react';
import { LanguageCode } from '../types';
import { translations } from '../data/translations';

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  currentLang: LanguageCode;
  onOpenQuickApply: () => void;
  onOpenReport311: () => void;
}

export function Navigation({
  currentTab,
  onTabChange,
  currentLang,
  onOpenQuickApply,
  onOpenReport311,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang] || translations.en;

  const navItems = [
    { id: 'services', label: t.services, icon: Landmark },
    { id: 'tracker', label: t.trackApplication, icon: Search },
    { id: 'taxes', label: t.payBills, icon: CreditCard },
    { id: 'council', label: t.council, icon: Calendar },
    { id: '311', label: t.report311, icon: AlertCircle },
    { id: 'directory', label: t.directory, icon: Users },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-md">
      {/* Upper Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Seal and Agency Title */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onTabChange('services')}
        >
          {/* Authentic Government Seal Graphic */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-slate-900 border border-amber-300/40 flex items-center justify-center text-amber-400">
              <Landmark className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                Official Digital Gateway
              </span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-mono px-1.5 py-0.2 rounded border border-amber-400/30">
                .GOV
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-heading leading-tight group-hover:text-amber-200 transition-colors">
              Fairview City & County
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              State Government of Columbia · Serving 285,000 Citizens
            </p>
          </div>
        </div>

        {/* Action Fast-Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={onOpenReport311}
            className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Report Issue (311)</span>
          </button>
          <button
            onClick={onOpenQuickApply}
            className="px-3.5 py-1.5 rounded text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>File Permit or License</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Ribbon */}
      <nav className="bg-slate-950 border-t border-slate-800 hidden lg:block" aria-label="Primary Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`py-3 px-3.5 text-xs font-medium border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-amber-400 text-white bg-slate-900/60 font-semibold'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded text-left text-sm font-medium ${
                  isActive ? 'bg-slate-800 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenReport311();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 bg-slate-800 text-slate-200 rounded text-xs font-semibold"
            >
              Report a Problem (311 Hotline)
            </button>
            <button
              onClick={() => {
                onOpenQuickApply();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 bg-blue-600 text-white rounded text-xs font-semibold"
            >
              Start New Permit Application
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
