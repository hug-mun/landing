function ResearchCard({ paper, onOpen }) {
  return (
    <article onClick={onOpen} style={{
      background: "var(--cream-50)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      padding: "22px 24px",
      cursor: "pointer",
      transition: "box-shadow 200ms, transform 200ms",
      boxShadow: "var(--shadow-sm)",
      display: "flex", flexDirection: "column", gap: 10,
      minHeight: 190,
    }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.transform = "none"; }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Badge tone={paper.tone}>{paper.track}</Badge>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", letterSpacing: ".05em" }}>
          paper {paper.id}
        </span>
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600,
        letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "2px 0 0",
        textWrap: "balance", lineHeight: 1.2,
      }}>{paper.title}</h3>
      <p style={{
        fontFamily: "var(--font-serif)", fontSize: 14, lineHeight: 1.55,
        color: "var(--fg-muted)", margin: 0, flex: 1,
      }}>{paper.summary}</p>
      <div style={{ display: "flex", gap: 10, alignItems: "center",
        fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-subtle)",
        letterSpacing: ".02em",
        paddingTop: 8, borderTop: "1px dashed var(--border)",
      }}>
        <span style={{ fontFamily: "var(--font-runic)", color: "var(--muninn-600)" }}>
          {paper.tone === "huginn" ? "ᚺ" : "ᛗ"}
        </span>
        <span>{paper.authors}</span>
        <span style={{ marginLeft: "auto" }}>{paper.date}</span>
      </div>
    </article>
  );
}
Object.assign(window, { ResearchCard });
