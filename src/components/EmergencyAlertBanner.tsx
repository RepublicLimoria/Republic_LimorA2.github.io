import { useState } from 'react';
import { AlertTriangle, ChevronRight, X, PhoneCall, MapPin } from 'lucide-react';

export function EmergencyAlertBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div className="bg-amber-600 text-slate-950 font-medium px-4 py-2 border-b border-amber-700 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="p-1 bg-amber-950 text-amber-200 rounded shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <span>
              <strong>Civic Weather Advisory:</strong> High Wind & Fire Hazard Watch in Sector 4 & East Foothills. Cooling & air-filtration shelters activated at Civic Community Center.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1 font-semibold text-slate-950 underline underline-offset-2 hover:text-black cursor-pointer text-xs"
            >
              <span>View Shelter Map & Instructions</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-slate-800 hover:text-black hover:bg-amber-500/50 rounded cursor-pointer transition-colors"
              aria-label="Dismiss alert banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full border border-slate-300 overflow-hidden">
            <div className="bg-amber-600 text-slate-950 p-4 flex items-center justify-between border-b border-amber-700">
              <div className="flex items-center gap-2 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-slate-950" />
                <span>Fairview Emergency Management Agency (FEMA) Advisory</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-900 hover:text-black p-1 rounded hover:bg-amber-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Active Hazard Advisory — September 27, 2026
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  The National Weather Service and Fairview Fire Department have placed northern and eastern sectors of the county under an elevated fire hazard watch due to sustained 38mph dry wind gusts.
                </p>
              </div>

              <div className="border border-slate-200 rounded-md p-4 bg-slate-50 space-y-3">
                <h5 className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Designated County Cooling & Air-Filtration Centers</span>
                </h5>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="font-medium text-slate-800">Fairview Civic Auditorium (Main Hall)</span>
                    <span>100 Civic Plaza · Open 24 Hours</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="font-medium text-slate-800">East Valley Senior Recreation Center</span>
                    <span>4200 Sunburst Ave · Open 8:00 AM – 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-slate-800">North Shore Regional Library</span>
                    <span>810 Shoreline Pkwy · Open 9:00 AM – 8:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs border-t border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <PhoneCall className="w-4 h-4 text-blue-700" />
                  <span>Emergency Operation Center Hotline: <strong>(555) 019-HELP</strong></span>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded font-medium cursor-pointer"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
