import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Building, Home, CheckCircle2, MessageSquare, Phone, ArrowRight } from 'lucide-react';

export const RealEstateHighlight: React.FC = () => {
  const realEstateSolutions = [
    "Residential Project Launches & Pre-Bookings",
    "Builders & Commercial Property Developers",
    "Real Estate Agency & Broker Inbound Lead Systems",
    "Flats, Luxury Apartments & Penthouse Showcases",
    "Distressed & Standing Inventory Clearance Campaigns",
    "Direct-to-WhatsApp Property Consultation Funnels"
  ];

  const handleWhatsApp = () => {
    const message = "Hello PakDigital Hub, I need leads for my real estate business / project launch. Let's discuss a strategy.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0F17] via-[#0E1524] to-[#080B11] border-y border-amber-500/20 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase with Real Estate Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl p-2 sm:p-3 bg-slate-900/90 border border-amber-500/30 shadow-2xl">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={AGENCY_CONFIG.realEstateImage}
                  alt="Modern high-end architectural real estate development showcase"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Performance Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                      Specialized Funnel
                    </span>
                    <span className="text-xs font-bold text-white">
                      Meta Ads for Property Developers
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-emerald-400 block">
                      Direct WhatsApp
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Pre-Filtered Inquiries
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Value Prop */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Building className="w-3.5 h-3.5" />
                <span>Specialized Industry Focus</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                High-Converting Real Estate Marketing & Lead Generation
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Real estate transactions require trust and prompt communication. PakDigital Hub builds tailored Meta Advertising campaigns and localized search funnels that connect builders, property developers, and agents directly with verified buyers via WhatsApp and instant inquiries.
            </p>

            {/* Specialized Areas List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {realEstateSolutions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Prescribed CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">
                  Need Leads for Your Real Estate Business?
                </h4>
                <p className="text-xs text-slate-400">
                  Let&apos;s build an inbound pipeline for your projects and available inventory.
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
