function ThoughtMemoryGrid() {
  return (
    <section style={{
      padding: "72px 48px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--border)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ background: "var(--cream-100)", padding: "48px 40px" }}>
        <img src="../../assets/logo-huginn.svg" alt="" style={{ height: 56, marginBottom: 20 }} />
        <Eyebrow color="var(--huginn-700)">Huginn · thought</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600,
          margin: "6px 0 14px", color: "var(--ink-900)", letterSpacing: "-0.015em",
        }}>The reasoning bird.</h2>
        <p style={{
          fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.6,
          color: "var(--fg-muted)", margin: 0, maxWidth: "40ch",
        }}>Fast, structured, willing to be wrong in public. Hugr is our playground for reasoning traces you can step through, one thought at a time.</p>
        <div style={{ marginTop: 24 }}>
          <Button variant="ghost" size="md">Open Hugr →</Button>
        </div>
      </div>
      <div style={{ background: "var(--muninn-900)", padding: "48px 40px", color: "var(--cream-50)" }}>
        <img src="../../assets/logo-muninn.svg" alt="" style={{ height: 56, marginBottom: 20 }} />
        <Eyebrow color="var(--muninn-300)">Muninn · memory</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600,
          margin: "6px 0 14px", color: "var(--cream-50)", letterSpacing: "-0.015em",
        }}>The remembering bird.</h2>
        <p style={{
          fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.6,
          color: "var(--muninn-200)", margin: 0, maxWidth: "40ch",
        }}>Episodic, persistent, patient. Munr keeps what mattered, so the next thought doesn't begin from zero.</p>
        <div style={{ marginTop: 24 }}>
          <button style={{
            background: "transparent", color: "var(--cream-50)", border: "1px solid var(--muninn-500)",
            padding: "10px 18px", borderRadius: "var(--r-md)", fontFamily: "var(--font-sans)",
            fontWeight: 600, fontSize: 14, cursor: "pointer",
          }}>Learn about Munr →</button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ThoughtMemoryGrid });
