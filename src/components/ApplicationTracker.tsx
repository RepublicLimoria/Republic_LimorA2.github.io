import { useState, useEffect } from 'react';
import { ApplicationRecord } from '../types';
import { Search, CheckCircle2, Clock, AlertCircle, FileText, ArrowRight, Printer, User, MapPin } from 'lucide-react';

interface ApplicationTrackerProps {
  applications: ApplicationRecord[];
  initialSearchId?: string;
  onOpenDocumentModal: (docType: 'permit' | 'tax' | 'appointment', record: ApplicationRecord | unknown) => void;
  onNewApplication: () => void;
}

export function ApplicationTracker({
  applications,
  initialSearchId = '',
  onOpenDocumentModal,
  onNewApplication,
}: ApplicationTrackerProps) {
  const [searchInput, setSearchInput] = useState(initialSearchId || 'FVR-2026-8812');
  const [activeRecord, setActiveRecord] = useState<ApplicationRecord | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-search if initialSearchId is passed
  useEffect(() => {
    if (initialSearchId) {
      setSearchInput(initialSearchId);
      performSearch(initialSearchId);
    } else {
      performSearch('FVR-2026-8812');
    }
  }, [initialSearchId, applications]);

  const performSearch = (idToSearch: string) => {
    const cleanId = idToSearch.trim().toUpperCase();
    const found = applications.find(
      (app) => app.trackingId.toUpperCase() === cleanId || app.trackingId.toUpperCase().includes(cleanId)
    );
    if (found) {
      setActiveRecord(found);
      setErrorMsg('');
    } else {
      setActiveRecord(null);
      setErrorMsg(`No official application matching "${cleanId}" was found in municipal records.`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchInput);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="tracker-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Transparency & Status Verification
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Application & Permit Progress Tracker
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Track real-time departmental review milestones, inspect municipal officer findings, and access official certificates.
          </p>
        </div>

        <button
          onClick={onNewApplication}
          className="self-start md:self-auto px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Submit New Application</span>
        </button>
      </div>

      {/* Search Bar & Sample ID Picker */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs mb-8">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter Application Tracking ID (e.g. FVR-2026-8812)"
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
          >
            Lookup Record
          </button>
        </form>

        {/* Quick sample click buttons */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span>Quick check samples:</span>
          {applications.slice(0, 3).map((app) => (
            <button
              key={app.trackingId}
              type="button"
              onClick={() => {
                setSearchInput(app.trackingId);
                performSearch(app.trackingId);
              }}
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-300 cursor-pointer"
            >
              {app.trackingId} ({app.currentStatus.replace('_', ' ')})
            </button>
          ))}
        </div>

        {errorMsg && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Active Application Record Display */}
      {activeRecord && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-mono font-bold text-slate-900 text-sm">
                    {activeRecord.trackingId}
                  </span>
                  <span>·</span>
                  <span>Filing Date: {activeRecord.submittedDate}</span>
                  <span>·</span>
                  <span className="font-medium text-slate-700">{activeRecord.department}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {activeRecord.type}
                </h3>
              </div>

              {/* Status Badge & Document Action */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded border ${
                    activeRecord.currentStatus === 'issued'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : activeRecord.currentStatus === 'zoning_review'
                      ? 'bg-blue-50 text-blue-800 border-blue-300'
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}
                >
                  Status: {activeRecord.currentStatus.replace('_', ' ')}
                </span>

                <button
                  onClick={() => onOpenDocumentModal('permit', activeRecord)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span>Official Notice PDF</span>
                </button>
              </div>
            </div>

            {/* Applicant & Site Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Applicant of Record</span>
                  <span className="font-semibold text-slate-900">{activeRecord.applicantName}</span>
                  <span className="text-slate-500 block text-[11px]">{activeRecord.applicantEmail}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Property Location</span>
                  <span className="font-semibold text-slate-900">{activeRecord.propertyAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Estimated Determination</span>
                  <span className="font-semibold text-slate-900">{activeRecord.estimatedCompletion}</span>
                  <span className="text-[11px] text-emerald-700 block font-medium">Statutory Fee Paid: ${activeRecord.feePaid.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {activeRecord.notes && (
              <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700">
                <strong className="font-semibold text-slate-900">Current Officer Case Notes: </strong>
                {activeRecord.notes}
              </div>
            )}
          </div>

          {/* Review Milestones Timeline */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-6 font-heading flex items-center justify-between">
              <span>Departmental Review Milestones</span>
              <span className="text-xs font-normal text-slate-500">Subject to Title 24 Municipal Codes</span>
            </h4>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {activeRecord.milestones.map((milestone, idx) => {
                const isDone = milestone.status === 'completed';
                const isCurrent = milestone.status === 'in_progress';

                return (
                  <div key={idx} className="relative group">
                    {/* Bullet marker */}
                    <div
                      className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                        isDone
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : isCurrent
                          ? 'bg-blue-600 border-blue-600 text-white animate-pulse'
                          : 'bg-white border-slate-300 text-transparent'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="text-sm font-semibold text-slate-900">
                        {milestone.step}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {milestone.date}
                      </span>
                    </div>

                    {milestone.officerNotes ? (
                      <p className="text-xs text-slate-600 mt-1 bg-slate-50 p-2.5 rounded border border-slate-200/80">
                        <strong className="text-slate-800">Inspector Finding:</strong> {milestone.officerNotes}
                      </p>
                    ) : (
                      <span className="text-xs text-slate-400 mt-0.5 block italic">
                        {isDone ? 'Phase approved without exception' : 'Awaiting docket progression'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
