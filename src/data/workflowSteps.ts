export interface WorkflowStep {
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  details: string[];
  iconName: 'Plug' | 'Database' | 'Network' | 'ShieldCheck' | 'FileCheck';
}

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    badge: "CONNECT",
    title: "Connect Existing Systems",
    description: "Read consent events from website forms, checkout processes, email platforms, CSV files and other supported records.",
    details: [
      "Read-only connection",
      "Existing marketing systems remain unchanged",
      "Consent and campaign metadata collected"
    ],
    iconName: "Plug"
  },
  {
    stepNumber: "02",
    badge: "NORMALISE",
    title: "Standardise Consent Evidence",
    description: "Transform collected consent events into a consistent record containing the original wording, source, timestamp, capture method and form version.",
    details: [
      "Standardised consent record",
      "Original wording preserved",
      "SHA-256 fingerprint recorded"
    ],
    iconName: "Database"
  },
  {
    stepNumber: "03",
    badge: "TRACE",
    title: "Build the Consent Graph",
    description: "Connect each subscriber to the consent evidence supporting their inclusion in an audience segment and relevant marketing campaign.",
    details: [
      "Subscriber traceability",
      "Consent history",
      "Audience segment relationships",
      "Evidence fragility indicators"
    ],
    iconName: "Network"
  },
  {
    stepNumber: "04",
    badge: "TEST",
    title: "Assess the Planned Campaign",
    description: "Evaluate the proposed campaign against its supporting consent evidence using explainable, versioned assessment rules.",
    details: [
      "Scope-fit assessment",
      "Freshness assessment",
      "Contradiction detection",
      "Subscriber type check",
      "Applicable soft opt-in check"
    ],
    iconName: "ShieldCheck"
  },
  {
    stepNumber: "05",
    badge: "DECIDE & EXPORT",
    title: "Receive a Recommendation and Evidence",
    description: "Provide a Send, Hold or Re-permission recommendation with an explanation of the evidence and rules behind the result.",
    details: [
      "Advisory campaign recommendation",
      "Affected subscriber identification",
      "Applied rule explanation",
      "Timestamped evidence pack"
    ],
    iconName: "FileCheck"
  }
];
