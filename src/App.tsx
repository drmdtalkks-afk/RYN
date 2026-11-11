import React, { useState } from 'react';
import { NavigationPage, DonationRecord } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ImpactPage } from './pages/ImpactPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { EducationPage } from './pages/EducationPage';
import { ResearchPage } from './pages/ResearchPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { CollaborationPage } from './pages/CollaborationPage';
import { DonatePage } from './pages/DonatePage';
import { VolunteerPage } from './pages/VolunteerPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ReceiptModal } from './components/ReceiptModal';
import { CertificateVerifyModal } from './components/CertificateVerifyModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [selectedReceiptDonation, setSelectedReceiptDonation] = useState<DonationRecord | null>(null);
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#17324D] font-sans selection:bg-[#CDEFF5] selection:text-[#17324D]">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenVerifyModal={() => setVerifyModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenVerifyModal={() => setVerifyModalOpen(true)}
          />
        )}
        {currentPage === 'impact' && (
          <ImpactPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'education' && (
          <EducationPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'research' && (
          <ResearchPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'partnerships' && (
          <PartnershipsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'collaboration' && (
          <CollaborationPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'donate' && (
          <DonatePage
            onNavigate={handleNavigate}
            onOpenReceipt={(donation) => setSelectedReceiptDonation(donation)}
          />
        )}
        {currentPage === 'volunteer' && (
          <VolunteerPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'admin' && (
          <AdminDashboard
            onOpenReceipt={(donation) => setSelectedReceiptDonation(donation)}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
          />
        )}
      </main>

      {/* Global Multi-column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVerifyModal={() => setVerifyModalOpen(true)}
      />

      {/* Interactive Printable Receipt Modal */}
      <ReceiptModal
        donation={selectedReceiptDonation}
        onClose={() => setSelectedReceiptDonation(null)}
      />

      {/* Institutional Credential Verification Modal */}
      <CertificateVerifyModal
        isOpen={verifyModalOpen}
        onClose={() => setVerifyModalOpen(false)}
      />
    </div>
  );
}
