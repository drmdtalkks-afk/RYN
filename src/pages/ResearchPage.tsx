import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Send, 
  FileCheck,
  Search,
  Filter
} from 'lucide-react';
import { RESEARCH_PAPERS } from '../data/seedData';
import { rynService } from '../services/api';

interface ResearchPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Proposal state
  const [proposalForm, setProposalForm] = useState({
    fullName: '',
    institution: '',
    email: '',
    topic: '',
    category: 'Responsible AI',
    abstract: ''
  });
  const [submittingProposal, setSubmittingProposal] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const researchCategories = [
    'Artificial Intelligence',
    'Machine Learning',
    'Algorithmic Auditing',
    'Responsible AI',
    'Technology and Society',
    'Education Research',
    'Social Innovation',
    'Human-Centered Technology'
  ];

  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalForm.fullName || !proposalForm.email || !proposalForm.topic) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmittingProposal(true);
    try {
      const res = await rynService.submitResearchProposal(proposalForm);
      setSubmittedRef(res.referenceNumber);
    } catch (err) {
      console.error(err);
      alert('Error submitting proposal.');
    } finally {
      setSubmittingProposal(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1a3a5a] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#55BDEB] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>ACADEMIC COLLABORATION WITH EDAS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Research & Innovation
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Conducting collaborative research across Artificial Intelligence, Machine Learning, Algorithmic Auditing, and Responsible AI in partnership with EDAS academic working groups.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Research Focus Domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Scientific Subject Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Active Research Titles & Inquiry Tracks
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              In collaboration with EDAS, Radiant Youth Network connects young scholars with leading academic tracks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {researchCategories.map((cat, idx) => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? 'all' : cat)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#17324D] text-white border-[#17324D] shadow-md'
                    : 'bg-slate-50 border-slate-200 text-[#17324D] hover:border-[#55BDEB] hover:bg-white'
                }`}
              >
                <div className="text-[10px] font-mono opacity-60 mb-1">TRACK 0{idx + 1}</div>
                <h4 className="font-bold text-xs sm:text-sm">{cat}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Published Papers & Working Papers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
              EDAS Collaboration Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Research Publications & Working Papers
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, or keyword..."
              className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-[#55BDEB] hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#CDEFF5] text-[#17324D] text-[11px] font-bold rounded-lg">
                    {paper.category}
                  </span>
                  {paper.edasAffiliated && (
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-semibold rounded-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>EDAS Track</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    paper.status === 'Published' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'bg-amber-50 text-amber-800 border border-amber-100'
                  }`}>
                    {paper.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {paper.publicationDate}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#17324D] font-display">
                  {paper.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Authors: {paper.authors.join(' · ')}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {paper.abstract}
              </p>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-mono">
                  {paper.doiOrLink ? (
                    <a
                      href={paper.doiOrLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#55BDEB] hover:underline flex items-center gap-1"
                    >
                      <span>EDAS Submission Portal: {paper.doiOrLink}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>Institutional Working Paper · RYN Research Division</span>
                  )}
                </div>

                <button
                  onClick={() => alert(`Opening PDF document for "${paper.title}". Official document verified via EDAS research archive.`)}
                  className="px-4 py-2 bg-slate-100 hover:bg-[#17324D] hover:text-white text-[#17324D] text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Publication (PDF)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Collaboration Proposal Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Scholars & Students
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display">
              Submit a Research Collaboration Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Are you an academic, university researcher, or graduate student? Propose a collaborative study with Radiant Youth Network and EDAS.
            </p>
          </div>

          {submittedRef ? (
            <div className="p-8 bg-[#CDEFF5]/40 border border-[#55BDEB] rounded-2xl text-center space-y-4 animate-in fade-in">
              <FileCheck className="w-12 h-12 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-[#17324D] font-display">Proposal Submitted Successfully!</h3>
                <p className="text-sm text-slate-700 mt-1">
                  Your research proposal has been logged with reference number:
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl inline-block border border-slate-200 font-mono font-bold text-base text-[#17324D]">
                {submittedRef}
              </div>
              <p className="text-xs text-slate-500">
                The RYN Research & Innovation Board will review your abstract within 7 working days.
              </p>
              <button
                onClick={() => setSubmittedRef(null)}
                className="px-5 py-2.5 bg-[#17324D] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Submit Another Proposal
              </button>
            </div>
          ) : (
            <form onSubmit={handleProposalSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Lead Researcher / Student Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={proposalForm.fullName}
                    onChange={(e) => setProposalForm({ ...proposalForm, fullName: e.target.value })}
                    placeholder="e.g. Dr. Haris Qureshi"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Affiliated University / Institution <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={proposalForm.institution}
                    onChange={(e) => setProposalForm({ ...proposalForm, institution: e.target.value })}
                    placeholder="e.g. NUST / LUMS / FAST / COMSATS"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Official Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={proposalForm.email}
                    onChange={(e) => setProposalForm({ ...proposalForm, email: e.target.value })}
                    placeholder="e.g. h.qureshi@university.edu"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Research Category Track <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={proposalForm.category}
                    onChange={(e) => setProposalForm({ ...proposalForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                  >
                    {researchCategories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Proposed Research Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={proposalForm.topic}
                  onChange={(e) => setProposalForm({ ...proposalForm, topic: e.target.value })}
                  placeholder="e.g. Algorithmic Bias Detection in Rural Financial Micro-lending Models"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Abstract & Expected Impact (200-400 words) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={proposalForm.abstract}
                  onChange={(e) => setProposalForm({ ...proposalForm, abstract: e.target.value })}
                  placeholder="Summarize research questions, methodology, and how this study benefits vulnerable youth or algorithmic fairness..."
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
                />
              </div>

              <button
                type="submit"
                disabled={submittingProposal}
                className="w-full py-3.5 bg-[#17324D] hover:bg-[#204569] text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-[#FFB86B]" />
                <span>{submittingProposal ? 'Submitting Proposal...' : 'SUBMIT RESEARCH PROPOSAL'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
