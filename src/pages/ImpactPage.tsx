import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Heart, 
  Utensils, 
  Shirt, 
  Droplets, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Filter,
  CheckCircle2,
  Users
} from 'lucide-react';
import { IMPACT_STATS } from '../data/seedData';

interface ImpactPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const campaigns = [
    {
      id: 'camp-1',
      title: 'Emergency Food & Ration Package Distribution',
      category: 'food',
      metric: '561+ Families Supported',
      location: 'Peri-urban Settlements & Suburban Clusters',
      date: 'Ongoing Since 2023',
      description: 'RYN teams perform rigorous door-to-door vulnerability surveys to ensure food packages directly reach elderly widows, disabled heads-of-households, and daily-wage earners. Each standard package contains 20kg wheat flour, 5kg rice, cooking ghee, lentils, tea, and sugar.',
      imageUrl: '/src/assets/images/campaign_food_drive_1794371132190.jpg',
      highlight: 'Direct dignified delivery without public crowding'
    },
    {
      id: 'camp-2',
      title: 'Ramadan Community Iftar Dastarkhwan & Hospital Meal Trays',
      category: 'ramadan',
      metric: '4,320 Meals Served',
      location: 'Public Transit Hubs & Public Hospital Centers',
      date: 'Ramadan 2023 - 2026',
      description: 'During the holy month of Ramadan, youth volunteers organize fresh daily Iftar meals for commuters, low-income laborers, and families attending to patients outside tertiary hospitals who cannot afford nutritious meals.',
      imageUrl: '/src/assets/images/campaign_food_drive_1794371132190.jpg',
      highlight: 'Prepared with high hygienic standards and volunteer warmth'
    },
    {
      id: 'camp-3',
      title: 'Winter Warmth & Festive Clothing Distribution',
      category: 'clothes',
      metric: '9,120 Beneficiaries Reached',
      location: 'Underprivileged Communities & Orphanages',
      date: 'Winter & Eid Seasons',
      description: 'Clothing is a fundamental human need that preserves dignity and health. RYN collects, sanitizes, and distributes winter jackets, shawls, thermal layers, and brand-new festive Eid clothes for children living in underserved settlements.',
      imageUrl: '/src/assets/images/hero_volunteers_community_1794371132429.jpg',
      highlight: 'Restoring confidence and protecting from extreme winter temperatures'
    },
    {
      id: 'camp-4',
      title: 'Summer Heatwave Emergency Hydration Stations',
      category: 'water',
      metric: 'Thousands Hydrated Every Summer',
      location: 'Bustling Public Intersections & Labor Outposts',
      date: 'Peak Summer Months',
      description: 'Extreme summer heatwaves pose acute medical threats to street laborers, rickshaw drivers, and outdoor vendors. RYN operates mobile cold water points and distribution teams handing out purified chilled bottled water, glucose packets, and electrolyte solutions.',
      imageUrl: '/src/assets/images/campaign_summer_water_1794371132952.jpg',
      highlight: 'Preventing heat exhaustion and dehydration casualties'
    },
    {
      id: 'camp-5',
      title: 'Youth Digital Literacy & Academic Mentoring Camps',
      category: 'education',
      metric: '850+ Students Supported',
      location: 'Community Learning Centers',
      date: 'Year-Round Active',
      description: 'Equipping students with modern computer literacy, office software knowledge, safe web browsing habits, and secondary school tutoring to prevent educational dropouts caused by poverty.',
      imageUrl: '/src/assets/images/campaign_youth_education_1794371133489.jpg',
      highlight: 'Bridging the digital divide for the next generation'
    }
  ];

  const filteredCampaigns = selectedCategory === 'all'
    ? campaigns
    : campaigns.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#17324D] via-[#1b3d60] to-[#17324D] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FFB86B] rounded-full text-xs font-semibold backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CUMULATIVE HUMANITARIAN REPORTING · 2023 - 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Our Humanitarian Impact
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Transparent, measurable relief delivered by youth volunteers on the frontlines of humanitarian need across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Verified KPI Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow text-center space-y-2"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#17324D] font-mono tabular-nums block">
                {stat.value}{stat.suffix}
              </span>
              <span className="font-bold text-sm text-[#17324D] block">{stat.label}</span>
              <p className="text-xs text-slate-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-slate-100 rounded-2xl text-center text-xs text-slate-500">
          Note: These are cumulative impact figures reported and verified by Radiant Youth Network since its establishment in 2023.
        </div>
      </section>

      {/* Highlight: Self-Funded Humanitarian Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#17324D] to-[#204569] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
                Financial Responsibility & Dedication
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-tight text-white">
                Over PKR 1.2 Million Contributed Through Self-Funded Humanitarian Initiatives
              </h2>
              <div className="space-y-3 text-sm text-slate-200 leading-relaxed font-light">
                <p>
                  Before seeking public support, the founding leadership and dedicated patrons of Radiant Youth Network independently committed resources to test, refine, and prove the efficacy of our community aid models.
                </p>
                <p>
                  This self-funded capital of over PKR 1.2 Million directly covered logistics, emergency food bags, summer hydration water supplies, and educational kits for families experiencing acute distress, ensuring that 100% of future public contributions go directly to beneficiary support.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-6 py-3 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-[#F45B91] text-[#F45B91]" />
                  <span>Support Our Next Campaign</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#55BDEB]/20 flex items-center justify-center text-[#55BDEB]">
                <ShieldCheck className="w-8 h-8 text-[#55BDEB]" />
              </div>
              <div className="text-2xl font-bold font-mono text-[#FFB86B]">PKR 1,200,000+</div>
              <p className="text-xs text-slate-300">
                Self-funded humanitarian contributions recorded and audited under RYN governance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Stories & Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Field Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Humanitarian Campaign Gallery
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#17324D] shadow-xs'
                  : 'text-slate-600 hover:text-[#17324D]'
              }`}
            >
              All Campaigns
            </button>
            <button
              onClick={() => setSelectedCategory('food')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'food'
                  ? 'bg-white text-[#17324D] shadow-xs'
                  : 'text-slate-600 hover:text-[#17324D]'
              }`}
            >
              Food Drives (561+)
            </button>
            <button
              onClick={() => setSelectedCategory('ramadan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'ramadan'
                  ? 'bg-white text-[#17324D] shadow-xs'
                  : 'text-slate-600 hover:text-[#17324D]'
              }`}
            >
              Ramadan Iftar (4,320)
            </button>
            <button
              onClick={() => setSelectedCategory('clothes')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'clothes'
                  ? 'bg-white text-[#17324D] shadow-xs'
                  : 'text-slate-600 hover:text-[#17324D]'
              }`}
            >
              Clothes (9,120)
            </button>
            <button
              onClick={() => setSelectedCategory('water')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'water'
                  ? 'bg-white text-[#17324D] shadow-xs'
                  : 'text-slate-600 hover:text-[#17324D]'
              }`}
            >
              Summer Water
            </button>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={camp.imageUrl}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#17324D]/90 text-white backdrop-blur-xs text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {camp.metric}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#55BDEB]" />
                      <span>{camp.location}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFB86B]" />
                      <span>{camp.date}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17324D] font-display group-hover:text-[#55BDEB] transition-colors">
                    {camp.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {camp.description}
                  </p>

                  <div className="p-3 bg-[#CDEFF5]/30 rounded-xl text-xs text-[#17324D] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{camp.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('volunteer')}
                  className="text-xs font-semibold text-slate-600 hover:text-[#17324D] flex items-center gap-1 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5 text-[#55BDEB]" />
                  <span>Volunteer for this Initiative</span>
                </button>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-xs font-bold text-[#FFB86B] hover:text-[#d97c18] flex items-center gap-1 cursor-pointer"
                >
                  <span>Donate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
