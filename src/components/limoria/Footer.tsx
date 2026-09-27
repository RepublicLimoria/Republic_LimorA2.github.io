import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowUp, 
  SunMedium, 
  CloudSun, 
  Download, 
  ShieldCheck,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface FooterProps {
  currentLang: Language;
  onNavigate: (section: string) => void;
  onScrollToTop: () => void;
  onInstallPwa: () => void;
  onOpenGitHubModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onScrollToTop,
  onInstallPwa,
  onOpenGitHubModal,
}) => {
  return (
    <footer className="bg-[#03150d] text-white border-t-2 border-[#e2b43b]/30 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10 items-start">
          
          {/* Brand & Motto (approx 3.5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#12422f] to-[#072418] border-2 border-[#e2b43b] flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#e2b43b]">
                  <path d="M50 12 L55 22 L66 18 L62 28 L74 30 L66 38 L72 48 L60 48 L56 58 L50 52 L44 58 L40 48 L28 48 L34 38 L26 30 L38 28 L34 18 L45 22 Z" />
                  <path d="M30 46 Q50 48 70 46 Q68 76 50 88 Q32 76 30 46 Z" fill="#0c3825" stroke="#e2b43b" strokeWidth="3" />
                  <polygon points="50,56 53,64 61,64 55,69 57,77 50,72 43,77 45,69 39,64 47,64" fill="#ffd700" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-2xl font-black tracking-widest text-[#f5c518] block leading-none">
                  LIMORIA
                </span>
                <span className="text-xs text-emerald-200/90 font-medium">
                  {currentLang === 'bn' ? 'লিমোরিয়া সরকার' : 'Government of Limoria'}
                </span>
              </div>
            </div>

            <p className="font-playfair italic text-sm text-[#fce082] mb-4">
              "{currentLang === 'bn' ? 'একত্রে এক মহান লিমোরিয়া' : 'Together for a Greater Limoria'}"
            </p>

            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm mb-4">
              {currentLang === 'bn'
                ? 'লিমোরিয়া প্রজাতন্ত্রের রাষ্ট্রীয় তথ্য ও নাগরিক সেবা পোর্টাল। সকল তথ্য সরকারি আইন ও সংবিধান অনুযায়ী সংরক্ষিত।'
                : 'Official digital gateway for public administration, civic registration, state gazettes, and constitutional governance.'}
            </p>

            <button
              onClick={onOpenGitHubModal}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#082b1d] hover:bg-[#0f442e] border border-[#e2b43b]/40 text-[#f5c518] text-xs font-semibold cursor-pointer"
            >
              <span>GitHub Repository & Source Code</span>
            </button>
          </div>

          {/* Quick Links (approx 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#f5c518] mb-3">
              {currentLang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'হোম' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'পরিচিতি' : 'About'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'নাগরিক সেবা' : 'Services'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('regions')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? '৮টি অঞ্চল' : 'Regions (8)'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tourism')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'পর্যটন' : 'Tourism'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Useful Links (approx 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#f5c518] mb-3">
              {currentLang === 'bn' ? 'আইন ও পলিসি' : 'Useful Links'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'ব্যবহারের শর্তাবলী' : 'Terms & Conditions'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sitemap')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'সাইটম্যাপ' : 'Sitemap'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('help')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'হেল্প ডেস্ক' : 'Help & Support'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gazette')} className="hover:text-white transition-colors cursor-pointer">
                  {currentLang === 'bn' ? 'সরকারি গেজেট' : 'Official Gazette'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us from screenshot (approx 2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#f5c518] mb-3">
              {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/90">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f5c518] flex-shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f5c518] flex-shrink-0" />
                <span>info@limoria.gov.lm</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f5c518] flex-shrink-0" />
                <span>Limoria Capital</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#f5c518] flex-shrink-0" />
                <span>www.limoria.gov.lm</span>
              </li>
            </ul>

            <div className="mt-4">
              <h5 className="text-[11px] font-bold text-emerald-300 uppercase mb-2">
                Follow Us
              </h5>
              <div className="flex items-center gap-2 text-emerald-200">
                <span className="p-1.5 rounded-full bg-[#08291c] hover:bg-[#124b33] hover:text-[#f5c518] transition-colors cursor-pointer">
                  <Facebook className="w-3.5 h-3.5" />
                </span>
                <span className="p-1.5 rounded-full bg-[#08291c] hover:bg-[#124b33] hover:text-[#f5c518] transition-colors cursor-pointer">
                  <Twitter className="w-3.5 h-3.5" />
                </span>
                <span className="p-1.5 rounded-full bg-[#08291c] hover:bg-[#124b33] hover:text-[#f5c518] transition-colors cursor-pointer">
                  <Youtube className="w-3.5 h-3.5" />
                </span>
                <span className="p-1.5 rounded-full bg-[#08291c] hover:bg-[#124b33] hover:text-[#f5c518] transition-colors cursor-pointer">
                  <Instagram className="w-3.5 h-3.5" />
                </span>
                <span className="p-1.5 rounded-full bg-[#08291c] hover:bg-[#124b33] hover:text-[#f5c518] transition-colors cursor-pointer">
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Live Weather Widget & Back to Top (approx 1.5 - 2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-end justify-between h-full">
            
            {/* Weather Card matching screenshot (26°C Partly Cloudy) */}
            <div className="w-full sm:w-48 rounded-2xl bg-gradient-to-br from-[#0c3624] to-[#062015] border border-[#1c5d40] p-3 shadow-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-bold text-emerald-300">
                  Limoria Metro
                </span>
                <CloudSun className="w-4 h-4 text-[#f5c518]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-cinzel text-2xl font-bold text-white">26°C</span>
                <span className="text-xs text-emerald-200">Partly Cloudy</span>
              </div>
              <div className="mt-2 text-[10px] text-emerald-400/80 flex items-center justify-between pt-1 border-t border-[#144732]">
                <span>Air Quality: Good (18)</span>
                <span>Humidity: 62%</span>
              </div>
            </div>

            {/* Back to Top Floating Button */}
            <div className="mt-6 flex justify-end w-full">
              <button
                onClick={onScrollToTop}
                title="Back to Top"
                className="w-10 h-10 rounded-full bg-[#0c3926] hover:bg-[#155b3d] border-2 border-[#e2b43b] text-[#ffd700] flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & PWA Install */}
        <div className="pt-6 border-t border-[#164e37] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div>
            © 2025 Limoria Government. All rights reserved. | Developed with ❤️ for a better tomorrow.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onInstallPwa}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#082b1d] hover:bg-[#0f462f] border border-[#e2b43b]/40 text-[#f5c518] font-bold cursor-pointer shadow transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PWA Install App</span>
            </button>

            <span className="hidden sm:inline font-mono text-[11px] text-emerald-400">
              v2.5.0-gov
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
