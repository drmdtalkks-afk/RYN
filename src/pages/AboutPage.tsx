import React from 'react';
import { NavigationPage } from '../types';
import { 
  ShieldCheck, 
  Award, 
  Linkedin, 
  Mail, 
  Users, 
  Target, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS, ORGANIZATIONAL_CREDENTIALS, OFFICIAL_INFO } from '../data/seedData';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenVerifyModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenVerifyModal }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1f4266] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>YOUTH-LED NONPROFIT PLATFORM · ESTABLISHED 2023</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              About Radiant Youth Network
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Empowering youth, advancing education, promoting gender equality, and delivering transparent humanitarian relief to underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Origins & Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display">
              Founded on the Conviction that Youth Lead Real Change
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Established in <strong>2023</strong> by <strong>Ms. Zainab Asif</strong>, Radiant Youth Network (RYN) was founded to bridge the critical gap between grassroots humanitarian assistance and long-term youth development in Pakistan.
              </p>
              <p>
                From its inception, RYN rejected the notion of passive charity. Instead, the organization mobilizes energetic students, young professionals, and researchers as the primary drivers of community relief. What began as local food drives has rapidly grown into an accredited, multidimensional NGO executing food security programs, seasonal clothes distributions, clean drinking water drives, online educational certifications, and academic research collaborations.
              </p>
              <p>
                Today, Radiant Youth Network combines field humanitarian action with modern standards of quality governance (ISO 9001), digital security (ISO 27001), and international algorithmic auditing ethics (IAAA).
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('impact')}
                className="px-5 py-2.5 bg-[#17324D] hover:bg-[#204569] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Humanitarian Impact</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB86B]" />
              </button>
              <button
                onClick={onOpenVerifyModal}
                className="px-5 py-2.5 bg-slate-100 hover:bg-[#CDEFF5] text-[#17324D] text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#55BDEB]" />
                <span>Verify SECP & ISO Certifications</span>
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/hero_volunteers_community_1794371132429.jpg"
                alt="Radiant Youth Network Field Initiative"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFB86B]">
                    Field Community Action
                  </span>
                  <p className="text-sm font-semibold">
                    Over 561+ families fed and 9,120+ people supported through verified youth mobilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Team */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F45B91]">
              Governance & Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Leadership & Management Team
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Dedicated professionals guiding Radiant Youth Network's humanitarian strategy, operational rigor, and youth programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo area */}
                  <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/public/assets/aistudio/Zainab_Asif_5d777e3d.jpg';
                        }}
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-[#CDEFF5] flex items-center justify-center text-[#17324D] text-2xl font-bold font-display">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#17324D] shadow-xs">
                      {member.role.split('/')[0]}
                    </div>
                  </div>

                  {/* Profile info */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-[#17324D] font-display group-hover:text-[#55BDEB] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#55BDEB]">
                      {member.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">RYN Executive Team</span>
                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#0077b5] transition-colors p-1"
                      title={`${member.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            <span>Note: Detailed biographies and executive appointments are audited and managed through the secure administrative portal.</span>
          </div>
        </div>
      </section>

      {/* Certifications and Organizational Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
                Public Transparency & Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
                Organizational Recognition, Certifications & Standards
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                Radiant Youth Network adheres to strict national and international accreditation standards to safeguard donor contributions and maintain operational excellence.
              </p>
            </div>
            <button
              onClick={onOpenVerifyModal}
              className="px-5 py-3 bg-[#17324D] hover:bg-[#204569] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#FFB86B]" />
              <span>Verify Official Certificates</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORGANIZATIONAL_CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#55BDEB] hover:bg-white transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#CDEFF5] flex items-center justify-center text-[#17324D]">
                    <Award className="w-5 h-5 text-[#17324D]" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {cred.validity}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#17324D]">{cred.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{cred.issuingAuthority}</p>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {cred.scope}
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">{cred.certificateNumber}</span>
                  <button
                    onClick={onOpenVerifyModal}
                    className="text-[#55BDEB] font-semibold hover:underline cursor-pointer"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
