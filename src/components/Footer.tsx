import React from 'react';
import { Logo } from './Logo';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Phone, Mail, Facebook, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { label: 'SEO Services', href: '#services-seo' },
    { label: 'Google Business Profile', href: '#services-gbp' },
    { label: 'Meta Ads', href: '#services-meta-ads' },
    { label: 'Google Ads', href: '#services-google-ads' },
    { label: 'Amazon Services', href: '#services-amazon' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="font-script text-2xl text-amber-300 tracking-wide mt-2">
              &ldquo;Your Growth. Our Strategy.&rdquo;
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              PakDigital Hub is a dedicated digital marketing & e-commerce growth agency helping local and international businesses generate more visibility, traffic, and high-converting leads.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400/50 hover:bg-slate-800 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block">Phone / WhatsApp</span>
                <a
                  href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="font-semibold text-white hover:text-amber-400 transition-colors block mt-0.5"
                >
                  {AGENCY_CONFIG.phone}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block">Email Address</span>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="font-semibold text-white hover:text-amber-400 transition-colors break-all block mt-0.5"
                >
                  {AGENCY_CONFIG.email}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block">Official Facebook</span>
                <a
                  href={AGENCY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-400 hover:underline block mt-0.5"
                >
                  PakDigital Hub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PakDigital Hub. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>PakDigital Hub · Digital Marketing Agency</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
