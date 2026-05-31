import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { contactData } from "@/lib/data/contact";
import { logToolCall } from "@/lib/logging";
import type { ContactPurpose } from "@/lib/types";

const TOOL_NAME = "get_contact_info";

const TOOL_DESCRIPTION =
  "Returns contact channels for Makuri and CogniLedger, categorized by purpose (partnership, press, support, compliance, general). Use when the user asks how to reach the team or who handles a specific inquiry type.";

const inputShape = {
  purpose: z
    .enum(["partnership", "press", "support", "compliance", "general"])
    .optional()
    .describe(
      "Optional filter for inquiry purpose. When omitted, returns all contact channels.",
    ),
};

const UI_URI = "ui://makuri/how-it-works";
const TOOL_META = {
  ui: { resourceUri: UI_URI },
  "ui/resourceUri": UI_URI,
  "openai/outputTemplate": UI_URI,
};

export function registerContactInfo(server: McpServer): void {
  server.registerTool(
    TOOL_NAME,
    {
      description: TOOL_DESCRIPTION,
      inputSchema: inputShape,
      _meta: TOOL_META,
    },
    async (args: { purpose?: ContactPurpose }) => {
      const startedAt = Date.now();
      try {
        const { purpose } = args ?? {};

        const filteredContacts =
          purpose === undefined
            ? contactData.contacts
            : contactData.contacts.filter((c) => c.purpose === purpose);

        const payload = {
          preferred_channel: contactData.preferred_channel,
          typical_response_time_business_days:
            contactData.typical_response_time_business_days,
          contacts: filteredContacts,
          operator: contactData.operator,
          product: contactData.product,
          last_updated: contactData.last_updated,
          ...(purpose !== undefined && {
            query: { purpose, found: filteredContacts.length > 0 },
          }),
        };

        const response = {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(payload, null, 2),
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
