import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Client Voices</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Client Feedback & Partnerships
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Authentic feedback from commercial partners. In accordance with our transparency standards, client reviews are verified directly with active accounts.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    <span>Verified Partner</span>
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role} · <strong className="text-slate-700 font-semibold">{t.business}</strong>
                  </p>
                  <span className="text-[10px] text-blue-700 font-bold block mt-0.5">
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
