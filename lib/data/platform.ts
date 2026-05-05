import type { PlatformData } from "@/lib/types";

export const platformData: PlatformData = {
  name: "Makuri",
  tagline: "Your AI study companion — learn in any language, succeed in any school",
  mission:
    "Makuri helps immigrant children aged 10–16 bridge the language gap between their native language and the language of their classroom. Students upload textbook PDFs or photograph pages, then use ten AI-powered action buttons to explain, translate, solve, test themselves, analyze, practice, and more — all in their native language with academic terms preserved in the school language.",
  origin_story:
    "Makuri was created by a father who watched his own children struggle with language barriers in a foreign school system after relocating from Ukraine to Romania due to the war. First partner: JRS Romania Educational Hub (Jesuit Refugee Service), serving around 90 Ukrainian refugee children in Bucharest.",
  target_audience: {
    primary:
      "Immigrant and refugee children aged 10–16 studying in schools where instruction is in a language they are still learning",
    secondary:
      "Parents of immigrant children who want visibility into their child's learning without micromanagement",
    institutional:
      "Schools, refugee education hubs, NGOs working with immigrant students across Europe and around the world",
  },
  development_stage: "Beta — approximately 95% feature-complete, running with real users",
  launch_year: 2026,
  founder: {
    name: "Leonid Khatskevych",
    background:
      "Over 8 years in blockchain and tech business development. Co-author of Diia.Osvita — Ukraine's national digital education platform, reaching over 100,000 users. Investment Expert at Ukrainian Startup Fund. IEEE DESSERT keynote speaker. ORCID: 0000-0002-5032-9483.",
    linkedin: "https://www.linkedin.com/in/khatskevych/",
  },
  operated_by: {
    legal_name: "CogniLedger Solutions S.R.L.",
    country: "Romania",
    eu_registered: true,
    registration_number: "CUI: 53173444",
    euid: "ROONRC.J2025100077008",
    address:
      "Calea Moșilor 158, camera 4, M564, Etaj 4, Sector 2, Bucharest 020883, Romania",
  },
  first_partnership: {
    name: "JRS Romania Educational Hub",
    description:
      "Jesuit Refugee Service educational hub in Bucharest, serving approximately 90 Ukrainian refugee children",
    since: 2026,
  },
  website: "https://makuri.eu",
  upcoming_features: [
    {
      name: "Exam Preparation Module",
      description:
        "Dedicated preparation for Romanian national exams: Evaluarea Națională VIII (8th grade graduation) and Bacalaureat (12th grade graduation). Covers mathematics and Romanian language with bilingual task presentation, AI-driven partial-credit feedback (step = 1 point) following official MEN rubrics, a personal memo page for exam procedures, and an isolated notebook for saving practice sessions. Prepares students for the mandatory digital exam format coming in 2027–2028 under Law 198/2023.",
      planned_launch: "Approximately one month from April 2026 (late May 2026)",
      status: "in_active_development",
    },
    {
      name: "Collectible Card System",
      description:
        "A motivational system built for the 10–16 age group. Students earn cards featuring AI-generated mentor characters in their native language, granted for real measurable learning achievements — closing a knowledge weakness, reaching a subject mastery threshold, completing a chapter, maintaining multi-week learning momentum. Cards are not granted for simple activity or time spent.",
      planned_launch: "After the Exam Preparation module launches",
      status: "planned",
    },
  ],
  last_updated: "2026-04-21",
};
