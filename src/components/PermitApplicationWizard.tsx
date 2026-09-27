import { useState } from 'react';
import { ApplicationRecord } from '../types';
import { Check, ArrowRight, ArrowLeft, Upload, FileCheck, Shield, AlertCircle } from 'lucide-react';

interface PermitApplicationWizardProps {
  onApplicationCreated: (newApp: ApplicationRecord) => void;
  onViewTracker: (trackingId: string) => void;
  onCancel: () => void;
}

export function PermitApplicationWizard({
  onApplicationCreated,
  onViewTracker,
  onCancel,
}: PermitApplicationWizardProps) {
  const [step, setStep] = useState<number>(1);

  // Form state
  const [permitType, setPermitType] = useState('Residential Rooftop Solar & Clean Energy');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [parcelNumber, setParcelNumber] = useState('');
  const [contractorLicense, setContractorLicense] = useState('');
  const [projectValuation, setProjectValuation] = useState<number>(24000);
  const [workDescription, setWorkDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(['engineering-site-plan-v1.pdf']);
  const [acceptedAffidavit, setAcceptedAffidavit] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<ApplicationRecord | null>(null);

  // Statutory fee calculation based on valuation
  const baseFee = 95.00;
  const planCheckFee = Math.round(projectValuation * 0.005);
  const stateGreenSurcharge = 12.00;
  const totalFee = baseFee + planCheckFee + stateGreenSurcharge;

  const permitOptions = [
    {
      title: 'Residential Rooftop Solar & Clean Energy',
      dept: 'Department of Building & Safety',
      desc: 'Grid-tied photovoltaic systems, microinverters, and residential battery storage (Title 24 compliant).',
      estTime: '5-7 business days',
    },
    {
      title: 'Residential Addition, Roofing & Structural Alteration',
      dept: 'Department of Building & Safety',
      desc: 'Room additions, load-bearing renovations, patio enclosures, and full roof replacements.',
      estTime: '7-12 business days',
    },
    {
      title: 'Commercial Sidewalk Cafe & Right-of-Way Occupancy',
      dept: 'Economic Development & Revenue Division',
      desc: 'Outdoor seating, awnings, and pedestrian corridor ADA compliant dining enclosures.',
      estTime: '10 business days',
    },
    {
      title: 'Short-Term Rental & Vacation Host Registration',
      dept: 'Housing & Community Development Agency',
      desc: 'Primary residence transient occupancy compliance, safety self-certification, and lodging tax ID.',
      estTime: '5 business days',
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name;
      setUploadedFiles((prev) => [...prev, fileName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedAffidavit) return;

    // Generate authoritative tracking ID: FVR-2026-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `FVR-2026-${randomSuffix}`;

    const newRecord: ApplicationRecord = {
      trackingId,
      type: permitType,
      applicantName,
      applicantEmail,
      propertyAddress: propertyAddress || '100 Civic Center Area, Fairview',
      submittedDate: '2026-09-27',
      estimatedCompletion: '2026-10-12',
      currentStatus: 'submitted',
      department: 'Department of Building & Safety',
      feePaid: totalFee,
      notes: 'Initial electronic filing submitted. Awaiting clerk intake review and document verification.',
      milestones: [
        {
          step: 'Electronic Intake & Submission',
          date: '2026-09-27',
          status: 'completed',
          officerNotes: 'Electronic filing successful. Statutory filing fee confirmed.',
        },
        {
          step: 'Zoning & Setback Verification',
          date: 'Pending Intake Assignment',
          status: 'pending',
        },
        {
          step: 'Technical Plan Review & Environmental Code',
          date: 'Scheduled upon intake sign-off',
          status: 'pending',
        },
        {
          step: 'Permit Issuance & Field Inspection Activation',
          date: 'Estimated Oct 12, 2026',
          status: 'pending',
        },
      ],
    };

    onApplicationCreated(newRecord);
    setSubmittedApp(newRecord);
    setStep(5); // Success confirmation step
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb / Top Return */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
            Official Filing Gateway
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            Municipal Permit & License Application
          </h2>
        </div>
        <button
          onClick={onCancel}
          className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
        >
          Cancel & Return
        </button>
      </div>

      {/* Step Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
          <span className={step >= 1 ? 'text-slate-900 font-semibold' : ''}>1. Category</span>
          <span className={step >= 2 ? 'text-slate-900 font-semibold' : ''}>2. Property & Contact</span>
          <span className={step >= 3 ? 'text-slate-900 font-semibold' : ''}>3. Specs & Plans</span>
          <span className={step >= 4 ? 'text-slate-900 font-semibold' : ''}>4. Review & Fees</span>
          <span className={step >= 5 ? 'text-slate-900 font-semibold' : ''}>5. Confirmation</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Wizard Step 1: Select Type */}
      {step === 1 && (
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Select Permit or License Category</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Choose the statutory permit that aligns with your planned construction, alteration, or business operation.
            </p>
          </div>

          <div className="space-y-3">
            {permitOptions.map((opt, i) => (
              <label
                key={i}
                className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${
                  permitType === opt.title
                    ? 'border-blue-600 bg-blue-50/40 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="permitType"
                  value={opt.title}
                  checked={permitType === opt.title}
                  onChange={(e) => setPermitType(e.target.value)}
                  className="mt-1 text-blue-600 focus:ring-blue-500"
                />
                <div className="ml-3.5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-sm text-slate-900">{opt.title}</span>
                    <span className="text-[11px] text-slate-500">{opt.estTime}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{opt.desc}</p>
                  <span className="text-[11px] text-blue-700 font-medium block mt-1.5">{opt.dept}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continue to Applicant Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Wizard Step 2: Applicant & Property Info */}
      {step === 2 && (
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Applicant & Site Identification</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Enter official legal name, contact information, and property parcel identifier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Applicant Legal Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. David Miller"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Official Email Address (for notifications) *
              </label>
              <input
                type="email"
                required
                placeholder="applicant@example.com"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Primary Contact Telephone *
              </label>
              <input
                type="tel"
                required
                placeholder="(555) 019-8821"
                value={applicantPhone}
                onChange={(e) => setApplicantPhone(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Contractor State License # (if applicable)
              </label>
              <input
                type="text"
                placeholder="CSLB-892182 (Optional)"
                value={contractorLicense}
                onChange={(e) => setContractorLicense(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">
                Project Street Address *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 742 Evergreen Terrace, Fairview, FC 97401"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">
                County Assessor Parcel Identification Number (APN)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. 084-219-004 (Leave blank to lookup by street address)"
                  value={parcelNumber}
                  onChange={(e) => setParcelNumber(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setParcelNumber('084-219-004')}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-slate-700 font-medium whitespace-nowrap cursor-pointer text-xs"
                >
                  Autofill Sample APN
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <button
              onClick={() => {
                if (!applicantName || !applicantEmail || !propertyAddress) {
                  // Fallback sample values for quick prototype validation
                  if (!applicantName) setApplicantName('Robert Vance');
                  if (!applicantEmail) setApplicantEmail('r.vance@example.org');
                  if (!propertyAddress) setPropertyAddress('820 Maplewood Lane, Fairview, FC 97402');
                }
                setStep(3);
              }}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continue to Project Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Wizard Step 3: Project Specifications & Documents */}
      {step === 3 && (
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Project Specifications & Attachments</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Provide project valuation estimate, engineering plans, and architectural schematics.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Estimated Project Valuation ($ USD) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500 font-medium">$</span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={projectValuation}
                  onChange={(e) => setProjectValuation(Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Statutory plan-check fee is assessed as a sliding fee of 0.5% of total project valuation.
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Detailed Scope of Work Description *
              </label>
              <textarea
                rows={3}
                placeholder="Describe structural alterations, equipment models, square footage, inverter specs..."
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Document Upload Area */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Required Supporting Documents (PDF, DWG, PNG)
              </label>
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-lg p-6 text-center bg-slate-50 transition-colors">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-800">
                  Upload architectural drawings, engineer stamps, or manufacturer specs
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">PDF or image files up to 25MB each</p>
                <label className="mt-3 inline-block px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded text-xs font-semibold text-slate-700 cursor-pointer">
                  <span>Browse Local Files</span>
                  <input type="file" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-600">Attached Documents ({uploadedFiles.length}):</span>
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-slate-100 rounded border border-slate-200 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-mono">{file}</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Verified
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <button
              onClick={() => {
                if (!workDescription) {
                  setWorkDescription('Installation of 18 high-efficiency monocrystalline solar modules (7.2kW total capacity) with rapid-shutdown microinverters on southern roof elevation.');
                }
                setStep(4);
              }}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Review & Statutory Fees</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Wizard Step 4: Review, Fee Calculation & Affidavit */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Application Summary & Fee Schedule</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Confirm filing details and complete legal affidavit before electronic submission.
            </p>
          </div>

          {/* Filing Summary Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-md p-4 text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Permit Category:</span>
              <span className="font-semibold text-slate-900">{permitType}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Applicant:</span>
              <span className="font-semibold text-slate-900">{applicantName || 'Robert Vance'}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Property Address:</span>
              <span className="font-semibold text-slate-900">{propertyAddress || '820 Maplewood Lane'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Project Valuation:</span>
              <span className="font-mono font-semibold text-slate-900">${projectValuation.toLocaleString()}</span>
            </div>
          </div>

          {/* Itemized Statutory Fee Table */}
          <div className="border border-slate-200 rounded-md overflow-hidden text-xs">
            <div className="bg-slate-100 px-4 py-2 font-semibold text-slate-800 border-b border-slate-200 flex justify-between">
              <span>Statutory Fee Item</span>
              <span>Amount</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Base Municipal Intake & Administrative Fee</span>
                <span className="font-mono">${baseFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Plan-Check & Structural Engineering Review (0.5%)</span>
                <span className="font-mono">${planCheckFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>State Clean Energy & Green Standards Surcharge</span>
                <span className="font-mono">${stateGreenSurcharge.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900 text-sm">
                <span>Total Statutory Filing Fee</span>
                <span className="font-mono text-blue-700">${totalFee.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Legal Certification Affidavit */}
          <div className="p-4 rounded-md bg-amber-50/60 border border-amber-200 text-xs">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-amber-950 mb-1">
                  Citizen Legal Declaration & Truthfulness Affidavit
                </strong>
                <p className="text-slate-700 leading-relaxed mb-3">
                  I hereby certify under penalty of perjury under the laws of the State of Columbia that I am the authorized property owner or licensed agent, and that all statements, drawings, and valuations submitted are accurate to the best of my knowledge.
                </p>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-900">
                  <input
                    type="checkbox"
                    checked={acceptedAffidavit}
                    onChange={(e) => setAcceptedAffidavit(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span>I agree to the affidavit terms and authorize municipal electronic review</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              disabled={!acceptedAffidavit}
              className={`px-6 py-2.5 rounded text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                acceptedAffidavit
                  ? 'bg-blue-700 hover:bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>Submit Application & Record Filing</span>
            </button>
          </div>
        </form>
      )}

      {/* Wizard Step 5: Instant Confirmation */}
      {step === 5 && submittedApp && (
        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
              Application Successfully Filed
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mt-3">
              Official Permit Submission Received
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-lg mx-auto">
              Your application has been assigned to the Department of Building & Safety intake docket.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-50 border border-slate-300 rounded-lg p-5 max-w-md mx-auto text-left space-y-3">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-xs text-slate-500">Official Tracking Number:</span>
              <span className="text-base font-mono font-bold text-blue-700">{submittedApp.trackingId}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Filing Date:</span>
              <span className="font-semibold text-slate-800">{submittedApp.submittedDate}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Estimated Target Decision:</span>
              <span className="font-semibold text-slate-800">{submittedApp.estimatedCompletion}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Statutory Fee Received:</span>
              <span className="font-mono font-bold text-emerald-700">${submittedApp.feePaid.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onViewTracker(submittedApp.trackingId)}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Track Live Review Milestones</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onCancel}
              className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded text-xs font-semibold cursor-pointer"
            >
              Return to Citizen Portal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
