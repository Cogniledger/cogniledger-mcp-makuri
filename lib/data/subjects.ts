import type { SubjectsData } from "@/lib/types";

export const subjectsData: SubjectsData = {
  approach: "textbook-agnostic",
  description:
    "Makuri works with any textbook from any subject. Students upload the textbook as a PDF and select a page range, or photograph a single page. The platform does not maintain a predefined subject list — it adapts to the student's actual classroom materials.",
  content_variation_note:
    "A single textbook typically contains both theory and practice. The ten action buttons cover both cases: some are best suited to theoretical material (Explain, Analyze, Socratic, Explore), others to practical exercises (Solve for mathematics and physics problems, Grammar for linguistic exercises, Exercises for generating new practice, Test for self-assessment). Students choose the right button for what they need at the moment.",
  grade_levels_covered: [
    "gimnaziu (grades 5–8) — Romanian gymnasium",
    "liceu (grades 9–12) — Romanian lyceum (high school equivalent)",
  ],
  target_age_range: "10–16",
  two_learning_modes: {
    mode_selection:
      "The student manually chooses between Fast mode and Deep mode for each task. Mode choice is always under the student's explicit control.",
    fast_mode:
      "Quick responses optimized for speed — suited for homework help, quick translations, and time-sensitive tasks",
    deep_mode:
      "Thorough, detailed responses using advanced AI models — suited for studying complex topics, exam preparation, and deep understanding",
    auto_mode: {
      description:
        "An optional system feature that automatically upgrades a task from Fast to Deep mode based on accumulated data about the student's progress and difficulties. Auto mode does not replace manual selection — it only steps in when the system detects through learning history that a topic is challenging for this specific student.",
      note: "Auto mode triggers are based on real learning data (repeated weaknesses, unresolved struggles with a topic), not on activity metrics.",
    },
  },
  action_buttons: [
    {
      id: "explain",
      name: "Explain",
      description:
        "Clear, age-appropriate explanation of the material in the student's native language, with school-language terms preserved to build vocabulary",
    },
    {
      id: "translate",
      name: "Translate",
      description:
        "Structured bilingual translation of textbook content with term-by-term breakdown",
    },
    {
      id: "solve",
      name: "Solve",
      description:
        "Step-by-step solving of mathematics, physics, and similar problems, with educational guidance so the student learns the method",
    },
    {
      id: "test",
      name: "Test",
      description:
        "Quiz generation with seven question types (multiple choice, true/false, fill-in-the-blank, matching, ordering, short answer, open-ended); scoring 100% earns a reward image",
    },
    {
      id: "analyze",
      name: "Analyze",
      description:
        "Deep analysis of material with connections to broader concepts, real-world applications, and interdisciplinary links",
    },
    {
      id: "socratic",
      name: "Socratic",
      description:
        "A chat mode in which the AI asks the student questions and guides them toward understanding, instead of giving direct answers. The direction of inquiry is inverted: the AI leads, the student responds and thinks.",
    },
    {
      id: "grammar",
      name: "Grammar",
      description:
        "Solver for linguistic exercises: grammar rules, sentence structures, language patterns — the linguistic equivalent of Solve for mathematics",
    },
    {
      id: "exercises",
      name: "Exercises",
      description:
        "Generates interactive practice activities across seven formats (fill-in-the-gap, drag-and-drop, matching, categorization, sentence building, error correction, multiple choice). Fast mode generates 4 exercises per session; Deep mode generates 7.",
    },
    {
      id: "explore",
      name: "Explore",
      description:
        "Curious and fun facts related to the material — surprising connections, historical context, real-world stories",
    },
    {
      id: "document_translation",
      name: "Document Translation",
      description:
        "Complete, clean translation of any document (school notices, certificates, medical forms, official letters) without educational commentary — for immigrant families navigating everyday paperwork in a new country",
    },
  ],
  upload_limits: {
    pdf_page_range_per_request: 5,
    pdf_note:
      "Students select a page range from an uploaded textbook PDF; a single request processes up to 5 pages at a time.",
    max_photos_per_upload: 10,
    photo_note:
      "Students may photograph up to 10 textbook pages in a single upload. One page per photo, not a two-page spread, with good lighting and no objects blocking the text.",
    focus_recommendation:
      "Upload only the pages actually needed for the task — every extra page dilutes AI focus and reduces answer quality",
  },
  pdf_workflow: {
    primary_method: true,
    description:
      "Students upload whole textbooks as PDF. The platform extracts text and indexes it using vector-based semantic search (RAG). Students then select a specific page range (up to 5 pages per request) and apply an action button.",
  },
  supporting_features: [
    {
      name: "Personal Glossary",
      description:
        "Every explanation automatically extracts key terms into a bilingual dictionary that grows with the student's study sessions",
    },
    {
      name: "Follow-Up Chat",
      description:
        "After any AI response, students can continue the conversation to ask follow-up questions without re-explaining context",
    },
    {
      name: "Adaptive Memory",
      description:
        "The AI remembers each student's strengths, weaknesses, and preferences, adapting its explanations over time",
    },
  ],
  last_updated: "2026-04-21",
};
