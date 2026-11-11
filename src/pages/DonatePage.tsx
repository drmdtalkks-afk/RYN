import React, { useState } from 'react';
import { NavigationPage, DonationCategory, DonationRecord } from '../types';
import { 
  Heart, 
  Copy, 
  Check, 
  Upload, 
  ShieldCheck, 
  AlertCircle, 
  FileText, 
  Sparkles, 
  Clock, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { OFFICIAL_INFO } from '../data/seedData';
import { rynService } from '../services/api';

interface DonatePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenReceipt: (donation: DonationRecord) => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({ onNavigate, onOpenReceipt }) => {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<DonationCategory>('Food Drive');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(5000);
  const [customAmount, setCustomAmount] = useState('');
  
  // Form fields
  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    transactionId: '',
    transactionDate: new Date().toISOString().split('T')[0],
    screenshotUrl: '',
    message: '',
    isAnonymous: false,
    consent: true
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedDonation, setSubmittedDonation] = useState<DonationRecord | null>(null);

  const donationCategories: DonationCategory[] = [
    'General Donation',
    'Education Support',
    'Food Drive',
    'Ramadan Drive',
    'Clothes Drive',
    'Water Drive',
    'Youth Development',
    'Emergency Humanitarian Support'
  ];

  const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(OFFICIAL_INFO.easypaisa.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentAmountValue = selectedAmount === 'custom' 
    ? Number(customAmount) || 0 
    : selectedAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.donorName || !formData.donorEmail || !formData.donorPhone || !formData.transactionId) {
      alert('Please fill out all required fields including your Easypaisa Transaction ID.');
      return;
    }
    if (currentAmountValue <= 0) {
      alert('Please select or specify a valid donation amount.');
      return;
    }
    if (!formData.consent) {
      alert('Please confirm consent to process this donation record.');
      return;
    }

    setSubmitting(true);
    try {
      const record = await rynService.submitDonation({
        donorName: formData.donorName,
        donorEmail: formData.donorEmail,
        donorPhone: formData.donorPhone,
        category: selectedCategory,
        amount: currentAmountValue,
        paymentMethod: 'Easypaisa',
        transactionId: formData.transactionId,
        transactionDate: formData.transactionDate,
        screenshotUrl: formData.screenshotUrl || undefined,
        message: formData.message || undefined,
        isAnonymous: formData.isAnonymous
      });

      setSubmittedDonation(record);
    } catch (err) {
      console.error(err);
      alert('Error submitting donation record. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, screenshotUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1e4266] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFB86B]/20 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Heart className="w-3.5 h-3.5 fill-[#F45B91] text-[#F45B91]" />
              <span>DIRECT HUMANITARIAN CONTRIBUTION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Your Contribution Can Change a Life.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Your funds will change the future of a child, support a family in need, and create opportunities for communities that deserve a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Easypaisa Channel & Step-by-Step Instructions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent Easypaisa Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#55BDEB]/40 shadow-lg space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17324D]">
                  Official Payment Channel
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#CDEFF5] text-[#17324D]">
                  Instant Transfer
                </span>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#17324D] to-[#204569] text-white rounded-2xl space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Payment Gateway</span>
                  <span className="font-bold text-[#FFB86B]">Easypaisa</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono">Account Number</span>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-white tracking-wider">
                      {OFFICIAL_INFO.easypaisa.accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer flex items-center gap-1 text-xs"
                      title="Copy Account Number"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 text-[10px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Account Title:</span>
                  <span className="font-bold text-[#CDEFF5]">{OFFICIAL_INFO.easypaisa.accountHolder}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  How To Contribute via Easypaisa:
                </h4>
                <ol className="space-y-2 text-xs text-slate-600 pl-4 list-decimal marker:font-bold marker:text-[#55BDEB]">
                  <li>Select your preferred donation category below.</li>
                  <li>Select or specify your contribution amount in PKR.</li>
                  <li>Open your Easypaisa app or dial <strong>*786#</strong>.</li>
                  <li>Transfer to account: <strong>03304194847</strong> (Ms. Zainab Asif).</li>
                  <li>Copy your <strong>Transaction ID (TID)</strong> from the SMS / app.</li>
                  <li>Fill out the form and attach payment proof screenshot.</li>
                </ol>
              </div>

              {/* Strict Trust Disclaimer */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold block">Two-Stage Verification Policy</span>
                  <p className="leading-relaxed text-[11px] text-amber-800">
                    To prevent fraud, submissions are registered as <strong>"Pending Verification"</strong>. An authorized RYN finance administrator confirms the transaction against our Easypaisa ledger before issuing a verified tax receipt.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Guarantee */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-[#17324D] block">Where Your Donations Go:</span>
              <ul className="space-y-1 text-slate-600">
                <li>• Food Drives (Ration bags for widows & families)</li>
                <li>• Ramadan Iftar community dastarkhwan</li>
                <li>• Seasonal winter clothing & children's shoes</li>
                <li>• Clean drinking water during extreme summer heat</li>
                <li>• Educational kits and youth digital literacy</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              {submittedDonation ? (
                <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-3xl text-center space-y-5 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Clock className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#17324D]">
                      Donation Submission Received!
                    </h3>
                    <p className="text-sm text-slate-700 mt-1 max-w-md mx-auto">
                      Thank you for your generous contribution of <strong>PKR {submittedDonation.amount.toLocaleString()}</strong> towards our <strong>{submittedDonation.category}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200 inline-block text-left text-xs space-y-1 shadow-xs">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-slate-400 uppercase font-mono">Reference Number:</span>
                      <span className="font-mono font-bold text-[#17324D] text-sm">{submittedDonation.referenceNumber}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-slate-400 uppercase font-mono">Status:</span>
                      <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        {submittedDonation.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-slate-400 uppercase font-mono">Easypaisa TID:</span>
                      <span className="font-mono text-slate-800">{submittedDonation.transactionId}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Our finance team is currently reviewing your transaction. You will receive an official digital receipt upon verification.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenReceipt(submittedDonation)}
                      className="px-5 py-2.5 bg-[#17324D] hover:bg-[#204569] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-[#FFB86B]" />
                      <span>Preview Official Receipt</span>
                    </button>
                    <button
                      onClick={() => setSubmittedDonation(null)}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Make Another Donation
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      1. Select Donation Category <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {donationCategories.map(cat => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                            selectedCategory === cat
                              ? 'bg-[#17324D] text-white border-[#17324D] shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#55BDEB]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                      2. Select Amount (PKR) <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {presetAmounts.map(amt => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setSelectedAmount(amt)}
                          className={`py-2 px-1 rounded-xl text-xs font-bold font-mono border transition-all text-center cursor-pointer ${
                            selectedAmount === amt
                              ? 'bg-[#FFB86B] text-[#17324D] border-[#FFB86B] shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#FFB86B]'
                          }`}
                        >
                          {amt.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedAmount('custom')}
                          className={`px-3 py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                            selectedAmount === 'custom'
                              ? 'bg-[#17324D] text-white border-[#17324D]'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          Custom PKR
                        </button>
                        {selectedAmount === 'custom' && (
                          <input
                            type="number"
                            min="100"
                            step="50"
                            required
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Enter custom amount in PKR (e.g. 15000)"
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-xl text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="pt-2 border-t border-slate-100 space-y-4">
                    <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                      3. Donor Details
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.donorName}
                          onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                          placeholder="e.g. Muhammad Usman"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.donorEmail}
                          onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                          placeholder="e.g. usman@example.com"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Contact / WhatsApp Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.donorPhone}
                          onChange={(e) => setFormData({ ...formData, donorPhone: e.target.value })}
                          placeholder="e.g. +92 300 1234567"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Transaction Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.transactionDate}
                          onChange={(e) => setFormData({ ...formData, transactionDate: e.target.value })}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Transaction Verification Details */}
                  <div className="pt-2 border-t border-slate-100 space-y-4">
                    <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                      4. Payment Verification Data
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Easypaisa Transaction ID (TID) <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.transactionId}
                          onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                          placeholder="e.g. EP9482019482"
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Attach Screenshot / Payment Proof (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/*"
                            id="screenshot-upload"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="screenshot-upload"
                            className="w-full px-4 py-2.5 border border-dashed border-slate-300 hover:border-[#55BDEB] rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            <Upload className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-600 truncate">
                              {formData.screenshotUrl ? 'Screenshot Attached ✓' : 'Upload Screenshot (PNG/JPG)'}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        Optional Message or Dedication
                      </label>
                      <input
                        type="text"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. In memory of loved ones / for children's Eid gifts"
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                      />
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isAnonymous}
                          onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                          className="rounded text-[#17324D] focus:ring-[#55BDEB]"
                        />
                        <span>Make this donation anonymous on public acknowledgements</span>
                      </label>

                      <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded text-[#17324D] focus:ring-[#55BDEB]"
                        />
                        <span>
                          I agree to the verification of this donation record by Radiant Youth Network finance officers in accordance with non-profit audit rules.
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Heart className="w-4 h-4 fill-[#F45B91] text-[#F45B91]" />
                    <span>{submitting ? 'Submitting Record...' : `SUBMIT DONATION (PKR ${currentAmountValue.toLocaleString()})`}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
