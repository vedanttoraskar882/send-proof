import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  FileText, 
  Fingerprint, 
  Shield, 
  Layers, 
  Clock, 
  GitCommit
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot, onExplorePlatform }) => {
  const illustrativeCampaigns = [
    { name: 'Spring Newsletter', status: 'Send', type: 'send' },
    { name: 'Partner Promotion', status: 'Hold', type: 'hold' },
    { name: 'Win-back Campaign', status: 'Re-permission', type: 'repermission' },
    { name: 'Product Launch', status: 'Send', type: 'send' },
    { name: 'Merged Audience Import', status: 'Hold', type: 'hold' },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy-primary via-navy-secondary to-navy-dark text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Ambient Mesh & Subtle Connection Accents */}
      <div className="absolute inset-0 bg-grid-navy opacity-45 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-deep/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-primary/15 border border-teal-primary/30 text-teal-light text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5 text-teal-primary" />
              <span>CONSENT EVIDENCE FOR EMAIL MARKETING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
              Know the <span className="text-teal-primary underline decoration-teal-primary/40 underline-offset-8">Consent</span> Behind <span className="text-teal-primary">Every Marketing Email</span>.
            </h1>

            {/* Hero Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
              SendProof is designed to help UK businesses and digital marketing agencies connect existing marketing systems, trace original consent records, assess planned campaigns and produce clear evidence before every send.
            </p>

            {/* Supporting Sentence */}
            <div className="text-sm sm:text-base text-slate-400 font-light border-l-2 border-teal-primary/60 pl-4 py-0.5">
              An independent consent evidence layer built around traceability, explainable assessment and campaign-level accountability.
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onRequestPilot}
                className="group inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-teal-primary to-teal-deep hover:from-teal-deep hover:to-teal-dark active:scale-98 rounded-xl shadow-teal-glow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-light"
              >
                Request a Pilot
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExplorePlatform}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore the Platform
                <ChevronRight className="ml-1.5 w-4 h-4 text-teal-primary" />
              </button>
            </div>

            {/* Subtle Development-Stage Statement */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Currently in development — register your interest in the planned pilot programme.</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Realistic Illustrative Product Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Container Frame */}
              <div className="rounded-2xl border border-white/15 bg-navy-dark/90 backdrop-blur-xl shadow-regtech-dark p-4 sm:p-6 space-y-4 text-slate-200">
                
                {/* Interface Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
                      Campaign Evidence Overview
                    </span>
                  </div>
                  {/* Mandatory Label */}
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-primary/20 text-teal-light border border-teal-primary/30">
                    Illustrative Product Preview
                  </span>
                </div>

                {/* Panel 1: Pre-Send Campaign Check */}
                <div className="bg-navy-secondary/70 rounded-xl p-4 border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-teal-primary" />
                      Pre-Send Campaign Check
                    </span>
                    <span className="text-[10px] text-teal-light/80 font-medium">Advisory Evaluation</span>
                  </div>

                  <div className="space-y-1.5">
                    {illustrativeCampaigns.map((camp) => (
                      <div 
                        key={camp.name}
                        className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-navy-primary/60 border border-white/5 text-xs hover:border-teal-primary/30 transition-all duration-150"
                      >
                        <span className="font-medium text-slate-200 truncate pr-2">{camp.name}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {camp.type === 'send' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              Send
                            </span>
                          )}
                          {camp.type === 'hold' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-red-950/80 text-red-400 border border-red-500/30">
                              <XCircle className="w-3 h-3 text-red-400" />
                              Hold
                            </span>
                          )}
                          {camp.type === 'repermission' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-amber-950/80 text-amber-400 border border-amber-500/30">
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                              Re-permission
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-slate-400 text-center italic pt-0.5">
                    All campaign records are illustrative examples.
                  </div>
                </div>

                {/* Panel 2: Consent Provenance Connected Workflow */}
                <div className="bg-navy-secondary/70 rounded-xl p-4 border border-white/10 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-teal-primary" />
                    Consent Provenance
                  </span>

                  {/* Connected Workflow */}
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-[10px] sm:text-xs">
                    <div className="p-2 rounded-lg bg-navy-primary/70 border border-white/10">
                      <div className="text-slate-400 text-[9px] uppercase">Node 01</div>
                      <div className="font-semibold text-white truncate">Subscriber</div>
                    </div>
                    <div className="p-2 rounded-lg bg-navy-primary/70 border border-teal-primary/40 shadow-xs">
                      <div className="text-teal-light text-[9px] uppercase font-bold">Node 02</div>
                      <div className="font-semibold text-white truncate">Original Consent</div>
                    </div>
                    <div className="p-2 rounded-lg bg-navy-primary/70 border border-white/10">
                      <div className="text-slate-400 text-[9px] uppercase">Node 03</div>
                      <div className="font-semibold text-white truncate">Audience Segment</div>
                    </div>
                    <div className="p-2 rounded-lg bg-navy-primary/70 border border-white/10">
                      <div className="text-slate-400 text-[9px] uppercase">Node 04</div>
                      <div className="font-semibold text-white truncate">Planned Campaign</div>
                    </div>
                  </div>

                  {/* Supporting Labels */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] text-slate-300 pt-1">
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                      <span className="truncate">Original wording preserved</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1.5 rounded">
                      <Clock className="w-3 h-3 text-teal-primary shrink-0" />
                      <span className="truncate">Capture timestamp</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1.5 rounded">
                      <FileText className="w-3 h-3 text-teal-primary shrink-0" />
                      <span className="truncate">Form version</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1.5 rounded">
                      <Fingerprint className="w-3 h-3 text-teal-primary shrink-0" />
                      <span className="truncate">Evidence fingerprint</span>
                    </div>
                  </div>
                </div>

                {/* Panel 3: Evidence Pack Miniature Preview */}
                <div className="bg-navy-secondary/70 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-primary/20 border border-teal-primary/30 text-teal-light shrink-0">
                    <FileText className="w-5 h-5 text-teal-primary" />
                  </div>
                  <div className="space-y-1.5 text-xs w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Evidence Pack Structure</span>
                      <span className="text-[10px] text-teal-light font-medium">Deterministic Audit Trail</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Consent history</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Campaign assessment</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Applicable rule version</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Timestamped evidence</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Withdrawal & complaint records</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Evidence Chip */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 bg-navy-primary/95 border border-teal-primary/40 rounded-xl px-3.5 py-2 shadow-xl text-[11px] text-white"
              >
                <Fingerprint className="w-4 h-4 text-teal-primary" />
                <span className="font-mono text-teal-light">SHA-256: 7f83b165...79930f</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
