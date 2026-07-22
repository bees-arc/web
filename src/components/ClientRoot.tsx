'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsCardsSection } from '@/components/StatsCardsSection';
import { StagesSection } from '@/components/StagesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturedCasesSection } from '@/components/FeaturedCasesSection';
import { AwardsSection } from '@/components/AwardsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';

// Dynamically import Lottie-based widgets with ssr:false to prevent hydration mismatches
const LottieWidget = dynamic(
  () => import('@/components/LottieWidget').then((m) => ({ default: m.LottieWidget })),
  { ssr: false }
);

export function ClientRoot() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0D0F12] font-sans relative selection:bg-indigo-600 selection:text-white">
      {/* Signature Preloader */}
      <Preloader />

      {/* Navbar */}
      <Navbar
        onBookCallClick={() => setIsCalendlyOpen(true)}
        onContactClick={scrollToContact}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onBookCallClick={() => setIsCalendlyOpen(true)}
          onContactClick={scrollToContact}
        />
        <StatsCardsSection />
        <StagesSection onSelectStage={() => scrollToContact()} />
        <ServicesSection />
        <FeaturedCasesSection />
        <AwardsSection />
        <TestimonialsSection />
        <ContactSection onBookCallClick={() => setIsCalendlyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Call Popup Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
