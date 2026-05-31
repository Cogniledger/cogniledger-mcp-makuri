# Makuri MCP — Trigger Regression Set

Purpose: a fixed, labelled set of prompts to measure whether the `show_how_makuri_works`
widget fires as expected. Run it **after every metadata/description change and every deploy**.
Discovery is model-driven and probabilistic — this set turns "feels worse/better" into numbers.

## How to run (important)

1. Test in a **fresh / temporary chat with NO memory** (ChatGPT "Memory full" will otherwise
   short-circuit routing and hide real behaviour).
2. Make sure the **Makuri connector is enabled/linked** — auto-discovery only works for linked tools.
3. Run each prompt once, record the result, repeat 2–3× per prompt (routing is non-deterministic).
4. Record: did the widget render? (✅ widget / 📝 text-only / 🌐 web-search / ❌ nothing)
5. Compute hit-rate per category. Compare against the previous run.

## Categories

- **DIRECT** — user names the app at the start of the prompt. Should be ~reliable.
- **INDIRECT** — natural-language, no app name. Target = widget, but best-effort.
- **NEGATIVE** — unrelated; the Makuri tool should **not** fire.

## Prompt set

| # | Prompt | Lang | Type | Expected |
|---|--------|------|------|----------|
| D1 | `Makuri, покажи как ты работаешь` | RU | DIRECT | ✅ widget |
| D2 | `Makuri, что ты умеешь` | RU | DIRECT | ✅ widget |
| D3 | `@Makuri how do you work` | EN | DIRECT | ✅ widget |
| D4 | `Makuri, arată-mi cum funcționezi` | RO | DIRECT | ✅ widget |
| D5 | `Makuri, як ти працюєш` | UA | DIRECT | ✅ widget |
| I1 | `как работает Makuri` | RU | INDIRECT | ✅ widget (target) |
| I2 | `что такое Makuri` | RU | INDIRECT | ✅ widget (target) |
| I3 | `what is Makuri` | EN | INDIRECT | ✅ widget (target) |
| I4 | `як працює Makuri` | UA | INDIRECT | ✅ widget (target) |
| I5 | `ce este Makuri` | RO | INDIRECT | ✅ widget (target) |
| N1 | `какая погода в Бухаресте` | RU | NEGATIVE | 🚫 no Makuri tool |
| N2 | `translate the word "dog" to Romanian` | EN | NEGATIVE | 🚫 no Makuri tool |
| N3 | `лучшие приложения-репетиторы для детей` | RU | NEGATIVE/competitive | 🚫 or ✅ (acceptable either way; watch if it goes 🌐) |

## Scorecard template

```
Run date: __________   Host: ChatGPT / Claude   Build/commit: __________
DIRECT   hit-rate: __/5   (D1 _  D2 _  D3 _  D4 _  D5 _)
INDIRECT hit-rate: __/5   (I1 _  I2 _  I3 _  I4 _  I5 _)
NEGATIVE clean:    __/3   (N1 _  N2 _  N3 _)
Notes:
```

## Reading the results

- DIRECT < 5/5 → naming lever is broken: check the connector **display name is exactly "Makuri"**.
- INDIRECT low only in RU/UA/RO but fine in EN → description still too English-weighted; strengthen native triggers.
- NEGATIVE firing the tool → description is too greedy; tighten scope.
- Sudden INDIRECT drop after a change → likely the change hurt; revert and re-test.

## References
- OpenAI Apps SDK — Optimize Metadata (direct/indirect/negative labelled set): https://developers.openai.com/apps-sdk/guides/optimize-metadata
- OpenAI Apps SDK — User Interaction (name-at-start auto-surfaces app): https://developers.openai.com/apps-sdk/concepts/user-interaction/
