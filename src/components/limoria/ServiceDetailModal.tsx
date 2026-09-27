import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Coins, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Download,
  Printer
} from 'lucide-react';
import { Language, ServiceItem } from '../../types/limoria.ts';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  currentLang,
}) => {
  const [step, setStep] = useState<'info' | 'form' | 'success'>('info');
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('Fairview');
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen || !service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `LM-${service.id.toUpperCase().slice(0, 3)}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(generatedRef);
    setStep('success');
  };

  const handleReset = () => {
    setStep('info');
    setFullName('');
    setNationalId('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#f5c518] leading-tight">
                {currentLang === 'bn' ? service.titleBn : service.title}
              </h3>
              <p className="text-xs text-emerald-200">
                {service.department}
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-sm">
          
          {step === 'info' && (
            <>
              {/* Overview */}
              <div className="p-4 rounded-xl bg-[#092b1e] border border-[#164e37]">
                <h4 className="text-xs font-bold text-emerald-300 uppercase mb-1">
                  Service Description
                </h4>
                <p className="text-emerald-100 leading-relaxed text-xs sm:text-sm">
                  {currentLang === 'bn' ? service.descriptionBn : service.description}
                </p>
              </div>

              {/* Metric Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#f5c518]" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block uppercase">Processing Time</span>
                    <span className="font-bold text-white">{service.processingTime}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#061e15] border border-[#164e37] flex items-center gap-2.5">
                  <Coins className="w-4 h-4 text-[#f5c518]" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block uppercase">Statutory Fee</span>
                    <span className="font-bold text-white">{service.fee}</span>
                  </div>
                </div>
              </div>

              {/* Requirements Checklist */}
              <div>
                <h4 className="text-xs font-bold text-[#ffd700] uppercase mb-2">
                  Prerequisites & Required Documents
                </h4>
                <div className="space-y-1.5">
                  {service.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-emerald-200 p-2 rounded-lg bg-[#061e15] border border-[#144732]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep('form')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#175739] to-[#103e29] hover:from-[#1d6b46] hover:to-[#145035] border border-[#e2b43b] text-[#ffd700] font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all hover:scale-[1.01]"
              >
                <span>Proceed to Online Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#061e15] border border-[#164e37] text-xs text-emerald-200">
                Please complete the official citizen verification form below to register this application into the sovereign registry.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    National ID / Citizen PIN *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. LM-8492-4912"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="citizen@limoria.gov.lm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700 000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#f5c518]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-emerald-300 text-xs font-semibold mb-1">
                  Jurisdiction Region *
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-[#08281c] border border-[#18533b] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#f5c518]"
                >
                  <option value="Fairview">Fairview (Capital Territory)</option>
                  <option value="Aurora">Aurora (Northern Region)</option>
                  <option value="Bayview">Bayview (Maritime District)</option>
                  <option value="Crestfall">Crestfall (Eastern Region)</option>
                  <option value="Emerald">Emerald (Central Heartland)</option>
                  <option value="Highland">Highland (Alpine District)</option>
                  <option value="Lakeview">Lakeview (Lakeside Archipelago)</option>
                  <option value="Sunridge">Sunridge (Southern Coast)</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="px-4 py-2.5 rounded-lg bg-[#08281c] hover:bg-[#0f3d2a] border border-[#174e37] text-emerald-200 text-xs font-semibold cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] text-xs font-bold shadow hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  Submit Official Application
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#12422f] border-2 border-[#e2b43b] text-[#ffd700] flex items-center justify-center mx-auto shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-cinzel text-lg font-bold text-[#f5c518]">
                  Application Officially Lodged
                </h4>
                <p className="text-xs text-emerald-200 mt-1">
                  Your request has been dispatched to {service.department}.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#061e15] border border-[#e2b43b]/40 max-w-sm mx-auto">
                <span className="text-[10px] uppercase text-emerald-400 font-bold block mb-1">
                  Official Tracking Dossier
                </span>
                <span className="font-mono text-base font-extrabold text-[#ffd700]">
                  {referenceCode}
                </span>
                <span className="text-[10px] text-emerald-300/80 block mt-1">
                  Applicant: {fullName} • {region} Region
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#082b1d] border border-[#164e37] text-xs text-emerald-200 hover:text-white cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 rounded-lg bg-[#175739] border border-[#e2b43b] text-xs font-bold text-[#ffd700] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
