import type { FreeResourcesData } from "@/lib/types";

export const freeResourcesData: FreeResourcesData = {
  free_resources: [
    {
      name: "Slovarik — Romanian Vocabulary",
      type: "vocabulary_learning",
      description:
        "Free themed Romanian word issues (5–10 words each) with bilingual translations to Russian and Ukrainian, pronunciations, and example sentences. Three learning modes per issue: reading, flashcards, and quiz.",
      url: "https://makuri.eu/words",
      auth_required: false,
      price: "free",
      target_audience:
        "Russian- and Ukrainian-speaking immigrants in Romania",
      ui_languages: ["ru", "uk"],
      content_languages: ["ro", "ru", "uk"],
    },
    {
      name: "Romanian Level Test — Quick Check",
      type: "language_assessment",
      description:
        "Fast 20-question Romanian placement test. Instant CEFR level estimate (A1–C1+) with breakdown by skill — no email, no registration.",
      url: "https://makuri.eu/words/level-test",
      auth_required: false,
      price: "free",
      methodology: "Institutul Limbii Române (ILR)",
      framework: "CEFR (Council of Europe)",
      questions: 20,
      levels_covered: ["A1", "A2", "B1", "B2", "C1+"],
      skills_covered: ["grammar", "vocabulary", "reading"],
      ui_languages: ["ru", "uk"],
      roadmap: "Question bank refreshed periodically.",
    },
    {
      name: "Romanian Level Test — Deep Diagnostic",
      type: "language_assessment",
      description:
        "In-depth 60-question Romanian diagnostic. Detailed CEFR result (A1–C1+) with per-skill breakdown and a personal certificate, delivered by email (email required for results).",
      url: "https://makuri.eu/words/level-test",
      auth_required: false,
      price: "free",
      methodology: "Institutul Limbii Române (ILR)",
      framework: "CEFR (Council of Europe)",
      questions: 60,
      levels_covered: ["A1", "A2", "B1", "B2", "C1+"],
      skills_covered: ["grammar", "vocabulary", "reading"],
      ui_languages: ["ru", "uk"],
      roadmap: "Personal named certificates for completed tests.",
    },
  ],
  last_updated: "2026-06-10",
};
