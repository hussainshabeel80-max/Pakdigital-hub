import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, ArrowUpRight, Search, Share2, ShoppingBag, MapPin, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsApp = (topic?: string) => {
    const message = topic
      ? `Hello PakDigital Hub, I am interested in ${topic} for my business.`
      : AGENCY_CONFIG.whatsappDefaultMsg;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Background Ambience: Subtle sky blue radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-300/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>DIGITAL MARKETING & E-COMMERCE GROWTH AGENCY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
                Grow Your Business With{' '}
                <span className="blue-gradient-text">Smarter Digital Marketing</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl text-blue-900 font-bold tracking-tight">
                Get Found. Get Leads. Grow.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              PakDigital Hub helps businesses increase online visibility, reach the right audience and
              generate more opportunities through SEO, Google Business Profile, Meta Ads, Google Ads
              and Amazon-focused services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleWhatsApp()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Get a Free Consultation</span>
              </button>

              <button
                onClick={() => handleWhatsApp()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-blue-400 hover:bg-blue-50/50 rounded-xl shadow-xs transition-all"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Secondary Service String */}
            <div className="pt-3 border-t border-slate-200 w-full flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="text-blue-600 font-bold">Core Focus:</span>
              <span className="truncate text-slate-700">SEO • GBP • Meta Ads • Google Ads • Amazon</span>
            </div>

            {/* Value Chain Pillar Strip */}
            <div className="w-full grid grid-cols-5 gap-2 pt-1 text-center">
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <span className="text-[10px] sm:text-xs text-blue-700 font-extrabold block uppercase tracking-wider">Visibility</span>
                <span className="text-[11px] text-slate-700 font-semibold">Rankings</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <span className="text-[10px] sm:text-xs text-blue-700 font-extrabold block uppercase tracking-wider">Traffic</span>
                <span className="text-[11px] text-slate-700 font-semibold">Targeted</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <span className="text-[10px] sm:text-xs text-blue-700 font-extrabold block uppercase tracking-wider">Leads</span>
                <span className="text-[11px] text-slate-700 font-semibold">Inbound</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <span className="text-[10px] sm:text-xs text-blue-700 font-extrabold block uppercase tracking-wider">Clients</span>
                <span className="text-[11px] text-slate-700 font-semibold">Conversion</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                <span className="text-[10px] sm:text-xs text-blue-700 font-extrabold block uppercase tracking-wider">Growth</span>
                <span className="text-[11px] text-slate-700 font-semibold">Scalable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Marketing Growth Performance Showcase (Founder photo moved exclusively to About section) */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center">
            {/* Ambient Blue Glow behind Showcase */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            {/* Premium Frame Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl p-2 sm:p-3 bg-white border border-slate-200 shadow-2xl shadow-blue-900/10">
              {/* Corner Accent Dots */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-500/80" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500/80" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-blue-500/80" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-blue-500/80" />

              {/* Main Visual Showcase Container */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-900 border border-slate-200/80">
                <img
                  src={AGENCY_CONFIG.analyticsImage}
                  alt="PakDigital Hub digital marketing analytics and multi-channel campaign growth engine"
                  className="w-full h-full object-cover object-center select-none opacity-90"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim at bottom for clean text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Live Performance HUD inside the frame */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Live Campaign Engine
                      </span>
                    </div>
                    <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/50 border border-blue-500/30">
                      Multi-Channel
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <span className="text-[10px] text-slate-400 block font-medium">ROAS Avg</span>
                      <span className="text-xs font-black text-amber-400">4.8x+</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <span className="text-[10px] text-slate-400 block font-medium">Search Rank</span>
                      <span className="text-xs font-black text-emerald-400">Top 3</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <span className="text-[10px] text-slate-400 block font-medium">Lead Flow</span>
                      <span className="text-xs font-black text-blue-400">WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Overlay Badges */}
              {/* Floating Badge 1: SEO (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-5 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-white border border-blue-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">SEO</span>
                  <span className="text-[9px] text-blue-600 font-semibold leading-tight">Rank Higher</span>
                </div>
              </div>

              {/* Floating Badge 2: Meta Ads (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-white border border-indigo-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Meta Ads</span>
                  <span className="text-[9px] text-indigo-600 font-semibold leading-tight">Qualified Leads</span>
                </div>
              </div>

              {/* Floating Badge 3: Google Ads (Middle Right) */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 items-center gap-2 py-1.5 px-3 rounded-xl bg-white border border-blue-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Google Ads</span>
                  <span className="text-[9px] text-blue-600 font-semibold leading-tight">High-Intent Traffic</span>
                </div>
              </div>

              {/* Floating Badge 4: Google Business Profile (Bottom Left) */}
              <div className="hidden sm:flex absolute bottom-12 -left-6 items-center gap-2 py-1.5 px-3 rounded-xl bg-white border border-emerald-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">GBP & Maps</span>
                  <span className="text-[9px] text-emerald-600 font-semibold leading-tight">Local Discovery</span>
                </div>
              </div>

              {/* Floating Badge 5: Amazon (Bottom Right) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-white border border-amber-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Amazon</span>
                  <span className="text-[9px] text-amber-600 font-semibold leading-tight">Feedback & Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
