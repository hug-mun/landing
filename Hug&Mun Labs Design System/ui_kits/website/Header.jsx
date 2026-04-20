function Header({ current, onNav }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "about", label: "About" },
    { id: "paper", label: "Latest paper" },
  ];
  return (
    <header style={{
      display: "flex", alignItems: "center",
      padding: "22px 48px",
      borderBottom: "1px solid var(--border)",
      background: "var(--cream-100)",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div onClick={() => onNav("home")} style={{ cursor: "pointer" }}>
        <LogoLockup size={26} />
      </div>
      <nav style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
        {items.map(it => (
          <button key={it.id}
            onClick={() => onNav(it.id)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 500,
              padding: "8px 14px",
              borderRadius: "var(--r-md)",
              color: current === it.id ? "var(--ink-900)" : "var(--fg-muted)",
              background: current === it.id ? "var(--cream-200)" : "transparent",
            }}>
            {it.label}
          </button>
        ))}
        <div style={{ width: 12 }} />
        <Button variant="secondary" size="sm" onClick={() => onNav("signin")}>Sign in</Button>
        <Button variant="primary" size="sm" onClick={() => onNav("access")}>Request access</Button>
      </nav>
    </header>
  );
}
Object.assign(window, { Header });
