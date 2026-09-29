import React, { useState, useRef, useEffect } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { CheckCircle2, ShieldCheck, TrendingUp, Layers, MessageSquare, Phone, Camera, Check, RotateCcw } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(AGENCY_CONFIG.founderImage);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pakdigital_founder_real_photo');
      if (saved) {
        setPhotoSrc(saved);
        setIsCustomPhoto(true);
      }
    } catch (e) {
      // localStorage error fallback
    }
  }, []);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          setIsCustomPhoto(true);
          setUploadSuccess(true);
          try {
            localStorage.setItem('pakdigital_founder_real_photo', result);
          } catch (err) {}
          setTimeout(() => setUploadSuccess(false), 4000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setPhotoSrc(AGENCY_CONFIG.founderImage);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('pakdigital_founder_real_photo');
    } catch (err) {}
  };

  const qualitativePillars = [
    {
      icon: TrendingUp,
      title: "End-to-End Growth Architecture",
      desc: "From initial keyword intent to conversion-optimized landing pages and direct WhatsApp inquiry routing, every touchpoint is intentionally engineered."
    },
    {
      icon: Layers,
      title: "Holistic Channel Integration",
      desc: "We coordinate organic SEO and local Google Maps presence alongside high-intent paid advertising on Meta and Google to avoid single-channel vulnerability."
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Guidelines-Compliant",
      desc: "Zero deceptive techniques, zero black-hat spam, and strict compliance with Google search parameters and Amazon marketplace policies."
    },
    {
      icon: CheckCircle2,
      title: "Direct Strategic Accountability",
      desc: "Clear direct communication, transparent campaign data access, and regular performance reviews centered around actual inquiries."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder introduction card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-3 bg-slate-50 border border-slate-200 shadow-xl shadow-blue-900/5">
              {/* Hidden file input for uploading the user's authentic photo directly without AI alteration */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoSelect}
                accept="image/*"
                className="hidden"
                aria-label="Upload original founder photo"
              />

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group">
                <img
                  src={photoSrc}
                  alt="PakDigital Hub founder at executive office desk"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Top Quick Actions Bar for Exact Uploaded Photo */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                  {uploadSuccess && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/95 text-white text-[11px] font-bold shadow-md backdrop-blur-sm animate-fade-in">
                      <Check className="w-3.5 h-3.5" />
                      <span>Exact Photo Active</span>
                    </span>
                  )}

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Select your original photo file to use exactly without modifications"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/85 hover:bg-slate-900 text-white text-xs font-semibold shadow-md backdrop-blur-sm border border-white/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <Camera className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isCustomPhoto ? 'Change Photo' : 'Upload Real Photo'}</span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      title="Reset to default photo"
                      className="p-1.5 rounded-lg bg-slate-950/85 hover:bg-slate-900 text-slate-300 hover:text-white text-xs shadow-md backdrop-blur-sm border border-white/20 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block">
                      Leadership & Strategy
                    </span>
                    {isCustomPhoto && (
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        Original Photo
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Founder, PakDigital Hub
                  </h3>
                  <p className="text-xs text-slate-200 mt-0.5 font-medium">
                    Focused on scalable digital growth & high-conversion lead engines
                  </p>
                </div>
              </div>

              {/* Agency Tagline Callout */}
              <div className="mt-3.5 p-3.5 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Agency Creed</span>
                  <span className="font-script text-xl text-amber-600 font-bold">
                    &ldquo;Your Growth. Our Strategy.&rdquo;
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wide">
                    PakDigital Hub
                  </span>
                  <span className="text-[10px] text-blue-600 font-semibold">
                    Digital Marketing Agency
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Qualitative Capability Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                <span>About Our Agency</span>
                <span className="w-8 h-[2px] bg-blue-600" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Helping Businesses Build a Stronger Digital Presence
              </h2>
            </div>

            {/* Prescribed agency copy */}
            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
              <p>
                PakDigital Hub is a digital marketing and e-commerce growth agency focused on helping
                businesses improve their online visibility, reach potential customers and create
                sustainable growth opportunities.
              </p>
              <p className="text-slate-600">
                We combine organic search strategies, local SEO, paid advertising and
                marketplace-focused services to create practical digital marketing solutions around
                each client&apos;s goals.
              </p>
            </div>

            {/* Qualitative Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {qualitativePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/40 transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  AGENCY_CONFIG.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Consult With Founder</span>
              </a>
              <a
                href={`tel:${AGENCY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 border border-slate-300 rounded-lg bg-white hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="whitespace-nowrap">Call {AGENCY_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
