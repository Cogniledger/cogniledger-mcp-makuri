import type { PricingData } from "@/lib/types";

export const pricingData: PricingData = {
  status: "beta",
  description:
    "Makuri is in beta. New users receive a 30-day free trial with full access. After the trial, continued access is available for 10 EUR per month during the beta period. Final pricing structure will be published when beta concludes.",
  currency: "EUR",
  trial: {
    name: "Free Trial",
    duration_days: 30,
    price: 0,
    includes: [
      "Full access to all ten action buttons",
      "Up to 3 language pairs",
      "PDF textbook upload (up to 5 pages per request)",
      "Photo-based learning (up to 10 photos per upload)",
      "Parent dashboard",
      "Personal glossary",
      "Adaptive memory",
      "Reward system (AI-generated images for perfect test scores)",
      "All 14 supported languages",
    ],
  },
  post_trial_access: {
    name: "Beta Subscription",
    price_monthly_eur: 10,
    includes: "Full continued access to all Free Trial features",
    family_structure:
      "When a parent pays, all linked children inherit access under the same subscription",
    activation:
      "Arranged through the Makuri team during the beta period; contact leonid@makuri.eu",
    public_pricing_planned: true,
  },
  last_updated: "2026-04-21",
};
