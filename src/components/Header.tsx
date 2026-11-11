import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { Heart, Menu, X, Shield, ChevronDown, Phone, ExternalLink } from 'lucide-react';
import { OFFICIAL_INFO } from '../data/seedData';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  isAdminLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#17324D] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="font-semibold text-[#FFB86B]">RYN Humanitarian Initiative</span>
            <span className="hidden md:inline text-slate-300">·</span>
            <span className="hidden md:inline text-slate-200">561+ Families Supported · 4,320+ Ramadan Meals · 9,120+ Clothed</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-300">
            <a 
              href="tel:+923014744365" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#55BDEB]" />
              <span className="hidden sm:inline">+92 301 4744365</span>
            </a>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currentPage === 'admin' 
                  ? 'bg-[#55BDEB] text-[#17324D]' 
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title="NGO Administrative Portal"
            >
              <Shield className="w-3 h-3 text-[#FFB86B]" />
              <span>Admin {isAdminLoggedIn ? '(Active)' : 'Login'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Logo & Brand Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden group shrink-0"
        >
          <img
            src="/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg"
            alt="Radiant Youth Network Logo"
            className="w-12 h-12 rounded-xl object-contain bg-white shadow-xs border border-slate-100 group-hover:scale-105 transition-transform"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/public/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg';
            }}
          />
          <div>
            <span className="block text-xl font-extrabold tracking-tight text-[#17324D] font-display">
              RADIANT <span className="text-[#55BDEB]">YOUTH</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
              NETWORK · EST. 2023
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'home' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'about' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            About RYN
          </button>
          <button
            onClick={() => handleNavClick('impact')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'impact' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Our Impact
          </button>
          <button
            onClick={() => handleNavClick('programs')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'programs' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Programs
          </button>
          <button
            onClick={() => handleNavClick('education')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'education' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => handleNavClick('research')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'research' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Research
          </button>
          <button
            onClick={() => handleNavClick('partnerships')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
              currentPage === 'partnerships' 
                ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50' 
                : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
            }`}
          >
            Partnerships & MOU
          </button>

          {/* More Dropdown for Collaboration, Volunteer & Contact */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                ['collaboration', 'volunteer', 'contact'].includes(currentPage)
                  ? 'text-[#17324D] font-bold bg-[#CDEFF5]/50'
                  : 'text-slate-600 hover:text-[#17324D] hover:bg-slate-100/70'
              }`}
            >
              <span>Get Involved</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {moreDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('collaboration')}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-[#CDEFF5]/30 hover:text-[#17324D] transition-colors flex items-center justify-between"
                >
                  <span>Collaboration Proposals</span>
                  <span className="text-[10px] text-slate-400 font-mono">12+ Tracks</span>
                </button>
                <button
                  onClick={() => handleNavClick('volunteer')}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-[#CDEFF5]/30 hover:text-[#17324D] transition-colors flex items-center justify-between"
                >
                  <span>Become a Volunteer</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">Join RYN</span>
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-[#CDEFF5]/30 hover:text-[#17324D] transition-colors"
                >
                  Contact & Inquiries
                </button>
                <div className="my-1 border-t border-slate-100"></div>
                <a
                  href={OFFICIAL_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs text-slate-500 hover:text-[#17324D] flex items-center justify-between"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={OFFICIAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs text-slate-500 hover:text-[#17324D] flex items-center justify-between"
                >
                  <span>Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Call to Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('donate')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#17324D] bg-[#FFB86B] hover:bg-[#ffa94d] shadow-sm hover:shadow-md active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-[#F45B91] text-[#F45B91]" />
            <span>DONATE NOW</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#17324D] hover:bg-slate-100 rounded-lg lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'home' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            1. Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'about' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            2. About RYN
          </button>
          <button
            onClick={() => handleNavClick('impact')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'impact' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            3. Our Impact (561+ Families)
          </button>
          <button
            onClick={() => handleNavClick('programs')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'programs' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            4. Programs & Initiatives
          </button>
          <button
            onClick={() => handleNavClick('education')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'education' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            5. Education & Learning
          </button>
          <button
            onClick={() => handleNavClick('research')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'research' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            6. Research & Innovation (EDAS)
          </button>
          <button
            onClick={() => handleNavClick('partnerships')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'partnerships' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            7. Partnerships & MOU (7 Partners)
          </button>
          <button
            onClick={() => handleNavClick('collaboration')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'collaboration' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            8. Collaboration Proposals
          </button>
          <button
            onClick={() => handleNavClick('volunteer')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'volunteer' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            9. Volunteer Registration
          </button>
          <button
            onClick={() => handleNavClick('donate')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold bg-[#FFB86B]/30 text-[#17324D] flex items-center justify-between`}
          >
            <span>10. Donate via Easypaisa</span>
            <Heart className="w-4 h-4 text-[#F45B91] fill-[#F45B91]" />
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'contact' ? 'bg-[#CDEFF5] text-[#17324D] font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            11. Contact Us
          </button>
          <button
            onClick={() => handleNavClick('admin')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#17324D] bg-slate-100 flex items-center justify-between"
          >
            <span>12. Admin Management Dashboard</span>
            <Shield className="w-4 h-4 text-[#55BDEB]" />
          </button>
        </div>
      )}
    </header>
  );
};
