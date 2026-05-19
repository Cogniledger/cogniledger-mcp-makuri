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
      name: "Romanian Level Test",
      type: "language_assessment",
      description:
        "20-question Romanian language level test based on Institutul Limbii Române (ILR) methodology. Returns CEFR level (A1–C1+) with breakdown by skill (grammar, vocabulary, reading). Optional email submission for a personal study plan.",
      url: "https://makuri.eu/words/level-test",
      auth_required: false,
      price: "free",
      methodology: "Institutul Limbii Române (ILR)",
      framework: "CEFR (Council of Europe)",
      questions: 20,
      levels_covered: ["A1", "A2", "B1", "B2", "C1+"],
      skills_covered: ["grammar", "vocabulary", "reading"],
      ui_languages: ["ru", "uk"],
      roadmap:
        "Personal named certificates will be generated for completed tests (planned)",
    },
  ],
  last_updated: "2026-05-19",
};
