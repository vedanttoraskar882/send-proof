import React from 'react';
import { GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

export const FounderProfile: React.FC = () => {
  const qualifications = [
    {
      degree: "MSc Digital Marketing",
      institution: "Teesside University, United Kingdom",
      date: "October 2024",
    },
    {
      degree: "Higher National Diploma in Marketing",
      institution: "Ladoke Akintola University of Technology, Nigeria",
      date: "August 2022",
    },
  ];

  const experience = [
    {
      company: "Flur, Middlesbrough, United Kingdom",
      role: "Email Marketing",
      period: "March 2024 – May 2024",
      responsibilities: "Email campaign management, customer segmentation, marketing communications and conversion optimisation.",
    },
    {
      company: "Musat Multi Ventures Company Limited",
      role: "Digital Marketer",
      period: "January 2022 – June 2022",
      responsibilities: "Digital marketing strategies, SEO, PPC campaigns, marketing performance analysis and CRM processes.",
    },
  ];

  const responsibilities = [
    "Product strategy",
    "Consent rule definition",
    "Customer discovery",
    "Pilot programme coordination",
    "Screen and product specifications",
    "Evidence report templates",
    "Commercial development",
    "Product release oversight",
  ];

  return (
    <div className="mt-24 pt-16 border-t border-surface-border">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
          LEADERSHIP & BACKGROUND
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-primary mt-1.5 tracking-tight">
          Meet the Founder
        </h3>
        <p className="text-sm sm:text-base text-content-secondary mt-2">
          Bridging practical digital marketing operations with structured consent accountability.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-surface-border shadow-regtech p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          
          {/* Header Bar: Founder Name & Details (No photo or avatar placeholder per instructions) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-surface-border">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-light text-teal-deep text-xs font-bold tracking-wider uppercase mb-2">
                Founder & Chief Executive
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-primary tracking-tight">
                Sulaiman Olatunji Raimi
              </h4>
              <p className="text-sm font-medium text-content-secondary mt-1">
                Middlesbrough, United Kingdom
              </p>
            </div>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap gap-2 md:justify-end max-w-md">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-light border border-surface-border text-navy-primary">
                Email Marketing
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-light border border-surface-border text-navy-primary">
                Customer Segmentation
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-light border border-surface-border text-navy-primary">
                Campaign Retention
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-light border border-surface-border text-navy-primary">
                CRM Architecture
              </span>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="space-y-3">
            <h5 className="text-base font-bold text-navy-primary flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-teal-primary" />
              Background & Practical Experience
            </h5>
            <p className="text-sm sm:text-base text-content-primary leading-relaxed">
              Sulaiman Olatunji Raimi holds a Master of Science in Digital Marketing from Teesside University in the United Kingdom and a Higher National Diploma in Marketing from Ladoke Akintola University of Technology, Nigeria.
            </p>
            <p className="text-sm sm:text-base text-content-primary leading-relaxed">
              His professional experience includes email marketing, customer relationship management, customer segmentation, digital campaign development, marketing performance analysis and customer retention. Drawing on his practical marketing experience, he is developing SendProof to address the disconnect between consent records and everyday email marketing operations.
            </p>
          </div>

          {/* Academic Qualifications & Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            
            {/* Academic Qualifications */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-primary" />
                Academic Qualifications
              </h5>
              <div className="space-y-3">
                {qualifications.map((qual) => (
                  <div key={qual.degree} className="p-4 rounded-xl bg-surface-light border border-surface-border/80">
                    <div className="font-bold text-navy-primary text-sm sm:text-base">{qual.degree}</div>
                    <div className="text-xs sm:text-sm text-content-secondary mt-1">{qual.institution}</div>
                    <div className="text-xs text-teal-deep font-semibold mt-1.5">{qual.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Professional Experience */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-primary" />
                Relevant Professional Experience
              </h5>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.company} className="p-4 rounded-xl bg-surface-light border border-surface-border/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-navy-primary text-sm sm:text-base">{exp.company}</span>
                      <span className="text-xs text-teal-deep font-semibold">{exp.period}</span>
                    </div>
                    <div className="text-xs text-content-primary font-medium mt-1">Role: {exp.role}</div>
                    <p className="text-xs text-content-secondary mt-1.5 leading-relaxed">
                      {exp.responsibilities}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Founder Responsibilities within SendProof */}
          <div className="pt-4 border-t border-surface-border">
            <h5 className="text-xs font-bold uppercase tracking-wider text-content-secondary mb-3">
              Key Responsibilities within SendProof
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {responsibilities.map((resp) => (
                <div key={resp} className="flex items-center gap-2 text-xs font-medium text-navy-primary p-2 rounded-lg bg-surface-light/70 border border-surface-border/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
