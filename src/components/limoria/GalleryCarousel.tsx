import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { Language, GalleryItem } from '../../types/limoria.ts';
import { GALLERY_ITEMS } from '../../data/limoriaData.ts';

interface GalleryCarouselProps {
  currentLang: Language;
  onOpenViewer: (item: GalleryItem) => void;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  currentLang,
  onOpenViewer,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((curr) => (curr > 0 ? curr - 1 : GALLERY_ITEMS.length - 1));
  };

  const next = () => {
    setStartIndex((curr) => (curr < GALLERY_ITEMS.length - 1 ? curr + 1 : 0));
  };

  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 shadow-xl flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#144732]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
            <ImageIcon className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}
            </h3>
            <p className="text-[10px] text-emerald-300/80">
              {currentLang === 'bn' ? 'আমাদের অপূর্ব স্থানসমূহ' : 'Explore our beautiful places'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="w-6 h-6 rounded-full bg-[#0a2e1f] hover:bg-[#124b33] border border-[#18553d] flex items-center justify-center text-emerald-200 hover:text-white"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="w-6 h-6 rounded-full bg-[#0a2e1f] hover:bg-[#124b33] border border-[#18553d] flex items-center justify-center text-emerald-200 hover:text-white"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Thumbnails row matching screenshot */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 my-1">
        {GALLERY_ITEMS.slice(0, 5).map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onOpenViewer(item)}
            className="relative h-20 rounded-lg overflow-hidden border border-[#19563c] hover:border-[#f5c518] transition-all cursor-pointer group shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded bg-black/70 text-[#f5c518]">
              <Maximize2 className="w-2.5 h-2.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center items-center gap-1.5 mt-2.5 pt-2 border-t border-[#144732]">
        {GALLERY_ITEMS.slice(0, 4).map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === 0 ? 'w-5 bg-[#f5c518]' : 'w-1.5 bg-[#174d37]'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
