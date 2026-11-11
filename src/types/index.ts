/**
 * Radiant Youth Network (RYN) - Types & Data Models
 * Organization established in 2023 | Founder: Ms. Zainab Asif
 */

export type NavigationPage = 
  | 'home' 
  | 'about' 
  | 'impact' 
  | 'programs' 
  | 'education' 
  | 'research' 
  | 'partnerships' 
  | 'collaboration' 
  | 'donate' 
  | 'volunteer' 
  | 'contact' 
  | 'admin';

export type DonationCategory = 
  | 'General Donation'
  | 'Education Support'
  | 'Food Drive'
  | 'Ramadan Drive'
  | 'Clothes Drive'
  | 'Water Drive'
  | 'Youth Development'
  | 'Emergency Humanitarian Support';

export type DonationStatus = 'Pending Verification' | 'Verified' | 'Rejected';

export interface DonationRecord {
  id: string;
  referenceNumber: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  category: DonationCategory;
  amount: number;
  paymentMethod: string;
  transactionId: string;
  transactionDate: string;
  screenshotUrl?: string;
  message?: string;
  isAnonymous: boolean;
  status: DonationStatus;
  adminNotes?: string;
  verifiedAt?: string;
  verifiedBy?: string;
  createdAt: string;
}

export type CollaborationCategory =
  | 'Corporate Partnerships'
  | 'Educational Partnerships'
  | 'University Collaborations'
  | 'NGO Partnerships'
  | 'Research Collaborations'
  | 'Financial Sponsorships'
  | 'CSR Initiatives'
  | 'Technology Partnerships'
  | 'Volunteer Partnerships'
  | 'International Collaborations'
  | 'MOU Proposals'
  | 'Humanitarian Project Sponsorship';

export type ApplicationStatus = 'Received' | 'Under Review' | 'Approved' | 'Rejected' | 'In Discussion';

export interface CollaborationProposal {
  id: string;
  referenceNumber: string;
  fullName: string;
  organizationName: string;
  designation: string;
  officialEmail: string;
  contactNumber: string;
  country: string;
  city: string;
  category: CollaborationCategory;
  projectTitle: string;
  description: string;
  expectedContribution: string;
  proposedFundingAmount?: string;
  partnershipDuration: string;
  proposalFileName?: string;
  websiteUrl?: string;
  status: ApplicationStatus;
  createdAt: string;
  notes?: string;
}

export interface VolunteerApplication {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  age: number;
  education: string;
  skills: string;
  areasOfInterest: string[];
  availability: string;
  previousExperience: string;
  motivation: string;
  resumeFileName?: string;
  status: 'Pending' | 'Approved' | 'Contacted' | 'Archived';
  createdAt: string;
}

export interface EducationApplication {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  educationalBackground: string;
  areaOfInterest: string;
  programSelection: string;
  cvFileName?: string;
  status: 'Pending' | 'Enrolled' | 'Waitlisted' | 'Completed';
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedInUrl?: string;
  email?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  objectives: string[];
  targetBeneficiaries: string;
  keyActivities: string[];
  impactMetric: string;
  imageUrl: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  category: string;
  publicationDate: string;
  doiOrLink?: string;
  pdfUrl?: string;
  status: 'Published' | 'Under Peer Review' | 'In Progress';
  edasAffiliated: boolean;
}

export interface PartnerMOU {
  id: string;
  partnerName: string;
  logoUrl?: string;
  description: string;
  status: 'Active' | 'Under Renewal' | 'Pending' | 'Expired';
  signingDate: string;
  expiryDate?: string;
  mouDocumentUrl?: string;
  websiteUrl?: string;
  isPublished: boolean;
  scopeOfWork: string[];
}

export interface OrganizationalCredential {
  id: string;
  name: string;
  code: string;
  issuingAuthority: string;
  scope: string;
  validity: string;
  certificateNumber: string;
  documentUrl?: string;
  verificationUrl?: string;
}

export interface ImpactStatistic {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
}
