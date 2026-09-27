import { useState } from 'react';
import { DEPARTMENTS } from '../data/civicData';
import { DepartmentInfo, AppointmentSlot } from '../types';
import { Users, Phone, Mail, Clock, MapPin, Calendar, Check, X, Printer, CalendarCheck } from 'lucide-react';

interface AppointmentsBookingProps {
  onOpenDocumentModal: (docType: 'permit' | 'tax' | 'appointment', record: unknown) => void;
}

export function AppointmentsBooking({ onOpenDocumentModal }: AppointmentsBookingProps) {
  const [selectedDept, setSelectedDept] = useState<DepartmentInfo | null>(null);
  const [activeTab, setActiveTab] = useState<'directory' | 'schedule'>('directory');

  // Booking Form State
  const [bookingDeptId, setBookingDeptId] = useState(DEPARTMENTS[0].id);
  const [serviceNeeded, setServiceNeeded] = useState(DEPARTMENTS[0].servicesOffered[0]);
  const [selectedDate, setSelectedDate] = useState('2026-10-02');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [citizenName, setCitizenName] = useState('');
  const [citizenEmail, setCitizenEmail] = useState('');
  const [citizenPhone, setCitizenPhone] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentSlot | null>(null);

  const availableSlots = ['09:00 AM', '10:00 AM', '11:15 AM', '01:30 PM', '02:45 PM', '03:30 PM'];

  const currentBookingDept = DEPARTMENTS.find((d) => d.id === bookingDeptId) || DEPARTMENTS[0];

  const handleStartBookingForDept = (dept: DepartmentInfo) => {
    setBookingDeptId(dept.id);
    setServiceNeeded(dept.servicesOffered[0]);
    setActiveTab('schedule');
    setConfirmedBooking(null);
  };

  const handleConfirmAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `APT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newAppointment: AppointmentSlot = {
      id: code,
      departmentId: currentBookingDept.id,
      departmentName: currentBookingDept.name,
      serviceType: serviceNeeded,
      date: selectedDate,
      time: selectedTime,
      citizenName: citizenName || 'Citizen Visitor',
      citizenEmail: citizenEmail || 'visitor@example.com',
      citizenPhone: citizenPhone || '(555) 019-0000',
      status: 'Confirmed',
      confirmationCode: code,
    };

    setConfirmedBooking(newAppointment);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="directory-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Fairview Civic Center Administration
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Department Directory & Counter Appointments
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Direct municipal agency contact information, operating counter hours, and guaranteed express appointment reservations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg">
          <button
            onClick={() => {
              setActiveTab('directory');
              setConfirmedBooking(null);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'directory'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Agency Directory
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'schedule'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Book Counter Appointment
          </button>
        </div>
      </div>

      {activeTab === 'directory' ? (
        /* Department Directory Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between hover:border-slate-400 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {dept.name}
                  </h3>
                  <button
                    onClick={() => handleStartBookingForDept(dept)}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded text-[11px] font-semibold border border-blue-200 shrink-0 cursor-pointer"
                  >
                    Book Counter Slot
                  </button>
                </div>

                <p className="text-xs text-slate-500 mb-3">
                  Executive: <strong>{dept.headOfficer}</strong>
                </p>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{dept.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{dept.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-slate-900 font-medium">{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-blue-700">{dept.email}</span>
                  </div>
                </div>

                {/* Key Services Offered */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Authorized Agency Services:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                    {dept.servicesOffered.map((svc, i) => (
                      <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Appointment Scheduler */
        confirmedBooking ? (
          <div className="bg-white border border-slate-200 rounded-lg p-8 max-w-xl mx-auto shadow-sm text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CalendarCheck className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase text-emerald-800 bg-emerald-50 px-3 py-0.5 rounded border border-emerald-200">
                Guaranteed Counter Appointment Confirmed
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 font-heading">
                Fairview Civic Center Pass Issued
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Please bring a government photo ID and your appointment confirmation code.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Code:</span>
                <span className="font-mono font-bold text-blue-700">{confirmedBooking.confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.departmentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-semibold text-slate-900">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Visitor:</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.citizenName}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <button
                onClick={() => onOpenDocumentModal('appointment', confirmedBooking)}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Confirmation Pass</span>
              </button>
              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  setActiveTab('directory');
                }}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded text-xs font-semibold cursor-pointer"
              >
                Return to Directory
              </button>
            </div>
          </div>
        ) : (
          /* Scheduler Form */
          <form onSubmit={handleConfirmAppointment} className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Schedule Guaranteed Service Counter Appointment
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Skip standard waiting queues at the Fairview County Courthouse or City Hall.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Target Department *</label>
                <select
                  value={bookingDeptId}
                  onChange={(e) => {
                    const newId = e.target.value;
                    setBookingDeptId(newId);
                    const dept = DEPARTMENTS.find((d) => d.id === newId);
                    if (dept) setServiceNeeded(dept.servicesOffered[0]);
                  }}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Specific Service Required *</label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {currentBookingDept.servicesOffered.map((svc, i) => (
                    <option key={i} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Appointment Date *</label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min="2026-09-28"
                  max="2026-11-30"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Available Counter Slot *</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
                >
                  {availableSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot} (Available)
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-800 block mb-2">Citizen Contact Details</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Rigby"
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Contact Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={citizenEmail}
                  onChange={(e) => setCitizenEmail(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Telephone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 019-3300"
                  value={citizenPhone}
                  onChange={(e) => setCitizenPhone(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Confirm Appointment Booking</span>
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
}
