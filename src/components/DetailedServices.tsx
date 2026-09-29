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
    <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span>In-Depth Execution</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Detailed Service Breakdowns
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Examine our methodological approach, expected business advantages, and target industry alignment for each growth capability.
          </p>
        </div>

        {/* Tab Switcher for Quick Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap border ${
                activeTab === service.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                  : 'bg-slate-100/80 text-slate-700 border-slate-200 hover:text-blue-700 hover:bg-blue-50/70 hover:border-blue-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Individual Detailed Sections */}
        <div className="space-y-16 lg:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={`services-${service.id}`}
                className={`scroll-mt-28 rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-50/70 border border-slate-200 transition-all ${
                  activeTab === service.id ? 'ring-2 ring-blue-500/40 shadow-xl shadow-blue-900/5' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Information Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {service.badge}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                        {service.detailedSection.heading}
                      </h3>
                    </div>

                    <p className="text-base text-slate-700 leading-relaxed font-normal">
                      {service.detailedSection.explanation}
                    </p>

                    {/* What We Do & Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      {/* What We Do */}
                      <div className="space-y-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span>What We Do</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {service.detailedSection.whatWeDo.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold">•</span>
                              <span className="leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <span>Business Benefits</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {service.detailedSection.benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span className="leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Suitable Businesses */}
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Suitable For:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.detailedSection.suitableFor.map((target, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-lg bg-white text-slate-700 border border-slate-200 shadow-xs"
                          >
                            <Building2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>{target}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleWhatsApp(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Inquire About {service.title}</span>
                      </button>
                      <span className="text-xs font-semibold text-slate-500">
                        Tailored Scope · Custom Strategy Proposal
                      </span>
                    </div>
                  </div>

                  {/* Visual Demonstration Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl p-4 sm:p-5 bg-white border border-slate-200 shadow-xl shadow-blue-900/5">
                      {/* Interactive Visual Graphic Mockup */}
                      {service.id === 'seo' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Search className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-bold text-slate-800">Organic Search Engine Simulation</span>
                            </div>
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Live Crawl</span>
                          </div>

                          {/* Mock Google Search Bar */}
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 shadow-xs">
                            <Search className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-slate-700 font-semibold">best digital marketing agency near me</span>
                          </div>

                          {/* Mock SERP Result #1 */}
                          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-1.5 shadow-xs">
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <span className="text-blue-700 font-bold">https://pakdigitalhub.com</span>
                              <span>›</span>
                              <span>services</span>
                            </div>
                            <h5 className="text-sm font-bold text-blue-700 hover:underline">
                              PakDigital Hub | Digital Marketing & E-commerce Growth Agency
                            </h5>
                            <p className="text-xs text-slate-600 leading-snug font-normal">
                              Specialized SEO, GBP, Meta Ads and Google Ads management. Increase rankings, search impressions and qualified inbound buyer inquiries.
                            </p>
                            <div className="pt-2 flex items-center gap-3 text-[11px] text-slate-500">
                              <span>Rank: <strong className="text-emerald-700">Top 3 Targeted</strong></span>
                              <span>Intent: <strong className="text-slate-800">Commercial High-Intent</strong></span>
                            </div>
                          </div>

                          {/* SEO Metrics snippet */}
                          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Indexing</span>
                              <span className="text-xs font-bold text-emerald-700">100% Health</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Keywords</span>
                              <span className="text-xs font-bold text-blue-700">Buyer Intent</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Backlinks</span>
                              <span className="text-xs font-bold text-blue-800">High Authority</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'gbp' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-emerald-600" />
                              <span className="text-xs font-bold text-slate-800">Google Maps 3-Pack Local Discovery</span>
                            </div>
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Verified Profile</span>
                          </div>

                          {/* Mock Map Card */}
                          <div className="relative h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
                            <div className="relative flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                                <MapPin className="w-5 h-5 fill-current" />
                              </div>
                              <span className="text-xs font-bold text-slate-900 bg-white shadow-md px-2.5 py-0.5 rounded mt-1 border border-slate-200">
                                PakDigital Hub Local Client
                              </span>
                            </div>
                          </div>

                          {/* Profile Attributes */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">Google Business Profile Listing</span>
                              <div className="flex items-center text-amber-500 text-xs gap-1">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span className="font-bold text-slate-800">5.0 Star Feedback</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-600 font-normal">
                              Open · Service Area Defined · Verified Phone · Direct WhatsApp Booking
                            </p>
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <button className="py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center shadow-xs">
                                Direct Call Button
                              </button>
                              <button className="py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg text-center shadow-xs">
                                Driving Directions
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'meta-ads' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-indigo-600" />
                              <span className="text-xs font-bold text-slate-800">Meta Feed & WhatsApp Funnel</span>
                            </div>
                            <span className="text-[10px] text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">Lead Campaign Active</span>
                          </div>

                          {/* Feed Ad Mockup */}
                          <div className="rounded-xl p-3.5 bg-slate-50 border border-slate-200 space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                                P
                              </div>
                              <div>
                                <span className="text-xs font-bold text-slate-900 block leading-tight">PakDigital Hub Growth Partner</span>
                                <span className="text-[10px] text-slate-500 leading-tight">Sponsored · Meta Ads</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed font-normal">
                              Looking to scale property sales or generate real buyer inquiries? Direct WhatsApp message campaigns built for builders & local businesses.
                            </p>
                            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between">
                              <div>
                                <span className="text-[10px] text-blue-700 uppercase font-bold block">Action</span>
                                <span className="text-xs font-bold text-slate-900">Send WhatsApp Message</span>
                              </div>
                              <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-xs">
                                Chat Now
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Targeting</span>
                              <span className="font-bold text-slate-900">High-Net-Worth Buyers</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Lead Flow</span>
                              <span className="font-bold text-emerald-700">Direct WhatsApp</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === 'google-ads' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-blue-700" />
                              <span className="text-xs font-bold text-slate-800">Google Search Ads PPC Simulation</span>
                            </div>
                            <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Exact Match</span>
                          </div>

                          {/* Google Ad Result Card */}
                          <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">
                                Sponsored
                              </span>
                              <span className="text-xs text-slate-600 font-mono">pakdigitalhub.com/commercial</span>
                            </div>
                            <h5 className="text-sm font-bold text-blue-700">
                              Commercial Marketing Agency | High-Intent Lead Acquisition
                            </h5>
                            <p className="text-xs text-slate-700 leading-snug font-normal">
                              Stop wasting budget on irrelevant clicks. Our PPC campaigns target commercial decision-makers searching for immediate services.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="px-2.5 py-1 text-[11px] rounded bg-white text-blue-700 font-semibold border border-blue-200">
                                Direct Phone Inquiries
                              </span>
                              <span className="px-2.5 py-1 text-[11px] rounded bg-white text-slate-700 font-semibold border border-slate-200">
                                Tight Negative Keywords
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Smartphone className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-semibold text-slate-700">Call-Only Extensions</span>
                            </div>
                            <span className="text-xs font-bold text-slate-900">+92 315 1708943</span>
                          </div>
                        </div>
                      )}

                      {service.id === 'amazon' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-amber-600" />
                              <span className="text-xs font-bold text-slate-800">Amazon Marketplace Credibility</span>
                            </div>
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">100% Policy Compliant</span>
                          </div>

                          {/* Amazon ASIN Health Monitor */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">ASIN Feedback Intelligence</span>
                              <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">TOS Compliant</span>
                            </div>
                            <p className="text-xs text-slate-700 font-normal">
                              Post-purchase buyer communication guidance, defect resolution alerts, and sentiment gap analysis against competitors.
                            </p>
                            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-normal">
                              <strong>Zero Fake Reviews Policy:</strong> We protect your Amazon store with 100% genuine customer feedback systems and listing clarity optimization.
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Monitoring</span>
                              <span className="font-bold text-slate-900">24/7 Review Alerts</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                              <span className="text-[10px] text-slate-500 block font-semibold">Conversion</span>
                              <span className="font-bold text-blue-700">Credibility Driven</span>
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
