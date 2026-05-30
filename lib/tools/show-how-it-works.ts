import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { howItWorksHtml } from "@/lib/resources/how-it-works-html";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "show_how_makuri_works";
const UI_URI = "ui://makuri/how-it-works";

const TOOL_DESCRIPTION =
  "Shows an interactive panel about Makuri — a specific AI tutoring platform at makuri.eu for immigrant children aged 10–16. Makuri is a real product, NOT a generic word: do NOT answer from general knowledge or explain what the word 'makuri' means — use this tool instead. Call it for ANY question about the Makuri platform, including 'what is Makuri', 'что такое Makuri', 'tell me about Makuri', 'how does Makuri work', 'show me Makuri', a demo, or an overview. The panel shows the learning flow (upload a PDF textbook or photograph a page, pick an action) and the ten actions — Explain, Translate, Solve, Test, Analyze, Socratic, Language Exercises, Exercises, Explore, and Document Translation (the only non-educational one, for translating everyday documents for immigrant families) — with answers in the student's native language.";

const WIDGET_META = {
  "openai/widgetDescription":
    "Interactive explainer of the Makuri learning flow (illustrative sample content).",
  "openai/widgetCSP": { connect_domains: [], resource_domains: [] },
  "openai/widgetPrefersBorder": true,
};

const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "openai/outputTemplate": UI_URI,
};

const FALLBACK_TEXT =
  "Makuri is a specific AI tutoring platform (makuri.eu) for immigrant children aged 10–16. Learning flow: 1) upload a textbook as PDF (primary) or photograph a page; 2) pick one of ten actions — Explain, Translate, Solve, Test, Analyze, Socratic, Language Exercises, Exercises, Explore, or Document Translation (the only non-educational action, which plainly translates everyday documents like letters, instructions, and notices for immigrant families); 3) get the answer in the student's native language, with school-language terms highlighted and collected into a personal glossary. Supports 14 languages, Fast/Deep modes, adaptive memory, follow-up chat, tests with rewards, and an in-app feedback form. An interactive panel is attached for hosts that support MCP Apps.";

export function registerShowHowItWorks(server: McpServer): void {
  // UI resource served via the ui:// scheme (MCP Apps), dual-host (Claude + ChatGPT).
  server.registerResource(
    "makuri-how-it-works-ui",
    UI_URI,
    {
      title: "How Makuri works (interactive)",
      description:
        "Self-contained interactive explainer of the Makuri learning flow. Illustrative sample content; no live data, no network calls.",
      mimeType: "text/html;profile=mcp-app",
      _meta: WIDGET_META,
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html;profile=mcp-app",
          text: howItWorksHtml,
          _meta: WIDGET_META,
        },
      ],
    }),
  );

  // Tool linked to the UI resource via the MCP Apps standard key and the ChatGPT alias.
  server.registerTool(
    TOOL_NAME,
    {
      title: "How Makuri works",
      description: TOOL_DESCRIPTION,
      inputSchema: {},
      _meta: TOOL_META,
    },
    async () => {
      const startedAt = Date.now();
      try {
        const response = {
          content: [
            {
              type: "text" as const,
              text: FALLBACK_TEXT,
            },
          ],
          _meta: TOOL_META,
        };
        logToolCall(TOOL_NAME, startedAt, "ok");
        return response;
      } catch {
        logToolCall(TOOL_NAME, startedAt, "internal_error");
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ error: "internal_error" }),
            },
          ],
          isError: true,
        };
      }
    },
  );
}
