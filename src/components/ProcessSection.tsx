import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Compass, Search, Map, Rocket, LineChart } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Compass, Search, Map, Rocket, LineChart];

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Our 5-Step Growth Process
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A systematic, transparent journey designed to take your business from initial market audit to high-converting campaign execution.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-blue-400/50 to-blue-100 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index] || Compass;

              return (
                <div
                  key={step.step}
                  className="relative group rounded-2xl p-6 bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-display text-2xl font-black text-slate-200 group-hover:text-blue-300 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 block mb-1">
                      {step.name}
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.headline}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Phase {step.step}</span>
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
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
