import React from 'react';
import { PRICING_PACKAGES, AGENCY_CONFIG } from '../data/agencyData';
import { Check, MessageSquare, Info, SlidersHorizontal } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const handleWhatsApp = (planName: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I would like to inquire about the ${planName} package for my business.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Tailored Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Tailored Growth Packages
          </h2>
          
          {/* Exact required line in prominent badge/callout */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border-2 border-blue-400 shadow-lg shadow-blue-500/5">
            <div className="flex items-center justify-center gap-2 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-1">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Customized Engagement</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
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
                    ? 'bg-gradient-to-b from-blue-50/90 via-white to-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 lg:scale-105 z-10'
                    : 'bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                {pkg.isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                    {pkg.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[11px] text-blue-600 font-bold block uppercase tracking-wider">Plan Scope</span>
                    <span className="font-display text-lg font-bold text-slate-900">
                      Customized Proposal
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 pb-4 border-b border-slate-100 font-normal">
                    {pkg.description}
                  </p>

                  {/* Deliverables List */}
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <p className="text-[10px] text-slate-500 mb-3 text-center font-medium">
                    {pkg.recommendedFor}
                  </p>
                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className={`w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all shadow-xs ${
                      pkg.isFeatured
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25'
                        : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white'
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
        <div className="mt-12 rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
            <Info className="w-4 h-4" />
            <span>Scope & Consultation Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1 font-bold">Tailored Scope & Competitive Dynamics:</strong>
              <p className="text-slate-600 font-normal">
                Packages are tailored according to your business, target market, competition and requirements. We analyze your commercial targets and formulate an execution roadmap that fits your needs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-blue-700 block mb-1 font-bold">Advertising Budget Transparency:</strong>
              <p className="text-slate-600 font-normal">
                Advertising budget is separate from management fee. Ad spend on Meta (Facebook/Instagram) and Google Ads is paid directly to the ad platforms with 100% financial clarity.
              </p>
            </div>
          </div>

          {/* Need a Customized Plan? CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div>
              <span className="font-bold text-sm text-slate-900 block">Need a Strategy Designed for Your Business?</span>
              <span className="text-xs text-slate-500">
                Let&apos;s evaluate your current digital presence and build a tailored marketing plan.
              </span>
            </div>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hello PakDigital Hub, I would like to get a tailored marketing package consultation for my business.");
                window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 whitespace-nowrap active:scale-95"
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
