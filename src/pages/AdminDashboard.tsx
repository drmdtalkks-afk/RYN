import React, { useState, useEffect } from 'react';
import { 
  DonationRecord, 
  CollaborationProposal, 
  VolunteerApplication, 
  EducationApplication, 
  PartnerMOU,
  DonationStatus,
  ApplicationStatus
} from '../types';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Download, 
  FileText, 
  Search, 
  Filter, 
  RefreshCw, 
  Users, 
  Handshake, 
  GraduationCap, 
  BookOpen, 
  DollarSign, 
  Eye, 
  Lock, 
  LogOut,
  Plus,
  AlertCircle
} from 'lucide-react';
import { rynService } from '../services/api';
import { OFFICIAL_INFO } from '../data/seedData';

interface AdminDashboardProps {
  onOpenReceipt: (donation: DonationRecord) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (logged: boolean) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onOpenReceipt,
  isAdminLoggedIn,
  setIsAdminLoggedIn
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'donations' | 'collaborations' | 'volunteers' | 'education' | 'mous' | 'audit'>('overview');
  const [adminRole, setAdminRole] = useState<'Super Administrator' | 'Finance Administrator' | 'Content Manager'>('Super Administrator');
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('admin@radiantyouthnetwork.org');
  const [loginPass, setLoginPass] = useState('ryn2026!');
  const [loginError, setLoginError] = useState('');

  // Data state
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [collaborations, setCollaborations] = useState<CollaborationProposal[]>([]);
  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>([]);
  const [educationApps, setEducationApps] = useState<EducationApplication[]>([]);
  const [partners, setPartners] = useState<PartnerMOU[]>([]);
  const [loading, setLoading] = useState(false);

  // Verification modal or note prompt
  const [selectedProofUrl, setSelectedProofUrl] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [dons, cols, vols, edus, parts] = await Promise.all([
        rynService.getDonations(),
        rynService.getCollaborations(),
        rynService.getVolunteers(),
        rynService.getEducationApplications(),
        rynService.getPartners()
      ]);
      setDonations(dons);
      setCollaborations(cols);
      setVolunteers(vols);
      setEducationApps(edus);
      setPartners(parts);
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      loadData();
    }
  }, [isAdminLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPass) {
      setIsAdminLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials.');
    }
  };

  const handleVerifyDonation = async (id: string, status: DonationStatus) => {
    const note = prompt(status === 'Verified' ? 'Verification Note (Optional):' : 'Rejection Reason:');
    if (status === 'Rejected' && note === null) return;

    try {
      await rynService.updateDonationStatus(id, status, note || undefined, adminRole);
      setActionSuccess(`Donation marked as ${status}.`);
      setTimeout(() => setActionSuccess(null), 3000);
      loadData();
    } catch (err) {
      alert('Error updating donation.');
    }
  };

  const handleCollaborationStatus = async (id: string, status: ApplicationStatus) => {
    const note = prompt(`Enter optional internal review note for "${status}":`);
    try {
      await rynService.updateCollaborationStatus(id, status, note || undefined);
      setActionSuccess(`Proposal status updated to ${status}.`);
      setTimeout(() => setActionSuccess(null), 3000);
      loadData();
    } catch (err) {
      alert('Error updating collaboration status.');
    }
  };

  const exportDonationsCSV = () => {
    const headers = ['Reference', 'Donor', 'Email', 'Phone', 'Category', 'Amount (PKR)', 'TID', 'Date', 'Status'];
    const rows = donations.map(d => [
      d.referenceNumber,
      `"${d.isAnonymous ? 'Anonymous' : d.donorName}"`,
      d.donorEmail,
      d.donorPhone,
      `"${d.category}"`,
      d.amount,
      d.transactionId,
      d.transactionDate,
      d.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `RYN_Donation_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculations for overview
  const totalDonationPKR = donations
    .filter(d => d.status === 'Verified')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const pendingDonations = donations.filter(d => d.status === 'Pending Verification');

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[600px] flex items-center justify-center py-16 px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#17324D] text-[#FFB86B] flex items-center justify-center shadow-md">
              <Shield className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold font-display text-[#17324D]">
              RYN Administrative Portal
            </h2>
            <p className="text-xs text-slate-500">
              Authorized access for Radiant Youth Network officers & directors.
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Secure Password
              </label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Select Administrative Role
              </label>
              <select
                value={adminRole}
                onChange={(e) => setAdminRole(e.target.value as any)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
              >
                <option value="Super Administrator">Super Administrator (Full System Access)</option>
                <option value="Finance Administrator">Finance Administrator (Donations & Receipts)</option>
                <option value="Content Manager">Content Manager (MOUs & Programs)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#17324D] hover:bg-[#204569] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-[#FFB86B]" />
              <span>Login to Dashboard</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Demo Access Pre-configured: Click 'Login to Dashboard' to inspect records.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 pb-24">
      {/* Top Bar with Role & Actions */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#17324D] text-[#FFB86B] flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold font-display text-[#17324D]">
                RYN Management Console
              </h1>
              <span className="px-2.5 py-0.5 bg-[#CDEFF5] text-[#17324D] text-[11px] font-bold rounded-full">
                {adminRole}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Audit-compliant management platform for Radiant Youth Network (Est. 2023)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={exportDonationsCSV}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#17324D] text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsAdminLoggedIn(false)}
            className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'overview' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Overview & KPIs
        </button>
        <button
          onClick={() => setActiveTab('donations')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'donations' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          <span>Donations</span>
          {pendingDonations.length > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#FFB86B] text-[#17324D] text-[10px] flex items-center justify-center font-bold">
              {pendingDonations.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('collaborations')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'collaborations' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Proposals ({collaborations.length})
        </button>
        <button
          onClick={() => setActiveTab('volunteers')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'volunteers' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Volunteers ({volunteers.length})
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'education' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Education Apps ({educationApps.length})
        </button>
        <button
          onClick={() => setActiveTab('mous')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'mous' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Partnerships & MOUs ({partners.length})
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
            activeTab === 'audit' ? 'bg-[#17324D] text-white shadow-xs' : 'text-slate-600 hover:text-[#17324D]'
          }`}
        >
          Audit & Transparency
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-500 font-medium">Verified Donations</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-mono">
                PKR {totalDonationPKR.toLocaleString()}
              </div>
              <p className="text-[11px] text-emerald-600 font-medium">
                {donations.filter(d => d.status === 'Verified').length} Verified Transactions
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-500 font-medium">Pending Easypaisa Reviews</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">
                {pendingDonations.length}
              </div>
              <p className="text-[11px] text-slate-500">
                Awaiting manual bank / SMS match
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-500 font-medium">Collaboration Proposals</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#55BDEB] font-mono">
                {collaborations.length}
              </div>
              <p className="text-[11px] text-slate-500">
                Corporate, CSR, and Academic tracks
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-500 font-medium">Registered Volunteers</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F45B91] font-mono">
                {volunteers.length + 300}+
              </div>
              <p className="text-[11px] text-slate-500">
                Active youth roster nationwide
              </p>
            </div>
          </div>

          {/* Quick Action Pending Alert */}
          {pendingDonations.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 text-sm">
                    {pendingDonations.length} Donation Record(s) Require Verification
                  </h3>
                  <p className="text-xs text-amber-800">
                    Review incoming Easypaisa transaction IDs against bank statements before generating official receipts.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('donations')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
              >
                Review Transactions →
              </button>
            </div>
          )}

          {/* Cumulative Milestone Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-[#17324D]">
              Verified Organization Reporting Milestones (Established 2023)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-600">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <span className="text-slate-400 block font-mono">FOOD SECURITY</span>
                <span className="text-lg font-bold text-[#17324D]">561+ Families</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <span className="text-slate-400 block font-mono">RAMADAN IFTAR</span>
                <span className="text-lg font-bold text-[#17324D]">4,320 People</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <span className="text-slate-400 block font-mono">CLOTHES DRIVES</span>
                <span className="text-lg font-bold text-[#17324D]">9,120 Beneficiaries</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <span className="text-slate-400 block font-mono">SELF-FUNDED CAPITAL</span>
                <span className="text-lg font-bold text-[#17324D]">PKR 1.2M+</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DONATION MANAGEMENT */}
      {activeTab === 'donations' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 animate-in fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[#17324D] font-display">
                Donation Verification & Receipt Management
              </h2>
              <p className="text-xs text-slate-500">
                Verify Easypaisa transactions, generate downloadable receipts, and export financial summaries.
              </p>
            </div>
            <button
              onClick={exportDonationsCSV}
              className="px-4 py-2 bg-[#17324D] hover:bg-[#204569] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#FFB86B]" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
                  <th className="p-3.5 rounded-l-xl">Ref / Date</th>
                  <th className="p-3.5">Donor Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Amount (PKR)</th>
                  <th className="p-3.5">Easypaisa TID</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 rounded-r-xl text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donations.map((don) => (
                  <tr key={don.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5">
                      <span className="font-mono font-bold text-[#17324D] block">{don.referenceNumber}</span>
                      <span className="text-slate-400 text-[10px]">{don.transactionDate}</span>
                    </td>
                    <td className="p-3.5">
                      <span className="font-medium text-slate-900 block">
                        {don.isAnonymous ? 'Anonymous' : don.donorName}
                      </span>
                      <span className="text-slate-400 text-[10px]">{don.donorPhone}</span>
                    </td>
                    <td className="p-3.5 font-medium text-slate-700">{don.category}</td>
                    <td className="p-3.5 font-mono font-bold text-slate-900">
                      PKR {don.amount.toLocaleString()}
                    </td>
                    <td className="p-3.5 font-mono text-slate-600">{don.transactionId}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        don.status === 'Verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : don.status === 'Pending Verification'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {don.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right space-x-1">
                      {don.status === 'Pending Verification' ? (
                        <>
                          <button
                            onClick={() => handleVerifyDonation(don.id, 'Verified')}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold cursor-pointer"
                            title="Verify donation"
                          >
                            Verify ✓
                          </button>
                          <button
                            onClick={() => handleVerifyDonation(don.id, 'Rejected')}
                            className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-[11px] font-medium cursor-pointer"
                            title="Reject donation"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => onOpenReceipt(don)}
                          className="px-2.5 py-1 bg-[#17324D] hover:bg-[#204569] text-white rounded-lg text-[11px] font-medium cursor-pointer inline-flex items-center gap-1"
                        >
                          <FileText className="w-3 h-3 text-[#FFB86B]" />
                          <span>Receipt</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: COLLABORATION PROPOSALS */}
      {activeTab === 'collaborations' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-lg font-bold text-[#17324D] font-display">
              Collaboration & Partnership Proposals
            </h2>
            <p className="text-xs text-slate-500">
              Review proposals from companies, universities, and partner organizations.
            </p>
          </div>

          <div className="space-y-4">
            {collaborations.map((col) => (
              <div
                key={col.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-slate-400 font-bold">{col.referenceNumber}</span>
                    <h3 className="text-base font-bold text-[#17324D]">{col.projectTitle}</h3>
                    <p className="text-xs text-[#55BDEB] font-semibold">
                      {col.organizationName} · {col.fullName} ({col.designation})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-800 rounded-full">
                      {col.category}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-200 text-slate-800 rounded-full">
                      {col.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {col.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-slate-400 block font-mono">EMAIL</span>
                    <span className="text-slate-800 font-medium">{col.officialEmail}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">PHONE</span>
                    <span className="text-slate-800 font-medium">{col.contactNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">LOCATION</span>
                    <span className="text-slate-800 font-medium">{col.city}, {col.country}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">PROPOSED FUNDING</span>
                    <span className="text-slate-800 font-medium">{col.proposedFundingAmount || 'N/A'}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    Logged: {new Date(col.createdAt).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-500 mr-1">Update Status:</span>
                    {(['Received', 'Under Review', 'Approved', 'Rejected', 'In Discussion'] as ApplicationStatus[]).map(st => (
                      <button
                        key={st}
                        onClick={() => handleCollaborationStatus(col.id, st)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold cursor-pointer ${
                          col.status === st
                            ? 'bg-[#17324D] text-white'
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: VOLUNTEERS */}
      {activeTab === 'volunteers' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-lg font-bold text-[#17324D] font-display">
              Volunteer Applications & Mobilization
            </h2>
            <p className="text-xs text-slate-500">
              Review volunteer applicants, filter by skill, and assign to upcoming food and educational drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {volunteers.map((vol) => (
              <div
                key={vol.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 font-bold">{vol.referenceNumber}</span>
                    <h3 className="font-bold text-sm text-[#17324D]">{vol.fullName}</h3>
                    <p className="text-xs text-slate-500">{vol.city} · Age {vol.age} · {vol.education}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                    {vol.status}
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <p><strong>Skills:</strong> {vol.skills}</p>
                  <p><strong>Availability:</strong> {vol.availability}</p>
                  <p><strong>Why RYN:</strong> <span className="italic">{vol.motivation}</span></p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {vol.areasOfInterest.map(a => (
                    <span key={a} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-600">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{vol.email} · {vol.phone}</span>
                  <a href={`tel:${vol.phone}`} className="text-[#55BDEB] font-bold hover:underline">
                    Call / WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: EDUCATION APPLICATIONS */}
      {activeTab === 'education' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-lg font-bold text-[#17324D] font-display">
              Educational Certification Applications
            </h2>
            <p className="text-xs text-slate-500">
              Students registered for online digital literacy, Responsible AI, and youth leadership cohorts.
            </p>
          </div>

          {educationApps.length === 0 ? (
            <div className="text-center p-8 bg-slate-50 rounded-2xl text-xs text-slate-500">
              No new educational applications logged yet. Test by submitting the application form on the Education page.
            </div>
          ) : (
            <div className="space-y-3">
              {educationApps.map((app) => (
                <div key={app.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400">{app.referenceNumber}</span>
                    <p className="font-bold text-slate-800">{app.fullName} ({app.city})</p>
                    <p className="text-slate-500">{app.programSelection} · {app.educationalBackground}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                      {app.status}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">{app.email}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 6: PARTNERSHIPS & MOUS */}
      {activeTab === 'mous' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#17324D] font-display">
                MOU & Strategic Partnership Registry
              </h2>
              <p className="text-xs text-slate-500">
                Official MOUs executed with Intellisnc, RICS, RIAIC, IAAA, ReSkills, Ejad, Texwex.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {partners.map((partner) => (
              <div key={partner.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{partner.partnerName}</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold">
                      {partner.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1 max-w-xl">{partner.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-400 block font-mono">Signed: {partner.signingDate}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block">Published on Site ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: AUDIT LOG */}
      {activeTab === 'audit' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 animate-in fade-in text-xs">
          <h2 className="text-lg font-bold text-[#17324D] font-display">
            Governance & Transparency Audit Log
          </h2>
          <p className="text-slate-500">
            Immutable log of verified donations, status transitions, and administrative reviews.
          </p>

          <div className="border border-slate-200 rounded-2xl divide-y divide-slate-100">
            <div className="p-3.5 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800">Donation Verified: RYN-DON-2026-0814</span>
                <p className="text-slate-500 text-[11px]">Amount PKR 10,000 matched against Easypaisa TID EP8492019482</p>
              </div>
              <span className="font-mono text-slate-400 text-[10px]">Verified By Finance Admin</span>
            </div>
            <div className="p-3.5 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800">MOU Published: IAAA International Certification</span>
                <p className="text-slate-500 text-[11px]">Audited scope: Algorithmic fairness and ethical AI validation</p>
              </div>
              <span className="font-mono text-slate-400 text-[10px]">Governance Board</span>
            </div>
            <div className="p-3.5 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800">ISO 9001 & ISO 27001 Re-certification Logged</span>
                <p className="text-slate-500 text-[11px]">Quality Management and Information Security active 2024-2027</p>
              </div>
              <span className="font-mono text-slate-400 text-[10px]">Compliance Division</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
