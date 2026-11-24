import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketPricing } from './components/MarketPricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotRequestModal } from './components/PilotRequestModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitiator, setModalInitiator] = useState<HTMLElement | null>(null);

  const handleOpenModal = (event?: React.MouseEvent<HTMLElement>) => {
    if (event?.currentTarget) {
      setModalInitiator(event.currentTarget);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExplorePlatform = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface-light text-content-primary flex flex-col font-sans selection:bg-teal-light selection:text-teal-deep">
      {/* Sticky Header */}
      <Header onRequestPilot={() => handleOpenModal()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Home */}
        <Hero 
          onRequestPilot={() => handleOpenModal()} 
          onExplorePlatform={handleExplorePlatform} 
        />

        {/* Brand Capability Strip */}
        <CapabilityStrip />

        {/* Section 2: About (Includes Founder Profile) */}
        <About />

        {/* Section 3: Platform (Includes Modules, Integrations, Roadmap) */}
        <Platform />

        {/* Section 4: How It Works (Includes 5 Steps, Data Pipeline, Practical Scenario Demonstration) */}
        <HowItWorks />

        {/* Section 5: Market & Pricing (Includes Target Segments, Opportunity Strip, Exact Pricing & Comparison Table) */}
        <MarketPricing onRequestPilot={() => handleOpenModal()} />

        {/* Section 6: FAQ (16 Questions & Accessible Accordion) */}
        <FAQ />
      </main>

      {/* Section 7: Footer (Integrated CTA Banner, 4 Columns, Disclaimers, Dynamic Year) */}
      <Footer onRequestPilot={() => handleOpenModal()} />

      {/* Reusable Request a Pilot Modal */}
      <PilotRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initiatingElement={modalInitiator}
      />
    </div>
  );
};

export default App;
