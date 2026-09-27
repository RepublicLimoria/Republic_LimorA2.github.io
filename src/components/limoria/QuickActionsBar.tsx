import React from 'react';
import { 
  Landmark, 
  UserCheck, 
  Layers, 
  Map as MapIcon, 
  Image as ImageIcon, 
  HelpCircle, 
  Bot, 
  Search 
} from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface QuickActionsBarProps {
  currentLang: Language;
  onActionClick: (actionId: string) => void;
}

export const QuickActionsBar: React.FC<QuickActionsBarProps> = ({
  currentLang,
  onActionClick,
}) => {
  const actions = [
    {
      id: 'government',
      title: currentLang === 'bn' ? 'সরকার' : 'Government',
      subtitle: currentLang === 'bn' ? 'আমাদের প্রতিষ্ঠানসমূহ' : 'Our Institutions',
      icon: Landmark,
    },
    {
      id: 'president',
      title: currentLang === 'bn' ? 'রাষ্ট্রপতি' : 'President',
      subtitle: currentLang === 'bn' ? 'মহামান্য রাষ্ট্রপতি লিমন' : 'Meet President Limon',
      icon: UserCheck,
    },
    {
      id: 'services',
      title: currentLang === 'bn' ? 'সেবাসমূহ' : 'Services',
      subtitle: currentLang === 'bn' ? 'নাগরিক সেবা' : 'Citizen Services',
      icon: Layers,
    },
    {
      id: 'map',
      title: currentLang === 'bn' ? 'মানচিত্র' : 'Map',
      subtitle: currentLang === 'bn' ? 'লিমোরিয়া অন্বেষণ' : 'Explore Limoria',
      icon: MapIcon,
    },
    {
      id: 'gallery',
      title: currentLang === 'bn' ? 'গ্যালারি' : 'Gallery',
      subtitle: currentLang === 'bn' ? 'ছবি ও ভিডিও' : 'Photos & Videos',
      icon: ImageIcon,
    },
    {
      id: 'faq',
      title: currentLang === 'bn' ? 'প্রশ্নোত্তর' : 'FAQ',
      subtitle: currentLang === 'bn' ? 'উত্তর পান' : 'Get Answers',
      icon: HelpCircle,
    },
    {
      id: 'chatbot',
      title: currentLang === 'bn' ? 'চ্যাটবট' : 'Chat Bot',
      subtitle: currentLang === 'bn' ? 'যেকোনো কিছু জিজ্ঞেস করুন' : 'Ask Anything',
      icon: Bot,
    },
    {
      id: 'search',
      title: currentLang === 'bn' ? 'অনুসন্ধান' : 'Search',
      subtitle: currentLang === 'bn' ? 'তথ্য খুঁজুন' : 'Find Information',
      icon: Search,
    },
  ];

  return (
    <section className="py-6 bg-[#041910] border-b border-[#e2b43b]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onActionClick(item.id)}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-[#09291b] to-[#061d13] border border-[#174e37] hover:border-[#f5c518] hover:bg-[#0d3b27] transition-all text-center group shadow-md hover:shadow-lg hover:shadow-emerald-950/80 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e3a27] border border-[#20684a] group-hover:border-[#ffd700] text-[#f5c518] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-[#f5c518] transition-colors line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-emerald-300/70 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
