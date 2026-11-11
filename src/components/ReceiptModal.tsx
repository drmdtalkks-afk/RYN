import React from 'react';
import { DonationRecord } from '../types';
import { X, Printer, CheckCircle, Shield, Download } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/seedData';

interface ReceiptModalProps {
  donation: DonationRecord | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ donation, onClose }) => {
  if (!donation) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Header toolbar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#FFB86B]" />
            <span className="text-sm font-semibold tracking-wide">Official Humanitarian Donation Receipt</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div id="printable-receipt" className="p-8 space-y-6 bg-gradient-to-b from-white to-[#F7FAFC]">
          {/* Logo & Header */}
          <div className="flex items-start justify-between border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg"
                alt="RYN Logo"
                className="w-14 h-14 rounded-xl object-contain bg-white border border-slate-100 p-1"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/public/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg';
                }}
              />
              <div>
                <h2 className="text-xl font-extrabold text-[#17324D] font-display">RADIANT YOUTH NETWORK</h2>
                <p className="text-xs text-slate-500 font-medium">Empowering Youth. Transforming Lives. Building Futures.</p>
                <p className="text-[11px] text-slate-400">SECP Reg: SECP-REG-2023-094182 · ISO 9001 Certified</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Receipt No.</span>
              <p className="text-sm font-mono font-bold text-[#17324D]">{donation.referenceNumber}</p>
              <span className="text-[11px] text-slate-500 block">{new Date(donation.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Verification Status Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#CDEFF5]/40 border border-[#CDEFF5]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="text-xs font-bold text-[#17324D] block">
                  Status: {donation.status.toUpperCase()}
                </span>
                <span className="text-[11px] text-slate-600">
                  {donation.status === 'Verified' 
                    ? `Verified by ${donation.verifiedBy || 'RYN Finance Department'} on ${new Date(donation.verifiedAt || donation.createdAt).toLocaleDateString()}` 
                    : 'Awaiting finance officer verification against Easypaisa statement'}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 uppercase block">Payment Channel</span>
              <span className="text-xs font-semibold text-[#17324D]">{donation.paymentMethod}</span>
            </div>
          </div>

          {/* Donor & Transaction Data Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-sm">
            <div className="grid grid-cols-3 p-3 bg-slate-50/70 text-xs font-semibold text-slate-500">
              <span>FIELD</span>
              <span className="col-span-2">DETAILS</span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="text-slate-500 text-xs">Donor Name</span>
              <span className="col-span-2 font-medium text-slate-900">
                {donation.isAnonymous ? 'Anonymous Benefactor' : donation.donorName}
              </span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="text-slate-500 text-xs">Campaign Category</span>
              <span className="col-span-2 font-medium text-[#17324D]">{donation.category}</span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="text-slate-500 text-xs">Easypaisa TID</span>
              <span className="col-span-2 font-mono font-medium text-slate-800">{donation.transactionId}</span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="text-slate-500 text-xs">Transaction Date</span>
              <span className="col-span-2 text-slate-700">{donation.transactionDate}</span>
            </div>
            <div className="grid grid-cols-3 p-3 bg-[#FFB86B]/10">
              <span className="text-[#17324D] font-bold text-xs">Amount Contributed</span>
              <span className="col-span-2 font-bold text-lg text-[#17324D] font-mono">
                PKR {donation.amount.toLocaleString()}
              </span>
            </div>
            {donation.adminNotes && (
              <div className="grid grid-cols-3 p-3 bg-slate-50">
                <span className="text-slate-500 text-xs">Finance Note</span>
                <span className="col-span-2 text-xs text-slate-600 italic">{donation.adminNotes}</span>
              </div>
            )}
          </div>

          {/* Official Seal and Signature */}
          <div className="pt-4 flex items-end justify-between border-t border-slate-200 text-xs">
            <div className="space-y-1">
              <p className="font-semibold text-[#17324D]">Radiant Youth Network Secretariat</p>
              <p className="text-slate-500 text-[11px]">Chairperson: Ms. Zainab Asif</p>
              <p className="text-slate-500 text-[11px]">Contact: {OFFICIAL_INFO.phone}</p>
            </div>
            <div className="text-center">
              <div className="w-28 border-b border-slate-400 mb-1 inline-block pb-2">
                <span className="font-serif italic text-slate-700 text-xs font-semibold">Zainab Asif</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider block">Authorized Signatory</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Official RYN Document · Valid Without Physical Signature</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
