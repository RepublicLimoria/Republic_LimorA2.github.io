import React, { useState } from 'react';
import { X, Map, Compass, MapPin, Building2, Train, Plane, Anchor, Info } from 'lucide-react';
import { Language, RegionInfo } from '../../types/limoria.ts';
import { LIMORIA_REGIONS } from '../../data/limoriaData.ts';

interface FullMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const FullMapModal: React.FC<FullMapModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(LIMORIA_REGIONS[4]); // Fairview capital default
  const [activeFilter, setActiveFilter] = useState<'all' | 'capitals' | 'transport' | 'nature'>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#f5c518] leading-tight">
                {currentLang === 'bn' ? 'লিমোরিয়া জাতীয় ভূসংস্থান মানচিত্র' : 'National Cartographic Atlas of Limoria'}
              </h3>
              <p className="text-xs text-emerald-200">
                8 Sovereign Provinces • 32 Municipal Cities • National Geodetic Survey
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="px-4 py-2.5 bg-[#051c12] border-b border-[#144732] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-emerald-400 font-semibold uppercase text-[10px] mr-1">Layer:</span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'all' ? 'bg-[#f5c518] text-[#072418] font-bold' : 'bg-[#092e1e] text-emerald-200 hover:text-white'
            }`}
          >
            All Territories (8)
          </button>
          <button
            onClick={() => setActiveFilter('capitals')}
            className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'capitals' ? 'bg-[#f5c518] text-[#072418] font-bold' : 'bg-[#092e1e] text-emerald-200 hover:text-white'
            }`}
          >
            32 Major Cities
          </button>
          <button
            onClick={() => setActiveFilter('transport')}
            className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'transport' ? 'bg-[#f5c518] text-[#072418] font-bold' : 'bg-[#092e1e] text-emerald-200 hover:text-white'
            }`}
          >
            Hyper-Rail & Transit
          </button>
          <button
            onClick={() => setActiveFilter('nature')}
            className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'nature' ? 'bg-[#f5c518] text-[#072418] font-bold' : 'bg-[#092e1e] text-emerald-200 hover:text-white'
            }`}
          >
            Protected Biospheres
          </button>
        </div>

        {/* Content: Atlas Map on Left + Dossier on Right */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
          
          {/* Map display */}
          <div className="lg:col-span-8 bg-[#04150e] rounded-xl border border-[#144732] p-4 flex flex-col justify-between relative min-h-[380px]">
            
            <div className="flex items-center justify-between text-[11px] text-emerald-400/80 mb-2 font-mono">
              <span>LAT: 44° 12' N | LON: 18° 35' E</span>
              <span>GRID SYSTEM: EPSG-3857-LM</span>
            </div>

            {/* Interactive SVG Atlas */}
            <svg viewBox="0 0 600 480" className="w-full h-auto drop-shadow-2xl">
              {/* Island coastline */}
              <path
                d="M 140 80 Q 280 40 420 80 Q 520 140 540 250 Q 520 390 400 450 Q 270 480 160 430 Q 70 340 90 220 Z"
                fill="#07281c"
                stroke="#1f6848"
                strokeWidth="5"
              />

              {/* Transit lines connecting capitals */}
              <path
                d="M 300 110 L 170 250 L 240 310 L 300 410 L 410 320 L 420 160 Z"
                stroke="#ffd700"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                opacity="0.6"
              />

              {/* Territory zones */}
              {LIMORIA_REGIONS.map((r) => {
                const isSelected = selectedRegion.id === r.id;
                const coords: Record<number, { cx: number; cy: number }> = {
                  1: { cx: 300, cy: 110 },
                  2: { cx: 160, cy: 260 },
                  3: { cx: 420, cy: 160 },
                  4: { cx: 300, cy: 220 },
                  5: { cx: 240, cy: 310 },
                  6: { cx: 180, cy: 170 },
                  7: { cx: 410, cy: 320 },
                  8: { cx: 300, cy: 410 },
                };
                const pt = coords[r.id] || { cx: 300, cy: 250 };

                return (
                  <g key={r.id} onClick={() => setSelectedRegion(r)} className="cursor-pointer">
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r={isSelected ? '20' : '14'}
                      fill={r.color}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? '3' : '2'}
                      fillOpacity={isSelected ? '0.9' : '0.7'}
                      className="transition-all"
                    />
                    <text
                      x={pt.cx}
                      y={pt.cy + 5}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontWeight="bold"
                      pointerEvents="none"
                    >
                      {r.id}
                    </text>
                    <text
                      x={pt.cx}
                      y={pt.cy + 30}
                      textAnchor="middle"
                      fill="#ffd700"
                      fontSize="11"
                      fontWeight="600"
                      pointerEvents="none"
                      className="drop-shadow"
                    >
                      {r.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="flex items-center justify-between text-[11px] text-emerald-300 pt-2 border-t border-[#12422f]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]"></span>
                Hyper-Rail Expressway
              </span>
              <span>Click on any region pin to view complete regional governance dossier</span>
            </div>

          </div>

          {/* Dossier side panel */}
          <div className="lg:col-span-4 bg-[#092b1e] border border-[#174e37] rounded-xl p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#144732]">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-base text-white shadow"
                  style={{ backgroundColor: selectedRegion.color }}
                >
                  {selectedRegion.id}
                </span>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#f5c518] leading-tight">
                    {currentLang === 'bn' ? selectedRegion.nameBn : selectedRegion.name}
                  </h4>
                  <p className="text-xs text-emerald-300">
                    Capital: {selectedRegion.capital}
                  </p>
                </div>
              </div>

              <p className="text-xs text-emerald-100/90 leading-relaxed">
                {currentLang === 'bn' ? selectedRegion.descriptionBn : selectedRegion.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded bg-[#061e15] border border-[#144732]">
                  <span className="text-[10px] text-emerald-400 block uppercase">Governor</span>
                  <span className="font-bold text-white truncate block">{selectedRegion.governor}</span>
                </div>
                <div className="p-2 rounded bg-[#061e15] border border-[#144732]">
                  <span className="text-[10px] text-emerald-400 block uppercase">Population</span>
                  <span className="font-bold text-white">{selectedRegion.population}</span>
                </div>
                <div className="p-2 rounded bg-[#061e15] border border-[#144732]">
                  <span className="text-[10px] text-emerald-400 block uppercase">Area</span>
                  <span className="font-bold text-white">{selectedRegion.area}</span>
                </div>
                <div className="p-2 rounded bg-[#061e15] border border-[#144732]">
                  <span className="text-[10px] text-emerald-400 block uppercase">Climate</span>
                  <span className="font-bold text-white">{selectedRegion.climate}</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#061e15] border border-[#144732] text-xs">
                <span className="text-[10px] text-[#f5c518] uppercase font-bold block mb-1">
                  Notable Landmarks
                </span>
                <ul className="space-y-1 text-emerald-200">
                  {selectedRegion.landmarks.map((lm, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                      <span>{lm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#144732] text-center">
              <span className="text-[11px] text-emerald-300">
                Official territory registered under sovereign cadastre act.
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
