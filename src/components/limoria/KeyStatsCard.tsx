import React from 'react';
import { Users, Layers, Building2, GraduationCap, BarChart3 } from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface KeyStatsCardProps {
  currentLang: Language;
}

export const KeyStatsCard: React.FC<KeyStatsCardProps> = ({ currentLang }) => {
  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 shadow-xl flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#144732]">
        <div className="w-7 h-7 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
          <BarChart3 className="w-3.5 h-3.5" />
        </div>
        <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
          {currentLang === 'bn' ? 'প্রধান পরিসংখ্যান' : 'Key Statistics'}
        </h3>
      </div>

      {/* 4 Metrics in 2x2 grid */}
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="p-2 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] text-[#f5c518] flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">12.5M</div>
            <div className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'জনসংখ্যা' : 'Population'}
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] text-[#f5c518] flex items-center justify-center flex-shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">8</div>
            <div className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'অঞ্চল' : 'Regions'}
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] text-[#f5c518] flex items-center justify-center flex-shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">32</div>
            <div className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'শহর' : 'Cities'}
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] text-[#f5c518] flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">95%</div>
            <div className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'সাক্ষরতার হার' : 'Literacy Rate'}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between text-[10px] text-emerald-300/80 border-t border-[#144732]">
        <span>{currentLang === 'bn' ? 'সর্বশেষ আদমশুমারি ২০২৫' : 'National Census 2025'}</span>
        <span className="text-[#f5c518]">GDP +4.8%</span>
      </div>
    </div>
  );
};
