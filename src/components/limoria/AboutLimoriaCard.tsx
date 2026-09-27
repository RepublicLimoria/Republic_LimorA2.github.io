import React from 'react';
import { ArrowRight, MapPin, Building2, Users } from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface AboutLimoriaCardProps {
  currentLang: Language;
  onLearnMoreClick: () => void;
}

export const AboutLimoriaCard: React.FC<AboutLimoriaCardProps> = ({
  currentLang,
  onLearnMoreClick,
}) => {
  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-5 shadow-2xl flex flex-col justify-between h-full">
      <div>
        {/* Top scenic image */}
        <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#1b583f]">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80"
            alt="Limoria Landscape"
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d13] via-transparent to-transparent"></div>
          <span className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded bg-[#092b1d]/90 text-[11px] font-bold text-[#f5c518] border border-[#e2b43b]/40 backdrop-blur-sm">
            {currentLang === 'bn' ? 'সার্বভৌম প্রজাতন্ত্র' : 'Sovereign Republic'}
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-cinzel text-xl font-bold text-white mb-2 tracking-wide">
          {currentLang === 'bn' ? 'লিমোরিয়া পরিচিতি' : 'About Limoria'}
        </h3>

        {/* Narrative text from screenshot */}
        <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
          {currentLang === 'bn'
            ? 'লিমোরিয়া একটি সুন্দর এবং প্রগতিশীল রাষ্ট্র যার রয়েছে সমৃদ্ধ সংস্কৃতি, বৈচিত্র্যময় জনগোষ্ঠী এবং প্রচুর প্রাকৃতিক সম্পদ। আমাদের লক্ষ্য ভবিষ্যৎ প্রজন্মের জন্য একটি শান্তিপূর্ণ, উন্নত ও ঐক্যবদ্ধ লিমোরিয়া গড়ে তোলা।'
            : 'Limoria is a beautiful and progressive nation with a rich culture, diverse people and abundant natural resources. Our vision is a peaceful, developed and united Limoria for future generations.'}
        </p>

        {/* Learn More Button */}
        <button
          onClick={onLearnMoreClick}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#f5c518] hover:text-[#ffd700] hover:underline transition-all cursor-pointer mb-5"
        >
          <span>{currentLang === 'bn' ? 'আরও জানুন' : 'Learn More'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Metric Pills at bottom */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#144732] text-center">
        <div className="p-2 rounded-lg bg-[#072418] border border-[#164e37]">
          <MapPin className="w-3.5 h-3.5 mx-auto text-[#f5c518] mb-1" />
          <div className="text-[10px] text-emerald-300 uppercase tracking-wider">
            {currentLang === 'bn' ? 'অঞ্চল' : 'Regions'}
          </div>
          <div className="text-base font-extrabold text-white">8</div>
        </div>

        <div className="p-2 rounded-lg bg-[#072418] border border-[#164e37]">
          <Building2 className="w-3.5 h-3.5 mx-auto text-[#f5c518] mb-1" />
          <div className="text-[10px] text-emerald-300 uppercase tracking-wider">
            {currentLang === 'bn' ? 'শহর' : 'Cities'}
          </div>
          <div className="text-base font-extrabold text-white">32</div>
        </div>

        <div className="p-2 rounded-lg bg-[#072418] border border-[#164e37]">
          <Users className="w-3.5 h-3.5 mx-auto text-[#f5c518] mb-1" />
          <div className="text-[10px] text-emerald-300 uppercase tracking-wider">
            {currentLang === 'bn' ? 'জনসংখ্যা' : 'Population'}
          </div>
          <div className="text-base font-extrabold text-white">12.5M+</div>
        </div>
      </div>
    </div>
  );
};
