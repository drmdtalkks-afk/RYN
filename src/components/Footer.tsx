import React from 'react';
import { NavigationPage } from '../types';
import { Heart, Phone, Mail, Globe, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/seedData';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenVerifyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVerifyModal }) => {
  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17324D] text-white pt-16 pb-12 border-t border-slate-800">
      {/* Top Banner / Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-r from-[#1d3d5e] to-[#17324D] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Together, We Illuminate Futures.
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Every child deserves education, every family deserves dignity, and every young person deserves an opportunity to lead.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNav('donate')}
              className="px-6 py-3 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-bold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#F45B91] text-[#F45B91]" />
              <span>Donate via Easypaisa</span>
            </button>
            <button
              onClick={() => handleNav('volunteer')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Join as Volunteer</span>
              <ArrowRight className="w-4 h-4 text-[#55BDEB]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          {/* Column 1: Organization Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg"
                alt="RYN Logo"
                className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/public/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg';
                }}
              />
              <div>
                <span className="block font-bold text-lg font-display tracking-tight text-white">
                  Radiant Youth Network
                </span>
                <span className="block text-[11px] text-[#55BDEB] font-medium tracking-wider">
                  YOUTH-LED NGO · EST. 2023
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering youth, transforming communities, and creating sustainable opportunities through education, humanitarian action, and research innovation.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Founder & Chairperson: <strong className="text-white">Ms. Zainab Asif</strong></p>
              <p>Accreditations: <span className="text-[#CDEFF5]">SECP Registered · ISO 9001 · ISO 27001 · IAAA Member</span></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About RYN & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('impact')} className="hover:text-white transition-colors cursor-pointer">
                  Our Impact & Metrics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-white transition-colors cursor-pointer">
                  12 Dedicated Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('education')} className="hover:text-white transition-colors cursor-pointer">
                  Education & Certifications
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('research')} className="hover:text-white transition-colors cursor-pointer">
                  Research & Innovation (EDAS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partnerships')} className="hover:text-white transition-colors cursor-pointer">
                  Strategic MOUs & Partners
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('donate')} className="hover:text-white transition-colors cursor-pointer font-medium text-[#FFB86B]">
                  Support / Donate Now
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('volunteer')} className="hover:text-white transition-colors cursor-pointer">
                  Become a Volunteer
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collaboration')} className="hover:text-white transition-colors cursor-pointer">
                  Collaborate With Us (12 Tracks)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partnerships')} className="hover:text-white transition-colors cursor-pointer">
                  Become an Institutional Partner
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('education')} className="hover:text-white transition-colors cursor-pointer">
                  Enroll in Digital Learning
                </button>
              </li>
              {onOpenVerifyModal && (
                <li>
                  <button 
                    onClick={onOpenVerifyModal} 
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-[#CDEFF5]"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFB86B]" />
                    <span>Verify NGO Credentials</span>
                  </button>
                </li>
              )}
              <li>
                <button onClick={() => handleNav('admin')} className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer pt-2">
                  Administrator Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F45B91]">
              Official Channels
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <a 
                href="tel:+923014744365"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#55BDEB] shrink-0" />
                <span>+92 301 4744365</span>
              </a>
              <a 
                href={OFFICIAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#FFB86B] shrink-0" />
                <span>facebook.com/radiantyouthnetwork</span>
              </a>
              <a 
                href={OFFICIAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#F45B91] shrink-0" />
                <span>instagram.com/radiantyouthnetwork</span>
              </a>
            </div>

            <div className="mt-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs">
              <span className="text-slate-400 block mb-1">Official Easypaisa Account:</span>
              <div className="font-mono text-[#FFB86B] font-bold text-sm tracking-wider">03304194847</div>
              <div className="text-[11px] text-slate-300">Title: Ms. Zainab Asif</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Radiant Youth Network (RYN). All Rights Reserved.
          </div>
          <div className="text-center font-medium text-slate-300">
            Empowering Youth. Transforming Lives. Building Futures.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('about')} className="hover:text-white">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => handleNav('donate')} className="hover:text-white">Donation Policy</button>
            <span>·</span>
            <button onClick={() => handleNav('partnerships')} className="hover:text-white">Terms of MOU</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
