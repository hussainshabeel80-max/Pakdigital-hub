import React from 'react';
import { SERVICES_DATA, AGENCY_CONFIG } from '../data/agencyData';
import { Search, MapPin, Share2, Target, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    seo: Search,
    gbp: MapPin,
    'meta-ads': Share2,
    'google-ads': Target,
    amazon: ShoppingBag
  };

  const colorMap: Record<string, { iconBg: string; border: string; accent: string }> = {
    seo: {
      iconBg: 'bg-blue-500/10 text-blue-400',
      border: 'hover:border-blue-500/40',
      accent: 'text-blue-400'
    },
    gbp: {
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      border: 'hover:border-emerald-500/40',
      accent: 'text-emerald-400'
    },
    'meta-ads': {
      iconBg: 'bg-indigo-500/10 text-indigo-400',
      border: 'hover:border-indigo-500/40',
      accent: 'text-indigo-400'
    },
    'google-ads': {
      iconBg: 'bg-amber-500/10 text-amber-400',
      border: 'hover:border-amber-500/40',
      accent: 'text-amber-400'
    },
    amazon: {
      iconBg: 'bg-amber-400/10 text-amber-300',
      border: 'hover:border-amber-400/40',
      accent: 'text-amber-300'
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I would like to inquire about ${serviceTitle}.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0F17]/70 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Core Agency Offerings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Our Digital Marketing Services
          </h2>
          <p className="text-base text-slate-400 leading-relaxed text-balance">
            Targeted strategies designed to increase online discoverability, generate qualified commercial leads, and establish long-term digital authority for your business.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.id] || Search;
            const style = colorMap[service.id] || {
              iconBg: 'bg-amber-500/10 text-amber-400',
              border: 'hover:border-amber-500/40',
              accent: 'text-amber-400'
            };

            const isLastWide = index === 3 || index === 4;

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800 transition-all duration-300 ${style.border} hover:bg-slate-900/90 hover:shadow-xl hover:shadow-black/50 ${
                  isLastWide && index === 3 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`p-3 rounded-xl ${style.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Scope Checklist (10 or 8 items) */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Included Capabilities:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 block font-semibold">Engagement</span>
                    <span className="text-xs font-bold text-amber-400">Tailored Scope</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`#services-${service.id}`}
                      className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
                    >
                      Details
                    </a>
                    <button
                      onClick={() => handleServiceInquiry(service.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
