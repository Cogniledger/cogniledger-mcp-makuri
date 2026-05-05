import type { ContactData } from "@/lib/types";

export const contactData: ContactData = {
  preferred_channel: "email",
  typical_response_time_business_days: 2,
  contacts: [
    {
      purpose: "partnership",
      email: "leonid@cogniledger.eu",
      description:
        "Business partnerships, institutional collaborations, grant partnerships, B2B inquiries",
    },
    {
      purpose: "press",
      email: "leonid@cogniledger.eu",
      description:
        "Media inquiries, interviews, speaking engagements, research collaboration",
    },
    {
      purpose: "compliance",
      email: "leonid@cogniledger.eu",
      description:
        "Data protection, GDPR subject requests, EU AI Act inquiries, regulatory correspondence",
    },
    {
      purpose: "support",
      email: "leonid@makuri.eu",
      description:
        "Platform support for Makuri users and parents. Typical response time is 1–2 business days.",
    },
    {
      purpose: "general",
      email: "leonid@makuri.eu",
      description: "General inquiries about Makuri that do not fit other categories",
    },
  ],
  operator: {
    legal_name: "CogniLedger Solutions S.R.L.",
    country: "Romania",
    jurisdiction: "EU",
    address:
      "Calea Moșilor 158, camera 4, M564, Etaj 4, Sector 2, Bucharest 020883, Romania",
    registration_number: "CUI: 53173444",
    euid: "ROONRC.J2025100077008",
  },
  product: {
    name: "Makuri",
    website: "https://makuri.eu",
  },
  last_updated: "2026-04-21",
};
