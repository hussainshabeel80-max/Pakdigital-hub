import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Building, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border-y border-blue-100 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase with Real Estate Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl p-2.5 sm:p-3 bg-white border border-slate-200 shadow-xl shadow-blue-900/5">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={AGENCY_CONFIG.realEstateImage}
                  alt="Modern high-end architectural real estate development showcase"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Performance Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider block">
                      Specialized Funnel
                    </span>
                    <span className="text-xs font-bold text-white">
                      Meta Ads for Property Developers
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 block">
                      Direct WhatsApp
                    </span>
                    <span className="text-[10px] text-slate-300">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-800 uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-blue-700" />
                <span>Specialized Industry Focus</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                High-Converting Real Estate Marketing & Lead Generation
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Real estate transactions require trust and prompt communication. PakDigital Hub builds tailored Meta Advertising campaigns and localized search funnels that connect builders, property developers, and agents directly with verified buyers via WhatsApp and instant inquiries.
            </p>

            {/* Specialized Areas List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {realEstateSolutions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Prescribed CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  Need Leads for Your Real Estate Business?
                </h4>
                <p className="text-xs text-slate-500">
                  Let&apos;s build an inbound pipeline for your projects and available inventory.
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/25 whitespace-nowrap active:scale-95"
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
