import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
            aria-label="PakDigital Hub Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-amber-400 hover:bg-slate-800/40 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white px-2.5 sm:px-3 py-2 rounded-lg transition-colors border border-slate-800 bg-slate-900/80 hover:bg-slate-800 whitespace-nowrap shrink-0"
              title="Call PakDigital Hub"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap font-medium tracking-wide">{AGENCY_CONFIG.phone}</span>
            </a>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span>Get a Free Consultation</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-200 border border-slate-800 rounded-lg bg-slate-900/80"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {AGENCY_CONFIG.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Get a Free Consultation</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
