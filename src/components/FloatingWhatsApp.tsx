import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleClick = () => {
    const encoded = encodeURIComponent(AGENCY_CONFIG.whatsappDefaultMsg);
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Informative Tooltip */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-amber-500/30 text-xs text-white shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Open WhatsApp Chat with PakDigital Hub"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 group-hover:animate-ping" />
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </button>
    </div>
  );
};
