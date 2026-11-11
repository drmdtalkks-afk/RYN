import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Search, 
  Heart, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Activity, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PROGRAMS } from '../data/seedData';

interface ProgramsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Humanitarian', 'Education', 'Leadership', 'Advocacy', 'Technology', 'Health & Climate', 'Community', 'Research'];

  const filteredPrograms = PROGRAMS.filter((prog) => {
    const matchesSearch = 
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.targetBeneficiaries.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || prog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1a3b5c] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#55BDEB] rounded-full text-xs font-semibold backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>12 CORE STRATEGIC DOMAINS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Programs & Initiatives
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Comprehensive, scalable initiatives spanning youth leadership, humanitarian assistance, gender equality, education, and algorithmic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs by keyword, objective, or beneficiaries..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#55BDEB]"
              />
            </div>

            {/* Quick Count */}
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredPrograms.length} of {PROGRAMS.length} active programs
            </span>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#17324D] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Initiatives (12)' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Category Pill */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={prog.imageUrl}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#17324D] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {prog.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FFB86B] text-[#17324D] text-xs font-mono font-bold px-3 py-1 rounded-full shadow-xs">
                    {prog.impactMetric}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#17324D] font-display group-hover:text-[#55BDEB] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {prog.shortDescription}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Objectives */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#55BDEB]" />
                      <span>Key Objectives</span>
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc marker:text-[#55BDEB]">
                      {prog.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Beneficiaries & Activities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Target Beneficiaries</span>
                      <span className="font-semibold text-slate-800">{prog.targetBeneficiaries}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Primary Activities</span>
                      <span className="text-slate-700">{prog.keyActivities.join(' · ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('volunteer')}
                  className="px-4 py-2 bg-slate-100 hover:bg-[#CDEFF5] text-[#17324D] text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5 text-[#55BDEB]" />
                  <span>Volunteer for this</span>
                </button>
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-4 py-2 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] text-xs font-extrabold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#F45B91] text-[#F45B91]" />
                  <span>Donate to Program</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
