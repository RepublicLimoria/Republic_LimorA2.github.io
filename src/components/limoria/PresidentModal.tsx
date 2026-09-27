import React from 'react';
import { X, Award, CheckCircle, Shield, FileText, Globe } from 'lucide-react';
import { Language } from '../../types/limoria.ts';
import { PRESIDENT_BIO } from '../../data/limoriaData.ts';

interface PresidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PresidentModal: React.FC<PresidentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5c518] leading-tight">
                {currentLang === 'bn' ? 'মহামান্য রাষ্ট্রপতি লিমন' : 'His Excellency President Limon'}
              </h3>
              <p className="text-xs text-emerald-200">
                {currentLang === 'bn' ? PRESIDENT_BIO.titleBn : PRESIDENT_BIO.title}
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#e2b43b]/60 shadow-xl h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                alt="President Limon"
                className="w-full h-full object-cover object-top filter brightness-95"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#041a11] p-3 text-center">
                <span className="font-cinzel text-xs font-bold text-[#ffd700]">
                  PRESIDENT LIMON
                </span>
                <span className="text-[10px] text-emerald-200 block">
                  Mandate: 2022 - Present
                </span>
              </div>
            </div>

            <div className="sm:col-span-7 space-y-3">
              <div className="p-3 rounded-xl bg-[#092b1e] border border-[#174e37]">
                <span className="text-[10px] uppercase font-bold text-[#f5c518] block mb-1">
                  National Motto & Philosophy
                </span>
                <p className="font-playfair italic text-lg text-white">
                  "{currentLang === 'bn' ? PRESIDENT_BIO.mottoBn : PRESIDENT_BIO.motto}"
                </p>
              </div>

              <div className="text-xs text-emerald-100/90 leading-relaxed space-y-2">
                <p>
                  President Limon was elected on a transformative mandate prioritizing environmental stewardship, sovereign technology independence, and equitable civic prosperity across Limoria's 8 regional provinces.
                </p>
                <p>
                  Under his leadership, Limoria transitioned 100% of its national electrical grid to renewable geothermal, solar, and hydro generation, while establishing the sovereign AI Citizen Services infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#f5c518] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Major State Initiatives & Milestones
            </h4>
            <div className="space-y-2">
              {PRESIDENT_BIO.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#061e15] border border-[#144732] text-xs text-emerald-100">
                  <CheckCircle className="w-4 h-4 text-[#ffd700] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision 2030 */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#0d3b28] to-[#072418] border border-[#e2b43b]/40">
            <h4 className="text-xs font-bold text-[#ffd700] uppercase mb-1">
              Limoria Vision 2030
            </h4>
            <p className="text-xs text-emerald-100 leading-relaxed">
              {PRESIDENT_BIO.vision}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a2e1f] border-t border-[#1b5a3e] flex items-center justify-between">
          <span className="text-xs text-emerald-300">
            Official Executive Office of the President • Fairview Capital District
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] font-bold text-xs hover:scale-105 transition-transform cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
