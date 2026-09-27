import React, { useState } from 'react';
import { HelpCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { Language, FaqItem } from '../../types/limoria.ts';
import { FAQS } from '../../data/limoriaData.ts';

interface FaqSectionProps {
  currentLang: Language;
  onFaqSelect?: (faq: FaqItem) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang, onFaqSelect }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, faq: FaqItem) => {
    setExpandedId((curr) => (curr === id ? null : id));
    if (onFaqSelect) {
      onFaqSelect(faq);
    }
  };

  return (
    <div className="rounded-2xl border border-[#174e37] bg-gradient-to-b from-[#09291b] to-[#051c12] p-4 shadow-xl flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#144732]">
        <div className="w-7 h-7 rounded-lg bg-[#0e3b28] border border-[#e2b43b]/40 flex items-center justify-center text-[#f5c518]">
          <HelpCircle className="w-3.5 h-3.5" />
        </div>
        <div>
          <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
            {currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'FAQ'}
          </h3>
          <p className="text-[10px] text-emerald-300/80">
            {currentLang === 'bn' ? 'সাধারণ প্রশ্নের দ্রুত সমাধান' : 'Quick answers to common questions'}
          </p>
        </div>
      </div>

      {/* 4 Accordion Questions from screenshot */}
      <div className="space-y-1.5 my-1">
        {FAQS.map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-xl bg-[#061e15] border border-[#164e37] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleExpand(faq.id, faq)}
                className="w-full flex items-center justify-between p-2.5 text-left text-xs font-medium text-white hover:text-[#f5c518] hover:bg-[#0b3322] transition-colors cursor-pointer"
              >
                <span className="line-clamp-1 pr-2">
                  {currentLang === 'bn' ? faq.questionBn : faq.question}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-[#f5c518] flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-3 pb-3 pt-1 text-[11px] text-emerald-200/90 leading-relaxed border-t border-[#12422f] bg-[#051810]">
                  {currentLang === 'bn' ? faq.answerBn : faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2 text-[10px] text-emerald-300/80 border-t border-[#144732] flex items-center justify-between">
        <span>{currentLang === 'bn' ? 'আরও সাহায্য প্রয়োজন?' : 'Need direct assistance?'}</span>
        <span className="text-[#f5c518] font-bold">Call 311</span>
      </div>
    </div>
  );
};
