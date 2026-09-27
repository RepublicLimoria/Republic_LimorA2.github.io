import { Printer, X, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ApplicationRecord, TaxRecord, AppointmentSlot } from '../types';

interface OfficialDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: 'permit' | 'tax' | 'appointment';
  data: unknown;
}

export function OfficialDocumentModal({
  isOpen,
  onClose,
  documentType,
  data,
}: OfficialDocumentModalProps) {
  if (!isOpen || !data) return null;

  const handlePrint = () => {
    window.print();
  };

  const appData = documentType === 'permit' ? (data as ApplicationRecord) : null;
  const taxData = documentType === 'tax' ? (data as TaxRecord) : null;
  const aptData = documentType === 'appointment' ? (data as AppointmentSlot) : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full border border-slate-400 overflow-hidden my-6">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">Official Municipal Document Viewer</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Document Body */}
        <div className="p-8 sm:p-10 text-slate-900 bg-white relative font-serif">
          {/* Subtle civic watermark background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
            <Landmark className="w-96 h-96" />
          </div>

          {/* Official Letterhead */}
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center border-2 border-amber-500 shrink-0">
                <Landmark className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-sans font-bold tracking-widest text-slate-600 uppercase block">
                  State of Columbia · Fairview County
                </span>
                <h1 className="text-xl font-bold tracking-tight text-slate-950 font-heading">
                  Fairview Municipal Administration
                </h1>
                <span className="text-xs font-sans text-slate-600">
                  Hall of Records, 100 Civic Plaza, Fairview, FC 97401
                </span>
              </div>
            </div>

            <div className="text-right font-sans text-xs">
              <div className="font-mono font-bold text-slate-900 text-sm">
                {appData?.trackingId || taxData?.receiptNumber || aptData?.confirmationCode}
              </div>
              <span className="text-slate-500 block text-[11px]">Official Issuance Date:</span>
              <span className="font-medium text-slate-800">September 27, 2026</span>
            </div>
          </div>

          {/* PERMIT DOCUMENT */}
          {appData && (
            <div className="space-y-6">
              <div className="text-center py-2 border-y border-slate-200">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500">
                  Official Department Determination & Intake Certificate
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {appData.type}
                </h2>
                <span className="text-xs font-sans text-emerald-800 font-semibold">
                  Status: {appData.currentStatus.toUpperCase().replace('_', ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-1">
                  <span className="text-slate-500 block">Applicant of Record:</span>
                  <span className="font-bold text-slate-900">{appData.applicantName}</span>
                  <span className="text-slate-600 block">{appData.applicantEmail}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Subject Real Property:</span>
                  <span className="font-bold text-slate-900">{appData.propertyAddress}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Filing Authority:</span>
                  <span className="font-semibold text-slate-800">{appData.department}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Statutory Filing Fee Paid:</span>
                  <span className="font-mono font-bold text-slate-900">${appData.feePaid.toFixed(2)} USD</span>
                </div>
              </div>

              {appData.notes && (
                <div className="bg-slate-50 p-4 rounded border border-slate-300 font-sans text-xs">
                  <strong className="block text-slate-900 mb-1">Administrative Endorsement:</strong>
                  <p className="text-slate-700 italic">{appData.notes}</p>
                </div>
              )}

              {/* Milestones in document */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
                  Certified Docket Milestones
                </h3>
                <div className="border border-slate-300 rounded font-sans text-xs divide-y divide-slate-200">
                  {appData.milestones.map((m, idx) => (
                    <div key={idx} className="p-2.5 flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-slate-800">{m.step}</span>
                        {m.officerNotes && (
                          <span className="block text-[11px] text-slate-500">{m.officerNotes}</span>
                        )}
                      </div>
                      <span className="font-mono text-slate-600 text-[11px]">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAX DOCUMENT */}
          {taxData && (
            <div className="space-y-6">
              <div className="text-center py-2 border-y border-slate-200">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-emerald-800">
                  County Treasurer Official Certified Tax Receipt
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  Real Property Tax Roll Year {taxData.taxYear}
                </h2>
                <span className="text-xs font-sans text-slate-600">
                  APN: <strong className="font-mono">{taxData.parcelId}</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-slate-500 block">Assessed Property Owner:</span>
                  <span className="font-bold text-slate-900">{taxData.ownerName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Assessed Address:</span>
                  <span className="font-bold text-slate-900">{taxData.propertyAddress}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Assessed Valuation:</span>
                  <span className="font-mono font-bold text-slate-900">${taxData.assessedValue.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Receipt Validation Number:</span>
                  <span className="font-mono font-bold text-blue-700">{taxData.receiptNumber || 'RCP-2026-88192'}</span>
                </div>
              </div>

              {/* Financial table */}
              <div className="border border-slate-300 rounded font-sans text-xs divide-y divide-slate-200">
                <div className="p-2.5 flex justify-between">
                  <span>Fairview County General Levy</span>
                  <span className="font-mono font-medium">${taxData.countyLevy.toFixed(2)}</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span>Unified School District Bond</span>
                  <span className="font-mono font-medium">${taxData.schoolDistrictLevy.toFixed(2)}</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span>Public Library & Literacy Trust</span>
                  <span className="font-mono font-medium">${taxData.libraryLevy.toFixed(2)}</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span>Emergency Fire & Paramedic Assessment</span>
                  <span className="font-mono font-medium">${taxData.emergencyServicesLevy.toFixed(2)}</span>
                </div>
                <div className="p-3 bg-slate-100 flex justify-between font-bold text-slate-950 text-sm">
                  <span>TOTAL AMOUNT SATISFIED (PAID IN FULL):</span>
                  <span className="font-mono text-emerald-800">${taxData.totalDue.toFixed(2)} USD</span>
                </div>
              </div>
            </div>
          )}

          {/* APPOINTMENT DOCUMENT */}
          {aptData && (
            <div className="space-y-6">
              <div className="text-center py-2 border-y border-slate-200">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-blue-800">
                  Fairview Civic Center Guaranteed Counter Pass
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {aptData.serviceType}
                </h2>
                <span className="text-xs font-sans text-slate-600">
                  {aptData.departmentName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-slate-500 block">Scheduled Date & Time:</span>
                  <span className="font-bold text-slate-900 text-sm">{aptData.date} at {aptData.time}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Pass Holder Legal Name:</span>
                  <span className="font-bold text-slate-900">{aptData.citizenName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Phone:</span>
                  <span className="font-mono">{aptData.citizenPhone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Check-In Desk:</span>
                  <span className="font-semibold text-slate-800">Civic Center Hall, West Pavilion Desk 4</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-300 text-xs font-sans space-y-2">
                <strong className="block font-semibold text-slate-900">Required Visitor Checklist:</strong>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Valid government-issued photo ID (Driver's license, Passport, or State ID card).</li>
                  <li>Printed copy or electronic screen of this pass code ({aptData.confirmationCode}).</li>
                  <li>Please arrive 10 minutes prior to scheduled counter window.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Official Verification Seal & Barcode Footer */}
          <div className="mt-10 pt-6 border-t-2 border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center p-1 text-center">
                <span className="text-[8px] font-bold uppercase text-slate-500 leading-tight">
                  OFFICIAL SEAL<br />FAIRVIEW<br />COUNTY
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                <span className="font-bold text-slate-800 block">Office of the County Registrar</span>
                <span>Digitally signed and recorded in official municipal archives.</span>
              </div>
            </div>

            {/* Simulated Barcode */}
            <div className="text-center">
              <div className="font-mono text-2xl tracking-[0.25em] text-slate-800 select-none">
                ||||| | |||| || ||||| | ||
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {appData?.trackingId || taxData?.receiptNumber || aptData?.confirmationCode}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer (Hidden on print) */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex justify-between items-center text-xs text-slate-500 no-print">
          <span>Official Public Record Document · Form FVR-2026-REV-4</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
