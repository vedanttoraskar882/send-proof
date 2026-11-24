import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onRequestPilot: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'platform', 'how-it-works', 'market-pricing', 'faq'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(13,36,71,0.06)] border-b border-surface-border/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-surface-border/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Brand Wordmark (No icon next to SendProof per request) */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary rounded-lg transition-transform hover:opacity-90"
            aria-label="SendProof Home"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-teal-deep bg-teal-light font-semibold shadow-xs' 
                      : 'text-content-secondary hover:text-navy-primary hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={onRequestPilot}
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-primary to-teal-deep hover:from-teal-deep hover:to-teal-dark rounded-xl shadow-xs hover:shadow-teal-glow transition-all duration-200 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary focus-visible:ring-offset-2"
            >
              Request a Pilot
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-content-secondary hover:text-navy-primary hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-teal-deep bg-teal-light font-semibold' 
                      : 'text-content-primary hover:text-navy-primary hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestPilot();
                }}
                className="w-full flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-teal-primary to-teal-deep rounded-xl shadow-sm transition-all"
              >
                Request a Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
