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
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Ambience: Subtle dark navy gradient with warm amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>DIGITAL MARKETING & E-COMMERCE GROWTH AGENCY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                Grow Your Business With{' '}
                <span className="gold-gradient-text">Smarter Digital Marketing</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
                Get Found. Get Leads. Grow.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              PakDigital Hub helps businesses increase online visibility, reach the right audience and
              generate more opportunities through SEO, Google Business Profile, Meta Ads, Google Ads
              and Amazon-focused services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleWhatsApp()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Get a Free Consultation</span>
              </button>

              <button
                onClick={() => handleWhatsApp()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900/90 border border-slate-700/80 hover:border-amber-400/50 hover:bg-slate-800/90 rounded-xl transition-all"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Secondary Service String */}
            <div className="pt-3 border-t border-slate-800/80 w-full flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span className="text-amber-400 font-semibold">Core Focus:</span>
              <span className="truncate">SEO • GBP • Meta Ads • Google Ads • Amazon</span>
            </div>

            {/* Value Chain Pillar Strip */}
            <div className="w-full grid grid-cols-5 gap-1.5 pt-1 text-center">
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] sm:text-xs text-amber-400 font-bold block uppercase tracking-wider">Visibility</span>
                <span className="text-[11px] text-slate-300 font-medium">Rankings</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] sm:text-xs text-amber-400 font-bold block uppercase tracking-wider">Traffic</span>
                <span className="text-[11px] text-slate-300 font-medium">Targeted</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] sm:text-xs text-amber-400 font-bold block uppercase tracking-wider">Leads</span>
                <span className="text-[11px] text-slate-300 font-medium">Inbound</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] sm:text-xs text-amber-400 font-bold block uppercase tracking-wider">Clients</span>
                <span className="text-[11px] text-slate-300 font-medium">Conversion</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] sm:text-xs text-amber-400 font-bold block uppercase tracking-wider">Growth</span>
                <span className="text-[11px] text-slate-300 font-medium">Scalable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Image with Premium Frame & Floating Service Badges */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center">
            {/* Ambient Gold Glow behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            {/* Premium Frame Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-black border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Corner Accent Dots */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-400/60" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400/60" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-400/60" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-400/60" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-[4/3] bg-slate-950">
                <img
                  src={AGENCY_CONFIG.founderImage}
                  alt="PakDigital Hub founder at modern agency executive desk with laptop and brand mug"
                  className="w-full h-full object-cover object-top sm:object-center select-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim at bottom for text protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Founder Identity Card inside the frame */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Founder & Lead Strategist
                    </p>
                    <p className="text-[11px] text-amber-400 font-medium">
                      PakDigital Hub Agency
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-script text-amber-300 text-lg sm:text-xl block leading-none">
                      Your Growth. Our Strategy.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Service Overlay Badges matching the brand identity */}
              {/* Floating Badge 1: SEO (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-5 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-950/90 border border-blue-500/40 backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">SEO</span>
                  <span className="text-[9px] text-slate-400 leading-tight">Rank Higher</span>
                </div>
              </div>

              {/* Floating Badge 2: Meta Ads (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-950/90 border border-indigo-500/40 backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Meta Ads</span>
                  <span className="text-[9px] text-slate-400 leading-tight">Qualified Leads</span>
                </div>
              </div>

              {/* Floating Badge 3: Google Ads (Middle Right) */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Google Ads</span>
                  <span className="text-[9px] text-slate-400 leading-tight">Search Intent</span>
                </div>
              </div>

              {/* Floating Badge 4: Google Business Profile (Bottom Left) */}
              <div className="hidden sm:flex absolute bottom-12 -left-6 items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-950/90 border border-emerald-500/40 backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">GBP & Maps</span>
                  <span className="text-[9px] text-slate-400 leading-tight">Local Discovery</span>
                </div>
              </div>

              {/* Floating Badge 5: Amazon (Bottom Right) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 flex items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">Amazon</span>
                  <span className="text-[9px] text-slate-400 leading-tight">Feedback & Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
