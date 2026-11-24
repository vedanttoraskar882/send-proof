import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  className = '',
  size = 'md' 
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Outlined envelope icon with subtle shield/verification check element */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Base rounded envelope body outline */}
          <rect 
            x="3" 
            y="6" 
            width="30" 
            height="24" 
            rx="4" 
            stroke={variant === 'dark' ? '#E2E8F0' : '#0D2447'} 
            strokeWidth="2.2" 
            fill="none"
          />
          {/* Envelope fold line */}
          <path 
            d="M4.5 8L18 19L31.5 8" 
            stroke={variant === 'dark' ? '#94A3B8' : '#64748B'} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Subtle shield / verification element in bottom right */}
          <path 
            d="M21 21L27 18L33 21V26.5C33 30 27 33 27 33C27 33 21 30 21 26.5V21Z" 
            fill={variant === 'dark' ? '#0D2447' : '#FFFFFF'}
            stroke="#159C80" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          {/* Verification checkmark inside shield */}
          <path 
            d="M24 25.5L26 27.5L30 23.5" 
            stroke="#159C80" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Wordmark: SEND in navy/white, PROOF in teal */}
      <span className={`font-display font-extrabold tracking-tight ${textSizes[size]}`}>
        <span className={variant === 'dark' ? 'text-white' : 'text-navy-primary'}>SEND</span>
        <span className="text-teal-primary">PROOF</span>
      </span>
    </div>
  );
};
