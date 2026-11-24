export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-01",
    question: "What is SendProof?",
    answer: "SendProof is a proposed consent evidence and campaign assessment platform designed to help UK businesses understand and document the consent behind their email marketing campaigns."
  },
  {
    id: "faq-02",
    question: "Is SendProof an email marketing platform?",
    answer: "No. SendProof is designed to work alongside existing email marketing tools as an independent evidence and decision-support layer. It does not send marketing emails or create campaigns."
  },
  {
    id: "faq-03",
    question: "What is the Consent Health Check?",
    answer: "The Consent Health Check is a standalone £495 assessment designed to analyse mailing list and consent exports, identify stale, unscoped and unverifiable consent, and provide findings by audience segment."
  },
  {
    id: "faq-04",
    question: "How does SendProof assess a marketing campaign?",
    answer: "The planned platform evaluates original consent wording, campaign scope, consent freshness, contradictory signals, subscriber type and applicable soft opt-in conditions using versioned rules and user-confirmed classifications."
  },
  {
    id: "faq-05",
    question: "What do Send, Hold and Re-permission mean?",
    answer: "Send indicates that the available evidence supports the planned campaign under the applied rules. Hold identifies evidence that does not currently support the campaign. Re-permission indicates that appropriate renewed consent should be established before proceeding. These recommendations are advisory."
  },
  {
    id: "faq-06",
    question: "Does SendProof automatically block marketing emails?",
    answer: "No. SendProof is designed as a read-only assessment platform. It provides recommendations and supporting evidence, but does not control or automatically block outgoing marketing campaigns."
  },
  {
    id: "faq-07",
    question: "Which email marketing platforms will SendProof support?",
    answer: "The proposed roadmap includes Mailchimp, Klaviyo, HubSpot, ActiveCampaign and Brevo, alongside website forms, checkout opt-ins, CSV imports and offline consent records. Integrations are planned for phased release."
  },
  {
    id: "faq-08",
    question: "Does SendProof store email message bodies?",
    answer: "The proposed platform uses relevant campaign metadata, original consent records and user-confirmed campaign classifications. It is designed to avoid storing email message bodies."
  },
  {
    id: "faq-09",
    question: "What is the difference between Starter and Growth?",
    answer: "Starter costs £149 per month and supports one sending account, up to 10,000 active subscribers and one email platform connector. Growth costs £399 per month and supports one sending account, up to 75,000 active subscribers, several connectors, automatic scope-drift alerts and applicable on-demand evidence exports."
  },
  {
    id: "faq-10",
    question: "Is SendProof suitable for marketing agencies?",
    answer: "Yes. The planned Agency licence costs £1,200 per month and supports up to ten connected client accounts, multi-client monitoring, separate client views and co-branded evidence packs."
  },
  {
    id: "faq-11",
    question: "What is included in an evidence pack?",
    answer: "Evidence packs are designed to include consent history, original wording, source information, timestamps, form versions, associated campaign history, assessment results, applied rule versions, withdrawal records and integrity information."
  },
  {
    id: "faq-12",
    question: "Does SendProof guarantee PECR or UK GDPR compliance?",
    answer: "No. SendProof provides evidence and decision support. It does not offer legal advice, certify regulatory compliance or remove the customer's responsibility for its marketing activities."
  },
  {
    id: "faq-13",
    question: "Can privacy consultants use SendProof?",
    answer: "Yes. Outsourced DPOs and privacy consultancies can refer clients for Consent Health Checks and recommend SendProof as a supporting evidence layer between periodic audits."
  },
  {
    id: "faq-14",
    question: "Is SendProof currently available?",
    answer: "SendProof is at the design-complete stage, with development and commercial releases planned in phases. Interested businesses and agencies can register their interest in the proposed pilot programme."
  },
  {
    id: "faq-15",
    question: "Are the displayed prices inclusive of VAT?",
    answer: "No. All displayed prices exclude VAT. The proposed subscription tiers are billed monthly in advance with 30 days' notice for cancellation."
  },
  {
    id: "faq-16",
    question: "How can my business register pilot interest?",
    answer: "Use the Request a Pilot form to record your contact and organisation details. In this frontend-only website preview, your details are saved locally within your browser and are not transmitted to SendProof."
  }
];
