import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { safetyData } from "@/lib/data/safety";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_safety_features";

const TOOL_DESCRIPTION =
  "Returns information about safety features on Makuri, including age verification, content filtering, parental controls, and AI safety guardrails. Use when the user asks about child safety, content moderation, or how Makuri protects minors.";

export function registerSafetyFeatures(server: McpServer): void {
  server.tool(
    TOOL_NAME,
    TOOL_DESCRIPTION,
    {},
    async () => {
      const startedAt = Date.now();
      try {
        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(safetyData, null, 2),
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

export const _testing = { TOOL_NAME, TOOL_DESCRIPTION, schema: z.object({}) };
