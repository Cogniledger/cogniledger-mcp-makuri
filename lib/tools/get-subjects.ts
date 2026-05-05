import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { subjectsData } from "@/lib/data/subjects";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_subjects";

const TOOL_DESCRIPTION =
  "Returns the list of academic subjects Makuri teaches, grouped by grade level, with information about exam preparation coverage. Use when the user asks what Makuri teaches or about specific subjects.";

const inputShape = {
  grade_level: z
    .string()
    .optional()
    .describe(
      "Optional grade-level filter (e.g. 'gimnaziu', 'liceu'). Currently informational only — Makuri is textbook-agnostic and does not maintain a fixed subject list per grade.",
    ),
};

export function registerSubjects(server: McpServer): void {
  server.tool(
    TOOL_NAME,
    TOOL_DESCRIPTION,
    inputShape,
    async (args: { grade_level?: string }) => {
      const startedAt = Date.now();
      try {
        const { grade_level } = args ?? {};

        const payload =
          grade_level === undefined
            ? subjectsData
            : { ...subjectsData, query: { grade_level } };

        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(payload, null, 2),
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
