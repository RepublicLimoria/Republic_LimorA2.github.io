import { useState } from 'react';
import { TaxRecord, CitationRecord } from '../types';
import { Search, CreditCard, CheckCircle, ShieldCheck, Download, Printer, Landmark, AlertCircle } from 'lucide-react';

interface TaxPaymentPortalProps {
  taxRecords: TaxRecord[];
  citationRecords: CitationRecord[];
  onPaymentSuccess: (updatedTaxRecord: TaxRecord) => void;
  onOpenDocumentModal: (docType: 'permit' | 'tax' | 'appointment', record: TaxRecord | unknown) => void;
}

export function TaxPaymentPortal({
  taxRecords,
  citationRecords,
  onPaymentSuccess,
  onOpenDocumentModal,
}: TaxPaymentPortalProps) {
  const [activeTab, setActiveTab] = useState<'property' | 'citations'>('property');
  const [propertyQuery, setPropertyQuery] = useState('084-219-004');
  const [citationQuery, setCitationQuery] = useState('CIT-2026-9041');

  const [matchedTax, setMatchedTax] = useState<TaxRecord | null>(taxRecords[0] || null);
  const [matchedCitation, setMatchedCitation] = useState<CitationRecord | null>(citationRecords[0] || null);

  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'ach' | 'card'>('ach');
  const [isProcessing, setIsProcessing] = useState(false);
  const [payerName, setPayerName] = useState('Sarah Jenkins');
  const [payerEmail, setPayerEmail] = useState('s.jenkins@example.com');
  const [paymentSuccessNotice, setPaymentSuccessNotice] = useState(false);

  const handlePropertySearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = propertyQuery.trim().toLowerCase();
    const match = taxRecords.find(
      (r) =>
        r.parcelId.toLowerCase().includes(query) ||
        r.propertyAddress.toLowerCase().includes(query) ||
        r.ownerName.toLowerCase().includes(query)
    );
    setMatchedTax(match || null);
  };

  const handleCitationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = citationQuery.trim().toLowerCase();
    const match = citationRecords.find(
      (c) =>
        c.citationNumber.toLowerCase().includes(query) ||
        c.licensePlate.toLowerCase().includes(query)
    );
    setMatchedCitation(match || null);
  };

  const handleExecutePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matchedTax) return;

    setIsProcessing(true);
    setTimeout(() => {
      const receiptNo = `RCP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      const updated: TaxRecord = {
        ...matchedTax,
        isPaid: true,
        paidDate: '2026-09-27',
        receiptNumber: receiptNo,
      };

      onPaymentSuccess(updated);
      setMatchedTax(updated);
      setIsProcessing(false);
      setPaymentModalOpen(false);
      setPaymentSuccessNotice(true);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="taxes-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Office of the County Treasurer & Tax Collector
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Taxes, Assessments & Citations Portal
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Search official secured property tax rolls, inspect tax distribution levies, and satisfy municipal payments with official receipts.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg">
          <button
            onClick={() => setActiveTab('property')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'property'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Real Property Tax
          </button>
          <button
            onClick={() => setActiveTab('citations')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              activeTab === 'citations'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Parking & Traffic Citations
          </button>
        </div>
      </div>

      {paymentSuccessNotice && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <strong className="block font-semibold">Payment Successful & Certified</strong>
              <span>
                Transaction certified under Official Treasury Receipt #{matchedTax?.receiptNumber}. Official seal stamp applied.
              </span>
            </div>
          </div>
          <button
            onClick={() => onOpenDocumentModal('tax', matchedTax)}
            className="px-3 py-1.5 bg-emerald-700 text-white rounded font-medium hover:bg-emerald-800 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Official Receipt</span>
          </button>
        </div>
      )}

      {/* PROPERTY TAX SECTION */}
      {activeTab === 'property' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
            <form onSubmit={handlePropertySearch} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={propertyQuery}
                  onChange={(e) => setPropertyQuery(e.target.value)}
                  placeholder="Search by Parcel ID (e.g. 084-219-004) or Street Address"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Lookup Tax Bill
              </button>
            </form>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>Sample parcels:</span>
              <button
                onClick={() => {
                  setPropertyQuery('084-219-004');
                  setMatchedTax(taxRecords[0]);
                }}
                className="font-mono text-blue-700 underline cursor-pointer"
              >
                084-219-004 (Unpaid)
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setPropertyQuery('102-440-019');
                  setMatchedTax(taxRecords[1]);
                }}
                className="font-mono text-blue-700 underline cursor-pointer"
              >
                102-440-019 (Paid)
              </button>
            </div>
          </div>

          {matchedTax ? (
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-mono font-bold text-slate-900 text-sm">
                      APN: {matchedTax.parcelId}
                    </span>
                    <span>·</span>
                    <span>Tax Roll Year: {matchedTax.taxYear}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {matchedTax.propertyAddress}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Assessed Owner: <strong>{matchedTax.ownerName}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {matchedTax.isPaid ? (
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>PAID IN FULL</span>
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-1">
                        Paid: {matchedTax.paidDate}
                      </span>
                    </div>
                  ) : (
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                        <span>PAYMENT DUE</span>
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-1">
                        Due Date: {matchedTax.dueDate}
                      </span>
                    </div>
                  )}

                  {matchedTax.isPaid && (
                    <button
                      onClick={() => onOpenDocumentModal('tax', matchedTax)}
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium border border-slate-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Receipt</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Assessment Value Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs bg-slate-50 p-4 rounded-md border border-slate-200">
                <div>
                  <span className="text-slate-500 block">Total Assessed Value</span>
                  <span className="text-base font-bold font-mono text-slate-900">
                    ${matchedTax.assessedValue.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Land Valuation</span>
                  <span className="text-base font-semibold font-mono text-slate-800">
                    ${Math.round(matchedTax.assessedValue * 0.4).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Improvement Valuation</span>
                  <span className="text-base font-semibold font-mono text-slate-800">
                    ${Math.round(matchedTax.assessedValue * 0.6).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Delinquency Penalty</span>
                  <span className="text-base font-semibold font-mono text-emerald-700">
                    $0.00 (Current)
                  </span>
                </div>
              </div>

              {/* Tax Distribution Breakdown Table */}
              <div className="border border-slate-200 rounded-md overflow-hidden text-xs">
                <div className="bg-slate-100 px-4 py-2 font-semibold text-slate-800 border-b border-slate-200 flex justify-between">
                  <span>Authorized Taxing Authority / Levy Item</span>
                  <span>Calculated Amount</span>
                </div>
                <div className="divide-y divide-slate-100 p-4 space-y-2">
                  <div className="flex justify-between text-slate-700">
                    <div>
                      <span className="font-medium">Fairview County General Operating Fund (1.0%)</span>
                      <span className="block text-[11px] text-slate-500">Public administration, law enforcement, and courts</span>
                    </div>
                    <span className="font-mono font-medium">${matchedTax.countyLevy.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-slate-700 pt-2">
                    <div>
                      <span className="font-medium">Fairview Unified School District Bond Levy</span>
                      <span className="block text-[11px] text-slate-500">K-12 public facilities and teacher endowment</span>
                    </div>
                    <span className="font-mono font-medium">${matchedTax.schoolDistrictLevy.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-slate-700 pt-2">
                    <div>
                      <span className="font-medium">Municipal Public Library & Literacy Trust</span>
                      <span className="block text-[11px] text-slate-500">County branch maintenance and digital access</span>
                    </div>
                    <span className="font-mono font-medium">${matchedTax.libraryLevy.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-slate-700 pt-2">
                    <div>
                      <span className="font-medium">Emergency Fire & Paramedic Service Assessment</span>
                      <span className="block text-[11px] text-slate-500">Fairview Fire Protection District</span>
                    </div>
                    <span className="font-mono font-medium">${matchedTax.emergencyServicesLevy.toFixed(2)}</span>
                  </div>

                  <div className="pt-3 border-t-2 border-slate-200 flex justify-between items-center text-sm font-bold text-slate-900">
                    <span>Total Secured Property Tax Assessment</span>
                    <span className="font-mono text-base text-blue-900">${matchedTax.totalDue.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {!matchedTax.isPaid && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-sm transition-colors"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Property Tax (${matchedTax.totalDue.toFixed(2)})</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-lg p-8 text-center text-slate-600 text-xs">
              No matching property tax record found. Please verify the APN or Street Address.
            </div>
          )}
        </div>
      )}

      {/* CITATIONS SECTION */}
      {activeTab === 'citations' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
            <form onSubmit={handleCitationSearch} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={citationQuery}
                  onChange={(e) => setCitationQuery(e.target.value)}
                  placeholder="Enter Citation # (e.g. CIT-2026-9041) or Vehicle License Plate"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Find Citation
              </button>
            </form>
          </div>

          {matchedCitation ? (
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-900">{matchedCitation.citationNumber}</span>
                  <h4 className="text-base font-bold text-slate-800">{matchedCitation.description}</h4>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    matchedCitation.isPaid ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {matchedCitation.isPaid ? 'PAID' : 'UNPAID'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">License Plate</span>
                  <span className="font-mono font-semibold text-slate-900">{matchedCitation.licensePlate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Violation Location</span>
                  <span className="font-semibold text-slate-900">{matchedCitation.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Fine Amount</span>
                  <span className="font-mono font-bold text-slate-900">${matchedCitation.amount.toFixed(2)}</span>
                </div>
              </div>

              {!matchedCitation.isPaid && (
                <div className="pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => {
                      alert(`Simulated payment for citation ${matchedCitation.citationNumber} processed.`);
                      setMatchedCitation({ ...matchedCitation, isPaid: true });
                    }}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold cursor-pointer"
                  >
                    Pay Citation Fine (${matchedCitation.amount.toFixed(2)})
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-lg p-8 text-center text-slate-600 text-xs">
              No matching citation found.
            </div>
          )}
        </div>
      )}

      {/* Secure Payment Modal */}
      {paymentModalOpen && matchedTax && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full border border-slate-300 overflow-hidden">
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Authorized Treasury Payment Processing</h3>
              </div>
              <button
                onClick={() => setPaymentModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleExecutePayment} className="p-6 space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Parcel ID:</span>
                  <span className="font-mono font-semibold text-slate-900">{matchedTax.parcelId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Property Address:</span>
                  <span className="font-semibold text-slate-900">{matchedTax.propertyAddress}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-200 font-bold text-sm">
                  <span>Total Due:</span>
                  <span className="font-mono text-emerald-700">${matchedTax.totalDue.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('ach')}
                    className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                      paymentMethod === 'ach'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="block text-xs font-bold">eCheck (ACH)</span>
                    <span className="text-[10px] text-slate-500">Zero surcharge</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="block text-xs font-bold">Credit / Debit</span>
                    <span className="text-[10px] text-slate-500">1.8% merchant convenience fee</span>
                  </button>
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Payer Legal Full Name</label>
                  <input
                    type="text"
                    required
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Receipt Notification Email</label>
                  <input
                    type="email"
                    required
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                {paymentMethod === 'ach' ? (
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Routing Number (ABA)</label>
                      <input
                        type="text"
                        defaultValue="121000358"
                        className="w-full p-2 bg-white border border-slate-300 rounded font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Checking Account #</label>
                      <input
                        type="text"
                        defaultValue="••••••••8492"
                        className="w-full p-2 bg-white border border-slate-300 rounded font-mono"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        defaultValue="4111 2222 3333 4444"
                        className="w-full p-2 bg-white border border-slate-300 rounded font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Exp Date</label>
                        <input
                          type="text"
                          defaultValue="10/28"
                          className="w-full p-2 bg-white border border-slate-300 rounded font-mono"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Security Code (CVV)</label>
                        <input
                          type="text"
                          defaultValue="891"
                          className="w-full p-2 bg-white border border-slate-300 rounded font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-100 rounded text-[11px] text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized payment handled in compliance with Government Security Standard PCI-DSS Level 1.</span>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  {isProcessing ? 'Certifying Payment...' : `Authorize Payment ($${matchedTax.totalDue.toFixed(2)})`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
