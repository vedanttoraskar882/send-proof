import React from 'react';
import { GraduationCap, Briefcase, Award, CheckCircle, ShieldCheck } from 'lucide-react';

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
    <div className="mt-20 pt-16 border-t border-surface-border">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-teal-deep uppercase">
          LEADERSHIP & VISION
        </span>
        <h3 className="text-3xl font-extrabold font-display text-navy-primary mt-1">
          Meet the Founder
        </h3>
        <p className="text-sm text-content-secondary mt-2">
          Bridging practical digital marketing operations with structured consent accountability.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-surface-border shadow-regtech p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Abstract Profile Card & Initials */}
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-surface-light border border-surface-border/70">
            {/* Elegant Abstract Monogram Avatar */}
            <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-navy-primary to-navy-secondary text-white flex items-center justify-center shadow-md border-2 border-teal-primary/30 mb-4">
              <span className="font-display font-extrabold text-3xl tracking-wider text-teal-light">
                SOR
              </span>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-teal-primary text-white shadow">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <h4 className="text-xl font-bold font-display text-navy-primary">
              Sulaiman Olatunji Raimi
            </h4>
            <span className="text-sm font-semibold text-teal-deep mt-0.5">
              Founder & Chief Executive
            </span>
            <span className="text-xs text-content-secondary mt-1">
              Middlesbrough, United Kingdom
            </span>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-5">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-teal-light text-teal-deep">
                Email Marketing
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-teal-light text-teal-deep">
                Customer Segmentation
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-teal-light text-teal-deep">
                Campaign Retention
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-teal-light text-teal-deep">
                CRM Architecture
              </span>
            </div>
          </div>

          {/* Founder Bio, Education & Responsibilities */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h5 className="text-base font-bold text-navy-primary mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-primary" />
                Background & Practical Experience
              </h5>
              <p className="text-sm text-content-primary leading-relaxed">
                Sulaiman Olatunji Raimi holds a Master of Science in Digital Marketing from Teesside University in the United Kingdom and a Higher National Diploma in Marketing from Ladoke Akintola University of Technology, Nigeria.
              </p>
              <p className="text-sm text-content-primary leading-relaxed mt-2.5">
                His professional experience includes email marketing, customer relationship management, customer segmentation, digital campaign development, marketing performance analysis and customer retention. Drawing on his practical marketing experience, he is developing SendProof to address the disconnect between consent records and everyday email marketing operations.
              </p>
            </div>

            {/* Qualifications Grid */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-content-secondary mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-primary" />
                Academic Qualifications
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qual) => (
                  <div key={qual.degree} className="p-3 rounded-lg bg-surface-light border border-surface-border text-xs">
                    <div className="font-semibold text-navy-primary">{qual.degree}</div>
                    <div className="text-content-secondary mt-0.5">{qual.institution}</div>
                    <div className="text-teal-deep font-medium mt-1">{qual.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience Grid */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-content-secondary mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-primary" />
                Relevant Professional Experience
              </h5>
              <div className="space-y-2.5">
                {experience.map((exp) => (
                  <div key={exp.company} className="p-3.5 rounded-lg bg-surface-light border border-surface-border text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-navy-primary text-sm">{exp.company}</span>
                      <span className="text-teal-deep font-semibold">{exp.period}</span>
                    </div>
                    <div className="text-content-primary font-medium mt-0.5">Role: {exp.role}</div>
                    <p className="text-content-secondary mt-1 leading-normal">
                      {exp.responsibilities}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Responsibilities */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-content-secondary mb-3">
                Key Responsibilities within SendProof
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {responsibilities.map((resp) => (
                  <div key={resp} className="flex items-center gap-1.5 text-content-primary">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
