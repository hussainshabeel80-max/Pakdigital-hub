import React, { useState } from 'react';
import { SERVICES_DATA, AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, ArrowRight, CheckCircle2, Building2, MapPin, Search, Star, TrendingUp, Users, Smartphone, Shield, Target } from 'lucide-react';

export const DetailedServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('seo');

  const handleWhatsApp = (serviceTitle: string) => {
    const encoded = encodeURIComponent(`Hello PakDigital Hub, I would like to get a consultation on ${serviceTitle}.`);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#080B11] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>In-Depth Execution</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Detailed Service Breakdowns
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Examine our methodological approach, expected business advantages, and target industry alignment for each growth capability.
          </p>
        </div>

        {/* Tab Switcher for Quick Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap border ${
                activeTab === service.id
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Individual Detailed Sections */}
        <div className="space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={`services-${service.id}`}
                className={`scroll-mt-28 rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/40 border border-slate-800/90 transition-all ${
                  activeTab === service.id ? 'ring-1 ring-amber-400/40' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Information Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        {service.badge}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                        {service.detailedSection.heading}
                      </h3>
                    </div>

                    <p className="text-base text-slate-300 leading-relaxed">
                      {service.detailedSection.explanation}
                    </p>

                    {/* What We Do & Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* What We Do */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>What We Do</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {service.detailedSection.whatWeDo.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-amber-400 font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          <span>Business Benefits</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {service.detailedSection.benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Suitable Businesses */}
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Suitable For:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.detailedSection.suitableFor.map((target, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            <Building2 className="w-3 h-3 text-amber-400" />
                            <span>{target}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleWhatsApp(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Inquire About {service.title}</span>
                      </button>
                      <span className="text-xs text-slate-400">
                        Tailored Scope · Custom Strategy Proposal
                      </span>
                    </div>
                  </div>

                  {/* Visual Demonstration Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-slate-950 via-[#0D131F] to-black border border-slate-800 shadow-2xl">
                      {/* Interactive Visual Graphic Mockup based on the specific service */}
                      {service.id === 'seo' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <Search className="w-4 h-4 text-blue-400" />
                              <span className="text-xs font-semibold text-slate-300">Organic Search Engine Simulation</span>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-mono">Status: Crawling Active</span>
                          </div>

                          {/* Mock Google Search Bar */}
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-2">
                            <Search className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-300 font-medium">best digital marketing agency near me</span>
                          </div>

                          {/* Mock SERP Result #1 */}
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-500/30 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                              <span className="text-blue-400 font-semibold">https://pakdigitalhub.com</span>
                              <span>›</span>
                              <span>services</span>
                            </div>
                            <h5 className="text-sm font-bold text-blue-400 hover:underline">
                              PakDigital Hub | Digital Marketing & E-commerce Growth Agency
                            </h5>
                            <p className="text-xs text-slate-300 leading-snug">
                              Specialized SEO, GBP, Meta Ads and Google Ads management. Increase rankings, search impressions and qualified inbound buyer inquiries.
                            </p>
                            <div className="pt-2 flex items-center gap-3 text-[11px] text-slate-400">
                              <span>Rank: <strong className="text-emerald-400">Top 3 Targeted</strong></span>
                              <span>CTR: <strong className="text-white">Commercial High-Intent</strong></span>
                            </div>
                          </div>

                          {/* SEO Metrics snippet */}
                          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Indexing</span>
                              <span className="text-xs font-bold text-emerald-400">100% Health</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Keywords</span>
                              <span className="text-xs font-bold text-amber-400">Buyer Intent</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Backlinks</span>
                              <span className="text-xs font-bold text-blue-400">High Authority</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'gbp' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-emerald-400" />
                              <span className="text-xs font-semibold text-slate-300">Google Maps 3-Pack Local Discovery</span>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-mono">Verified Profile</span>
                          </div>

                          {/* Mock Map Card */}
                          <div className="relative h-28 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                            <div className="relative flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg animate-bounce">
                                <MapPin className="w-5 h-5 fill-current" />
                              </div>
                              <span className="text-xs font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded mt-1">
                                PakDigital Hub Local Client
                              </span>
                            </div>
                          </div>

                          {/* Profile Attributes */}
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">Google Business Profile Listing</span>
                              <div className="flex items-center text-amber-400 text-xs gap-1">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span className="font-semibold">5.0 Star Feedback</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-300">
                              Open · Service Area Defined · Verified Phone · Direct WhatsApp Booking
                            </p>
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <button className="py-1.5 text-xs font-semibold text-white bg-emerald-600/80 rounded-lg text-center">
                                Direct Call Button
                              </button>
                              <button className="py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg text-center">
                                Driving Directions
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'meta-ads' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-indigo-400" />
                              <span className="text-xs font-semibold text-slate-300">Meta Feed & WhatsApp Funnel</span>
                            </div>
                            <span className="text-[10px] text-indigo-400 font-mono">Lead Campaign Active</span>
                          </div>

                          {/* Feed Ad Mockup */}
                          <div className="rounded-xl p-3.5 bg-slate-900/90 border border-slate-800 space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">
                                P
                              </div>
                              <div>
                                <span className="text-xs font-bold text-white block leading-tight">PakDigital Hub Growth Partner</span>
                                <span className="text-[10px] text-slate-400 leading-tight">Sponsored · Meta Ads</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              Looking to scale property sales or generate real buyer inquiries? Direct WhatsApp message campaigns built for builders & local businesses.
                            </p>
                            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
                              <div>
                                <span className="text-[10px] text-indigo-300 uppercase font-bold block">Action</span>
                                <span className="text-xs font-bold text-white">Send WhatsApp Message</span>
                              </div>
                              <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs">
                                Chat Now
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Targeting</span>
                              <span className="font-semibold text-white">High-Net-Worth Buyers</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Lead Flow</span>
                              <span className="font-semibold text-emerald-400">Direct WhatsApp</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'google-ads' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-amber-400" />
                              <span className="text-xs font-semibold text-slate-300">Google Search Ads PPC Simulation</span>
                            </div>
                            <span className="text-[10px] text-amber-400 font-mono">Exact Match Keywords</span>
                          </div>

                          {/* Google Ad Result Card */}
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                                Sponsored
                              </span>
                              <span className="text-xs text-slate-400 font-mono">pakdigitalhub.com/commercial</span>
                            </div>
                            <h5 className="text-sm font-bold text-amber-400">
                              Commercial Marketing Agency | High-Intent Lead Acquisition
                            </h5>
                            <p className="text-xs text-slate-300 leading-snug">
                              Stop wasting budget on irrelevant clicks. Our PPC campaigns target commercial decision-makers searching for immediate services.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="px-2.5 py-1 text-[11px] rounded bg-slate-800 text-amber-300 font-medium">
                                Direct Phone Inquiries
                              </span>
                              <span className="px-2.5 py-1 text-[11px] rounded bg-slate-800 text-slate-300 font-medium">
                                Tight Negative Keywords
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Smartphone className="w-4 h-4 text-amber-400" />
                              <span className="text-xs text-slate-300">Call-Only Extensions</span>
                            </div>
                            <span className="text-xs font-bold text-white">+92 315 1708943</span>
                          </div>
                        </div>
                      )}

                      {service.id === 'amazon' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-amber-400" />
                              <span className="text-xs font-semibold text-slate-300">Amazon Marketplace Credibility</span>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-mono">100% Policy Compliant</span>
                          </div>

                          {/* Amazon ASIN Health Monitor */}
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">ASIN Feedback Intelligence</span>
                              <span className="text-[10px] text-amber-400 font-semibold">TOS Compliant</span>
                            </div>
                            <p className="text-xs text-slate-300">
                              Post-purchase buyer communication guidance, defect resolution alerts, and sentiment gap analysis against competitors.
                            </p>
                            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-normal">
                              <strong>Zero Fake Reviews Policy:</strong> We protect your Amazon store with 100% genuine customer feedback systems and listing clarity optimization.
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Monitoring</span>
                              <span className="font-semibold text-white">24/7 Review Alerts</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block">Conversion</span>
                              <span className="font-semibold text-amber-400">Credibility Driven</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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
