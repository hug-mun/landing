function Footer() {
  return (
    <footer style={{
      background: "var(--ink-900)",
      color: "var(--cream-200)",
      padding: "64px 48px 32px",
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <img src="../../assets/logo-mark-duo.svg" style={{ height: 32 }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--cream-50)" }}>
              hug<span style={{ color: "var(--huginn-500)" }}>&</span>mun
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: 13, lineHeight: 1.6,
            color: "var(--cream-300)", maxWidth: "36ch", margin: 0 }}>
            Two ravens, one mind. An independent AI research lab building for the space between thought and memory.
          </p>
        </div>
        {[
          { h: "Research", items: ["Papers", "Notebooks", "Open models", "Datasets"] },
          { h: "Lab", items: ["About", "Team", "Careers", "Press"] },
          { h: "Contact", items: ["hello@hugmun.ai", "Princeton, NJ", "Seattle, WA"] },
        ].map(col => (
          <div key={col.h}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em",
              textTransform: "uppercase", color: "var(--cream-400)", marginBottom: 12 }}>{col.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {col.items.map(it => (
                <li key={it} style={{ fontSize: 14, color: "var(--cream-200)" }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: "1px solid rgba(224,211,181,.15)",
        marginTop: 48, paddingTop: 22,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: 12, color: "var(--cream-400)",
      }}>
        <div>© 2026 Hug&Mun Labs</div>
        <div style={{ fontFamily: "var(--font-runic)", letterSpacing: "0.5em", color: "var(--cream-300)" }}>ᚺ ᛫ ᛗ</div>
        <div style={{ display: "flex", gap: 20 }}>
          <span>Privacy</span><span>Terms</span><span>RSS</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
