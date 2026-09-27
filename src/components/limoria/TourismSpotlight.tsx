import React from 'react';
import { Palmtree, ArrowRight } from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface TourismSpotlightProps {
  currentLang: Language;
  onExploreTourism: () => void;
}

export const TourismSpotlight: React.FC<TourismSpotlightProps> = ({
  currentLang,
  onExploreTourism,
}) => {
  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#144732]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
            <Palmtree className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'bn' ? 'পর্যটন' : 'Tourism'}
            </h3>
            <p className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'প্রাকৃতিক সৌন্দর্য আবিষ্কার করুন' : 'Discover natural beauty'}
            </p>
          </div>
        </div>
      </div>

      {/* Picture card with Explore button overlay */}
      <div className="relative h-28 rounded-xl overflow-hidden border border-[#1a573d] my-1">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          alt="Tourism Limoria"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Explore Button */}
        <button
          onClick={onExploreTourism}
          className="absolute bottom-2.5 left-2.5 px-3 py-1.5 rounded-lg bg-[#0c3926]/95 hover:bg-[#135338] border border-[#e2b43b] text-[#f5c518] text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm cursor-pointer transition-all hover:scale-105"
        >
          <span>{currentLang === 'bn' ? 'অন্বেষণ করুন' : 'Explore'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="pt-2 flex items-center justify-between text-[10px] text-emerald-300/80 border-t border-[#144732]">
        <span>{currentLang === 'bn' ? 'পরিবেশবান্ধব ইকোট্যুরিজম' : 'Zero-Carbon Eco Lodges'}</span>
        <span className="text-[#f5c518] font-bold">48h E-Visa</span>
      </div>
    </div>
  );
};
