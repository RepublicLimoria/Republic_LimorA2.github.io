import React, { useState } from 'react';
import { X, Award, CheckCircle, Shield, Edit3, Save, RotateCcw, Camera } from 'lucide-react';
import { Language } from '../../types/limoria.ts';
import { PRESIDENT_BIO } from '../../data/limoriaData.ts';

interface PresidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  presidentPhoto: string;
  onUploadPhoto: (file: File) => void;
}

export const PresidentModal: React.FC<PresidentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  presidentPhoto,
  onUploadPhoto,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Customizable local state with persistence
  const [nameEn, setNameEn] = useState(PRESIDENT_BIO.name);
  const [nameBn, setNameBn] = useState(PRESIDENT_BIO.nameBn);
  const [titleEn, setTitleEn] = useState(PRESIDENT_BIO.title);
  const [mottoEn, setMottoEn] = useState(PRESIDENT_BIO.motto);
  const [mottoBn, setMottoBn] = useState(PRESIDENT_BIO.mottoBn);
  const [photoUrl, setPhotoUrl] = useState(presidentPhoto || PRESIDENT_BIO.photoUrl);
  const [vision, setVision] = useState(PRESIDENT_BIO.vision);

  if (!isOpen) return null;

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleReset = () => {
    setNameEn(PRESIDENT_BIO.name);
    setNameBn(PRESIDENT_BIO.nameBn);
    setTitleEn(PRESIDENT_BIO.title);
    setMottoEn(PRESIDENT_BIO.motto);
    setMottoBn(PRESIDENT_BIO.mottoBn);
    setPhotoUrl(PRESIDENT_BIO.photoUrl);
    setVision(PRESIDENT_BIO.vision);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5c518] leading-tight">
                {currentLang === 'bn' ? nameBn : nameEn}
              </h3>
              <p className="text-xs text-emerald-200">
                {currentLang === 'bn' ? PRESIDENT_BIO.titleBn : titleEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c3926] hover:bg-[#124b33] border border-[#e2b43b]/40 text-[#f5c518] text-xs font-semibold cursor-pointer transition-colors"
              title="Edit President Profile & Photo"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? (currentLang === 'bn' ? 'প্রিভিউ' : 'Preview') : (currentLang === 'bn' ? 'তথ্য পরিবর্তন' : 'Edit Profile')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {isEditing ? (
            /* Live Edit Form */
            <div className="space-y-4 p-4 rounded-xl bg-[#051c12] border border-[#1b583f] text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#144732]">
                <h4 className="font-bold text-[#ffd700] uppercase flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  {currentLang === 'bn' ? 'রাষ্ট্রপতির তথ্য সম্পাদনা করুন' : 'Edit President Information & Photo'}
                </h4>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[11px] text-emerald-300 hover:text-white cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{currentLang === 'bn' ? 'রিসেট' : 'Reset Defaults'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Name (English)
                  </label>
                  <input
                    type="text"
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Name (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={nameBn}
                    onChange={(e) => setNameBn(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Official Photo (Upload Real Photo or URL)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      placeholder="/president_limon.jpg"
                      className="flex-1 bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                    />
                    <label className="px-3 py-2 rounded-lg bg-[#0e3b28] hover:bg-[#145338] border border-[#ffd700] text-[#ffd700] text-xs font-bold flex items-center gap-1.5 cursor-pointer flex-shrink-0 shadow transition-all hover:scale-105">
                      <Camera className="w-3.5 h-3.5" />
                      <span>{currentLang === 'bn' ? 'ছবি নির্বাচন' : 'Upload'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onUploadPhoto(file);
                            const reader = new FileReader();
                            reader.onload = (ev) => {
                              if (ev.target?.result) setPhotoUrl(ev.target.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Official Title
                  </label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    National Motto (English)
                  </label>
                  <input
                    type="text"
                    value={mottoEn}
                    onChange={(e) => setMottoEn(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    National Motto (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={mottoBn}
                    onChange={(e) => setMottoBn(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-emerald-300 font-semibold mb-1">
                  Vision 2030 Statement
                </label>
                <textarea
                  rows={2}
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow hover:scale-[1.01]"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{currentLang === 'bn' ? 'সংরক্ষণ করুন' : 'Save & Apply Changes'}</span>
              </button>
            </div>
          ) : (
            /* Regular Profile View */
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#e2b43b]/60 shadow-xl h-64 sm:h-76 bg-[#051c12] group">
                <img
                  src={presidentPhoto || photoUrl}
                  alt={nameEn}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/president_limon_portrait_1790527309947.jpg';
                  }}
                  className="w-full h-full object-cover object-top filter brightness-95"
                />

                {/* Direct Upload Button Overlay on Photo */}
                <label
                  className="absolute top-3 right-3 bg-[#0a2e1e]/90 hover:bg-[#124b33] border border-[#ffd700] px-2.5 py-1 rounded-md text-[10px] font-bold text-[#ffd700] flex items-center gap-1.5 backdrop-blur-sm shadow-xl cursor-pointer transition-all hover:scale-105 z-10"
                  title="Upload Exact Real Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>{currentLang === 'bn' ? 'আসল ছবি আপলোড' : 'Upload Real Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadPhoto(file);
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          if (ev.target?.result) setPhotoUrl(ev.target.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#041a11] p-3 text-center">
                  <span className="font-cinzel text-xs font-bold text-[#ffd700] block">
                    {currentLang === 'bn' ? 'মহামান্য রাষ্ট্রপতি মামুন হোসেন লিমন' : 'MAMUN HOSSEN LIMON'}
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
                    "{currentLang === 'bn' ? mottoBn : mottoEn}"
                  </p>
                </div>

                <div className="text-xs text-emerald-100/90 leading-relaxed space-y-2">
                  <p>
                    President {nameEn} was elected on a transformative mandate prioritizing environmental stewardship, sovereign technology independence, and equitable civic prosperity across Limoria's 8 regional provinces.
                  </p>
                  <p>
                    Under his leadership, Limoria transitioned 100% of its national electrical grid to renewable geothermal, solar, and hydro generation, while establishing the sovereign AI Citizen Services infrastructure.
                  </p>
                </div>
              </div>
            </div>
          )}

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
              {vision}
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
