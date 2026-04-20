function Hero() {
  return (
    <section style={{
      padding: "80px 48px 60px",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 64,
      alignItems: "center",
      borderBottom: "1px solid var(--border)",
    }}>
      <div>
        <Eyebrow>An AI research lab · est. 2026</Eyebrow>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: 68,
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: "-0.025em",
          color: "var(--ink-900)",
          margin: "0 0 20px",
          textWrap: "balance",
          maxWidth: "14ch",
        }}>
          Thought <span style={{ color: "var(--huginn-700)", fontStyle: "italic", fontWeight: 500 }}>&</span> memory,<br/>working together.
        </h1>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: 19,
          lineHeight: 1.55,
          color: "var(--fg-muted)",
          maxWidth: "48ch",
          margin: "0 0 32px",
        }}>
          We build systems that think and remember. Two ravens, one mind. Huginn reasons.
          Muninn recalls. The future of intelligence is the conversation between them.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="primary" size="lg">Read our thesis</Button>
          <Button variant="secondary" size="lg">Browse research</Button>
        </div>
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <img src="../../assets/logo-full-color.png" alt=""
          style={{ width: 360, maxWidth: "100%", filter: "drop-shadow(0 20px 40px rgba(46,32,24,.18))" }} />
        <div style={{
          position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
          fontFamily: "var(--font-runic)", fontSize: 16, letterSpacing: "0.5em",
          color: "var(--ink-500)", whiteSpace: "nowrap",
        }}>ᚺ ᛫ ᛗ</div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
