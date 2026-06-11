// Static markdown documents exposed via MCP resources/list and resources/read.
// All strings are template literals. The markdown content is deliberately
// free of backticks and ${ sequences so the template literals stay valid.

export const manifestoMd = `# An AI tutor for immigrant children — and for the country that takes them in

*An immigrant child stuck behind a language barrier is one problem. A country that fails to turn that child into a contributing citizen is another — of equal weight. Makuri is built for both.*

---

A twelve-year-old sits at a kitchen table in a country she moved to four months ago. In front of her is a science textbook. She can sound out the alphabet. She cannot read the chapter. The labelled diagram, the questions at the end, the instructions her teacher gave that morning — all of it is in a language she is still assembling word by word, while the rest of the class moves on without her.

Multiply that table by millions. That is the starting condition for a generation of immigrant children — in Europe, and far beyond it.

I came to this problem as someone who has moved his own family across a border, so the kitchen table is not an abstraction to me. But that is not why I kept building. I kept building because the problem turned out to be two problems, not one — and the second is as serious as the first.

## The first problem: the child

A language barrier in school is not a language problem. It is a trajectory problem.

A child who cannot follow the material does not simply earn lower marks for a year. She falls behind in every subject at once, because every subject is taught in a language she hasn't caught up to yet. Maths becomes hard not because the maths is hard, but because the word problem is unreadable. Confidence erodes. The gap compounds quietly, month after month, until catching up stops feeling possible.

The cost is rarely a single bad year. It is a narrowed life — fewer doors, lower ceilings, a sense early on that this system was not built for someone like her. That is an enormous amount of human potential left on the table, one child at a time.

## The second problem: the society that received her

Here is the part most conversations about immigrant education leave out, and it carries the same weight.

Every country that accepts an immigrant family has a direct stake in what happens to that child. Get it right, and the country gains an educated, integrated young adult — someone who works, contributes, pays in, and belongs. Get it wrong, and the same child is far more likely to end up on the margins: under-educated, under-employed, disconnected from the society around them.

This is not a charity argument. It is a self-interest argument. A host country investing in an immigrant child's education is not being generous — it is protecting its own future. The difference between a contributing citizen and a marginalized one is, to a meaningful degree, decided in those first few years behind a textbook she cannot read.

Two ends of one problem. The child's future and the society's future are the same bet, placed at the same kitchen table.

## Why the usual answers fall short

The instinct is to say: this is what schools are for. And it is — but schools are already stretched thin. A single teacher cannot deliver a lesson in the home languages of a classroom that might hold five or ten of them. Dedicated language classes help, but they are slow, and they teach the language rather than the biology, history, and maths the child is failing right now. Private tutoring works, but it is expensive and structurally out of reach for most immigrant families — the families who need it most are the least able to buy it.

The result is a gap that is real, structural, and largely unaddressed. The child is expected to absorb a new language and the full curriculum at the same time, mostly alone.

## Why AI is the right tool, now

For the first time, there is a tool that can do the one thing this problem actually requires: explain any subject, in the child's own language, instantly, cheaply, and at a scale no tutor or teacher could match.

This is what Makuri does. A student photographs a page of her textbook — or uploads a PDF — and gets it explained in the language she actually thinks in, along with translations and questions to check whether she understood. Not a watered-down version. The real material, made reachable.

It is deliberately not a replacement for school or for teachers. It is a bridge — something that carries the child across the months when the language barrier is highest, so she stays with the curriculum instead of falling out of it. By the time her new language catches up, she hasn't lost the year.

And because the need is the same everywhere — a Ukrainian child in Romania, a Syrian child in Germany, a Venezuelan child in Spain — the tool has to be language-agnostic from the start. The country changes; the problem doesn't.

## Both, or neither

I think the honest framing is this: you cannot solve the child's problem and the society's problem separately, because they are the same problem viewed from two sides.

A child given a real chance to learn becomes an adult the country is glad to have. A child left behind the language barrier becomes a cost that society pays for decades. The intervention is the same in both cases — give the child a way to actually understand what she is being taught, in the language she already has.

That is the case for Makuri, and it is the reason everything else exists. The rest — the architecture, the models, the compliance work — is in service of that one table, and the millions like it.
`;

export const safetyOverviewMd = `# Makuri — Child Safety by Design (Overview)

> This document describes design measures, not audited or certified compliance. No formal audit, conformity assessment, or certification has been performed. See the get_compliance_matrix tool for the full regulatory posture.

Makuri is an AI tutoring platform for immigrant children aged 10–16. Because its users are minors, safety is a design constraint, not a feature.

## Account model
- Children do not sign up alone: parent and child accounts are linked via an invitation token, supporting parental consent (Romania sets the age of digital consent at 16).
- Parents get a dashboard with activity, vocabulary growth, and test/exercise counts.

## Data minimization
- Only essential PII is collected.
- Uploaded textbook photos are processed in-memory and are not persisted to storage after processing.
- No advertising, no marketing profiling of minors, no behavioral tracking, no third-party analytics cookies.

## AI behavior controls
- All AI behavior (prompts, model routing, rate limits, content rules, language support) is stored in a database and configured through an admin panel — auditable and changeable without redeploying code.
- A layered prompt system enforces format rules, forbidden language, and serious handling of sensitive topics in every response.

## This MCP server
- Exposes only public product metadata. No user data — not even aggregated — is available through any endpoint, by design.

Questions or source documentation: leonid@cogniledger.eu
`;

export const connectGuideMd = `# Connect Makuri to your AI assistant

The CogniLedger MCP server exposes public Makuri metadata to any MCP-capable AI assistant.

- **Endpoint:** https://mcp.cogniledger.eu/mcp (streamable HTTP, no authentication)
- **Registry:** io.github.Cogniledger/cogniledger-mcp-makuri in the Official MCP Registry

## ChatGPT (developer mode)
Add a connector with the endpoint URL. Interactive panels (How Makuri works, Romanian mini-quiz) render inline.

## Claude (web / desktop)
Add the endpoint as a custom connector. All tools work; interactive panels are recognized but inline rendering for remote servers is pending an Anthropic client fix — text answers are returned meanwhile.

On Windows, Claude Desktop requires a stdio bridge:

    { "mcpServers": { "makuri": { "command": "npx", "args": ["-y", "mcp-remote", "https://mcp.cogniledger.eu/mcp"] } } }

## Mistral Le Chat
Settings → Connectors → Add custom MCP server → paste the endpoint URL.

## What you get
11 read-only tools (platform info, languages, subjects, pricing, safety, regulatory posture, tech stack, contacts, free resources, and two interactive panels), 3 markdown resources, and 2 guided prompts. No user data is exposed — by design.
`;
