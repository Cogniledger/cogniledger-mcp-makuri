#!/usr/bin/env node
// Smoke test for the CogniLedger MCP server.
//
// Usage:
//   node scripts/test-client.mjs [server-url]
//
// Default server URL: http://localhost:3000/mcp
//
// Exits 0 if all 8 tools respond without an MCP error; 1 otherwise.

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const SERVER_URL = process.argv[2] ?? "http://localhost:3000/mcp";

const EXPECTED_TOOLS = [
  { name: "get_platform_info", args: {} },
  { name: "get_supported_languages", args: {} },
  { name: "get_supported_languages", args: { locale: "ro" } },
  { name: "get_subjects", args: {} },
  { name: "get_pricing_tiers", args: {} },
  { name: "get_safety_features", args: {} },
  { name: "get_compliance_matrix", args: {} },
  { name: "get_compliance_matrix", args: { regulation: "eu_ai_act" } },
  { name: "get_tech_stack", args: {} },
  { name: "get_contact_info", args: {} },
  { name: "get_contact_info", args: { purpose: "compliance" } },
];

function fmt(ms) {
  return `${ms.toString().padStart(4, " ")}ms`;
}

async function main() {
  console.log(`[smoke] connecting to ${SERVER_URL}`);
  const transport = new StreamableHTTPClientTransport(new URL(SERVER_URL));
  const client = new Client(
    { name: "cogniledger-smoke-test", version: "0.1.0" },
    { capabilities: {} },
  );

  try {
    await client.connect(transport);
  } catch (err) {
    console.error(`[smoke] FAILED to connect: ${err?.message ?? err}`);
    process.exit(1);
  }

  // 1. List tools
  let listed;
  try {
    listed = await client.listTools();
  } catch (err) {
    console.error(`[smoke] tools/list FAILED: ${err?.message ?? err}`);
    await client.close();
    process.exit(1);
  }

  const advertisedNames = new Set((listed.tools ?? []).map((t) => t.name));
  console.log(`[smoke] server advertises ${advertisedNames.size} tool(s):`);
  for (const t of listed.tools ?? []) {
    console.log(`        - ${t.name}`);
  }

  const expectedUnique = new Set(EXPECTED_TOOLS.map((t) => t.name));
  const missing = [...expectedUnique].filter((n) => !advertisedNames.has(n));
  if (missing.length > 0) {
    console.error(`[smoke] MISSING tools: ${missing.join(", ")}`);
    await client.close();
    process.exit(1);
  }

  // 2. Call each tool variant
  let failures = 0;
  for (const { name, args } of EXPECTED_TOOLS) {
    const argsLabel = Object.keys(args).length === 0 ? "{}" : JSON.stringify(args);
    const t0 = Date.now();
    try {
      const result = await client.callTool({ name, arguments: args });
      const dt = Date.now() - t0;
      if (result.isError) {
        console.error(`[smoke] FAIL ${fmt(dt)} ${name} ${argsLabel} -> isError`);
        failures += 1;
        continue;
      }
      const firstText =
        Array.isArray(result.content) && result.content[0]?.type === "text"
          ? result.content[0].text
          : "";
      // Sanity-parse: every tool must return JSON in the text block.
      try {
        JSON.parse(firstText);
      } catch {
        console.error(
          `[smoke] FAIL ${fmt(dt)} ${name} ${argsLabel} -> non-JSON response`,
        );
        failures += 1;
        continue;
      }
      console.log(`[smoke]  OK  ${fmt(dt)} ${name} ${argsLabel}`);
    } catch (err) {
      const dt = Date.now() - t0;
      console.error(
        `[smoke] FAIL ${fmt(dt)} ${name} ${argsLabel} -> ${err?.message ?? err}`,
      );
      failures += 1;
    }
  }

  await client.close();

  if (failures > 0) {
    console.error(`\n[smoke] ${failures} failure(s).`);
    process.exit(1);
  }
  console.log(`\n[smoke] all ${EXPECTED_TOOLS.length} calls succeeded.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(`[smoke] unexpected error: ${err?.stack ?? err}`);
  process.exit(1);
});
