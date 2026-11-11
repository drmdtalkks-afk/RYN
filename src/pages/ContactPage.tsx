import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_INFO } from '../data/seedData';

interface ContactPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1a3c5e] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#55BDEB] rounded-full text-xs font-semibold backdrop-blur-xs">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>OFFICIAL COMMUNICATION DESK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Contact Radiant Youth Network
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              We welcome inquiries from community members, prospective volunteers, donors, researchers, and institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#17324D] font-display">
                  Organization Details
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Youth-led, humanitarian, and educational nonprofit organization.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#55BDEB]/20 flex items-center justify-center text-[#55BDEB] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Hotline / WhatsApp
                    </span>
                    <a
                      href="tel:+923014744365"
                      className="text-sm font-bold font-mono text-[#17324D] hover:text-[#55BDEB] transition-colors"
                    >
                      {OFFICIAL_INFO.phone}
                    </a>
                    <span className="text-[11px] text-slate-500 block">Monday to Saturday · 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Facebook Official Page
                    </span>
                    <a
                      href={OFFICIAL_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#17324D] hover:text-[#1877F2] transition-colors flex items-center gap-1 truncate"
                    >
                      <span className="truncate">facebook.com/radiantyouthnetwork</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Instagram Official Handle
                    </span>
                    <a
                      href={OFFICIAL_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#17324D] hover:text-[#E1306C] transition-colors flex items-center gap-1 truncate"
                    >
                      <span className="truncate">instagram.com/radiantyouthnetwork</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Donation details */}
                <div className="p-4 rounded-2xl bg-[#FFB86B]/15 border border-[#FFB86B]/30 space-y-1 text-xs">
                  <span className="font-bold text-[#17324D] block uppercase tracking-wider text-[10px]">
                    Easypaisa Donation Account
                  </span>
                  <div className="font-mono font-bold text-sm text-[#17324D]">03304194847</div>
                  <div className="text-slate-600 text-[11px]">Title: Ms. Zainab Asif (Founder & Chairperson)</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Headquarters Coordinate Info */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#55BDEB]" />
                <h4 className="text-sm font-bold text-[#17324D]">Headquarters Geographic Zone</h4>
              </div>
              <p className="text-xs text-slate-500">
                Operating nationwide across Pakistan with active volunteer teams deployed in Islamabad, Rawalpindi, and Lahore.
              </p>
              <div className="h-44 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-center p-4 text-xs text-slate-400 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-[#55BDEB]/20 flex items-center justify-center text-[#55BDEB] mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-700">Islamabad / Lahore Operations Hub</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Pakistan · Nationwide Youth Mobilization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
                  Direct Message
                </span>
                <h3 className="text-2xl font-bold font-display text-[#17324D] mt-1">
                  Send an Inquiry to RYN
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question about our food drives, education certifications, or research tracks? Leave us a message.
                </p>
              </div>

              {sent ? (
                <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-2xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-[#17324D]">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, <strong>{formData.name}</strong>. Our communications desk will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 bg-[#17324D] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Bilal Ahmed"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. bilal@example.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Food Drive participation / Certification enrollment"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your message or inquiry here..."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#17324D] hover:bg-[#204569] text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#FFB86B]" />
                    <span>SEND MESSAGE</span>
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
