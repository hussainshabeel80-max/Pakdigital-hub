import React from 'react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import { Target, BarChart3, Crosshair, MessagesSquare, RefreshCw, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    Target,
    BarChart3,
    Crosshair,
    MessagesSquare,
    RefreshCw,
    TrendingUp
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Our Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Why Businesses Choose PakDigital Hub
          </h2>
          <p className="text-base text-slate-400 leading-relaxed text-balance">
            We operate with operational discipline, straightforward metrics, and genuine accountability—building realistic digital strategies designed around real commercial returns.
          </p>
        </div>

        {/* 6 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index] || Target;
            const number = `0${index + 1}`;

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 sm:p-7 bg-slate-900/50 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {number}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
