/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/limoria/HeaderNav.tsx';
import { HeroSection } from './components/limoria/HeroSection.tsx';
import { QuickActionsBar } from './components/limoria/QuickActionsBar.tsx';
import { AboutLimoriaCard } from './components/limoria/AboutLimoriaCard.tsx';
import { InteractiveMapCard } from './components/limoria/InteractiveMapCard.tsx';
import { GovernmentServicesGrid } from './components/limoria/GovernmentServicesGrid.tsx';
import { GalleryCarousel } from './components/limoria/GalleryCarousel.tsx';
import { TourismSpotlight } from './components/limoria/TourismSpotlight.tsx';
import { KeyStatsCard } from './components/limoria/KeyStatsCard.tsx';
import { UpcomingEventsCard } from './components/limoria/UpcomingEventsCard.tsx';
import { FaqSection } from './components/limoria/FaqSection.tsx';
import { LimoriaAiAssistant } from './components/limoria/LimoriaAiAssistant.tsx';
import { Footer } from './components/limoria/Footer.tsx';
import { GitHubExportModal } from './components/limoria/GitHubExportModal.tsx';
import { PresidentModal } from './components/limoria/PresidentModal.tsx';
import { ServiceDetailModal } from './components/limoria/ServiceDetailModal.tsx';
import { VideoModal } from './components/limoria/VideoModal.tsx';
import { FullMapModal } from './components/limoria/FullMapModal.tsx';
import { NewsDetailModal } from './components/limoria/NewsDetailModal.tsx';
import { ImageViewerModal } from './components/limoria/ImageViewerModal.tsx';
import { Language, ServiceItem, NewsArticle, GalleryItem, EventItem } from './types/limoria.ts';
import { LIMORIA_SERVICES, LATEST_NEWS } from './data/limoriaData.ts';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Modal controls
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
  const [isPresidentModalOpen, setIsPresidentModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullMapModalOpen, setIsFullMapModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  // Toast / notification
  const [bannerNotice, setBannerNotice] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setBannerNotice(msg);
    setTimeout(() => setBannerNotice(null), 4000);
  };

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case 'government':
      case 'services':
        setSelectedService(LIMORIA_SERVICES[0]);
        break;
      case 'president':
        setIsPresidentModalOpen(true);
        break;
      case 'map':
        setIsFullMapModalOpen(true);
        break;
      case 'gallery':
        const el = document.getElementById('gallery-section');
        el?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'faq':
        const faqEl = document.getElementById('faq-section');
        faqEl?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'chatbot':
        setIsAiAssistantOpen(true);
        break;
      case 'search':
        const heroInput = document.querySelector('input');
        heroInput?.focus();
        break;
      default:
        break;
    }
  };

  const handleGlobalSearch = (query: string) => {
    showNotification(
      currentLang === 'bn'
        ? `"${query}" এর জন্য রাজ্য ডাটাবেজে সন্ধান করা হচ্ছে...`
        : `Searching sovereign state records for "${query}"...`
    );
    setIsAiAssistantOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInstallPwa = () => {
    showNotification(
      currentLang === 'bn'
        ? 'লিমোরিয়া পিডব্লিউএ অ্যাপ্লিকেশন সফলভাবে আপনার ডিভাইসে নিবন্ধিত হয়েছে।'
        : 'Limoria Citizen PWA app prompt initialized for offline installation.'
    );
  };

  const handleNavigation = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'services') {
      setSelectedService(LIMORIA_SERVICES[0]);
    } else if (section === 'regions') {
      setIsFullMapModalOpen(true);
    } else if (section === 'about' || section === 'government') {
      setIsPresidentModalOpen(true);
    } else if (section === 'media' || section === 'news') {
      setSelectedNews(LATEST_NEWS[0]);
    } else if (section === 'tourism') {
      setIsVideoModalOpen(true);
    } else {
      showNotification(
        currentLang === 'bn' 
          ? `পৌর গেজেট: ${section} সেকশন লোড করা হয়েছে` 
          : `Navigating to official ${section} registry`
      );
    }
  };

  return (
    <div className={`min-h-screen bg-[#04160f] text-white selection:bg-[#f5c518] selection:text-[#072418] ${!isDarkMode ? 'brightness-110' : ''}`}>
      
      {/* Toast Notification Banner */}
      {bannerNotice && (
        <div className="fixed top-22 inset-x-0 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top duration-300">
          <div className="bg-[#0b3322] border-2 border-[#e2b43b] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-ping"></span>
            <span>{bannerNotice}</span>
          </div>
        </div>
      )}

      {/* 1. Header Navigation Bar */}
      <HeaderNav
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onOpenSection={handleNavigation}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
        onSearch={handleGlobalSearch}
      />

      {/* 2. Hero Section (President Limon, Motto, 3 Column Layout, Video & Latest News) */}
      <HeroSection
        currentLang={currentLang}
        onExploreClick={() => setIsFullMapModalOpen(true)}
        onWatchVideoClick={() => setIsVideoModalOpen(true)}
        onNewsClick={(article) => setSelectedNews(article)}
        onPresidentClick={() => setIsPresidentModalOpen(true)}
        onSearchSubmit={handleGlobalSearch}
      />

      {/* 3. Quick Actions 8-Tile Bar */}
      <QuickActionsBar
        currentLang={currentLang}
        onActionClick={handleActionClick}
      />

      {/* 4. Middle Section (About Limoria + Interactive Map + Government Services) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* 3-Card Row matching screenshot */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: About Limoria (approx 3 cols) */}
          <div className="lg:col-span-3">
            <AboutLimoriaCard
              currentLang={currentLang}
              onLearnMoreClick={() => setIsPresidentModalOpen(true)}
            />
          </div>

          {/* Card 2: Interactive Map of the 8 Regions (approx 5.5 cols) */}
          <div className="lg:col-span-5">
            <InteractiveMapCard
              currentLang={currentLang}
              onOpenFullMap={() => setIsFullMapModalOpen(true)}
            />
          </div>

          {/* Card 3: Government Services (approx 3.5 cols) */}
          <div className="lg:col-span-4">
            <GovernmentServicesGrid
              currentLang={currentLang}
              onServiceSelect={(srv) => setSelectedService(srv)}
              onViewAllServices={() => setSelectedService(LIMORIA_SERVICES[0])}
            />
          </div>

        </section>

        {/* 5. Bottom Section Grid (Gallery, Tourism, Key Stats, Events, FAQ) */}
        <section className="space-y-6">
          
          {/* Row A: Gallery & Tourism Spotlight */}
          <div id="gallery-section" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7">
              <GalleryCarousel
                currentLang={currentLang}
                onOpenViewer={(item) => setSelectedGalleryItem(item)}
              />
            </div>
            <div className="md:col-span-5">
              <TourismSpotlight
                currentLang={currentLang}
                onExploreTourism={() => setIsVideoModalOpen(true)}
              />
            </div>
          </div>

          {/* Row B: Key Statistics, Upcoming Events, and FAQ */}
          <div id="faq-section" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <KeyStatsCard currentLang={currentLang} />
            <UpcomingEventsCard
              currentLang={currentLang}
              onEventClick={(ev) => {
                showNotification(
                  currentLang === 'bn'
                    ? `ইভেন্ট বিবরণী: ${ev.titleBn} (${ev.location})`
                    : `Event RSVP open: ${ev.title} at ${ev.location}`
                );
              }}
            />
            <FaqSection
              currentLang={currentLang}
              onFaqSelect={(faq) => {
                // If user clicks question, can optionally prompt assistant
              }}
            />
          </div>

        </section>

      </main>

      {/* 6. Footer (Coat of arms, links, contact, weather widget, PWA install) */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigation}
        onScrollToTop={handleScrollToTop}
        onInstallPwa={handleInstallPwa}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
      />

      {/* 7. Floating Limoria AI Assistant (Gemini Powered & Bilingual) */}
      <LimoriaAiAssistant
        currentLang={currentLang}
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpen={() => setIsAiAssistantOpen(true)}
      />

      {/* 8. Modals */}
      <GitHubExportModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
        currentLang={currentLang}
      />

      <PresidentModal
        isOpen={isPresidentModalOpen}
        onClose={() => setIsPresidentModalOpen(false)}
        currentLang={currentLang}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        currentLang={currentLang}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        currentLang={currentLang}
      />

      <FullMapModal
        isOpen={isFullMapModalOpen}
        onClose={() => setIsFullMapModalOpen(false)}
        currentLang={currentLang}
      />

      <NewsDetailModal
        article={selectedNews}
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        currentLang={currentLang}
      />

      <ImageViewerModal
        item={selectedGalleryItem}
        isOpen={!!selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        currentLang={currentLang}
      />

    </div>
  );
}
