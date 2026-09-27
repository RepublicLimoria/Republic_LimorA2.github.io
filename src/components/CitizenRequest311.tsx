import { useState } from 'react';
import { Ticket311 } from '../types';
import { INITIAL_311_TICKETS } from '../data/civicData';
import { AlertCircle, MapPin, Camera, CheckCircle2, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

export function CitizenRequest311() {
  const [tickets, setTickets] = useState<Ticket311[]>(INITIAL_311_TICKETS);
  const [activeTab, setActiveTab] = useState<'report' | 'track'>('report');

  // Form State
  const [category, setCategory] = useState('Road & Street Infrastructure');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'standard' | 'urgent'>('standard');
  const [contactEmail, setContactEmail] = useState('');
  const [photoAdded, setPhotoAdded] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<Ticket311 | null>(null);

  const issueCategories = [
    { name: 'Road & Street Infrastructure', dept: 'Public Works - Pavement Division' },
    { name: 'Traffic Signals & Street Lighting', dept: 'Division of Traffic Engineering' },
    { name: 'Graffiti Abatement & Vandalism', dept: 'Neighborhood Preservation Office' },
    { name: 'Illegal Waste & Bulk Dumping', dept: 'Bureau of Sanitation & Environmental Services' },
    { name: 'Parks & Public Recreation Facilities', dept: 'Parks and Recreational Facilities Management' },
    { name: 'Tree Hazard & Overhanging Limbs', dept: 'Urban Forestry Division' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `311-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const selectedDept = issueCategories.find((c) => c.name === category)?.dept || 'Public Works';

    const newTicket: Ticket311 = {
      ticketId: newId,
      category,
      description: description || 'Citizen reported community maintenance request.',
      address: address || 'Fairview Municipal District',
      priority,
      status: 'Dispatched',
      reportedDate: '2026-09-27',
      assignedDepartment: selectedDept,
      resolutionEstimate: priority === 'urgent' ? 'Within 4-8 hours' : 'Within 48-72 hours',
    };

    setTickets([newTicket, ...tickets]);
    setSubmittedTicket(newTicket);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="311-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Fairview 311 Citizen Assistance Center
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Report a Non-Emergency Community Issue
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Submit public works maintenance requests, street light outages, potholes, and neighborhood safety concerns directly to municipal work crews.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg">
          <button
            onClick={() => {
              setActiveTab('report');
              setSubmittedTicket(null);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'report' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            File New Report
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'track' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Recent City Reports ({tickets.length})
          </button>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2.5 text-xs text-red-900">
        <ShieldAlert className="w-4 h-4 text-red-700 shrink-0" />
        <span>
          <strong>Emergency Warning:</strong> 311 is strictly for non-emergencies. If this involves active criminal conduct, a structure fire, gas leak, or immediate life threat, call <strong>911</strong> immediately.
        </span>
      </div>

      {activeTab === 'report' ? (
        submittedTicket ? (
          /* Confirmation View */
          <div className="bg-white border border-slate-200 rounded-lg p-8 text-center max-w-xl mx-auto shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase text-emerald-800 bg-emerald-50 px-3 py-0.5 rounded border border-emerald-200">
                Ticket Dispatched to Work Crew
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 font-heading">
                311 Service Request Recorded
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Your report has been logged into the municipal GIS dispatch system.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Service Ticket ID:</span>
                <span className="font-mono font-bold text-blue-700">{submittedTicket.ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Category:</span>
                <span className="font-semibold text-slate-800">{submittedTicket.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">{submittedTicket.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dispatched Agency:</span>
                <span className="font-semibold text-slate-800">{submittedTicket.assignedDepartment}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5 font-medium text-slate-900">
                <span>Estimated Target Resolution:</span>
                <span className="text-emerald-700 font-bold">{submittedTicket.resolutionEstimate}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmittedTicket(null);
                  setAddress('');
                  setDescription('');
                  setPhotoAdded(false);
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Submit Another 311 Report
              </button>
              <button
                onClick={() => setActiveTab('track')}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded text-xs font-semibold cursor-pointer"
              >
                View Citywide Queue
              </button>
            </div>
          </div>
        ) : (
          /* Report Form */
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">File a Community Service Request</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Provide accurate location coordinates and issue description to accelerate municipal response.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Issue Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {issueCategories.map((c, i) => (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Estimated Urgency Level</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as 'low' | 'standard' | 'urgent')}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option value="standard">Standard Priority (Normal Maintenance)</option>
                  <option value="urgent">High Urgency (Traffic or Public Hazard)</option>
                  <option value="low">Low Urgency (Cosmetic / Routine Cleanup)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Location / Nearest Cross Street or Landmark *
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 520 Elm Street, near intersection with 4th Ave"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setAddress('100 Civic Center Plaza, Fairview, FC 97401')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-slate-700 font-medium whitespace-nowrap cursor-pointer"
                  >
                    Use Sample Location
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Detailed Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe dimensions, exact side of the road, nearby mile markers, or obstruction hazards..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Your Email (for resolution updates)
                </label>
                <input
                  type="email"
                  placeholder="resident@example.com (Optional)"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Attach Photo Evidence</label>
                <button
                  type="button"
                  onClick={() => setPhotoAdded(!photoAdded)}
                  className={`w-full p-2.5 rounded border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    photoAdded
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                      : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>{photoAdded ? 'Photo Attached (site_inspection_01.jpg)' : 'Upload Site Photo (Optional)'}</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              >
                <span>Submit 311 Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )
      ) : (
        /* Track All 311 Tickets */
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 font-semibold text-xs text-slate-700 flex justify-between">
            <span>Fairview Municipal Work Orders Docket</span>
            <span>Real-Time Public Works Queue</span>
          </div>
          <div className="divide-y divide-slate-100">
            {tickets.map((t) => (
              <div key={t.ticketId} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{t.ticketId}</span>
                    <span>·</span>
                    <span className="font-semibold text-slate-800">{t.category}</span>
                    <span>·</span>
                    <span className="text-slate-500">{t.reportedDate}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{t.description}</p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.address}</span>
                    <span>— Assigned to: <strong>{t.assignedDepartment}</strong></span>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                      t.status === 'Resolved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : t.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {t.status}
                  </span>
                  <span className="block text-[11px] text-slate-500 mt-1">
                    Est. Resolution: {t.resolutionEstimate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
