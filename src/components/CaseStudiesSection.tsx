import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudyItem, AGENCY_CONFIG } from '../data/agencyData';
import { ArrowUpRight, X, ShieldCheck, MessageSquare } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  const handleWhatsApp = (client: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I saw your case study for ${client} and would like to achieve similar results.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>Verified Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Case Studies & Campaign Architecture
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
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
                className="group flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div>
                  {/* Case Number & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
                      {caseNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{cs.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">
                    {cs.client}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mb-4">
                    Industry: <strong className="text-slate-800 font-semibold">{cs.industry}</strong>
                  </span>

                  <div className="space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-4">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Challenge:</strong>
                      <p className="text-slate-600 line-clamp-2 leading-relaxed font-normal">{cs.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-blue-700 block mb-0.5">Strategy:</strong>
                      <p className="text-slate-600 line-clamp-2 leading-relaxed font-normal">{cs.strategy}</p>
                    </div>

                    <div>
                      <strong className="text-emerald-700 block mb-0.5">Results:</strong>
                      <p className="text-slate-800 line-clamp-2 font-medium leading-relaxed">{cs.results}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cs.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(cs)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all shadow-2xs"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest">
                    Campaign Deep Dive
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                    {selectedCaseStudy.client}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Industry: {selectedCaseStudy.industry}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase text-slate-900 mb-1">
                    The Business Challenge
                  </h4>
                  <p className="leading-relaxed font-normal">{selectedCaseStudy.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
                  <h4 className="text-xs font-bold uppercase text-blue-700 mb-1">
                    Strategic Execution Plan
                  </h4>
                  <p className="leading-relaxed font-normal">{selectedCaseStudy.strategy}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <h4 className="text-xs font-bold uppercase text-emerald-700 mb-1">
                    Verified Outcomes
                  </h4>
                  <p className="leading-relaxed font-medium">{selectedCaseStudy.results}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCaseStudy.services.map((srv, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold border border-blue-100">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-md shadow-blue-500/20"
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
