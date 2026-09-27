import React, { useState } from 'react';
import { Compass, ArrowRight, X, Shield, Info, CheckCircle2 } from 'lucide-react';
import { Language, RegionInfo } from '../../types/limoria.ts';
import { LIMORIA_REGIONS } from '../../data/limoriaData.ts';

interface InteractiveMapCardProps {
  currentLang: Language;
  onOpenFullMap: () => void;
}

export const InteractiveMapCard: React.FC<InteractiveMapCardProps> = ({
  currentLang,
  onOpenFullMap,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(LIMORIA_REGIONS[3]); // Default Emerald
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleSelect = (region: RegionInfo) => {
    setSelectedRegion(region);
  };

  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 sm:p-5 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Header matching screenshot */}
      <div className="flex items-center justify-between pb-3 border-b border-[#144732] mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
            <Compass className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h3 className="font-cinzel text-base font-bold text-white leading-tight">
              {currentLang === 'bn' ? 'ইন্টারেক্টিভ মানচিত্র' : 'Interactive Map'}
            </h3>
            <p className="text-[11px] text-emerald-300/80">
              {currentLang === 'bn' ? 'অঞ্চল ও শহরসমূহ অন্বেষণ করুন' : 'Explore regions and cities'}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenFullMap}
          className="text-xs font-semibold text-[#f5c518] hover:text-[#ffd700] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>{currentLang === 'bn' ? 'পূর্ণ মানচিত্র' : 'Full Map'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Grid: Interactive Island Map (Left/Center) + Regions Selector List (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center flex-1">
        
        {/* SVG Topographical Island Map Canvas (7 or 8 cols) */}
        <div className="md:col-span-8 relative bg-[#04150e] rounded-xl border border-[#144732] p-3 flex items-center justify-center min-h-[260px] overflow-hidden">
          
          {/* Subtle ocean grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#104530_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          
          {/* Ocean Waves Accent */}
          <div className="absolute top-2 left-3 text-[10px] uppercase tracking-widest font-mono text-emerald-500/40 select-none">
            SOVEREIGN SEA OF LIMORIA
          </div>

          <svg viewBox="0 0 500 420" className="w-full h-auto max-h-[300px] drop-shadow-2xl">
            <defs>
              {/* Radial glow for selected territory */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Island Outer Coastline (Landmass) */}
            <path
              d="M 120 70 Q 230 40 340 70 Q 420 120 440 210 Q 430 330 330 380 Q 220 410 130 360 Q 60 280 80 180 Z"
              fill="#062217"
              stroke="#1b5a3e"
              strokeWidth="4"
              className="transition-all duration-500"
            />

            {/* Territory Polygons for the 8 Regions */}
            
            {/* 1. Aurora (North) */}
            <polygon
              points="190,65 300,60 350,110 270,140 190,120"
              fill={selectedRegion.id === 1 ? '#3b82f6' : '#1e3a8a'}
              fillOpacity={selectedRegion.id === 1 ? '0.85' : '0.45'}
              stroke="#60a5fa"
              strokeWidth={selectedRegion.id === 1 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-blue-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[0])}
            />

            {/* 6. Highland (North-West) */}
            <polygon
              points="120,110 190,65 190,120 150,180 100,160"
              fill={selectedRegion.id === 6 ? '#06b6d4' : '#0e7490'}
              fillOpacity={selectedRegion.id === 6 ? '0.85' : '0.45'}
              stroke="#38bdf8"
              strokeWidth={selectedRegion.id === 6 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-cyan-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[5])}
            />

            {/* 2. Bayview (West Coast) */}
            <polygon
              points="100,160 150,180 190,230 130,280 80,220"
              fill={selectedRegion.id === 2 ? '#ec4899' : '#9d174d'}
              fillOpacity={selectedRegion.id === 2 ? '0.85' : '0.45'}
              stroke="#f472b6"
              strokeWidth={selectedRegion.id === 2 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-pink-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[1])}
            />

            {/* 3. Crestfall (East / North-East) */}
            <polygon
              points="300,60 390,95 430,170 350,190 270,140"
              fill={selectedRegion.id === 3 ? '#eab308' : '#854d0e'}
              fillOpacity={selectedRegion.id === 3 ? '0.85' : '0.45'}
              stroke="#fde047"
              strokeWidth={selectedRegion.id === 3 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-yellow-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[2])}
            />

            {/* 4. Emerald (Central Heartland) */}
            <polygon
              points="190,120 270,140 330,220 240,250 180,210"
              fill={selectedRegion.id === 4 ? '#22c55e' : '#14532d'}
              fillOpacity={selectedRegion.id === 4 ? '0.85' : '0.45'}
              stroke="#4ade80"
              strokeWidth={selectedRegion.id === 4 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-emerald-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[3])}
            />

            {/* 5. Fairview (Capital Territory) */}
            <polygon
              points="180,210 240,250 250,310 160,320 130,280"
              fill={selectedRegion.id === 5 ? '#14b8a6' : '#115e59'}
              fillOpacity={selectedRegion.id === 5 ? '0.85' : '0.45'}
              stroke="#2dd4bf"
              strokeWidth={selectedRegion.id === 5 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-teal-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[4])}
            />

            {/* 7. Lakeview (East/South-East) */}
            <polygon
              points="350,190 430,170 420,280 340,320 250,310 330,220"
              fill={selectedRegion.id === 7 ? '#0ea5e9' : '#0369a1'}
              fillOpacity={selectedRegion.id === 7 ? '0.85' : '0.45'}
              stroke="#38bdf8"
              strokeWidth={selectedRegion.id === 7 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-sky-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[6])}
            />

            {/* 8. Sunridge (South Coast) */}
            <polygon
              points="160,320 250,310 340,320 320,380 200,390 140,360"
              fill={selectedRegion.id === 8 ? '#f97316' : '#9a3412'}
              fillOpacity={selectedRegion.id === 8 ? '0.85' : '0.45'}
              stroke="#fb923c"
              strokeWidth={selectedRegion.id === 8 ? '3' : '1.5'}
              className="cursor-pointer transition-all hover:fill-orange-500 hover:fill-opacity-70"
              onClick={() => handleSelect(LIMORIA_REGIONS[7])}
            />

            {/* Markers with Region Numbers 1 - 8 */}
            {LIMORIA_REGIONS.map((r) => {
              const isSelected = selectedRegion.id === r.id;
              // Coordinates on SVG
              const coords: Record<number, { cx: number; cy: number }> = {
                1: { cx: 250, cy: 95 },
                2: { cx: 130, cy: 220 },
                3: { cx: 345, cy: 135 },
                4: { cx: 245, cy: 185 },
                5: { cx: 195, cy: 265 },
                6: { cx: 145, cy: 140 },
                7: { cx: 335, cy: 270 },
                8: { cx: 240, cy: 350 },
              };
              const pt = coords[r.id] || { cx: 250, cy: 200 };

              return (
                <g 
                  key={r.id} 
                  onClick={() => handleSelect(r)} 
                  className="cursor-pointer transition-transform"
                >
                  {/* Ping animation if selected */}
                  {isSelected && (
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r="16"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      className="animate-ping opacity-60"
                    />
                  )}
                  {/* Marker Pin */}
                  <circle
                    cx={pt.cx}
                    cy={pt.cy}
                    r={isSelected ? '12' : '9'}
                    fill={r.color}
                    stroke="#ffffff"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x={pt.cx}
                    y={pt.cy + (isSelected ? 4 : 3.5)}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={isSelected ? '11' : '9'}
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    pointerEvents="none"
                  >
                    {r.id}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Selected Badge Card Overlay on Bottom-Left of Map */}
          <div className="absolute bottom-2 left-2 bg-[#092b1e]/90 border border-[#e2b43b]/40 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 max-w-[220px]">
            <span 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: selectedRegion.color }}
            ></span>
            <div className="truncate">
              <span className="text-[11px] font-bold text-white block truncate">
                {selectedRegion.id}. {currentLang === 'bn' ? selectedRegion.nameBn : selectedRegion.name}
              </span>
              <span className="text-[9px] text-[#e2b43b] truncate block">
                {selectedRegion.capital}
              </span>
            </div>
            <button
              onClick={() => setShowDetailModal(true)}
              className="ml-auto text-[10px] text-emerald-300 hover:text-white underline cursor-pointer"
            >
              Info
            </button>
          </div>

        </div>

        {/* Right Region List Selector (matching screenshot) */}
        <div className="md:col-span-4 bg-[#072418] border border-[#164e37] rounded-xl p-3 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#144732]">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                {currentLang === 'bn' ? 'অঞ্চলসমূহ' : 'Regions'}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">
                8 Provinces
              </span>
            </div>

            {/* List 1 to 8 */}
            <div className="space-y-1.5">
              {LIMORIA_REGIONS.map((r) => {
                const isSelected = selectedRegion.id === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => handleSelect(r)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f442b] border border-[#e2b43b] text-white font-bold shadow-md'
                        : 'hover:bg-[#0c3522] text-emerald-200/90 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] text-white font-black"
                        style={{ backgroundColor: r.color }}
                      >
                        {r.id}
                      </span>
                      <span>
                        {currentLang === 'bn' ? r.nameBn : r.name}
                      </span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5c518]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* View Full Map button at bottom of list */}
          <button
            onClick={onOpenFullMap}
            className="w-full mt-3 py-2 px-3 rounded-lg bg-gradient-to-r from-[#12422f] to-[#0c3121] hover:from-[#18553d] hover:to-[#12422d] border border-[#e2b43b]/40 text-[#f5c518] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
          >
            <span>{currentLang === 'bn' ? 'পূর্ণাঙ্গ মানচিত্র দেখুন' : 'View Full Map'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Region Quick Dossier Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#092c1e] border-2 border-[#e2b43b] rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setShowDetailModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#051c13] text-emerald-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span 
                className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white"
                style={{ backgroundColor: selectedRegion.color }}
              >
                {selectedRegion.id}
              </span>
              <div>
                <h4 className="font-cinzel text-xl font-bold text-[#f5c518]">
                  {currentLang === 'bn' ? selectedRegion.nameBn : selectedRegion.name} Region
                </h4>
                <p className="text-xs text-emerald-300">
                  Provincial Capital: {selectedRegion.capital}
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 mb-4 leading-relaxed">
              {currentLang === 'bn' ? selectedRegion.descriptionBn : selectedRegion.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div className="p-2.5 rounded-lg bg-[#061e15] border border-[#164e37]">
                <span className="text-emerald-400 block text-[10px] uppercase">Governor</span>
                <span className="font-semibold text-white">{selectedRegion.governor}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#061e15] border border-[#164e37]">
                <span className="text-emerald-400 block text-[10px] uppercase">Population</span>
                <span className="font-semibold text-white">{selectedRegion.population}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#061e15] border border-[#164e37]">
                <span className="text-emerald-400 block text-[10px] uppercase">Climate</span>
                <span className="font-semibold text-white">{selectedRegion.climate}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#061e15] border border-[#164e37]">
                <span className="text-emerald-400 block text-[10px] uppercase">Land Area</span>
                <span className="font-semibold text-white">{selectedRegion.area}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#061e15] border border-[#164e37] text-xs mb-5">
              <span className="text-[#f5c518] block text-[10px] uppercase font-bold">Key Economic Drivers</span>
              <span className="text-emerald-100">{selectedRegion.economy}</span>
            </div>

            <button
              onClick={() => {
                setShowDetailModal(false);
                onOpenFullMap();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] font-bold text-sm hover:scale-[1.02] transition-transform"
            >
              Open Complete Regional Atlas
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
