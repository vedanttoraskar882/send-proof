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
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Wordmark without icon: SEND in navy/white, PROOF in teal */}
      <span className={`font-display font-black tracking-tight ${textSizes[size]}`}>
        <span className={variant === 'dark' ? 'text-white' : 'text-navy-primary'}>SEND</span>
        <span className="text-teal-primary">PROOF</span>
      </span>
    </div>
  );
};
