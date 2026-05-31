# Makuri MCP — Discovery & Invocation Checklist

How to make tool invocation as reliable as it can be. Reality first: on every host
(ChatGPT, Claude) invocation is **model-driven and probabilistic** — there is no metadata
that forces a tool call for arbitrary phrasings. The levers below raise the hit-rate and
make a small set of prompts near-deterministic.

## The one near-deterministic lever
**Name the app at the START of the prompt.** In ChatGPT, naming the app at the beginning
auto-surfaces it; in Claude, explicitly naming the connector ("use the Makuri connector to…")
makes it call. Build the demo around name-led prompts (see the DIRECT rows in the test set).

## Checklist

1. **Connector display name = exactly `Makuri`.**
   Name-led prompts only work if the connector is named "Makuri" wherever it's added
   (ChatGPT connector settings / Claude.ai connector settings). This is host-side config,
   not in the repo — verify it manually in each host.

2. **Multilingual triggers in tool descriptions.** ✅ done for `show_how_makuri_works`
   (EN/RU/UA/RO + "use regardless of language"). English-only descriptions are known to be
   ignored for non-English prompts (the model goes to web search instead). If routing for
   other tools matters, extend the same multilingual phrasing to the relevant `get_*` tools.

3. **One job per tool, action-oriented, no intent overlap.**
   Keep `get_platform_info` from competing with the widget for the same "what is Makuri"
   intent — it already defers to the widget; keep it that way.

4. **Reduce competition during demos.** Disable unrelated connectors; fewer candidate tools = higher hit-rate.

5. **Always test in a fresh / no-memory chat.** Existing ChatGPT memory of Makuri short-circuits
   routing and hides real behaviour. Use a temporary chat.

6. **Re-test Claude.ai rendering.** The earlier "Claude downloads the ui:// resource but doesn't
   mount the iframe" blocker is largely resolved on current hosts (mid-2026); MCP Apps now render
   in both Claude and ChatGPT. Known remaining edge case: Claude Cowork in 3rd-party inference
   mode ("3p" — gateway/Bedrock/Vertex/Foundry) does not render widgets. Verify on Claude.ai directly.

7. **Measure, don't guess.** Run `MCP_TRIGGER_TEST_SET.md` before and after every metadata change.
   If a change drops the INDIRECT hit-rate, revert it.

## Honest expectation
- A small set of **name-led** prompts → near-reliable.
- Natural-language prompts → improved hit-rate, never guaranteed.
- Plan demos around the reliable set; treat natural prompts as best-effort.

## References
- OpenAI Apps SDK — User Interaction: https://developers.openai.com/apps-sdk/concepts/user-interaction/
- OpenAI Apps SDK — Define tools / Optimize metadata: https://developers.openai.com/apps-sdk/plan/tools
- Claude connector debugging (name the connector; disable unrelated): https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
- MCP Apps spec (SEP-1865, 2026-01-26): https://github.com/modelcontextprotocol/ext-apps
