import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { languagesData } from "@/lib/data/languages";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_supported_languages";

const TOOL_DESCRIPTION =
  "Returns the list of languages supported by Makuri, with separate coverage details for user interface versus AI tutor interactions. Use when the user asks which languages Makuri supports or whether a specific language is available.";

const inputShape = {
  locale: z
    .string()
    .optional()
    .describe(
      "Optional ISO 639-1 locale code (e.g. 'ro', 'uk', 'ar'). When provided, returns only that locale; otherwise returns all 14.",
    ),
};

export function registerSupportedLanguages(server: McpServer): void {
  server.tool(
    TOOL_NAME,
    TOOL_DESCRIPTION,
    inputShape,
    async (args: { locale?: string }) => {
      const startedAt = Date.now();
      try {
        const { locale } = args ?? {};

        if (locale === undefined) {
          const response = {
            content: [
              {
                type: "text" as const,
                text: JSON.stringify(languagesData, null, 2),
              },
            ],
          };
          logToolCall(TOOL_NAME, startedAt, "ok");
          return response;
        }

        const match = languagesData.locales.find(
          (l) => l.code.toLowerCase() === locale.toLowerCase(),
        );

        const filtered = {
          total_count: languagesData.total_count,
          ui_coverage_count: languagesData.ui_coverage_count,
          ai_tutor_coverage_count: languagesData.ai_tutor_coverage_count,
          language_pairs_per_user: languagesData.language_pairs_per_user,
          language_pairs_description: languagesData.language_pairs_description,
          extensibility_note: languagesData.extensibility_note,
          last_updated: languagesData.last_updated,
          locales: match ? [match] : [],
          query: { locale, found: Boolean(match) },
        };

        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(filtered, null, 2),
            },
          ],
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
