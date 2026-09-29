import React from 'react';
import { INDUSTRIES_SERVED, AGENCY_CONFIG } from '../data/agencyData';
import { Building, ShoppingBag, Globe, Store, Stethoscope, Utensils, Wrench, Briefcase, GraduationCap, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'real-estate': Building,
    ecommerce: ShoppingBag,
    amazon: Globe,
    'local-biz': Store,
    healthcare: Stethoscope,
    restaurants: Utensils,
    'home-services': Wrench,
    'pro-services': Briefcase,
    education: GraduationCap,
    retail: Sparkles
  };

  const handleWhatsApp = (industryName: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I would like to discuss marketing solutions for my ${industryName} business.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Market Alignment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Digital Marketing Solutions for Different Industries
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Every vertical presents distinct buyer behaviors and sales cycles. We adapt channel strategy, audience targeting, and ad hooks to match your specific industry dynamics.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES_SERVED.map((ind) => {
            const IconComponent = iconMap[ind.id] || Store;

            return (
              <div
                key={ind.id}
                className={`group flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  ind.isFeatured
                    ? 'bg-blue-50/70 border-2 border-blue-400 shadow-md sm:col-span-2 lg:col-span-1'
                    : 'bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${ind.isFeatured ? 'bg-blue-600 text-white font-bold' : 'bg-blue-50 text-blue-700'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {ind.isFeatured && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300">
                        Priority Specialty
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {ind.desc}
                  </p>

                  {/* Sub-tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ind.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => handleWhatsApp(ind.title)}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors py-1"
                  >
                    <span>Discuss {ind.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Estate Featured Banner */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Specialized Real Estate Lead Generation
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Need Leads for Your Real Estate Business?
            </h4>
            <p className="text-sm text-blue-100 max-w-xl font-normal">
              We create targeted campaigns for builders, developers, and brokers that generate direct WhatsApp chats and pre-qualified buyers.
            </p>
          </div>

          <button
            onClick={() => {
              const msg = encodeURIComponent("Hello PakDigital Hub, I need leads for my Real Estate business/project. Let's talk.");
              window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-blue-950 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg whitespace-nowrap active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current text-blue-700" />
            <span>Talk to Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
