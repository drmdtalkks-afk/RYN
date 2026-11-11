import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Laptop, 
  CheckCircle2, 
  FileText, 
  Upload, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { rynService } from '../services/api';

interface EducationPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    educationalBackground: '',
    areaOfInterest: 'Digital Literacy & Web Basics',
    programSelection: 'Youth Digital Skills Certification',
    cvFileName: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<{ referenceNumber: string; fullName: string } | null>(null);

  const programsOffered = [
    {
      title: 'Youth Digital Skills Certification',
      duration: '8 Weeks · Online & Hybrid',
      audience: 'Youth aged 16-25',
      topics: ['Modern Computing & Productivity', 'Safe Cyber Practices', 'Cloud Tools & Remote Collaboration', 'Introduction to Freelancing']
    },
    {
      title: 'Responsible AI & Digital Literacy Masterclass',
      duration: '4 Weeks · Executive Certificate',
      audience: 'Students, Developers & Young Innovators',
      topics: ['AI Foundations & Prompting', 'Algorithmic Fairness & Bias', 'Ethics in Automation', 'EDAS Research Tracks']
    },
    {
      title: 'Professional Youth Leadership & Civic Action',
      duration: '6 Weeks · Mentorship Cohort',
      audience: 'Aspiring NGO & Community Changemakers',
      topics: ['Project Management for NGOs', 'Humanitarian Field Ethics', 'Public Speaking & Advocacy', 'Grant Writing & Budgeting']
    },
    {
      title: 'Women in Tech & Entrepreneurship Lab',
      duration: '10 Weeks · Intensive Incubator',
      audience: 'Young Women in Higher Education',
      topics: ['Digital Marketing & E-Commerce', 'Financial Literacy & Invoicing', 'Mentorship from Female Leaders', 'Seed Project Grant Pitch']
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      const app = await rynService.submitEducationApplication({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        educationalBackground: formData.educationalBackground,
        areaOfInterest: formData.areaOfInterest,
        programSelection: formData.programSelection,
        cvFileName: formData.cvFileName || undefined
      });

      setSubmittedApp({
        referenceNumber: app.referenceNumber,
        fullName: app.fullName
      });
    } catch (err) {
      console.error(err);
      alert('Error submitting application. Please try again.');
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#55BDEB] rounded-full text-xs font-semibold backdrop-blur-xs">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>RYN ACADEMY & YOUTH DEVELOPMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Education & Learning Portal
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Free and subsidized online certification, digital literacy bootcamps, and professional career mentorship empowering the next generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#55BDEB]/20 flex items-center justify-center text-[#55BDEB]">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Digital Literacy</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Equipping young students with essential computer skills, web safety, and remote work competencies.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FFB86B]/20 flex items-center justify-center text-[#FFB86B]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Online Certifications</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Recognized certificates in partnership with ReSkills, Intellisnc, and academic alliance partners.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F45B91]/20 flex items-center justify-center text-[#F45B91]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Youth Skill Labs</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hands-on workshops in communication, ethical leadership, and project execution.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#CDEFF5] flex items-center justify-center text-[#17324D]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#17324D]">Research Fellowships</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Student research mentorship with EDAS publication tracks in AI and technology ethics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses / Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
            Current Academic Cohorts
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
            Available Online Certification Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsOffered.map((prog) => (
            <div
              key={prog.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-[#55BDEB] hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#17324D] font-display">{prog.title}</h3>
                  <span className="text-xs text-[#55BDEB] font-semibold mt-0.5 block">{prog.duration}</span>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100">
                  Open for Enrollment
                </span>
              </div>

              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Target Audience:</span> {prog.audience}
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Curriculum Highlights</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {prog.topics.map((t, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, programSelection: prog.title }));
                    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-[#55BDEB] hover:text-white text-[#17324D] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Select This Program ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Registration Form Section */}
      <section id="registration-form" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#55BDEB] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Application Portal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display">
              Apply for Educational Certification
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Fill out the form below to apply for upcoming cohorts. Selected students receive complete scholarship support and certified credentials.
            </p>
          </div>

          {submittedApp ? (
            <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-2xl text-center space-y-4 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-[#17324D] font-display">Application Received!</h3>
                <p className="text-sm text-slate-700 mt-1">
                  Thank you, <strong>{submittedApp.fullName}</strong>. Your educational application has been stored in the RYN platform database.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl inline-block border border-slate-200 text-xs">
                <span className="text-slate-400 block uppercase font-mono">Reference Number</span>
                <span className="text-base font-bold font-mono text-[#17324D]">{submittedApp.referenceNumber}</span>
              </div>
              <p className="text-xs text-slate-500">
                Our educational coordinators will review your submission and contact you via email with login details for the digital classroom.
              </p>
              <button
                onClick={() => setSubmittedApp(null)}
                className="px-5 py-2.5 bg-[#17324D] text-white text-xs font-bold rounded-xl hover:bg-[#22486f] transition-colors cursor-pointer"
              >
                Submit Another Application
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
                    placeholder="e.g. Fatima Zahra"
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
                    placeholder="e.g. fatima.z@example.com"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    City / District <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Lahore / Islamabad / Rawalpindi"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Educational Background <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.educationalBackground}
                    onChange={(e) => setFormData({ ...formData, educationalBackground: e.target.value })}
                    placeholder="e.g. Intermediate, BS Computer Science, Matric"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Area of Primary Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  >
                    <option>Digital Literacy & Web Basics</option>
                    <option>Artificial Intelligence & Prompt Engineering</option>
                    <option>Responsible AI & Algorithmic Auditing</option>
                    <option>Nonprofit Management & Civic Action</option>
                    <option>Women in Tech & Digital Freelancing</option>
                    <option>Research Methodology & Academic Writing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Select Program Cohort <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.programSelection}
                  onChange={(e) => setFormData({ ...formData, programSelection: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                >
                  {programsOffered.map(p => (
                    <option key={p.title} value={p.title}>{p.title} ({p.duration})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Upload CV / Educational Marksheet (Optional - PDF or DOCX)
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-[#55BDEB] rounded-2xl p-6 text-center cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-600">
                    {formData.cvFileName ? (
                      <span className="font-semibold text-emerald-700">Selected: {formData.cvFileName}</span>
                    ) : (
                      <span>Drag & drop your file here or browse from device</span>
                    )}
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, cvFileName: e.target.files[0].name });
                      }
                    }}
                  />
                  <label
                    htmlFor="cv-upload"
                    className="mt-2 inline-block px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg cursor-pointer"
                  >
                    Select File
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#17324D] hover:bg-[#21476f] text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FileText className="w-4 h-4 text-[#FFB86B]" />
                  <span>{submitting ? 'Submitting Application...' : 'SUBMIT APPLICATION'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
