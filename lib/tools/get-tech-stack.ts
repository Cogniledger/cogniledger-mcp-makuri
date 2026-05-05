import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { techStackData } from "@/lib/data/tech-stack";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_tech_stack";

const TOOL_DESCRIPTION =
  "Returns the technical stack Makuri is built on, including frontend, backend, database, AI providers used, and data residency information. Use when the user asks how Makuri is built or which AI models it uses.";

export function registerTechStack(server: McpServer): void {
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
              text: JSON.stringify(techStackData, null, 2),
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
