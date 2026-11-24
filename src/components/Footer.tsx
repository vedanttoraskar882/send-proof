import React from 'react';
import { ArrowRight, MapPin, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onRequestPilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-navy-dark text-slate-300 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Integrated CTA Banner at the beginning of footer */}
      <div className="relative border-b border-white/10 bg-gradient-to-b from-navy-primary to-navy-secondary py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-primary/20 border border-teal-primary/30 text-teal-light text-xs font-semibold tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 text-teal-primary" />
            <span>Pilot Programme Registration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Make Consent Evidence Part of Every Campaign.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Register your interest in SendProof and explore a more traceable approach to email marketing consent evidence.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onRequestPilot}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-primary hover:bg-teal-deep active:bg-teal-dark rounded-xl shadow-teal-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Pilot
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* COLUMN 1: BRAND */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary rounded-lg"
              aria-label="SendProof Home"
            >
              <Logo variant="dark" size="md" />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              Consent evidence for email marketing. Designed to help UK businesses connect existing systems, trace consent, assess campaigns and produce structured evidence.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-teal-primary shrink-0" />
              <span>Middlesbrough, United Kingdom</span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Platform', id: 'platform' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Market & Pricing', id: 'market-pricing' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PLATFORM MODULES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                'Consent Capture',
                'Provenance Graph',
                'Scope-Drift Detection',
                'Freshness Scoring',
                'Pre-Send Decision Gate',
                'Evidence Export',
              ].map((mod) => (
                <li key={mod}>
                  <a
                    href="#platform"
                    onClick={(e) => handleScrollTo(e, 'platform')}
                    className="hover:text-teal-light transition-colors"
                  >
                    {mod}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: COMMERCIAL OFFERINGS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Commercial Offerings
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#market-pricing"
                  onClick={(e) => handleScrollTo(e, 'market-pricing')}
                  className="hover:text-teal-light transition-colors block"
                >
                  Consent Health Check — £495 one-off
                </a>
              </li>
              <li>
                <a
                  href="#market-pricing"
                  onClick={(e) => handleScrollTo(e, 'market-pricing')}
                  className="hover:text-teal-light transition-colors block"
                >
                  Starter — £149/month
                </a>
              </li>
              <li>
                <a
                  href="#market-pricing"
                  onClick={(e) => handleScrollTo(e, 'market-pricing')}
                  className="hover:text-teal-light transition-colors block"
                >
                  Growth — £399/month
                </a>
              </li>
              <li>
                <a
                  href="#market-pricing"
                  onClick={(e) => handleScrollTo(e, 'market-pricing')}
                  className="hover:text-teal-light transition-colors block"
                >
                  Agency — £1,200/month
                </a>
              </li>
            </ul>
            <div className="text-xs text-teal-light font-medium pt-1">
              All prices exclude VAT.
            </div>
          </div>

        </div>

        {/* Regulatory & Advisory Notice */}
        <div className="mt-14 pt-8 border-t border-white/10 space-y-3 text-xs text-slate-400">
          <p>
            SendProof is a proposed consent evidence and decision-support platform. It does not provide legal advice or certify PECR or UK GDPR compliance.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {currentYear} SendProof. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
