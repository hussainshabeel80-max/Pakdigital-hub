import React from 'react';
import { PRICING_PACKAGES, AGENCY_CONFIG } from '../data/agencyData';
import { Check, MessageSquare, Info, Sparkles, SlidersHorizontal } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const handleWhatsApp = (planName: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I would like to inquire about the ${planName} package for my business.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0B0F17]/80 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Tailored Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tailored Growth Packages
          </h2>
          
          {/* Exact required line in prominent badge/callout */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/15 border border-amber-400/40 shadow-xl shadow-amber-500/5">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-1">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Customized Engagement</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
              Packages are tailored according to your business, target market, competition and requirements.
            </p>
          </div>
        </div>

        {/* 5 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
          {PRICING_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
                  pkg.isFeatured
                    ? 'bg-gradient-to-b from-[#131E30] via-slate-900 to-slate-950 border-2 border-amber-400 shadow-2xl shadow-amber-500/10 lg:scale-105 z-10'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                {pkg.isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {pkg.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[11px] text-amber-400 font-semibold block uppercase tracking-wider">Plan Scope</span>
                    <span className="font-display text-lg font-bold text-slate-200">
                      Customized Proposal
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 pb-4 border-b border-slate-800">
                    {pkg.description}
                  </p>

                  {/* Deliverables List */}
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <p className="text-[10px] text-slate-400 mb-3 text-center">
                    {pkg.recommendedFor}
                  </p>
                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all shadow-md ${
                      pkg.isFeatured
                        ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-500/20'
                        : 'bg-slate-800 text-white hover:bg-amber-400 hover:text-slate-950'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Policy Notes */}
        <div className="mt-12 rounded-2xl p-6 sm:p-7 bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Info className="w-4 h-4" />
            <span>Scope & Consultation Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <strong className="text-white block mb-1">Tailored Scope & Competitive Dynamics:</strong>
              <p className="text-slate-400">
                Packages are tailored according to your business, target market, competition and requirements. We analyze your commercial targets and formulate an execution roadmap that fits your needs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <strong className="text-amber-400 block mb-1">Advertising Budget Transparency:</strong>
              <p className="text-slate-400">
                Advertising budget is separate from management fee. Ad spend on Meta (Facebook/Instagram) and Google Ads is paid directly to the ad platforms with 100% financial clarity.
              </p>
            </div>
          </div>

          {/* Need a Customized Plan? CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
            <div>
              <span className="font-bold text-sm text-white block">Need a Strategy Designed for Your Business?</span>
              <span className="text-xs text-slate-400">
                Let&apos;s evaluate your current digital presence and build a tailored marketing plan.
              </span>
            </div>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hello PakDigital Hub, I would like to get a tailored marketing package consultation for my business.");
                window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md whitespace-nowrap active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Get a Free Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
