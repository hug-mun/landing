function Screens({ screen, onNav }) {
  const papers = [
    { id: "017", track: "Memory", tone: "muninn", title: "On the persistence of memory in sparse models",
      summary: "We argue episodic memory, not parameter count, is the next axis of scale. Results across four benchmarks.",
      authors: "Borson, Skaldottir, Park", date: "Apr 2026" },
    { id: "016", track: "Reasoning", tone: "huginn", title: "Thinking out loud: reasoning traces as training signal",
      summary: "What if the chain-of-thought itself is the data? A modest proposal with embarrassing initial results.",
      authors: "Park, Lindqvist", date: "Mar 2026" },
    { id: "015", track: "Memory", tone: "muninn", title: "The Mimir protocol for shared long-term context",
      summary: "A shared memory store that lets agents pool episodic traces without leaking private facts.",
      authors: "Skaldottir, Okafor", date: "Mar 2026" },
    { id: "014", track: "Reasoning", tone: "huginn", title: "When Huginn is wrong: calibration studies",
      summary: "Most models are confident. Ours is, too. Here's what we did about it.",
      authors: "Okafor, Borson", date: "Feb 2026" },
    { id: "013", track: "Systems", tone: "cream", title: "Ravencraft: our inference stack, opened",
      summary: "The runtime that pairs thought and memory. Open-sourced under Apache 2.0.",
      authors: "Engineering", date: "Feb 2026" },
    { id: "012", track: "Memory", tone: "muninn", title: "Forgetting, on purpose",
      summary: "A theory of deliberate memory decay and why it may be safer than infinite recall.",
      authors: "Lindqvist", date: "Jan 2026" },
  ];

  if (screen === "home") return <HomeScreen papers={papers} onOpen={() => onNav("paper")} />;
  if (screen === "research") return <ResearchScreen papers={papers} onOpen={() => onNav("paper")} />;
  if (screen === "about") return <AboutScreen />;
  if (screen === "paper") return <PaperScreen />;
  return <HomeScreen papers={papers} onOpen={() => onNav("paper")} />;
}

function HomeScreen({ papers, onOpen }) {
  return (
    <div>
      <Hero />
      <ThoughtMemoryGrid />
      <section style={{ padding: "72px 48px" }}>
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: 32 }}>
          <div>
            <Eyebrow>Recent research</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600,
              color: "var(--ink-900)", margin: 0, letterSpacing: "-0.015em" }}>
              What the ravens brought back
            </h2>
          </div>
          <a style={{ marginLeft: "auto", color: "var(--muninn-700)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14 }}>
            All papers →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {papers.slice(0, 6).map(p => <ResearchCard key={p.id} paper={p} onOpen={onOpen} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ResearchScreen({ papers, onOpen }) {
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", label: "All" },
    { id: "Memory", label: "Memory" },
    { id: "Reasoning", label: "Reasoning" },
    { id: "Systems", label: "Systems" },
  ];
  const filtered = filter === "all" ? papers : papers.filter(p => p.track === filter);
  return (
    <div>
      <section style={{ padding: "72px 48px 32px" }}>
        <Eyebrow>Research library</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 600,
          letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 12px" }}>
          Papers, notebooks, and open tools.
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--fg-muted)",
          maxWidth: "56ch", margin: "0 0 32px" }}>
          Everything we publish, in one place. Sorted newest first.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              padding: "8px 14px", borderRadius: "var(--r-pill)",
              border: "1px solid " + (filter === f.id ? "var(--ink-900)" : "var(--border-strong)"),
              background: filter === f.id ? "var(--ink-900)" : "transparent",
              color: filter === f.id ? "var(--cream-50)" : "var(--ink-800)",
              cursor: "pointer",
            }}>{f.label}</button>
          ))}
        </div>
      </section>
      <section style={{ padding: "0 48px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {filtered.map(p => <ResearchCard key={p.id} paper={p} onOpen={onOpen} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function AboutScreen() {
  const team = [
    { name: "Odin Borson", role: "Thesis · founding", bird: "H" },
    { name: "Vala Skaldottir", role: "Memory systems", bird: "M" },
    { name: "Ji-won Park", role: "Reasoning research", bird: "H" },
    { name: "Adaeze Okafor", role: "Calibration & safety", bird: "H" },
    { name: "Mats Lindqvist", role: "Theory · cognition", bird: "M" },
    { name: "Pei Cheng", role: "Engineering lead", bird: "H" },
  ];
  return (
    <div>
      <section style={{ padding: "96px 48px 48px", maxWidth: 860, margin: "0 auto" }}>
        <Eyebrow>About the lab</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 600,
          letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--ink-900)",
          margin: "0 0 28px", textWrap: "balance" }}>
          Two ravens sat on Odin's shoulders. One thought. The other remembered.
        </h1>
        <p className="dropcap" style={{ fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.65,
          color: "var(--fg)", maxWidth: "60ch", margin: "0 0 20px" }}>
          Odin sent them out at dawn and worried, always, that one day they would not return.
          Huginn — thought — was the faster bird, but the more reckless. Muninn — memory —
          moved slower and weighed more. The myth says Odin feared losing Muninn most of all,
          because a god without memory is only a very loud opinion.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.65,
          color: "var(--fg-muted)", maxWidth: "60ch", margin: "0 0 20px" }}>
          We think about this a lot. Modern language models are, in many ways, brilliant
          instances of thought without memory: fast, articulate, starting from zero on
          every conversation. Useful, but lossy. We believe the next interesting problem
          is not a larger reasoning bird. It is the second raven.
        </p>
        <RuneDivider />
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.65,
          color: "var(--fg-muted)", maxWidth: "60ch" }}>
          Hug&Mun Labs is an independent research group based in Princeton and Seattle.
          We publish papers, open-source our tools, and occasionally ship products when
          a research idea wants to become a thing people use.
        </p>
      </section>

      <section style={{ padding: "48px 48px 96px", maxWidth: 860, margin: "0 auto" }}>
        <Eyebrow>The lab</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600,
          color: "var(--ink-900)", letterSpacing: "-0.015em", margin: "0 0 28px" }}>
          Six people, two birds.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {team.map(t => (
            <div key={t.name} style={{
              background: "var(--cream-50)", border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)", padding: "20px 22px",
              display: "flex", alignItems: "flex-start", gap: 14,
            }}>
              <img src={t.bird === "H" ? "../../assets/pixel-crow-huginn.svg" : "../../assets/pixel-crow-muninn.svg"}
                style={{ width: 36, height: 36, imageRendering: "pixelated", flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
                  color: "var(--ink-900)" }}>{t.name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)",
                  marginTop: 2, letterSpacing: ".02em" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function PaperScreen() {
  return (
    <div>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "72px 48px 64px" }}>
        <div style={{ marginBottom: 28, display: "flex", gap: 10, alignItems: "center" }}>
          <Badge tone="muninn">Memory</Badge>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-subtle)" }}>
            paper 017 · April 18, 2026
          </span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 600,
          letterSpacing: "-0.02em", lineHeight: 1.08, color: "var(--ink-900)",
          margin: "0 0 22px", textWrap: "balance" }}>
          On the persistence of memory in sparse models
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.55,
          color: "var(--fg-muted)", margin: "0 0 10px", fontStyle: "italic" }}>
          Borson, Skaldottir, Park · Hug&Mun Labs
        </p>
        <div style={{ display: "flex", gap: 14, fontFamily: "var(--font-sans)", fontSize: 13,
          color: "var(--fg-subtle)", marginBottom: 36, paddingBottom: 24,
          borderBottom: "1px solid var(--border)" }}>
          <span>12 min read</span>
          <span>·</span>
          <span>2,140 words</span>
          <span>·</span>
          <a style={{ color: "var(--muninn-700)" }}>Download PDF</a>
          <a style={{ color: "var(--muninn-700)", marginLeft: "auto" }}>Cite</a>
        </div>

        <p className="dropcap" style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7,
          color: "var(--fg)", margin: "0 0 20px" }}>
          The dominant story of scale in language models has been a story about parameters.
          We have pursued width, and depth, and more width, and more depth, and by most
          metrics it has worked. But the returns are narrowing, and the remaining gap
          between what our systems do and what they could do looks increasingly like a
          memory problem, not a reasoning problem.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, color: "var(--fg)", margin: "0 0 20px" }}>
          In this paper we introduce <em>persistent episodic memory</em> — a small,
          structured store bolted onto a sparse model — and show that it closes the gap
          on four long-horizon benchmarks while using a fraction of the compute.
        </p>

        <RuneDivider />

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600,
          color: "var(--ink-900)", letterSpacing: "-0.01em", margin: "32px 0 14px" }}>
          1 · What we mean by memory
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, color: "var(--fg)", margin: "0 0 16px" }}>
          "Memory" is a crowded word. In this paper we use it narrowly. A persistent
          episodic memory is a write-once, read-often store of <code>(context, outcome)</code>
          pairs, keyed by a learned hash.
        </p>
        <pre style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6,
          background: "var(--cream-200)", padding: "16px 18px", borderRadius: "var(--r-md)",
          overflowX: "auto", color: "var(--ink-800)", margin: "16px 0" }}>
{`class EpisodicMemory:
    def __init__(self, hasher, capacity=1e6):
        self.hasher = hasher
        self.store = LRU(capacity)

    def write(self, ctx, outcome):
        self.store[self.hasher(ctx)] = outcome

    def read(self, query, k=8):
        return self.store.neighbors(self.hasher(query), k)`}
        </pre>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, color: "var(--fg)", margin: "0 0 16px" }}>
          The retrieval side is intentionally boring. Interesting things happen at
          write-time, which is what most of this paper is about.
        </p>
      </article>
      <Footer />
    </div>
  );
}

Object.assign(window, { Screens, HomeScreen, ResearchScreen, AboutScreen, PaperScreen });
