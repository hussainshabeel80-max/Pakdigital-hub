import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudyItem, AGENCY_CONFIG } from '../data/agencyData';
import { ArrowUpRight, X, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  const handleWhatsApp = (client: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I saw your case study for ${client} and would like to achieve similar results.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#0B0F17]/90 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Verified Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Case Studies & Campaign Architecture
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Transparent summaries of real client hurdles, strategic interventions, and measurable outcomes. We uphold client confidentiality while sharing genuine frameworks.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, idx) => {
            const caseNumber = `CASE STUDY 0${idx + 1}`;

            return (
              <div
                key={cs.id}
                className="group flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div>
                  {/* Case Number & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                      {caseNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{cs.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {cs.client}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium block mb-4">
                    Industry: <strong className="text-slate-200">{cs.industry}</strong>
                  </span>

                  <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                    <div>
                      <strong className="text-amber-400 block mb-0.5">Challenge:</strong>
                      <p className="text-slate-400 line-clamp-2 leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-amber-400 block mb-0.5">Strategy:</strong>
                      <p className="text-slate-400 line-clamp-2 leading-relaxed">{cs.strategy}</p>
                    </div>

                    <div>
                      <strong className="text-emerald-400 block mb-0.5">Results:</strong>
                      <p className="text-slate-300 line-clamp-2 font-medium leading-relaxed">{cs.results}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cs.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(cs)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-amber-400 hover:text-slate-950 rounded-xl transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Case Study */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    Campaign Deep Dive
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedCaseStudy.client}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Industry: {selectedCaseStudy.industry}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-amber-400 mb-1">
                    The Business Challenge
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-amber-400 mb-1">
                    Strategic Execution Plan
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.strategy}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
                  <h4 className="text-xs font-bold uppercase text-emerald-400 mb-1">
                    Verified Outcomes
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.results}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCaseStudy.services.map((srv, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200">
                      {srv}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const client = selectedCaseStudy.client;
                    setSelectedCaseStudy(null);
                    handleWhatsApp(client);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Request Similar Strategy</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
