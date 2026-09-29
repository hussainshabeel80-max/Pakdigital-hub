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
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Our Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Why Businesses Choose PakDigital Hub
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
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
                className="group relative rounded-2xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {number}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
