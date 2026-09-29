import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote, Building, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Client Voices</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Client Feedback & Partnerships
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Authentic feedback from commercial partners. In accordance with our transparency standards, client reviews are verified directly with active accounts.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    <span>Verified Partner</span>
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <strong className="text-slate-300 font-normal">{t.business}</strong>
                  </p>
                  <span className="text-[10px] text-amber-400/90 font-medium block mt-0.5">
                    Industry: {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
