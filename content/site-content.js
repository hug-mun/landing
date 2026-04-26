/**
 * hug&mun labs — site content
 * ────────────────────────────
 * Edit text here. The HTML structure pulls from this file.
 * Keep HTML markup minimal (bold, links, spans for color marks).
 */

const SITE = {

  // ── HERO (scroll-scrubbed) ──
  hero: {
    eyebrow: "hug&mun labs · ai research",
    headline: 'Building AI systems that maintain internal state.',
    subline: 'Current AI generates text but does not maintain stable internal state. We study how semantic representations and memory dynamics improve decision behavior.',
    poetic: 'Thought & memory, carried back.',
    captions: [
      'We design and test representations that help AI systems make <strong>consistent decisions</strong>, not just produce plausible outputs.',
      '<span class="huginn-mark">Huginn</span> — <strong>thought</strong> — structures raw language into discrete semantic units.',
      '<span class="muninn-mark">Muninn</span> — <strong>memory</strong> — weaves experience into an evolving context that shapes retrieval and prediction.',
      'Together, they form <strong>belief</strong>. A structured internal position from which decisions follow.',
    ],
    cta_primary: { label: "Read the thesis", href: "#about" },
    cta_secondary: { label: "Read the paper →", href: "papers/gentags-pre.pdf" },
  },

  // ── TAGLINE ──
  tagline: "Experiments, research, and notes from the lab.",

  // ── CORE THESIS ──
  thesis: {
    eyebrow: "Core thesis",
    headline: "AI systems generate outputs from implicit context, but reliable decisions require explicit state.",
    lead: "We study whether making semantic representation, memory dynamics, and belief explicit improves decision consistency, interpretability, and controllability.",
    paragraphs: [
      "Most modern AI systems operate as next-token predictors. They produce fluent outputs, but they do not reliably maintain stable internal states, explicit commitments, traceable uncertainty, or consistent decision criteria. The result: they are weak at multi-step reasoning, decision consistency, evidence accumulation, and adaptive planning. Without structured internal states, these systems also resist controllability — there is no stable lever to adjust, verify, or constrain their behavior.",
      "We believe a key limitation is representational, not only one of scale. LLMs represent meaning implicitly in high-dimensional activations\u2009—\u2009representations that are hard to update incrementally, cannot track uncertainty, and do not persist commitments over time. Decision systems require persistent structure, revisable commitments, and explicit conditions.",
      "We hypothesize that systems distributing reasoning across independent processes without shared evolving state struggle to coordinate effectively. Without structured belief that persists and updates across agents, multi-agent systems risk producing locally fluent but globally incoherent decisions. Coordination requires shared state, and shared state requires the kind of structured representation we study.",
    ],
  },

  // ── ARCHITECTURE PIPELINE ──
  pipeline: {
    steps: [
      { label: "Huginn", name: "Semantic state", variable: "S", color: "huginn" },
      { label: "Muninn", name: "Context state", variable: "C", color: "muninn" },
      { label: "Odin", name: "Belief & decision", variable: "B → π(B)", color: "active" },
    ],
    caption: "Current LLM pipelines collapse or skip these layers. We hypothesize that separating semantic interpretation, memory dynamics, and belief integration produces more reliable, interpretable decisions.",
  },

  // ── THREE LAYERS ──
  layers: {
    huginn: {
      eyebrow: "Huginn · Semantic interpretation",
      title: "How machines interpret meaning.",
      description: "Transforms language, perception, or data into structured semantic elements. Huginn extracts structured meaning from raw input\u2009—\u2009not embeddings, not token sequences, but discrete semantic units that isolate individual conditions from evidence.",
      note: "Our Gentags paper addresses this layer: a candidate implementation of Huginn.",
      icon: "logo-huginn.svg",
    },
    muninn: {
      eyebrow: "Muninn · Memory dynamics",
      title: "How machines accumulate experience.",
      description: "Muninn is not a database. Muninn is structured, evolving context. Grounded in Retrieved Context Models (Lohnas & Daw), we treat memory as a dynamic latent state\u2009—\u2009a context vector that drifts over time and is updated by experience.",
      description2: "RCM shows that context determines what is retrieved, what is weighted, and what is predicted. This produces recency effects, semantic clustering, and temporal structure\u2009—\u2009phenomena that demonstrate memory is structured, not passive.",
      formula: [
        "// Context evolution",
        "c_t = f(c_{t-1}, input_t)",
        "",
        "// Retrieval depends on context similarity",
        "P(recall) ∝ sim(c_current, c_stored)",
      ],
      comparison: {
        standard: {
          label: "Standard AI memory",
          items: ["Vector database", "Attention cache", "Document retrieval"],
        },
        rcm: {
          label: "RCM-inspired memory",
          items: ["Dynamic", "Stateful", "Context-sensitive", "Time-dependent"],
        },
      },
      icon: "logo-muninn.svg",
    },
    odin: {
      eyebrow: "Odin · Belief & decision",
      title: "How machines maintain internal position.",
      description: "Odin does not directly observe the world\u2009—\u2009he depends on internal representations. This is exactly the structure of model-based cognition. The Odin layer integrates semantic evidence (Huginn) with evolving context (Muninn) to form belief states and generate decision policies.",
      description2: "Belief is not identical to memory. Memory provides structure, recall bias, weighting, and temporal ordering. Belief provides commitment, uncertainty, and decision relevance. Concretely: belief determines which actions the system considers valid. The distinction matters.",
      icon: "odin-eye.svg",
    },
  },

  // ── FIRST PAPER ──
  paper: {
    eyebrow: "First paper · Huginn layer",
    title: "Gentags",
    lead: "Gentags are not the final contribution. They are a candidate semantic state representation\u2009—\u2009the first implementation of the Huginn layer\u2009—\u2009testing whether structured semantic units improve decision behavior.",
    description: "We introduce a representation that compresses source text into short, evidence-grounded semantic units\u2009—\u2009discrete, individually addressable units that fit within the context window of a downstream model. In controlled decision tasks, Gentags improve agreement with full-evidence decisions to 79.5% (vs. 52.3–61.6% for lexical baselines) and raise hard-constraint satisfaction to 97.3%.",
    next_step: "The next step: demonstrating context dynamics over multiple steps\u2009—\u2009the Muninn layer.",
    cta: { label: "Read the paper", href: "papers/gentags-pre.pdf" },
    meta: "ACL 2026 submission · Pre-print",
  },

  // ── HYPOTHESES ──
  hypotheses: {
    eyebrow: "Testable hypotheses",
    title: "What we're testing",
    items: [
      { id: "H1", text: "Structured semantic state improves decision stability." },
      { id: "H2", text: "Belief-state representations improve multi-step reasoning." },
      { id: "H3", text: "Explicit belief revision improves adaptability to new evidence." },
      { id: "H4", text: "Decision policies grounded in belief states are more consistent than token-level reasoning alone." },
    ],
  },

  // ── ANCHOR ──
  anchor: "We design and test representations that help AI systems make consistent decisions, not just produce plausible outputs.",

  // ── EXPLORATIONS ──
  explorations: {
    eyebrow: "Explorations",
    title: "Early research directions and hypotheses",
    cards: [
      {
        id: "memory-dynamics",
        label: "Memory dynamics",
        description: "We explore candidate models for how memory should evolve during inference. This includes simplified structures that capture recency, interference, and context-dependent retrieval. These are treated as testable approximations, not assumptions about how memory fundamentally works.",
        note: "One line of exploration considers whether stack-like dynamics can approximate recency and interference effects in decision systems.",
      },
    ],
  },

  // ── DUALITY ──
  duality: {
    left: {
      eyebrow: "What most research focuses on",
      title: "Better embeddings, larger models, better corpora, tool use, prompt engineering.",
      description: "Few programs focus explicitly on belief as a computational object. Most treat memory as retrieval, not as evolving context that shapes cognition.",
    },
    right: {
      eyebrow: "What hug&mun focuses on",
      title: "Cognitive architecture principles.",
      description: "Three layers\u2009—\u2009semantic representation, context dynamics, belief updating\u2009—\u2009explicitly integrated. Grounded in computational cognitive neuroscience, not just scaling.",
    },
  },

  // ── VISION ──
  vision: {
    eyebrow: "Long-term vision",
    title: "AI systems that do more than produce plausible text.",
    items: [
      "Track commitments",
      "Revise beliefs",
      "Justify decisions",
      "Adapt to evidence",
    ],
    honest: "This is an ambitious thesis but not unrealistic. It sits between machine learning, cognitive science, and decision theory. Our first paper addresses the semantic representation layer (Huginn). Future work addresses context dynamics (Muninn) and belief integration\u2009—\u2009each layer must produce measurable differences in behavior, or it remains metaphor.",
  },

  // ── FOOTER ──
  footer: {
    tagline: "Two ravens, one mind. An independent AI research lab building for the space between thought and memory.",
    columns: [
      { title: "Research", items: ["Papers", "Notebooks", "Open models", "Datasets"] },
      { title: "Lab", items: ["About", "Team", "Careers", "Press"] },
    ],
    contact: {
      email: "hello@hugmun.ai",
      location: "Monterrey, NL, Mexico",
    },
  },

  // ── SCATTER CARDS ──
  cards: [
    { title: "Gentags", sub: "Discrete semantic state", icon: "tags", gradient: "huginn" },
    { title: "Semantic compression", sub: "Meaning, not tokens", icon: "brain", gradient: "muninn" },
    { title: "hug&mun labs", sub: "Thought & memory", icon: null, gradient: "ink", logo: true },
    { title: "Decision pipelines", sub: "Constraint-sensitive LLM flows", icon: "git-branch", gradient: "ink-dark" },
    { title: "ACL 2026", sub: "Pre-print available", icon: "file-text", gradient: "huginn-dark" },
  ],
};

// Make available globally
window.SITE = SITE;
