import React, { useState } from 'react';
import { NavigationPage, PartnerMOU } from '../types';
import { 
  Handshake, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  X, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PARTNERS_MOU } from '../data/seedData';

interface PartnershipsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ onNavigate }) => {
  const [selectedMOU, setSelectedMOU] = useState<PartnerMOU | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredPartners = PARTNERS_MOU.filter(p => {
    if (filterStatus === 'all') return true;
    return p.status === filterStatus;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1a3d60] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Handshake className="w-3.5 h-3.5" />
              <span>STRATEGIC ALLIANCES & ACCREDITATIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Our Strategic Partnerships & Memorandums of Understanding
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Radiant Youth Network collaborates with leading technology companies, academic organizations, auditing bodies, and social enterprises to amplify humanitarian impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Filter By Status:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filterStatus === 'all' ? 'bg-[#17324D] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All (7)
              </button>
              <button
                onClick={() => setFilterStatus('Active')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filterStatus === 'Active' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterStatus('Under Renewal')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filterStatus === 'Under Renewal' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Under Renewal
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            Official agreements verified under RYN governance standards
          </div>
        </div>
      </section>

      {/* 7 Partner Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-[#55BDEB] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CDEFF5] to-[#55BDEB]/30 flex items-center justify-center text-[#17324D] font-extrabold text-lg font-display group-hover:scale-105 transition-transform">
                    {partner.partnerName.slice(0, 2).toUpperCase()}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                    partner.status === 'Active'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    {partner.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#17324D] font-display group-hover:text-[#55BDEB] transition-colors">
                    {partner.partnerName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Signing Date: {partner.signingDate}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {partner.description}
                </p>

                {/* Scope of Work */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Scope of Collaboration
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.scopeOfWork.map((scope, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedMOU(partner)}
                  className="px-4 py-2 bg-[#17324D] hover:bg-[#204569] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FFB86B]" />
                  <span>View MOU Details</span>
                </button>

                {partner.websiteUrl && (
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-[#17324D] hover:bg-slate-100 rounded-lg transition-colors"
                    title="Visit Partner Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Propose an MOU Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#CDEFF5]/50 to-[#55BDEB]/20 rounded-3xl p-8 sm:p-12 border border-[#55BDEB]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-[#17324D]">
              Explore an Institutional Partnership with RYN
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              We welcome academic institutions, CSR initiatives, and technology organizations to sign collaborative MOUs for youth uplift and humanitarian drives.
            </p>
          </div>
          <button
            onClick={() => onNavigate('collaboration')}
            className="px-6 py-3 bg-[#17324D] hover:bg-[#204569] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Submit MOU Proposal</span>
            <ArrowRight className="w-4 h-4 text-[#FFB86B]" />
          </button>
        </div>
      </section>

      {/* MOU Detail Modal */}
      {selectedMOU && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-[#17324D] text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Handshake className="w-5 h-5 text-[#FFB86B]" />
                <h3 className="font-bold text-lg font-display">Official MOU Summary</h3>
              </div>
              <button
                onClick={() => setSelectedMOU(null)}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-[#17324D]">{selectedMOU.partnerName}</h4>
                  <span className="text-xs text-slate-500 font-mono">Signing Date: {selectedMOU.signingDate}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                  {selectedMOU.status}
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-600 leading-relaxed border border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">Collaboration Mandate:</span>
                {selectedMOU.description}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Agreed Scope of Activities
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedMOU.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl text-[11px] text-amber-800 border border-amber-200">
                Official document executed under Radiant Youth Network Board of Directors authorization. Digital copy archived in administrative records.
              </div>
            </div>

            <div className="bg-slate-100 px-6 py-4 flex justify-end">
              <button
                onClick={() => setSelectedMOU(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
