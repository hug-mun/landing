/**
 * hug&mun labs — site content
 * ────────────────────────────
 * Single source of truth for all text on the landing page.
 * Synced with index.html as of 2026-04-26.
 */

const SITE = {

  // ── MISSION & VISION (first section, dark bg) ──
  mission_vision: {
    mission: {
      label: "Mission",
      statement: 'Advance how <span class="accent">representation</span> and <span class="accent">state</span> are used in AI systems to produce more reliable and controllable decisions.',
    },
    vision: {
      label: "Vision",
      statement: 'AI systems that make decisions from <span class="accent">explicit, updatable state</span> rather than implicit text representations.',
    },
    how_we_work: "We design and evaluate structured representations and intermediate state mechanisms to understand how they shape decision behavior. Our work starts with semantic state: making decision-relevant information explicit and addressable. From there, we study how such state can support revision, aggregation, and uncertainty, moving toward systems that can make decisions from consistent, belief-like representations over time.",
  },

  // ── HERO (scroll-scrubbed Odin animation) ──
  hero: {
    eyebrow: "hug&mun labs · ai research",
    headline: "AI systems that make consistent decisions.",
    subline: "AI systems today generate fluent text but do not maintain stable internal state. We study how structured representations and memory dynamics improve decision behavior.",
    captions: [
      'We design and test representations that help AI make <strong>consistent decisions</strong>, not just plausible outputs.',
      '<span class="huginn-mark">Huginn</span> — <strong>thought</strong> — structures raw language into discrete semantic units.',
      '<span class="muninn-mark">Muninn</span> — <strong>memory</strong> — weaves experience into an evolving context that shapes retrieval and prediction.',
      'Together, they form <strong>belief</strong>. A structured internal position from which decisions follow.',
    ],
    cta_primary: { label: "Read the thesis", href: "#about" },
    cta_secondary: { label: "Read the paper →", href: "papers/gentags-pre.pdf" },
  },

  // ── TAGLINE (between hero and core idea) ──
  tagline: "Experiments, research, and notes from the lab.",

  // ── CORE IDEA ──
  core_idea: {
    eyebrow: "Core idea",
    headline: "AI systems generate outputs from implicit context, but reliable decisions require explicit state.",
    lead: "We study whether making semantic representation, memory dynamics, and belief explicit improves:",
    items: [
      "Decision consistency",
      "Interpretability",
      "Controllability",
    ],
  },

  // ── PIPELINE (4-step) ──
  pipeline: {
    steps: [
      { number: "1", name: "Semantic state", description: "Structured meaning extracted from input", color: "huginn" },
      { number: "2", name: "Context state", description: "Evolving memory that shapes interpretation", color: "muninn" },
      { number: "3", name: "Belief state", description: "Uncertainty-bearing position used for decisions", color: "active" },
      { number: "4", name: "Decision", description: "Action or judgment based on belief", color: "default" },
    ],
  },

  // ── FIRST RESULT ──
  paper: {
    eyebrow: "First result",
    title: "Gentags",
    description: "A representation that compresses text into discrete semantic units.",
    result: "In controlled decision tasks, this improves agreement with full-evidence decisions and increases constraint satisfaction.",
    cta: { label: "Read the paper", href: "papers/gentags-pre.pdf" },
    meta: "ACL 2026 submission · Pre-print",
  },

  // ── WHAT WE'RE TESTING ──
  testing: {
    eyebrow: "What we're testing",
    items: [
      "Structured semantic state improves decision stability",
      "Explicit state improves multi-step reasoning",
      "Memory dynamics affect decision consistency",
    ],
  },

  // ── EXPLORATIONS ──
  explorations: {
    eyebrow: "Explorations",
    description: "We explore candidate models for how memory should evolve during inference.",
    lead: "This includes simplified structures that capture:",
    items: [
      "Recency",
      "Interference",
      "Context-dependent retrieval",
    ],
    caveat: "These are treated as testable approximations, not assumptions about how memory fundamentally works.",
  },

  // ── FOOTER ──
  footer: {
    tagline: "Thought and memory, structured into state for reliable decisions.",
    columns: [
      { title: "Research", items: ["Papers", "Notebooks", "Open models", "Datasets"] },
      { title: "Lab", items: ["About", "Team", "Careers", "Press"] },
    ],
    contact: {
      email: "hello@hugmun.ai",
      location: "Monterrey, NL, Mexico",
    },
  },
};

// Make available globally
window.SITE = SITE;
