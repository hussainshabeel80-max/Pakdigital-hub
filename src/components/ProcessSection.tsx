import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Compass, Search, Map, Rocket, LineChart } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Compass, Search, Map, Rocket, LineChart];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0B0F17]/80 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our 5-Step Growth Process
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A systematic, transparent journey designed to take your business from initial market audit to high-converting campaign execution.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/10 via-amber-400/40 to-amber-500/10 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index] || Compass;

              return (
                <div
                  key={step.step}
                  className="relative group rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-display text-2xl font-black text-slate-700 group-hover:text-amber-400/40 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 block mb-1">
                      {step.name}
                    </span>
                    <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {step.headline}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Phase {step.step}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
