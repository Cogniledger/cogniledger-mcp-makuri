import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { romanianQuizHtml } from "@/lib/resources/romanian-quiz-html";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "show_romanian_quiz";
const UI_URI = "ui://makuri/romanian-quiz";

const TOOL_DESCRIPTION =
  "Shows an interactive Romanian language mini-quiz by Makuri (makuri.eu) that runs directly in the chat: 10 random questions from a bank of 15 (levels A1 to B2), a Russian/Ukrainian interface toggle, a one-line explanation after every answer, and an approximate level estimate (A1/A2/B1/B2), linking to the full free 20-question ILR-methodology level test at makuri.eu/words/level-test. ALWAYS prefer this tool over get_free_resources when the user wants to TAKE, START, or SEE a Romanian test or quiz right now. Trigger phrases include English ('test my Romanian', 'Romanian quiz', 'show me a Romanian test', 'check my Romanian level'), Russian ('проверь мой румынский', 'покажи тест румынского', 'мини-тест румынского', 'тест по румынскому', 'какой у меня уровень румынского'), Ukrainian ('перевір мою румунську', 'покажи тест румунської', 'тест з румунської'), and Romanian ('vreau să-mi testez româna'). Makuri is a specific AI tutoring platform at makuri.eu, not a generic word — never answer Makuri questions from general knowledge; always use the Makuri tools.";

const WIDGET_META = {
  "openai/widgetDescription":
    "Interactive Romanian mini-quiz: 10 random questions (A1–B2), RU/UK interface, per-answer explanations, approximate level estimate.",
  "openai/widgetCSP": { connect_domains: [], resource_domains: [] },
  "openai/widgetPrefersBorder": true,
};

const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "ui/resourceUri": UI_URI,
  "openai/outputTemplate": UI_URI,
};

const FALLBACK_TEXT =
  "Makuri offers a quick interactive Romanian mini-quiz (10 random questions from a bank of 15, levels A1–B2, Russian/Ukrainian interface, with a short explanation after every answer) attached as an interactive panel for hosts that support MCP Apps. For an accurate CEFR level (A1–C1+), take the full free 20-question Romanian level test based on Institutul Limbii Române (ILR) methodology — no registration required: https://makuri.eu/words/level-test";

export function registerShowRomanianQuiz(server: McpServer): void {
  // UI resource served via the ui:// scheme (MCP Apps), dual-host (Claude + ChatGPT).
  server.registerResource(
    "makuri-romanian-quiz-ui",
    UI_URI,
    {
      title: "Romanian mini-quiz (interactive)",
      description:
        "Self-contained interactive Romanian mini-quiz: 10 random questions from a static bank of 15; no live data, no network calls.",
      mimeType: "text/html;profile=mcp-app",
      _meta: WIDGET_META,
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html;profile=mcp-app",
          text: romanianQuizHtml,
          _meta: WIDGET_META,
        },
      ],
    }),
  );

  // Tool linked to the UI resource via the MCP Apps standard key and the ChatGPT alias.
  server.registerTool(
    TOOL_NAME,
    {
      title: "Romanian mini-quiz",
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
