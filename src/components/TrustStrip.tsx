import React from 'react';
import { Search, MapPin, Share2, Target, ShoppingBag, ArrowRight } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const growthServices = [
    {
      id: 'seo',
      title: 'SEO Services',
      sub: 'Search Visibility & Rankings',
      icon: Search,
      href: '#services-seo',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'gbp',
      title: 'Google Business Profile',
      sub: 'Local Maps & Geo Discovery',
      icon: MapPin,
      href: '#services-gbp',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      sub: 'Facebook & Instagram Funnels',
      icon: Share2,
      href: '#services-meta-ads',
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      sub: 'Commercial PPC & Phone Calls',
      icon: Target,
      href: '#services-google-ads',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'amazon',
      title: 'Amazon Services',
      sub: 'Feedback Strategy & Credibility',
      icon: ShoppingBag,
      href: '#services-amazon',
      color: 'text-amber-600 bg-amber-50'
    }
  ];

  return (
    <section className="relative py-8 bg-slate-50/90 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Section Kicker */}
          <div className="shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-blue-600" />
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700">
                Core Capabilities
              </p>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider">
                OUR DIGITAL GROWTH SERVICES
              </h2>
            </div>
          </div>

          {/* Horizontal Service Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
            {growthServices.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={service.href}
                  className="group flex flex-col p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${service.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-medium">
                    {service.sub}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
