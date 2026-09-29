import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, Phone, Mail } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-blue-900/20">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-blue-200 uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-ping" />
              <span>Strategic Partnership</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Ready to Grow Your Business Online?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed text-balance font-normal">
              Let&apos;s discuss your business goals and build a digital marketing strategy around them.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-blue-950 bg-white hover:bg-blue-50 rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <MessageSquare className="w-5 h-5 fill-current text-blue-700" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-blue-950/40 hover:bg-blue-950/70 border border-white/30 rounded-xl transition-all whitespace-nowrap shrink-0"
              >
                <Phone className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="whitespace-nowrap">Call {AGENCY_CONFIG.phone}</span>
              </a>
            </div>

            {/* Email Contact Direct Line */}
            <div className="pt-2">
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-300" />
                <span>Direct Email: <strong className="text-white font-bold">{AGENCY_CONFIG.email}</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
