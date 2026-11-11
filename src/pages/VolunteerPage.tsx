import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Users, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Upload, 
  ShieldCheck, 
  Award,
  ArrowRight
} from 'lucide-react';
import { rynService } from '../services/api';

interface VolunteerPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const VolunteerPage: React.FC<VolunteerPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    city: string;
    age: number;
    education: string;
    skills: string;
    areasOfInterest: string[];
    availability: string;
    previousExperience: string;
    motivation: string;
    resumeFileName: string;
  }>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    age: 21,
    education: '',
    skills: '',
    areasOfInterest: ['Youth Empowerment', 'Food Distribution'],
    availability: 'Weekends & Evenings',
    previousExperience: '',
    motivation: '',
    resumeFileName: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedVolunteer, setSubmittedVolunteer] = useState<{
    referenceNumber: string;
    fullName: string;
  } | null>(null);

  const interestCategories = [
    'Education',
    'Food Distribution',
    'Social Work',
    'Marketing',
    'Technical Support',
    'Research',
    'Event Management',
    'Fundraising',
    'Gender Equality',
    'Community Development'
  ];

  const handleInterestToggle = (cat: string) => {
    setFormData(prev => {
      const exists = prev.areasOfInterest.includes(cat);
      if (exists) {
        return { ...prev, areasOfInterest: prev.areasOfInterest.filter(c => c !== cat) };
      } else {
        return { ...prev, areasOfInterest: [...prev.areasOfInterest, cat] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.city) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    if (formData.areasOfInterest.length === 0) {
      alert('Please select at least one area of interest.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await rynService.submitVolunteer({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        age: Number(formData.age) || 20,
        education: formData.education,
        skills: formData.skills,
        areasOfInterest: formData.areasOfInterest,
        availability: formData.availability,
        previousExperience: formData.previousExperience,
        motivation: formData.motivation,
        resumeFileName: formData.resumeFileName || undefined
      });

      setSubmittedVolunteer({
        referenceNumber: res.referenceNumber,
        fullName: res.fullName
      });
    } catch (err) {
      console.error(err);
      alert('Error submitting volunteer registration.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1c3e62] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Users className="w-3.5 h-3.5" />
              <span>YOUTH MOBILIZATION ACROSS PAKISTAN</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Be the Change. Become a Volunteer.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Join hundreds of enthusiastic young changemakers delivering food drives, educational workshops, emergency hydration relief, and civic empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#55BDEB]/20 flex items-center justify-center text-[#55BDEB]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Verified Experience & Certificate</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive official certificate of humanitarian service and leadership recommendations from RYN leadership.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FFB86B]/20 flex items-center justify-center text-[#FFB86B]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Direct Community Impact</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Work on the ground directly serving deserving families, distributing meals, and teaching digital skills.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F45B91]/20 flex items-center justify-center text-[#F45B91]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Leadership & Networking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect with fellow university leaders, corporate CSR partners, and international youth fellows.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Join the Movement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display">
              Volunteer Network Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Please share your background, skills, and availability. We welcome energetic students and professionals eager to make a tangible difference.
            </p>
          </div>

          {submittedVolunteer ? (
            <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-3xl text-center space-y-4 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-2xl font-bold font-display text-[#17324D]">
                  Welcome to Radiant Youth Network!
                </h3>
                <p className="text-sm text-slate-700 mt-1">
                  Thank you, <strong>{submittedVolunteer.fullName}</strong>. Your volunteer profile has been registered in the RYN platform database.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 inline-block text-xs">
                <span className="text-slate-400 uppercase font-mono block">Volunteer Reference ID</span>
                <span className="text-lg font-bold font-mono text-[#17324D]">{submittedVolunteer.referenceNumber}</span>
              </div>

              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our HR and volunteer coordinator (Ms. Chanda Asif's team) will review your areas of interest and invite you to our volunteer orientation group.
              </p>

              <button
                onClick={() => setSubmittedVolunteer(null)}
                className="px-6 py-2.5 bg-[#17324D] text-white text-xs font-bold rounded-xl hover:bg-[#204569] transition-colors cursor-pointer"
              >
                Register Another Volunteer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Daniyal Khan"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. daniyal@example.com"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 312 9876543"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    City / Location <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Islamabad, Rawalpindi, Lahore"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Age <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="65"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Current Education / Degree <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    placeholder="e.g. BS Software Engineering / BBA / FSC"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Core Skills & Capabilities <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g. Social media marketing, event logistics, photography, coding, tutoring"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              {/* Areas of Interest Multi-select */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Areas of Interest (Select All That Apply) <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {interestCategories.map(cat => {
                    const isSelected = formData.areasOfInterest.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleInterestToggle(cat)}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#17324D] text-white border-[#17324D] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#55BDEB]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Weekly Availability <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  >
                    <option>Weekends Only (4-8 hours)</option>
                    <option>Weekdays & Evenings (8-12 hours)</option>
                    <option>Flexible / Remote (6-10 hours)</option>
                    <option>Full-Time Campaign Support</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Previous Volunteer Experience (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.previousExperience}
                    onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                    placeholder="e.g. Campus Blood Drive, Flood Relief 2024"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Why do you want to join Radiant Youth Network? <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us what motivates you to serve underserved communities and empower youth..."
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              {/* Upload CV */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Attach CV / Profile (Optional)
                </label>
                <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50">
                  <input
                    type="file"
                    id="vol-cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, resumeFileName: e.target.files[0].name });
                      }
                    }}
                  />
                  <label
                    htmlFor="vol-cv"
                    className="text-xs text-slate-600 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4 text-slate-400" />
                    <span>{formData.resumeFileName ? `Attached: ${formData.resumeFileName}` : 'Upload CV Document (Optional)'}</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Users className="w-4 h-4 text-[#17324D]" />
                <span>{submitting ? 'Registering...' : 'JOIN OUR VOLUNTEER NETWORK'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
