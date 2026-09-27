export type LanguageCode = 'en' | 'es' | 'zh' | 'fr' | 'vi';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'permits' | 'taxes' | 'records' | 'transit' | 'housing' | 'health' | 'elections';
  description: string;
  department: string;
  processingTime: string;
  fee: string;
  isOnlineAvailable: boolean;
  linkAction: string;
  popular?: boolean;
}

export type ApplicationStatus = 'submitted' | 'intake_review' | 'zoning_review' | 'approved' | 'action_required' | 'issued';

export interface ApplicationMilestone {
  step: string;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  officerNotes?: string;
}

export interface ApplicationRecord {
  trackingId: string;
  type: string;
  applicantName: string;
  applicantEmail: string;
  propertyAddress: string;
  submittedDate: string;
  estimatedCompletion: string;
  currentStatus: ApplicationStatus;
  department: string;
  milestones: ApplicationMilestone[];
  feePaid: number;
  notes?: string;
  certificateNumber?: string;
}

export interface TaxRecord {
  id: string;
  parcelId: string;
  propertyAddress: string;
  ownerName: string;
  taxYear: number;
  assessedValue: number;
  countyLevy: number;
  schoolDistrictLevy: number;
  libraryLevy: number;
  emergencyServicesLevy: number;
  totalDue: number;
  dueDate: string;
  isPaid: boolean;
  paidDate?: string;
  receiptNumber?: string;
}

export interface CitationRecord {
  citationNumber: string;
  licensePlate: string;
  location: string;
  violationDate: string;
  description: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
}

export interface Ticket311 {
  ticketId: string;
  category: string;
  description: string;
  address: string;
  priority: 'low' | 'standard' | 'urgent';
  status: 'Open' | 'Dispatched' | 'In Progress' | 'Resolved';
  reportedDate: string;
  assignedDepartment: string;
  resolutionEstimate: string;
}

export interface CouncilMeeting {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'Upcoming' | 'In Session' | 'Adjourned';
  agendaItems: {
    itemNumber: string;
    topic: string;
    sponsor: string;
    description: string;
    ordinanceRef?: string;
  }[];
  streamAvailable: boolean;
}

export interface OrdinanceRecord {
  id: string;
  code: string;
  title: string;
  passedDate: string;
  department: string;
  summary: string;
  fullText: string;
  status: 'Enacted' | 'Proposed' | 'Under Review';
}

export interface DepartmentInfo {
  id: string;
  name: string;
  headOfficer: string;
  email: string;
  phone: string;
  location: string;
  hours: string;
  servicesOffered: string[];
}

export interface AppointmentSlot {
  id: string;
  departmentId: string;
  departmentName: string;
  serviceType: string;
  date: string;
  time: string;
  citizenName: string;
  citizenEmail: string;
  citizenPhone: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  confirmationCode: string;
}
