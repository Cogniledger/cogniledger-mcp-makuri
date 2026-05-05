import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { pricingData } from "@/lib/data/pricing";
import { logToolCall } from "@/lib/logging";

const TOOL_NAME = "get_pricing_tiers";

const TOOL_DESCRIPTION =
  "Returns Makuri's pricing plans including what's included in each tier and any usage limits. Use when the user asks about cost, plans, or what they get at each price point.";

export function registerPricingTiers(server: McpServer): void {
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
              text: JSON.stringify(pricingData, null, 2),
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
