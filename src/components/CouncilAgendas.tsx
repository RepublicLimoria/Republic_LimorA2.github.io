import { useState } from 'react';
import { COUNCIL_MEETINGS, ENACTED_ORDINANCES } from '../data/civicData';
import { CouncilMeeting, OrdinanceRecord } from '../types';
import { Calendar, Video, FileText, MessageSquare, Check, X, Shield, BookOpen } from 'lucide-react';

export function CouncilAgendas() {
  const [activeTab, setActiveTab] = useState<'meetings' | 'ordinances'>('meetings');
  const [commentModalMeeting, setCommentModalMeeting] = useState<CouncilMeeting | null>(null);
  const [selectedOrdinance, setSelectedOrdinance] = useState<OrdinanceRecord | null>(null);

  // Comment state
  const [citizenName, setCitizenName] = useState('');
  const [citizenDistrict, setCitizenDistrict] = useState('District 2');
  const [selectedAgendaItem, setSelectedAgendaItem] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleOpenComment = (meeting: CouncilMeeting) => {
    setCommentModalMeeting(meeting);
    setSelectedAgendaItem(meeting.agendaItems[0]?.itemNumber || '');
    setCommentSubmitted(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommentSubmitted(true);
    setTimeout(() => {
      setCommentModalMeeting(null);
      setCommentSubmitted(false);
      setCommentText('');
      alert('Your official public comment has been recorded into the council minute clerk record.');
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="council-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Democratic Governance & Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            City Council Hearings & Municipal Ordinances
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Access official legislative agendas, participate through verified public comments, and review enacted municipal statutes.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg">
          <button
            onClick={() => setActiveTab('meetings')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'meetings'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Council Meetings ({COUNCIL_MEETINGS.length})
          </button>
          <button
            onClick={() => setActiveTab('ordinances')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'ordinances'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Municipal Ordinances Archive
          </button>
        </div>
      </div>

      {/* MEETINGS TAB */}
      {activeTab === 'meetings' && (
        <div className="space-y-6">
          {COUNCIL_MEETINGS.map((meeting) => (
            <div
              key={meeting.id}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5"
            >
              {/* Meeting Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {meeting.status}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{meeting.date}</span>
                    </span>
                    <span>·</span>
                    <span>{meeting.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {meeting.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Location: <strong>{meeting.location}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {meeting.streamAvailable && (
                    <button
                      onClick={() => alert('Fairview City Council Chambers Live Broadcast will commence 15 minutes prior to scheduled gavel.')}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-semibold border border-slate-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5 text-red-600" />
                      <span>Live Stream Link</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleOpenComment(meeting)}
                    className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Submit Public Comment</span>
                  </button>
                </div>
              </div>

              {/* Agenda Items List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Published Legislative Docket & Consideration Items
                </h4>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-md overflow-hidden">
                  {meeting.agendaItems.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50/50 hover:bg-white transition-colors text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-mono font-bold text-blue-900 text-xs">
                          {item.itemNumber}: {item.topic}
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          Sponsor: <strong>{item.sponsor}</strong>
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                      {item.ordinanceRef && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-[11px] text-slate-500">Related Statute:</span>
                          <span className="font-mono text-[11px] font-semibold text-slate-800 bg-slate-200/80 px-2 py-0.5 rounded">
                            {item.ordinanceRef}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ORDINANCES ARCHIVE TAB */}
      {activeTab === 'ordinances' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Enacted Municipal Ordinances
            </span>
            {ENACTED_ORDINANCES.map((ord) => (
              <div
                key={ord.id}
                onClick={() => setSelectedOrdinance(ord)}
                className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                  selectedOrdinance?.id === ord.id
                    ? 'border-blue-700 bg-blue-50/50 shadow-xs ring-1 ring-blue-700'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center text-[11px] text-slate-500 mb-1">
                  <span className="font-mono font-semibold text-slate-800">{ord.code}</span>
                  <span className="text-emerald-700 font-semibold">{ord.status}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{ord.title}</h4>
                <span className="text-[11px] text-slate-500 mt-1 block">Passed: {ord.passedDate}</span>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            {selectedOrdinance ? (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono font-bold text-blue-700">{selectedOrdinance.code}</span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {selectedOrdinance.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span>Enacted: {selectedOrdinance.passedDate}</span>
                    <span>·</span>
                    <span>Administering Bureau: {selectedOrdinance.department}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-xs text-slate-800 mb-1">Legislative Summary</h5>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
                    {selectedOrdinance.summary}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-xs text-slate-800 mb-1">Codified Statutory Language</h5>
                  <pre className="text-xs text-slate-700 bg-slate-100 p-4 rounded border border-slate-200 font-mono whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                    {selectedOrdinance.fullText}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-lg p-10 text-center text-slate-500 text-xs">
                Select any enacted ordinance on the left to review certified legal statutory text.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Citizen Public Comment Submission Modal */}
      {commentModalMeeting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full border border-slate-300 overflow-hidden">
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Official Public Hearing Testimony</h3>
              </div>
              <button
                onClick={() => setCommentModalMeeting(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCommentSubmit} className="p-6 space-y-4 text-xs">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded text-blue-900 space-y-1">
                <strong className="block font-semibold">Council Hearing:</strong>
                <span>{commentModalMeeting.title} ({commentModalMeeting.date})</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Agenda Item *</label>
                <select
                  value={selectedAgendaItem}
                  onChange={(e) => setSelectedAgendaItem(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {commentModalMeeting.agendaItems.map((item, i) => (
                    <option key={i} value={item.itemNumber}>
                      {item.itemNumber}: {item.topic}
                    </option>
                  ))}
                  <option value="General Public Comment">General Public Comment (Not on Agenda)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Sanchez"
                    value={citizenName}
                    onChange={(e) => setCitizenName(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Supervisorial District</label>
                  <select
                    value={citizenDistrict}
                    onChange={(e) => setCitizenDistrict(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="District 1">District 1 (Downtown / Waterfront)</option>
                    <option value="District 2">District 2 (North Foothills / Oakridge)</option>
                    <option value="District 3">District 3 (East Valley / Industrial)</option>
                    <option value="District 4">District 4 (South Basin / Agriculture)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Written Statement / Public Testimony (Max 500 words) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="State your support, opposition, or civic recommendations for the council record..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-600 flex items-start gap-2">
                <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Pursuant to the State Open Meeting Act, written testimony submitted becomes a permanent part of the official public record and published council minutes.
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setCommentModalMeeting(null)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={commentSubmitted}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{commentSubmitted ? 'Filing into Docket...' : 'Submit to Council Clerk'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
