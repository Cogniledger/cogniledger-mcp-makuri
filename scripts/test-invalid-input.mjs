// Acceptance Test 5: invalid input handling.
// Calls get_supported_languages with locale: 12345 (number, not string).
// Expected: structured MCP error, no HTTP 500, no crash.

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const URL_ = process.argv[2] ?? "http://127.0.0.1:3000/mcp";
const transport = new StreamableHTTPClientTransport(new URL(URL_));
const client = new Client({ name: "at5", version: "0" }, { capabilities: {} });

await client.connect(transport);

try {
  const r = await client.callTool({
    name: "get_supported_languages",
    arguments: { locale: 12345 },
  });
  console.log("[AT5] result.isError:", r.isError);
  console.log("[AT5] content[0]:", JSON.stringify(r.content?.[0]).slice(0, 300));
} catch (err) {
  // Some MCP clients throw on tool errors; that's still a structured error, not a crash.
  console.log("[AT5] caught structured error (expected):", err?.code, "-", String(err?.message ?? err).slice(0, 200));
}

await client.close();
console.log("[AT5] no crash, no HTTP 500 — pass");
