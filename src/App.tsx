/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DetailedServices } from './components/DetailedServices';
import { RealEstateHighlight } from './components/RealEstateHighlight';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Service Strip */}
        <TrustStrip />

        {/* 4. About PakDigital Hub */}
        <AboutSection />

        {/* 5. Services Overview Cards */}
        <ServicesSection />

        {/* 6. Detailed Service Sections */}
        <DetailedServices />

        {/* Specialized Focus: Real Estate Lead Generation */}
        <RealEstateHighlight />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Our Process */}
        <ProcessSection />

        {/* 9. Industries We Serve */}
        <IndustriesSection />

        {/* 10. Case Studies / Results */}
        <CaseStudiesSection />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. Pricing / Packages */}
        <PricingSection />

        {/* 13. FAQ */}
        <FaqSection />

        {/* 14. Final CTA */}
        <FinalCta />

        {/* 15. Contact Section */}
        <ContactSection />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
