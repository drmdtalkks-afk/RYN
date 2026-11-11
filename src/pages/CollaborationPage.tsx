import React, { useState } from 'react';
import { NavigationPage, CollaborationCategory, ApplicationStatus } from '../types';
import { 
  Handshake, 
  Building2, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  FileText, 
  Upload, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { rynService } from '../services/api';

interface CollaborationPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const CollaborationPage: React.FC<CollaborationPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<{
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
    proposedFundingAmount: string;
    partnershipDuration: string;
    proposalFileName: string;
    websiteUrl: string;
    consent: boolean;
  }>({
    fullName: '',
    organizationName: '',
    designation: '',
    officialEmail: '',
    contactNumber: '',
    country: 'Pakistan',
    city: '',
    category: 'CSR Initiatives',
    projectTitle: '',
    description: '',
    expectedContribution: '',
    proposedFundingAmount: '',
    partnershipDuration: '12 Months',
    proposalFileName: '',
    websiteUrl: '',
    consent: true
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedProposal, setSubmittedProposal] = useState<{
    referenceNumber: string;
    projectTitle: string;
    organizationName: string;
  } | null>(null);

  const categories: CollaborationCategory[] = [
    'Corporate Partnerships',
    'Educational Partnerships',
    'University Collaborations',
    'NGO Partnerships',
    'Research Collaborations',
    'Financial Sponsorships',
    'CSR Initiatives',
    'Technology Partnerships',
    'Volunteer Partnerships',
    'International Collaborations',
    'MOU Proposals',
    'Humanitarian Project Sponsorship'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.officialEmail || !formData.projectTitle || !formData.description) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    if (!formData.consent) {
      alert('Please agree to be contacted by Radiant Youth Network.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await rynService.submitCollaboration({
        fullName: formData.fullName,
        organizationName: formData.organizationName,
        designation: formData.designation,
        officialEmail: formData.officialEmail,
        contactNumber: formData.contactNumber,
        country: formData.country,
        city: formData.city,
        category: formData.category,
        projectTitle: formData.projectTitle,
        description: formData.description,
        expectedContribution: formData.expectedContribution,
        proposedFundingAmount: formData.proposedFundingAmount || undefined,
        partnershipDuration: formData.partnershipDuration,
        proposalFileName: formData.proposalFileName || undefined,
        websiteUrl: formData.websiteUrl || undefined
      });

      setSubmittedProposal({
        referenceNumber: res.referenceNumber,
        projectTitle: res.projectTitle,
        organizationName: res.organizationName
      });
    } catch (err) {
      console.error(err);
      alert('Error submitting collaboration proposal. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1a3d60] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Handshake className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL & MULTI-SECTOR ALLIANCES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Let's Work Together to Create a Better Future
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              We invite universities, corporations, philanthropic foundations, NGOs, and innovators to co-create high-impact humanitarian and youth initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Tracks Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
            Partnership Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
            12 Collaboration Categories
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Select a pathway aligned with your organization's mission, CSR mandate, or academic focus.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat}
              onClick={() => {
                setFormData(prev => ({ ...prev, category: cat }));
                document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-28 group ${
                formData.category === cat
                  ? 'bg-[#17324D] text-white border-[#17324D] shadow-md'
                  : 'bg-white border-slate-200 text-[#17324D] hover:border-[#55BDEB] hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono opacity-60">
                <span>TRACK 0{i + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm line-clamp-2">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Proposal Submission Form */}
      <section id="collaboration-form" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
              Formal Partnership Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display">
              Submit Collaboration Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Please provide comprehensive information about your organization and proposed initiative. All submissions are assigned a verified reference ID and reviewed by RYN leadership.
            </p>
          </div>

          {submittedProposal ? (
            <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-2xl text-center space-y-4 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-[#17324D] font-display">Proposal Logged Successfully!</h3>
                <p className="text-sm text-slate-700 mt-1">
                  Thank you. Your proposal for <strong>"{submittedProposal.projectTitle}"</strong> on behalf of <strong>{submittedProposal.organizationName}</strong> has been registered.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl inline-block border border-slate-200 text-xs">
                <span className="text-slate-400 block uppercase font-mono">Reference Tracking ID</span>
                <span className="text-lg font-bold font-mono text-[#17324D]">{submittedProposal.referenceNumber}</span>
                <span className="text-[10px] text-emerald-700 font-semibold block mt-1">Initial Status: Received</span>
              </div>

              <p className="text-xs text-slate-500 max-w-md mx-auto">
                An automated acknowledgement has been logged. Our partnership executive will review your proposal and contact your designated representative within 3 to 5 business days.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSubmittedProposal(null)}
                  className="px-6 py-2.5 bg-[#17324D] text-white text-xs font-bold rounded-xl hover:bg-[#204569] transition-colors cursor-pointer"
                >
                  Submit Another Proposal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    1. Representative Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Asad Rehman"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 2. Organization Name */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    2. Organization / Entity Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    placeholder="e.g. Global Tech Foundation"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 3. Designation */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    3. Official Designation <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Director of CSR & Partnerships"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 4. Official Email */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    4. Official Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.officialEmail}
                    onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                    placeholder="e.g. partnerships@org.pk"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 5. Contact Number */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    5. Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 6. Country */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    6. Country <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Pakistan"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 7. City */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    7. City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Islamabad / Lahore / Karachi"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 8. Collaboration Category */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    8. Collaboration Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as CollaborationCategory })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  >
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 9. Proposed Project Title */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  9. Proposed Project Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                  placeholder="e.g. Youth Digital Incubation Center in South Punjab"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              {/* 10. Description of Collaboration */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  10. Description of Proposed Collaboration <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide scope, target community, objectives, and anticipated social or educational impact..."
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 11. Expected Contribution */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    11. Expected Contribution <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.expectedContribution}
                    onChange={(e) => setFormData({ ...formData, expectedContribution: e.target.value })}
                    placeholder="e.g. Financial grant, mentors, lab hardware, venue"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 12. Proposed Funding Amount (Optional) */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    12. Proposed Funding / Grant Amount (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.proposedFundingAmount}
                    onChange={(e) => setFormData({ ...formData, proposedFundingAmount: e.target.value })}
                    placeholder="e.g. PKR 500,000 (if applicable)"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                {/* 13. Preferred Partnership Duration */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    13. Preferred Partnership Duration <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.partnershipDuration}
                    onChange={(e) => setFormData({ ...formData, partnershipDuration: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  >
                    <option>Single Event / Campaign</option>
                    <option>3 Months Pilot</option>
                    <option>6 Months Track</option>
                    <option>12 Months MOU</option>
                    <option>Multi-Year Strategic Alliance</option>
                  </select>
                </div>

                {/* 15. Website or LinkedIn URL */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    15. Organization Website or LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://example.org or LinkedIn URL"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>
              </div>

              {/* 14. Upload Proposal */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  14. Upload Proposal Document (PDF or DOCX, Optional)
                </label>
                <div className="border border-dashed border-slate-300 hover:border-[#55BDEB] rounded-2xl p-5 text-center cursor-pointer transition-colors bg-slate-50/50">
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-xs text-slate-600">
                    {formData.proposalFileName ? (
                      <span className="font-semibold text-emerald-700">Attached: {formData.proposalFileName}</span>
                    ) : (
                      <span>Upload official proposal dossier or presentation (Max 10MB)</span>
                    )}
                  </p>
                  <input
                    type="file"
                    id="proposal-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, proposalFileName: e.target.files[0].name });
                      }
                    }}
                  />
                  <label
                    htmlFor="proposal-upload"
                    className="mt-2 inline-block px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-lg cursor-pointer"
                  >
                    Browse Document
                  </label>
                </div>
              </div>

              {/* 16. Consent */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#17324D] focus:ring-[#55BDEB]"
                  />
                  <span>
                    16. I confirm that I am authorized to submit this partnership proposal on behalf of my organization and consent to Radiant Youth Network processing this proposal and contacting our representatives for due diligence and project formulation.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-[#17324D]" />
                <span>{submitting ? 'Submitting Proposal...' : 'SUBMIT COLLABORATION PROPOSAL'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
