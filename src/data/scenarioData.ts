export interface PracticalScenario {
  id: string;
  tabLabel: string;
  scenarioName: string;
  originalConsent: string;
  consentSource: string;
  formVersion: string;
  plannedCampaign: string;
  campaignType: string;
  targetSegment: string;
  recommendation: 'SEND' | 'HOLD' | 'RE-PERMISSION';
  recommendationBadgeClass: string;
  recommendationTextClass: string;
  explanation: string;
  evidenceFactors: {
    label: string;
    status: 'pass' | 'fail' | 'warn';
    detail: string;
  }[];
}

export const practicalScenarios: PracticalScenario[] = [
  {
    id: "product-newsletter",
    tabLabel: "Product Newsletter",
    scenarioName: "Scenario 1: Product Newsletter",
    originalConsent: "Receive news about our products and updates.",
    consentSource: "Website Footer Sign-Up Form",
    formVersion: "v2.1 (Timestamped)",
    plannedCampaign: "Newsletter about the company's existing products.",
    campaignType: "Own Similar Products / Company News",
    targetSegment: "Active Subscribers (Last 90 Days)",
    recommendation: "SEND",
    recommendationBadgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    recommendationTextClass: "text-emerald-700",
    explanation: "The campaign matches the stated product-news purpose, assuming other applicable evidence checks are satisfied.",
    evidenceFactors: [
      { label: "Scope Alignment", status: "pass", detail: "Campaign matches original product-news wording." },
      { label: "Consent Freshness", status: "pass", detail: "Active interaction within the last 90 days." },
      { label: "Contradiction Check", status: "pass", detail: "Zero conflicting unsubscribes or complaints recorded." }
    ]
  },
  {
    id: "partner-promotion",
    tabLabel: "Partner Promotion",
    scenarioName: "Scenario 2: Partner Promotion",
    originalConsent: "Receive news about our products and updates.",
    consentSource: "Checkout Opt-In Checkbox",
    formVersion: "v1.4 (Archived)",
    plannedCampaign: "Promotion of a third-party partner's products.",
    campaignType: "Third-Party Partner Offer",
    targetSegment: "Entire Customer List",
    recommendation: "HOLD",
    recommendationBadgeClass: "bg-red-50 text-red-700 border-red-200",
    recommendationTextClass: "text-red-700",
    explanation: "The original wording refers to the business's own products and does not establish permission for this partner offer.",
    evidenceFactors: [
      { label: "Scope Alignment", status: "fail", detail: "Third-party partner offer exceeds original own-product consent scope." },
      { label: "Third-Party Consent", status: "fail", detail: "No explicit opt-in for external commercial partners was captured." },
      { label: "Advisory Action", status: "fail", detail: "Remove this segment or replace campaign content before dispatch." }
    ]
  },
  {
    id: "win-back-campaign",
    tabLabel: "Win-back Campaign",
    scenarioName: "Scenario 3: Win-back Campaign",
    originalConsent: "Receive news and offers about our products.",
    consentSource: "Historical CSV Import",
    formVersion: "Legacy Form (Unversioned)",
    plannedCampaign: "Re-engagement campaign for dormant subscribers whose consent records are old and whose current preferences are uncertain.",
    campaignType: "Dormant Audience Re-engagement",
    targetSegment: "Inactive Subscribers (> 18 Months Inactive)",
    recommendation: "RE-PERMISSION",
    recommendationBadgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    recommendationTextClass: "text-amber-700",
    explanation: "The evidence requires review because its age and subsequent subscriber signals may no longer support the proposed campaign.",
    evidenceFactors: [
      { label: "Consent Freshness", status: "warn", detail: "Record age exceeds 18 months without intermediate engagement." },
      { label: "Fragility Indicator", status: "warn", detail: "Subsequent preference signals indicate high dormancy risk." },
      { label: "Advisory Action", status: "warn", detail: "Establish renewed consent where lawfully permissible before mass send." }
    ]
  }
];
