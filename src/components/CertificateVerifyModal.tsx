import React, { useState } from 'react';
import { X, Search, CheckCircle, ShieldCheck, ExternalLink, Award, AlertCircle } from 'lucide-react';
import { rynService } from '../services/api';
import { OrganizationalCredential } from '../types';

interface CertificateVerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateVerifyModal: React.FC<CertificateVerifyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<OrganizationalCredential | null | 'NOT_FOUND'>(null);

  if (!isOpen) return null;

  const credentials = rynService.getCredentials();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }
    const found = rynService.verifyCertificate(searchQuery);
    setSearchResult(found || 'NOT_FOUND');
  };

  const handleSelectPredefined = (cred: OrganizationalCredential) => {
    setSearchQuery(cred.certificateNumber);
    setSearchResult(cred);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#17324D] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#FFB86B]" />
            <div>
              <h3 className="font-bold text-lg font-display">Institutional Credential Verification</h3>
              <p className="text-xs text-slate-300">Public transparency database for Radiant Youth Network</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Enter Certificate Number or Standard Code (e.g., ISO 9001, SECP-REG-2023-094182):
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. SECP-REG-2023-094182, ISO 9001, ISO 27001, IAAA"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#17324D] hover:bg-[#1f4266] text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Verify
              </button>
            </div>
          </form>

          {/* Search Result Display */}
          {searchResult === 'NOT_FOUND' && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-amber-800 text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <p className="font-semibold">Certificate Not Found</p>
                <p className="text-xs text-amber-700">Please check the reference number or select an official certificate below.</p>
              </div>
            </div>
          )}

          {searchResult && searchResult !== 'NOT_FOUND' && (
            <div className="p-5 bg-[#CDEFF5]/30 border border-[#55BDEB]/50 rounded-xl space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-slate-900 text-base">{searchResult.name}</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {searchResult.validity}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block">Certificate No:</span>
                  <span className="font-mono font-bold">{searchResult.certificateNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Issuing Authority:</span>
                  <span className="font-medium">{searchResult.issuingAuthority}</span>
                </div>
                <div className="col-span-2 mt-1">
                  <span className="text-slate-400 block">Accredited Scope:</span>
                  <span className="font-medium">{searchResult.scope}</span>
                </div>
              </div>
            </div>
          )}

          {/* Quick List of Official Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Verified Organizational Accreditations
            </h4>
            <div className="space-y-2.5">
              {credentials.map((cred) => (
                <div
                  key={cred.id}
                  onClick={() => handleSelectPredefined(cred)}
                  className="p-3.5 border border-slate-200 hover:border-[#55BDEB] rounded-xl hover:bg-slate-50 transition-all flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#55BDEB] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#17324D]">{cred.name}</span>
                        <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                          {cred.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{cred.issuingAuthority}</p>
                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">{cred.scope}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                      {cred.certificateNumber}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1.5 border border-slate-100">
            <p className="font-semibold text-[#17324D]">Transparency & Due Diligence Commitment:</p>
            <p>
              Radiant Youth Network adheres to international quality management (ISO 9001), information security (ISO 27001), environmental stewardship (ISO 24001), and algorithmic auditing standards (IAAA) under official SECP registration.
            </p>
          </div>
        </div>

        <div className="bg-slate-100 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
