/**
 * hug&mun labs — site content
 * ────────────────────────────
 * Single source of truth for all translatable text.
 * Structure: SITE[lang] = { ... }   ·   lang ∈ {"en", "es"}
 * Hydrated into [data-i18n] elements at runtime by the inline script in index.html.
 */

const SITE = {

en: {

  meta: {
    title: "hug&mun semantic labs",
  },

  nav: {
    experiments: "Experiments",
    research: "Research",
    about: "About",
    media: "Media",
  },

  mv: {
    title: "Mission &amp; vision.",
    mission_label: "Mission",
    mission_statement: 'Advance how <span class="accent">representation</span> and <span class="accent">state</span> are used in AI systems to produce more reliable and controllable decisions.',
    vision_label: "Vision",
    vision_statement: 'AI systems that make decisions from <span class="accent">explicit, updatable state</span> rather than implicit text representations.',
    how_label: "How we work",
    how_body: "We design and evaluate structured representations and intermediate state mechanisms to understand how they shape decision behavior. Our work starts with <strong>semantic state</strong>: making decision-relevant information explicit and addressable. From there, we study how such state can support <strong>revision</strong>, <strong>aggregation</strong>, and <strong>uncertainty</strong>, moving toward systems that can make decisions from consistent, belief-like representations over time.",
  },

  hero: {
    eyebrow: "hug&amp;mun labs &middot; ai research",
    headline: "AI systems that make consistent decisions.",
    subline: "AI systems today generate fluent text but do not maintain stable internal state. We study how structured representations and memory dynamics improve decision behavior.",
    caption_0: 'We design and test representations that help AI make <strong>consistent decisions</strong>, not just plausible outputs.',
    caption_1: '<span class="huginn-mark">Huginn</span> — <strong>thought</strong> — structures raw language into discrete semantic units.',
    caption_2: '<span class="muninn-mark">Muninn</span> — <strong>memory</strong> — weaves experience into an evolving context that shapes retrieval and prediction.',
    caption_3: 'Together, they form <strong>belief</strong>. A structured internal position from which decisions follow.',
    cta_primary: "Read the thesis",
    cta_secondary: "Read the paper &rarr;",
  },

  tagline: "Experiments, research, and notes from the lab.",

  core: {
    eyebrow: "Core idea",
    headline: "AI systems generate outputs from implicit context, but reliable decisions require explicit state.",
    lead: "We study whether making semantic representation, memory dynamics, and belief explicit improves:",
    item_0: "Decision consistency",
    item_1: "Interpretability",
    item_2: "Controllability",
  },

  pipeline: {
    name_0: "Semantic state",
    desc_0: "Structured meaning extracted from input",
    name_1: "Context state",
    desc_1: "Evolving memory that shapes interpretation",
    name_2: "Belief state",
    desc_2: "Uncertainty-bearing position used for decisions",
    name_3: "Decision",
    desc_3: "Action or judgment based on belief",
  },

  paper: {
    eyebrow: "First result",
    description: "A representation that compresses text into discrete semantic units.",
    result: "In controlled decision tasks, this improves agreement with full-evidence decisions and increases constraint satisfaction.",
    cta: "Read the paper",
    meta: "ACL 2026 submission &middot; Pre-print",
  },

  testing: {
    eyebrow: "What we're testing",
    item_0: "Structured semantic state improves decision stability",
    item_1: "Explicit state improves multi-step reasoning",
    item_2: "Memory dynamics affect decision consistency",
  },

  explorations: {
    eyebrow: "Explorations",
    description: "We explore candidate models for how memory should evolve during inference.",
    lead: "This includes simplified structures that capture:",
    item_0: "Recency",
    item_1: "Interference",
    item_2: "Context-dependent retrieval",
    caveat: "These are treated as testable approximations, not assumptions about how memory fundamentally works.",
  },

  footer: {
    tagline: "Thought and memory, structured into state for reliable decisions.",
    research: "Research",
    papers: "Papers",
    lab: "Lab",
    about: "About",
    contact: "Contact",
    location: "Monterrey, NL, Mexico",
    privacy: "Privacy",
    terms: "Terms",
    rss: "RSS",
  },

},

es: {

  meta: {
    title: "hug&mun semantic labs",
  },

  nav: {
    experiments: "Experimentos",
    research: "Investigación",
    about: "Acerca de",
    media: "Multimedia",
  },

  mv: {
    title: "Misión y visión.",
    mission_label: "Misión",
    mission_statement: 'Avanzar cómo se usan la <span class="accent">representación</span> y el <span class="accent">estado</span> en sistemas de IA para producir decisiones más confiables y controlables.',
    vision_label: "Visión",
    vision_statement: 'Sistemas de IA que toman decisiones desde un <span class="accent">estado explícito y actualizable</span>, en lugar de representaciones implícitas en texto.',
    how_label: "Cómo trabajamos",
    how_body: "Diseñamos y evaluamos representaciones estructuradas y mecanismos de estado intermedio para entender cómo moldean el comportamiento de decisión. Nuestro trabajo parte del <strong>estado semántico</strong>: hacer la información relevante para la decisión explícita y direccionable. Desde ahí, estudiamos cómo ese estado puede sustentar la <strong>revisión</strong>, la <strong>agregación</strong> y la <strong>incertidumbre</strong>, avanzando hacia sistemas que pueden tomar decisiones desde representaciones consistentes, similares a creencias, a lo largo del tiempo.",
  },

  hero: {
    eyebrow: "hug&amp;mun labs &middot; investigación en ia",
    headline: "Sistemas de IA que toman decisiones consistentes.",
    subline: "Los sistemas de IA hoy generan texto fluido pero no mantienen un estado interno estable. Estudiamos cómo las representaciones estructuradas y la dinámica de memoria mejoran el comportamiento de decisión.",
    caption_0: 'Diseñamos y probamos representaciones que ayudan a la IA a tomar <strong>decisiones consistentes</strong>, no solo salidas plausibles.',
    caption_1: '<span class="huginn-mark">Huginn</span> — <strong>pensamiento</strong> — estructura el lenguaje crudo en unidades semánticas discretas.',
    caption_2: '<span class="muninn-mark">Muninn</span> — <strong>memoria</strong> — entreteje la experiencia en un contexto en evolución que moldea la recuperación y la predicción.',
    caption_3: 'Juntos forman la <strong>creencia</strong>. Una posición interna estructurada desde la cual se siguen las decisiones.',
    cta_primary: "Leer la tesis",
    cta_secondary: "Leer el artículo &rarr;",
  },

  tagline: "Experimentos, investigación y notas desde el laboratorio.",

  core: {
    eyebrow: "Idea central",
    headline: "Los sistemas de IA generan salidas a partir de contexto implícito, pero las decisiones confiables requieren estado explícito.",
    lead: "Estudiamos si hacer explícitas la representación semántica, la dinámica de memoria y la creencia mejora:",
    item_0: "Consistencia en las decisiones",
    item_1: "Interpretabilidad",
    item_2: "Controlabilidad",
  },

  pipeline: {
    name_0: "Estado semántico",
    desc_0: "Significado estructurado extraído de la entrada",
    name_1: "Estado de contexto",
    desc_1: "Memoria en evolución que moldea la interpretación",
    name_2: "Estado de creencia",
    desc_2: "Posición con incertidumbre usada para decidir",
    name_3: "Decisión",
    desc_3: "Acción o juicio basado en la creencia",
  },

  paper: {
    eyebrow: "Primer resultado",
    description: "Una representación que comprime texto en unidades semánticas discretas.",
    result: "En tareas controladas de decisión, mejora la concordancia con las decisiones de evidencia completa y aumenta la satisfacción de restricciones.",
    cta: "Leer el artículo",
    meta: "Envío a ACL 2026 &middot; Preprint",
  },

  testing: {
    eyebrow: "Lo que estamos probando",
    item_0: "El estado semántico estructurado mejora la estabilidad de las decisiones",
    item_1: "El estado explícito mejora el razonamiento de varios pasos",
    item_2: "La dinámica de memoria afecta la consistencia de las decisiones",
  },

  explorations: {
    eyebrow: "Exploraciones",
    description: "Exploramos modelos candidatos para cómo debería evolucionar la memoria durante la inferencia.",
    lead: "Esto incluye estructuras simplificadas que capturan:",
    item_0: "Recencia",
    item_1: "Interferencia",
    item_2: "Recuperación dependiente del contexto",
    caveat: "Se tratan como aproximaciones comprobables, no como suposiciones sobre cómo funciona la memoria fundamentalmente.",
  },

  footer: {
    tagline: "Pensamiento y memoria, estructurados en estado para decisiones confiables.",
    research: "Investigación",
    papers: "Artículos",
    lab: "Laboratorio",
    about: "Acerca de",
    contact: "Contacto",
    location: "Monterrey, NL, México",
    privacy: "Privacidad",
    terms: "Términos",
    rss: "RSS",
  },

},

};

window.SITE = SITE;
