import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  theme = 'light'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* PakDigital Hub Iconic Symbol: Modern 'P' with Upward Gold Arrow */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br ${
        isDark ? 'from-slate-900 via-[#0B1120] to-black border-amber-500/30' : 'from-blue-900 via-slate-900 to-blue-950 border-blue-600/30 shadow-md'
      } border`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Stylized P Frame */}
          <path
            d="M26 18H58C72 18 80 27 80 40C80 53 71 62 56 62H42V84C42 86.2 40.2 88 38 88H26C23.8 88 22 86.2 22 84V22C22 19.8 23.8 18 26 18Z"
            fill="#FFFFFF"
            fillOpacity="0.15"
          />
          {/* Main Solid P Stem in White */}
          <path
            d="M26 20H42V84H26V20Z"
            fill="#FFFFFF"
            rx="2"
          />
          {/* Dynamic Gold Growth Arrow inside the upper bowl */}
          <path
            d="M42 20H60C71 20 78 27.5 78 39C78 50.5 71 58 60 58H42V46H56C60.5 46 64 43 64 39C64 35 60.5 32 56 32H42V20Z"
            fill="#F59E0B"
          />
          {/* Sharp upward diagonal arrow accent */}
          <path
            d="M50 50L68 32M68 32H54M68 32V46"
            stroke="#FEF3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className={`font-display font-bold tracking-tight ${textSizes[size]}`}>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>PakDigital</span>{' '}
          <span className="text-amber-500">Hub</span>
        </div>
        {showTagline ? (
          <span className={`text-[10px] tracking-[0.16em] uppercase font-semibold mt-1 ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
            Digital Marketing · Growth
          </span>
        ) : (
          <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold mt-0.5 ${isDark ? 'text-amber-400' : 'text-blue-600'}`}>
            Growth Agency
          </span>
        )}
      </div>
    </div>
  );
};
