import React, { useEffect, useState } from 'react';
import { NavigationPage } from '../types';
import { 
  Heart, 
  Users, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Droplets, 
  Utensils, 
  Shirt, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { IMPACT_STATS, CORE_VALUES, PARTNERS_MOU, OFFICIAL_INFO } from '../data/seedData';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenVerifyModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenVerifyModal }) => {
  const [animatedCounts, setAnimatedCounts] = useState({
    food: 0,
    ramadan: 0,
    clothes: 0,
    funding: 0
  });

  // Smooth counter animation on mount
  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedCounts({
        food: Math.round(561 * progress),
        ramadan: Math.round(4320 * progress),
        clothes: Math.round(9120 * progress),
        funding: Number((1.2 * progress).toFixed(1))
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedCounts({ food: 561, ramadan: 4320, clothes: 9120, funding: 1.2 });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#17324D] text-white">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_volunteers_community_1794371132429.jpg"
            alt="Young Volunteers in Community Service"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17324D] via-[#17324D]/90 to-[#17324D]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(85,189,235,0.18),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#FFB86B]">
                <Sparkles className="w-3.5 h-3.5 text-[#55BDEB]" />
                <span>YOUTH-LED HUMANITARIAN & EDUCATIONAL NGO · EST. 2023</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15] text-balance">
                Empowering Today's Youth to Build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB86B] via-[#CDEFF5] to-[#55BDEB]">
                  Tomorrow's World.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Radiant Youth Network is a youth-led nonprofit organization committed to education, humanitarian development, gender equality, research, and creating sustainable opportunities for young people and underserved communities.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-7 py-3.5 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-[#F45B91] text-[#F45B91]" />
                  <span>Support Our Mission</span>
                </button>
                <button
                  onClick={() => onNavigate('volunteer')}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/25 backdrop-blur-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#55BDEB]" />
                  <span>Become a Volunteer</span>
                </button>
                <button
                  onClick={() => onNavigate('impact')}
                  className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Our Impact</span>
                  <ArrowRight className="w-4 h-4 text-[#FFB86B]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#55BDEB]" />
                  <span>SECP Registered</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FFB86B]" />
                  <span>ISO 9001 & ISO 27001</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Verified Transparency</span>
                </div>
              </div>
            </div>

            {/* Right Card: Founder Spotlight */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center space-y-4 shadow-2xl relative">
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#FFB86B] shadow-lg">
                  <img
                    src="/assets/aistudio/Zainab_Asif_5d777e3d.jpg"
                    alt="Ms. Zainab Asif - Founder and Chairperson of Radiant Youth Network"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/public/assets/aistudio/Zainab_Asif_5d777e3d.jpg';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Ms. Zainab Asif</h3>
                  <p className="text-xs font-semibold text-[#FFB86B] mt-0.5">Founder & Chairperson / CEO</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Gender Equality Activist & Social Innovator</p>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-light italic">
                  "We believe that every child deserves education, every family deserves dignity, and every young person deserves an opportunity to lead."
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Founder of RYN (2023)</span>
                  <button 
                    onClick={() => onNavigate('about')}
                    className="text-[#55BDEB] hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Impact Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17324D]">
              Verified Humanitarian Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Measurable Change on the Ground
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              These are cumulative impact figures reported by Radiant Youth Network since its establishment in 2023.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Food Drive */}
            <div className="bg-gradient-to-b from-[#FFB86B]/15 to-transparent rounded-2xl p-6 border border-[#FFB86B]/30 hover:shadow-md transition-shadow text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#FFB86B]/20 flex items-center justify-center text-[#17324D]">
                <Utensils className="w-6 h-6 text-[#17324D]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#17324D] font-mono tabular-nums">
                {animatedCounts.food}+
              </div>
              <div className="font-bold text-sm text-[#17324D]">Families Supported</div>
              <p className="text-xs text-slate-500">Through Food & Ration Distribution Drives</p>
            </div>

            {/* Card 2: Ramadan Iftar */}
            <div className="bg-gradient-to-b from-[#55BDEB]/15 to-transparent rounded-2xl p-6 border border-[#55BDEB]/30 hover:shadow-md transition-shadow text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#55BDEB]/20 flex items-center justify-center text-[#17324D]">
                <Heart className="w-6 h-6 text-[#55BDEB]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#17324D] font-mono tabular-nums">
                {animatedCounts.ramadan.toLocaleString()}
              </div>
              <div className="font-bold text-sm text-[#17324D]">People Served</div>
              <p className="text-xs text-slate-500">Through Ramadan Iftar Drives</p>
            </div>

            {/* Card 3: Clothes Drive */}
            <div className="bg-gradient-to-b from-[#F45B91]/15 to-transparent rounded-2xl p-6 border border-[#F45B91]/30 hover:shadow-md transition-shadow text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#F45B91]/20 flex items-center justify-center text-[#17324D]">
                <Shirt className="w-6 h-6 text-[#F45B91]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#17324D] font-mono tabular-nums">
                {animatedCounts.clothes.toLocaleString()}
              </div>
              <div className="font-bold text-sm text-[#17324D]">People Supported</div>
              <p className="text-xs text-slate-500">Through Seasonal Clothing Campaigns</p>
            </div>

            {/* Card 4: Self-Funded Support */}
            <div className="bg-gradient-to-b from-[#CDEFF5]/40 to-transparent rounded-2xl p-6 border border-[#55BDEB]/30 hover:shadow-md transition-shadow text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#CDEFF5] flex items-center justify-center text-[#17324D]">
                <ShieldCheck className="w-6 h-6 text-[#17324D]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#17324D] font-mono tabular-nums">
                PKR {animatedCounts.funding}M+
              </div>
              <div className="font-bold text-sm text-[#17324D]">Self-Funded Support</div>
              <p className="text-xs text-slate-500">Independently Contributed Humanitarian Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#55BDEB]">
                <BookOpen className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#17324D]">
                Empower youth, uplift vulnerable communities, and foster inclusive opportunity.
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To empower youth through education, humanitarian assistance, research, innovation, and inclusive opportunities while supporting vulnerable communities across Pakistan and beyond.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Measurable grassroots action with 100% transparent tracking.</span>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#17324D] to-[#1e4266] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#FFB86B]">
                <Sparkles className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                A society where every young person has access to education, opportunities, and dignity.
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-light">
                A society where every young person has access to education, opportunities, dignity, and the resources needed to create a better future, regardless of gender, social background, or financial status.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#CDEFF5]">Youth-Led Transformation</span>
              <button 
                onClick={() => onNavigate('about')}
                className="text-xs text-[#FFB86B] hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More About RYN</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 8 Core Values Grid */}
        <div className="mt-14 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Our 8 Core Organizational Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#55BDEB] hover:shadow-md transition-all group"
              >
                <div className="text-xs font-mono text-slate-400 font-semibold mb-2">
                  0{idx + 1}.
                </div>
                <h4 className="font-bold text-[#17324D] group-hover:text-[#55BDEB] transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Humanitarian Campaigns Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
              Field Campaigns
            </span>
            <h2 className="text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Humanitarian Initiatives in Action
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real projects delivering food, clean water, clothing, and education to deserving families.
            </p>
          </div>
          <button
            onClick={() => onNavigate('impact')}
            className="px-5 py-2.5 bg-slate-100 hover:bg-[#CDEFF5] text-[#17324D] text-xs font-bold rounded-xl transition-colors self-start md:self-auto cursor-pointer flex items-center gap-2"
          >
            <span>View All Campaign Stories</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#55BDEB]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Campaign 1: Food Drive */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-shadow flex flex-col group">
            <div className="h-52 overflow-hidden relative">
              <img
                src="/src/assets/images/campaign_food_drive_1794371132190.jpg"
                alt="RYN Food Distribution Drive"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#FFB86B] text-[#17324D] text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                561+ Families
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#17324D] group-hover:text-[#55BDEB] transition-colors">
                  Food & Ration Drives
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Direct ration deliveries providing staple wheat flour, lentils, cooking oil, and rice packages to widows and daily-wage families.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">PKR 10,000 / Package</span>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-xs font-bold text-[#FFB86B] hover:text-[#e0892c] flex items-center gap-1 cursor-pointer"
                >
                  <span>Donate Food</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Campaign 2: Summer Water Drive */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-shadow flex flex-col group">
            <div className="h-52 overflow-hidden relative">
              <img
                src="/src/assets/images/campaign_summer_water_1794371132952.jpg"
                alt="Summer Heat Relief Water Distribution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#55BDEB] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                Clean Water Initiative
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#17324D] group-hover:text-[#55BDEB] transition-colors">
                  Summer Heatwave Hydration Drive
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Providing chilled, clean drinking water and electrolytes to outdoor laborers, street hawkers, and pedestrians during peak summer heatwaves.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Thousands Hydrated</span>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-xs font-bold text-[#55BDEB] hover:text-[#339dd0] flex items-center gap-1 cursor-pointer"
                >
                  <span>Support Water</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Campaign 3: Youth Education & Tech */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-shadow flex flex-col group">
            <div className="h-52 overflow-hidden relative">
              <img
                src="/src/assets/images/campaign_youth_education_1794371133489.jpg"
                alt="Youth Digital Literacy and Education Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#F45B91] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                Education & Tech
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#17324D] group-hover:text-[#55BDEB] transition-colors">
                  Digital Skills & Education Kits
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  School kits, digital literacy training, and online certification for youth, unlocking modern remote job readiness and academic excellence.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">850+ Students</span>
                <button
                  onClick={() => onNavigate('education')}
                  className="text-xs font-bold text-[#F45B91] hover:text-[#d33a71] flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners & MOUs Strip */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#55BDEB]">
              Institutional Alliances
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] font-display mt-1">
              Strategic Partnerships & Signed MOUs
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              RYN actively collaborates with academic, auditing, and technology leaders across Pakistan and internationally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {PARTNERS_MOU.map((partner) => (
              <div
                key={partner.id}
                onClick={() => onNavigate('partnerships')}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#55BDEB] hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#CDEFF5]/30 group-hover:bg-[#CDEFF5] flex items-center justify-center font-bold text-[#17324D] text-xs transition-colors">
                  {partner.partnerName.slice(0, 2).toUpperCase()}
                </div>
                <span className="font-bold text-xs text-[#17324D] line-clamp-1">
                  {partner.partnerName}
                </span>
                <span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                  MOU Active
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('partnerships')}
              className="text-xs font-semibold text-[#17324D] hover:text-[#55BDEB] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View Full MOU Documents and Partnership Scopes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Easypaisa Direct Donation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#17324D] to-[#204569] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#55BDEB]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFB86B]/20 text-[#FFB86B] rounded-full text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 fill-[#FFB86B]" />
                <span>Direct Humanitarian Giving</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight text-white">
                Your Contribution Can Change a Life Today.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Every rupee directly finances ration bags, Ramadan meals, winter clothes, and educational kits for vetted, deserving families with complete audit transparency.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-6 py-3.5 bg-[#FFB86B] hover:bg-[#ffa94d] text-[#17324D] font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Donate via Easypaisa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenVerifyModal}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#55BDEB]" />
                  <span>Verify Credentials</span>
                </button>
              </div>
            </div>

            {/* Quick Easypaisa box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#FFB86B] font-bold block">
                Official Easypaisa Payment Channel
              </span>
              <div className="p-4 bg-white rounded-xl text-[#17324D] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">Account Number</span>
                  <span className="text-xl font-bold font-mono text-[#17324D]">
                    {OFFICIAL_INFO.easypaisa.accountNumber}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">Account Title</span>
                  <span className="text-xs font-bold text-[#17324D]">
                    {OFFICIAL_INFO.easypaisa.accountHolder}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                After transfer, submit your transaction ID on our donation page to receive your official RYN verified donation receipt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
