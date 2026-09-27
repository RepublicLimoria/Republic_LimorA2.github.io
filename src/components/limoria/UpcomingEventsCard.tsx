import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Language, EventItem } from '../../types/limoria.ts';
import { UPCOMING_EVENTS } from '../../data/limoriaData.ts';

interface UpcomingEventsCardProps {
  currentLang: Language;
  onEventClick: (event: EventItem) => void;
}

export const UpcomingEventsCard: React.FC<UpcomingEventsCardProps> = ({
  currentLang,
  onEventClick,
}) => {
  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 shadow-xl flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#144732]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'bn' ? 'আসন্ন অনুষ্ঠান' : 'Upcoming Events'}
            </h3>
          </div>
        </div>

        <button 
          onClick={() => onEventClick(UPCOMING_EVENTS[0])}
          className="text-[11px] text-[#f5c518] hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          <span>{currentLang === 'bn' ? 'সব দেখুন' : 'View All'}</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Events list */}
      <div className="space-y-2 my-1">
        {UPCOMING_EVENTS.map((ev) => (
          <div
            key={ev.id}
            onClick={() => onEventClick(ev)}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-[#061e15] border border-[#164e37] hover:border-[#f5c518] transition-colors cursor-pointer group"
          >
            {/* Date badge */}
            <div className="w-10 h-10 rounded-lg bg-[#0e3b28] border border-[#23684a] flex flex-col items-center justify-center flex-shrink-0 group-hover:border-[#ffd700]">
              <span className="text-xs font-black text-[#ffd700] leading-none">{ev.day}</span>
              <span className="text-[9px] font-bold text-emerald-300 uppercase leading-none mt-0.5">{ev.month}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-white group-hover:text-[#f5c518] transition-colors line-clamp-1">
                {currentLang === 'bn' ? ev.titleBn : ev.title}
              </h4>
              <p className="text-[10px] text-emerald-300/70 line-clamp-1">
                {ev.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 text-[10px] text-emerald-300/80 border-t border-[#144732] flex items-center justify-between">
        <span>{currentLang === 'bn' ? 'জনসাধারণের উন্মুক্ত অংশগ্রহণ' : 'Open Public Attendance'}</span>
        <span className="text-[#f5c518] font-bold">Livestream</span>
      </div>
    </div>
  );
};
