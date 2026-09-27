import React from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import { GalleryItem, Language } from '../../types/limoria.ts';

interface ImageViewerModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  item,
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-4xl w-full flex flex-col text-white shadow-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-4 bg-[#0a2e1f] border-t border-[#1b5a3e] flex items-center justify-between">
          <div>
            <h4 className="font-cinzel text-base font-bold text-[#f5c518]">
              {item.title}
            </h4>
            <div className="flex items-center gap-3 text-xs text-emerald-300 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#f5c518]" />
                {item.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#f5c518]" />
                {item.category}
              </span>
            </div>
          </div>

          <span className="text-[11px] text-emerald-400 font-mono">
            National Scenic Registry #LM-IMG
          </span>
        </div>
      </div>
    </div>
  );
};
