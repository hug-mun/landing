# Site Copy — Review & Revision Notes

## Current state (as of 2026-04-24)

The site is intellectually strong, cohesive, and differentiated — but hard to parse quickly on first contact. It reads like a research manifesto rather than a clear entry point into one. The mythology is good but comes too early; visitors need to understand *what we do* before decoding the metaphor.

---

## Fixes to apply

### 1. Hero headline: clear before poetic

**Current:** "Thought & memory, carried back to Odin."

**Problem:** Asks visitors to decode metaphor before understanding function. A serious person landing here doesn't know what we do yet.

**New approach:** Lead with a literal statement, keep the poetic layer underneath.

**Applied headline:** "Building AI systems that maintain internal state."

**Subline:** "Current AI generates text but does not maintain stable internal state. We study how semantic representations and memory dynamics improve decision behavior."

**Poetic secondary (small, italic):** "Thought & memory, carried back."

**Caption act 0:** "We design and test representations that help AI systems make consistent decisions, not just produce plausible outputs."

---

### 2. Odin in pipeline — KEEP

Odin stays in the pipeline (Huginn → Muninn → Odin). It's earned context at that depth. Removed from the hero headline/captions where it was too early.

**Keep:** Pipeline labels with Odin name.
**Keep:** Three-layers section with "Odin · Belief & decision" eyebrow.
**Keep:** Scroll animation pixel Odin figure.
**Removed from:** Hero headline, first caption.

---

### 3. Simplify thesis entry point

**Current first line:**
> "Intelligent systems require interaction between semantic interpretation, structured memory dynamics, and belief-driven decision policies."

**Problem:** Dense. Most people bounce.

**Revised entry:**
> "Current AI systems generate text but do not maintain stable internal state. We study how to fix that."

Then expand into the full paragraph.

---

### 4. Tone down absolute claims

**Current:** "We believe the problem is representational, not one of scale."

**Revised:** "We believe a key limitation is representational, not only one of scale."

Small change, much more credible. Reviewers and researchers will respect the hedge.

---

### 5. Multi-agent paragraph: frame as hypothesis

**Current:** "Systems that distribute reasoning across independent processes without a shared evolving state fail to coordinate meaningfully."

**Problem:** We haven't proven this yet. This is a hypothesis, not a conclusion.

**Revised:** "We hypothesize that systems distributing reasoning across independent processes without shared evolving state struggle to coordinate effectively. Without structured belief that persists and updates across agents, multi-agent systems risk producing locally fluent but globally incoherent decisions."

---

### 6. Pipeline section: keep as-is

Huginn → Muninn → Odin (internally) / Semantic state → Context state → Belief & decision (externally)

This is one of the strongest parts. Clear, structured, visual. Do not over-explain.

**Note:** On the public site, the pipeline labels should use the computational names (Semantic state, Context state, Belief & decision). The Huginn/Muninn/Odin labels can appear as secondary/smaller text for those who know the mythology.

---

### 7. Muninn section: add plain-language anchor

Before the formula block, add:

> "Memory is modeled as an evolving internal state that changes with experience."

The formula stays — it builds credibility. But 80% of visitors won't parse it. The plain sentence gives them the concept.

---

### 8. Odin/Belief section: add concrete line

**Current:** "Belief provides commitment, uncertainty, and decision relevance."

**Add after:** "Belief determines which actions the system considers valid."

This grounds the abstract concept.

---

### 9. Gentags results: add context

**Current:** "improve agreement with full-evidence decisions to 79.5%"

**Revised:** "improve agreement with full-evidence decisions to 79.5% in controlled decision tasks"

Prevents the number from feeling cherry-picked.

---

### 10. Add one ultra-simple "what we do" sentence

Place near the top of the page (hero or immediately after):

> "We build systems that help AI make consistent decisions, not just generate text."

This anchors everything. A visitor who reads only this sentence should understand the lab.

---

## What we got right (keep these)

- Not a generic AI lab
- Clear thesis with layered architecture thinking
- Avoided GenAI buzzwords ("unlock", "empower", "game-changing")
- Shows research progression (representation → dynamics → integration)
- Honest about scope ("ambitious but not unrealistic", "each layer must produce measurable differences")
- Pixel art + literary aesthetic is distinctive

---

## Revised hero captions (scroll acts)

0. "We build AI systems that maintain stable internal state for reliable decision-making."
1. "Huginn — thought — structures raw language into discrete semantic units."
2. "Muninn — memory — weaves experience into an evolving context that shapes retrieval and prediction."
3. "Together, they form belief. A structured internal position from which decisions follow."

---

## Revised thesis section opening

> **Current AI systems generate text but do not maintain stable internal state.** We study how to fix that.
>
> Most modern AI systems operate as next-token predictors. They produce fluent outputs, but they do not reliably maintain stable internal states, explicit commitments, traceable uncertainty, or consistent decision criteria. The result: they are weak at multi-step reasoning, decision consistency, evidence accumulation, and adaptive planning. Without structured internal states, these systems also resist controllability — there is no stable lever to adjust, verify, or constrain their behavior.
>
> We believe a key limitation is representational, not only one of scale. [...]
>
> We hypothesize that systems distributing reasoning across independent processes without shared evolving state struggle to coordinate effectively. [...]
