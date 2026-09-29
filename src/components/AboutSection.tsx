import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { CheckCircle2, ShieldCheck, TrendingUp, Layers, MessageSquare, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const qualitativePillars = [
    {
      icon: TrendingUp,
      title: "End-to-End Growth Architecture",
      desc: "From initial keyword intent to conversion-optimized landing pages and direct WhatsApp inquiry routing, every touchpoint is intentionally engineered."
    },
    {
      icon: Layers,
      title: "Holistic Channel Integration",
      desc: "We coordinate organic SEO and local Google Maps presence alongside high-intent paid advertising on Meta and Google to avoid single-channel vulnerability."
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Guidelines-Compliant",
      desc: "Zero deceptive techniques, zero black-hat spam, and strict compliance with Google search parameters and Amazon marketplace policies."
    },
    {
      icon: CheckCircle2,
      title: "Direct Strategic Accountability",
      desc: "Clear direct communication, transparent campaign data access, and weekly performance reviews centered around actual inquiries."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#080B11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder introduction card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-3 bg-slate-900/90 border border-slate-800 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={AGENCY_CONFIG.founderImage}
                  alt="PakDigital Hub founder at executive office desk"
                  className="w-full h-full object-cover object-top select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    Leadership & Strategy
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Founder, PakDigital Hub
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Focused on scalable digital growth & high-conversion lead engines
                  </p>
                </div>
              </div>

              {/* Agency Tagline Callout */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Agency Creed</span>
                  <span className="font-script text-xl text-amber-300">
                    "Your Growth. Our Strategy."
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wide">
                    PakDigital Hub
                  </span>
                  <span className="text-[10px] text-amber-400">
                    Digital Marketing Agency
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Qualitative Capability Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <span>About Our Agency</span>
                <span className="w-8 h-[1px] bg-amber-400/60" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Helping Businesses Build a Stronger Digital Presence
              </h2>
            </div>

            {/* Prescribed agency copy */}
            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                PakDigital Hub is a digital marketing and e-commerce growth agency focused on helping
                businesses improve their online visibility, reach potential customers and create
                sustainable growth opportunities.
              </p>
              <p className="text-slate-400">
                We combine organic search strategies, local SEO, paid advertising and
                marketplace-focused services to create practical digital marketing solutions around
                each client&apos;s goals.
              </p>
            </div>

            {/* Qualitative Highlights Grid (Strictly no invented numbers/years) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {qualitativePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  AGENCY_CONFIG.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Consult With Founder</span>
              </a>
              <a
                href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white border border-slate-800 rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {AGENCY_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
