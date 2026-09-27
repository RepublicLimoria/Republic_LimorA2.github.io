import { Landmark, Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs mt-16 no-print">
      {/* Upper Footer: Municipal Navigation & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Government Authority */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-amber-400 flex items-center justify-center text-amber-400 shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-heading">
                  Fairview City & County
                </h3>
                <span className="text-[11px] text-amber-400 font-mono">
                  Official Municipal Government
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Serving the civic needs of residents, small businesses, and visitors across Fairview County through transparent and accessible public services.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Fairview City Hall, 100 Civic Plaza, Fairview, FC 97401</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>General Citizen Inquiry: (555) 019-3000</span>
              </div>
            </div>
          </div>

          {/* Col 2: Citizen Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Citizen Public Services
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Permits & Building Plan Check
                </a>
              </li>
              <li>
                <a href="#taxes-section" className="hover:text-white transition-colors">
                  Property Tax Payment & Roll Lookups
                </a>
              </li>
              <li>
                <a href="#tracker-section" className="hover:text-white transition-colors">
                  Track Application Milestone Progress
                </a>
              </li>
              <li>
                <a href="#311-section" className="hover:text-white transition-colors">
                  Report 311 Non-Emergency Maintenance
                </a>
              </li>
              <li>
                <a href="#council-section" className="hover:text-white transition-colors">
                  City Council Hearing Agendas
                </a>
              </li>
              <li>
                <a href="#directory-section" className="hover:text-white transition-colors">
                  Agency Directory & Appointment Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Disclosures & Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Compliance & Legal Notices
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <span className="hover:text-white cursor-pointer">
                  ADA Title II Accessibility Compliance
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Public Records Act / FOIA Portal
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Equal Opportunity & Civil Rights Statement
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Government Data Privacy & Cookie Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Limited English Proficiency (LEP) Language Plan
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Whistleblower & Municipal Ethics Hotline
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency Assistance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Civic Helplines & Numbers
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-2.5">
              <div>
                <span className="text-[11px] text-slate-400 block">Life-Threatening Emergency:</span>
                <span className="font-mono text-base font-bold text-red-400">Dial 911</span>
              </div>
              <div className="border-t border-slate-800 pt-2">
                <span className="text-[11px] text-slate-400 block">Municipal Non-Emergency (311):</span>
                <span className="font-mono text-sm font-semibold text-amber-300">(555) 019-0311</span>
              </div>
              <div className="border-t border-slate-800 pt-2">
                <span className="text-[11px] text-slate-400 block">Crisis & Suicide Lifeline:</span>
                <span className="font-mono text-sm font-semibold text-emerald-400">Dial 988</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal Disclaimer Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © 2026 City & County of Fairview. All official municipal content is public domain unless otherwise specified.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Official Government Portal</span>
            <span>·</span>
            <span>WCAG 2.1 AA Compliant</span>
            <span>·</span>
            <span className="font-mono text-emerald-400">FairviewGov.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
