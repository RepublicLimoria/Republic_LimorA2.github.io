import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: 'The Sovereign Republic', time: '0:00', desc: 'Origins, constitution, and independence' },
    { title: 'The 8 Regions & Geography', time: '0:45', desc: 'From Aurora peaks to Sunridge beaches' },
    { title: 'Green Energy & Innovation', time: '1:30', desc: '100% renewable grid and smart infrastructure' },
    { title: "President Limon's State Address", time: '2:15', desc: 'Unity, progress, and the 2030 vision' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#f5c518] leading-tight">
                {currentLang === 'bn' ? 'লিমোরিয়া আবিষ্কার করুন' : 'Discover Limoria'}
              </h3>
              <p className="text-xs text-emerald-200">
                Official National Documentary • 2 min 48 sec
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

        {/* Video Canvas Simulation */}
        <div className="relative bg-black aspect-video max-h-[420px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Cinematic Limoria"
            className="w-full h-full object-cover filter brightness-90"
          />

          {/* Center Play Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#0a2e1e]/90 border-2 border-[#f5c518] text-[#ffd700] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>
          </div>

          {/* Lower controls bar */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-emerald-200">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white cursor-pointer">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white cursor-pointer">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px]">01:14 / 02:48</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-[#f5c518] px-2 py-0.5 rounded bg-black/60 border border-[#e2b43b]/40">
                4K HDR Sovereign Stream
              </span>
            </div>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-4 bg-[#061e15] border-t border-[#144732] flex-1 overflow-y-auto">
          <h4 className="text-xs font-bold text-[#ffd700] uppercase mb-2">
            Documentary Chapters
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-[#0f442b] border-[#e2b43b] text-white font-semibold shadow'
                    : 'bg-[#092b1e] border-[#164e37] text-emerald-200/80 hover:bg-[#0d3b27]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold">{ch.title}</span>
                  <span className="text-[10px] font-mono text-[#f5c518]">{ch.time}</span>
                </div>
                <p className="text-[10px] text-emerald-300/70">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
