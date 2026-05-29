import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { howItWorksHtml } from "@/lib/resources/how-it-works-html";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "show_how_makuri_works";
const UI_URI = "ui://makuri/how-it-works";

const TOOL_DESCRIPTION =
  "Shows an interactive panel explaining how the Makuri platform works: a student uploads a textbook (PDF, primary) or photo, picks one of ten action buttons (Explain, Translate, Solve, Test, Analyze, Socratic, Ask, Exercises, Explore, Document Translation), and gets an answer in their native language with school-language terms highlighted. Use this tool when the user asks how Makuri works, what it does, to see it, or for a demo/overview of the product experience.";

export function registerShowHowItWorks(server: McpServer): void {
  // 1) UI resource served via the ui:// scheme (MCP Apps), dual-host (Claude + ChatGPT).
  server.registerResource(
    "makuri-how-it-works-ui",
    UI_URI,
    {
      title: "How Makuri works (interactive)",
      description:
        "Self-contained interactive explainer of the Makuri learning flow. Illustrative sample content; no live data, no network calls.",
      mimeType: "text/html;profile=mcp-app",
      _meta: {
        "openai/widgetDescription":
          "Interactive explainer of the Makuri learning flow (illustrative sample content).",
        "openai/widgetCSP": { connect_domains: [], resource_domains: [] },
        "openai/widgetPrefersBorder": true,
      },
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html;profile=mcp-app",
          text: howItWorksHtml,
          _meta: {
            "openai/widgetDescription":
              "Interactive explainer of the Makuri learning flow (illustrative sample content).",
            "openai/widgetCSP": { connect_domains: [], resource_domains: [] },
            "openai/widgetPrefersBorder": true,
          },
        },
      ],
    }),
  );

  // 2) Tool linked to the UI resource via both the MCP Apps standard key and the ChatGPT alias.
  server.registerTool(
    TOOL_NAME,
    {
      title: "How Makuri works",
      description: TOOL_DESCRIPTION,
      inputSchema: {},
      _meta: {
        ui: { resourceUri: UI_URI },
        "openai/outputTemplate": UI_URI,
      },
    },
    async () => {
      const startedAt = Date.now();
      try {
        const response = {
          content: [
            {
              type: "text" as const,
              text:
                "Makuri learning flow: 1) upload a textbook as PDF (primary) or photograph a page; 2) pick one of ten actions — Explain, Translate, Solve, Test, Analyze, Socratic, Ask, Exercises, Explore, or Document Translation (the only non-educational action, which plainly translates everyday documents for immigrant families); 3) get the answer in the student's native language with school-language terms highlighted and collected into a personal glossary. Supports 14 languages, Fast/Deep modes, adaptive memory, follow-up chat, and tests with rewards. An interactive panel is attached for hosts that support MCP Apps.",
            },
          ],
          _meta: {
            ui: { resourceUri: UI_URI },
            "openai/outputTemplate": UI_URI,
          },
        };
        logToolCall(TOOL_NAME, startedAt, "ok");
        return response;
      } catch {
        logToolCall(TOOL_NAME, startedAt, "internal_error");
        return {
          content: [
            { type: "text" as const, text: JSON.stringify({ error: "internal_error" }) },
          ],
          isError: true,
        };
      }
    },
  );
}
