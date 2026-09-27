import React from 'react';
import { 
  BookUser, 
  CreditCard, 
  FileCheck, 
  Briefcase, 
  Coins, 
  GraduationCap, 
  HeartPulse, 
  Landmark, 
  ChevronRight, 
  Layers 
} from 'lucide-react';
import { Language, ServiceItem } from '../../types/limoria.ts';
import { LIMORIA_SERVICES } from '../../data/limoriaData.ts';

interface GovernmentServicesGridProps {
  currentLang: Language;
  onServiceSelect: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export const GovernmentServicesGrid: React.FC<GovernmentServicesGridProps> = ({
  currentLang,
  onServiceSelect,
  onViewAllServices,
}) => {
  // Mapping of icon string to Lucide component
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'BookUser':
        return <BookUser className="w-5 h-5 text-[#f5c518]" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#f5c518]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#f5c518]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#f5c518]" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-[#f5c518]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#f5c518]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#f5c518]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#f5c518]" />;
      default:
        return <Layers className="w-5 h-5 text-[#f5c518]" />;
    }
  };

  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-5 shadow-2xl flex flex-col justify-between h-full">
      
      {/* Header matching screenshot */}
      <div className="flex items-center justify-between pb-3 border-b border-[#144732] mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-cinzel text-base font-bold text-white leading-tight">
              {currentLang === 'bn' ? 'সরকারি সেবা' : 'Government Services'}
            </h3>
            <p className="text-[11px] text-emerald-300/80">
              {currentLang === 'bn' ? 'জনপ্রিয় নাগরিক সেবা' : 'Popular Services'}
            </p>
          </div>
        </div>

        <button
          onClick={onViewAllServices}
          className="text-xs font-semibold text-[#f5c518] hover:text-[#ffd700] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>{currentLang === 'bn' ? 'সব দেখুন' : 'View All'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 8 Popular Services Grid (matches the 4x2 / 2x4 layout from screenshot) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
        {LIMORIA_SERVICES.map((srv) => (
          <div
            key={srv.id}
            onClick={() => onServiceSelect(srv)}
            className="flex flex-col justify-between p-3.5 rounded-xl bg-gradient-to-b from-[#0a2e1e] to-[#062015] border border-[#174e37] hover:border-[#f5c518] hover:bg-[#0e3b27] transition-all cursor-pointer group shadow-md hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#0e3b27] border border-[#21674a] group-hover:border-[#ffd700] flex items-center justify-center group-hover:scale-105 transition-transform">
                {getServiceIcon(srv.iconName)}
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400/60 group-hover:text-[#f5c518] group-hover:translate-x-0.5 transition-all" />
            </div>

            <div>
              <h4 className="text-xs font-bold text-white group-hover:text-[#f5c518] transition-colors line-clamp-1">
                {currentLang === 'bn' ? srv.titleBn : srv.title}
              </h4>
              <p className="text-[10px] text-emerald-300/70 line-clamp-1 mt-0.5">
                {srv.processingTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Service Assurance Badge */}
      <div className="mt-4 pt-3 border-t border-[#144732] flex items-center justify-between text-[11px] text-emerald-300/80">
        <span>{currentLang === 'bn' ? '১০০% ডিজিটাল ও নিরাপদ ট্রানজেকশন' : '100% Digital & Encrypted Citizen Portal'}</span>
        <span className="font-mono text-[#f5c518] font-bold">256-BIT SSL</span>
      </div>

    </div>
  );
};
