import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#080B11] via-[#0E1524] to-[#080B11] border-t border-slate-800 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Strategic Partnership</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight text-balance">
          Ready to Grow Your Business Online?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Let&apos;s discuss your business goals and build a digital marketing strategy around them.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </button>

          <a
            href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-slate-900 border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 rounded-xl transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">Call {AGENCY_CONFIG.phone}</span>
          </a>
        </div>

        {/* Email Contact Direct Line */}
        <div className="pt-4">
          <a
            href={`mailto:${AGENCY_CONFIG.email}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Direct Email: <strong className="text-slate-200">{AGENCY_CONFIG.email}</strong></span>
          </a>
        </div>
      </div>
    </section>
  );
};
