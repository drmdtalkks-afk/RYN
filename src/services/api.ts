import {
  DonationRecord,
  DonationStatus,
  CollaborationProposal,
  ApplicationStatus,
  VolunteerApplication,
  EducationApplication,
  PartnerMOU,
  ResearchPaper,
  OrganizationalCredential
} from '../types';
import {
  INITIAL_DONATIONS,
  INITIAL_COLLABORATIONS,
  INITIAL_VOLUNTEERS,
  PARTNERS_MOU,
  RESEARCH_PAPERS,
  ORGANIZATIONAL_CREDENTIALS
} from '../data/seedData';

// Local storage keys for resilient offline/development state persistence
const STORAGE_KEYS = {
  DONATIONS: 'ryn_donations_records',
  COLLABORATIONS: 'ryn_collaborations_records',
  VOLUNTEERS: 'ryn_volunteers_records',
  EDUCATION: 'ryn_education_records',
  PARTNERS: 'ryn_partners_records',
  RESEARCH: 'ryn_research_records'
};

function getStoredItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.warn(`Error reading ${key} from storage:`, err);
  }
  return defaultValue;
}

function setStoredItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Error writing ${key} to storage:`, err);
  }
}

// Generate unique sequential reference code
export function generateReferenceCode(prefix: 'DON' | 'COL' | 'VOL' | 'EDU' | 'RES'): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `RYN-${prefix}-${year}-${random}`;
}

export const rynService = {
  // Donations
  async getDonations(): Promise<DonationRecord[]> {
    try {
      const res = await fetch('/api/donations');
      if (res.ok) {
        const data = await res.json();
        setStoredItem(STORAGE_KEYS.DONATIONS, data);
        return data;
      }
    } catch {
      // Fallback to local persistence
    }
    const current = getStoredItem<DonationRecord[]>(STORAGE_KEYS.DONATIONS, INITIAL_DONATIONS);
    return current;
  },

  async submitDonation(donation: Omit<DonationRecord, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Promise<DonationRecord> {
    const newRecord: DonationRecord = {
      ...donation,
      id: 'don-' + Date.now(),
      referenceNumber: generateReferenceCode('DON'),
      status: 'Pending Verification',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      });
      if (res.ok) {
        const saved = await res.json();
        return saved;
      }
    } catch {
      // fallback
    }

    const current = getStoredItem<DonationRecord[]>(STORAGE_KEYS.DONATIONS, INITIAL_DONATIONS);
    const updated = [newRecord, ...current];
    setStoredItem(STORAGE_KEYS.DONATIONS, updated);
    return newRecord;
  },

  async updateDonationStatus(
    id: string,
    status: DonationStatus,
    adminNotes?: string,
    verifiedBy: string = 'Finance Administrator'
  ): Promise<DonationRecord | null> {
    try {
      const res = await fetch(`/api/donations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes, verifiedBy })
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // fallback
    }

    const current = getStoredItem<DonationRecord[]>(STORAGE_KEYS.DONATIONS, INITIAL_DONATIONS);
    const index = current.findIndex(d => d.id === id);
    if (index === -1) return null;

    current[index] = {
      ...current[index],
      status,
      adminNotes: adminNotes ?? current[index].adminNotes,
      verifiedAt: status === 'Verified' ? new Date().toISOString() : current[index].verifiedAt,
      verifiedBy: status === 'Verified' ? verifiedBy : current[index].verifiedBy
    };
    setStoredItem(STORAGE_KEYS.DONATIONS, [...current]);
    return current[index];
  },

  // Collaborations
  async getCollaborations(): Promise<CollaborationProposal[]> {
    try {
      const res = await fetch('/api/collaborations');
      if (res.ok) {
        const data = await res.json();
        setStoredItem(STORAGE_KEYS.COLLABORATIONS, data);
        return data;
      }
    } catch {
      // fallback
    }
    return getStoredItem<CollaborationProposal[]>(STORAGE_KEYS.COLLABORATIONS, INITIAL_COLLABORATIONS);
  },

  async submitCollaboration(data: Omit<CollaborationProposal, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Promise<CollaborationProposal> {
    const newRecord: CollaborationProposal = {
      ...data,
      id: 'col-' + Date.now(),
      referenceNumber: generateReferenceCode('COL'),
      status: 'Received',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/collaborations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // fallback
    }

    const current = getStoredItem<CollaborationProposal[]>(STORAGE_KEYS.COLLABORATIONS, INITIAL_COLLABORATIONS);
    const updated = [newRecord, ...current];
    setStoredItem(STORAGE_KEYS.COLLABORATIONS, updated);
    return newRecord;
  },

  async updateCollaborationStatus(id: string, status: ApplicationStatus, notes?: string): Promise<CollaborationProposal | null> {
    try {
      const res = await fetch(`/api/collaborations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes })
      });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }

    const current = getStoredItem<CollaborationProposal[]>(STORAGE_KEYS.COLLABORATIONS, INITIAL_COLLABORATIONS);
    const index = current.findIndex(c => c.id === id);
    if (index === -1) return null;

    current[index] = {
      ...current[index],
      status,
      notes: notes ?? current[index].notes
    };
    setStoredItem(STORAGE_KEYS.COLLABORATIONS, [...current]);
    return current[index];
  },

  // Volunteers
  async getVolunteers(): Promise<VolunteerApplication[]> {
    try {
      const res = await fetch('/api/volunteers');
      if (res.ok) {
        const data = await res.json();
        setStoredItem(STORAGE_KEYS.VOLUNTEERS, data);
        return data;
      }
    } catch {
      // fallback
    }
    return getStoredItem<VolunteerApplication[]>(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
  },

  async submitVolunteer(data: Omit<VolunteerApplication, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Promise<VolunteerApplication> {
    const newRecord: VolunteerApplication = {
      ...data,
      id: 'vol-' + Date.now(),
      referenceNumber: generateReferenceCode('VOL'),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }

    const current = getStoredItem<VolunteerApplication[]>(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
    const updated = [newRecord, ...current];
    setStoredItem(STORAGE_KEYS.VOLUNTEERS, updated);
    return newRecord;
  },

  // Education Applications
  async getEducationApplications(): Promise<EducationApplication[]> {
    try {
      const res = await fetch('/api/education-applications');
      if (res.ok) {
        const data = await res.json();
        setStoredItem(STORAGE_KEYS.EDUCATION, data);
        return data;
      }
    } catch {
      // fallback
    }
    return getStoredItem<EducationApplication[]>(STORAGE_KEYS.EDUCATION, []);
  },

  async submitEducationApplication(data: Omit<EducationApplication, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Promise<EducationApplication> {
    const newRecord: EducationApplication = {
      ...data,
      id: 'edu-' + Date.now(),
      referenceNumber: generateReferenceCode('EDU'),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/education-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }

    const current = getStoredItem<EducationApplication[]>(STORAGE_KEYS.EDUCATION, []);
    const updated = [newRecord, ...current];
    setStoredItem(STORAGE_KEYS.EDUCATION, updated);
    return newRecord;
  },

  // Partnerships & MOUs
  async getPartners(): Promise<PartnerMOU[]> {
    try {
      const res = await fetch('/api/partnerships');
      if (res.ok) {
        const data = await res.json();
        setStoredItem(STORAGE_KEYS.PARTNERS, data);
        return data;
      }
    } catch {
      // fallback
    }
    return getStoredItem<PartnerMOU[]>(STORAGE_KEYS.PARTNERS, PARTNERS_MOU);
  },

  async addPartner(data: Omit<PartnerMOU, 'id'>): Promise<PartnerMOU> {
    const newRecord: PartnerMOU = {
      ...data,
      id: 'mou-' + Date.now()
    };
    const current = getStoredItem<PartnerMOU[]>(STORAGE_KEYS.PARTNERS, PARTNERS_MOU);
    const updated = [newRecord, ...current];
    setStoredItem(STORAGE_KEYS.PARTNERS, updated);
    return newRecord;
  },

  async updatePartnerStatus(id: string, status: PartnerMOU['status'], isPublished: boolean): Promise<void> {
    const current = getStoredItem<PartnerMOU[]>(STORAGE_KEYS.PARTNERS, PARTNERS_MOU);
    const updated = current.map(p => p.id === id ? { ...p, status, isPublished } : p);
    setStoredItem(STORAGE_KEYS.PARTNERS, updated);
  },

  // Research
  async getResearch(): Promise<ResearchPaper[]> {
    try {
      const res = await fetch('/api/research');
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch {
      // fallback
    }
    return getStoredItem<ResearchPaper[]>(STORAGE_KEYS.RESEARCH, RESEARCH_PAPERS);
  },

  async submitResearchProposal(proposal: {
    fullName: string;
    institution: string;
    email: string;
    topic: string;
    category: string;
    abstract: string;
  }): Promise<{ referenceNumber: string; success: boolean }> {
    const ref = generateReferenceCode('RES');
    return { referenceNumber: ref, success: true };
  },

  // Certifications
  getCredentials(): OrganizationalCredential[] {
    return ORGANIZATIONAL_CREDENTIALS;
  },

  verifyCertificate(query: string): OrganizationalCredential | null {
    const cleanQuery = query.trim().toUpperCase();
    if (!cleanQuery) return null;
    return ORGANIZATIONAL_CREDENTIALS.find(c => 
      c.certificateNumber.toUpperCase().includes(cleanQuery) ||
      c.code.toUpperCase().includes(cleanQuery) ||
      c.name.toUpperCase().includes(cleanQuery)
    ) || null;
  }
};
