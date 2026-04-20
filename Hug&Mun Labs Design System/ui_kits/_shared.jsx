// Shared components for all Hug&Mun UI kits.
// Global-scoped — assign to window at bottom.

const { useState, useEffect, useRef } = React;

// ====== Brand marks ======
function LogoMark({ size = 28, variant = "mono" }) {
  const src = variant === "duo" ? "../../assets/logo-mark-duo.svg"
    : variant === "color" ? "../../assets/logo-full-color.png"
    : "../../assets/logo-mark-mono.svg";
  return <img src={src} alt="Hug&Mun" style={{ height: size, width: "auto", display: "block" }} />;
}

function Wordmark({ size = 18, color }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "-0.02em",
      color: color || "var(--ink-900)",
      display: "inline-flex",
      alignItems: "baseline",
      gap: 0,
    }}>
      <span>hug</span>
      <span style={{ color: "var(--huginn-700)" }}>&</span>
      <span>mun</span>
      <span style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: size * 0.55,
        letterSpacing: "0.16em",
        marginLeft: 8,
        color: "var(--ink-600)",
      }}>LABS</span>
    </span>
  );
}

function LogoLockup({ size = 28 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={size} />
      <Wordmark size={size * 0.72} />
    </div>
  );
}

// ====== Buttons ======
function Button({ children, variant = "primary", size = "md", as = "button", href, onClick, icon, ...rest }) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    border: "1px solid transparent",
    borderRadius: "var(--r-md)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all 120ms var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };
  const sizes = {
    sm: { fontSize: 12, padding: "6px 12px" },
    md: { fontSize: 14, padding: "10px 18px" },
    lg: { fontSize: 15, padding: "13px 22px" },
  };
  const variants = {
    primary:  { background: "var(--muninn-700)", color: "var(--cream-50)" },
    accent:   { background: "var(--huginn-700)", color: "var(--cream-50)" },
    secondary:{ background: "var(--cream-50)", color: "var(--ink-900)", borderColor: "var(--border-strong)" },
    ghost:    { background: "transparent", color: "var(--muninn-700)" },
    ink:      { background: "var(--ink-900)", color: "var(--cream-50)" },
  };
  const style = { ...base, ...sizes[size], ...variants[variant] };
  const Tag = as;
  const props = Tag === "a" ? { href, ...rest } : { onClick, ...rest };
  return <Tag style={style} {...props}>{icon}{children}</Tag>;
}

// ====== Rune divider ======
function RuneDivider({ glyphs = "ᚺ ᛫ ᛗ", color }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      color: color || "var(--ink-400)",
      margin: "24px 0",
    }}>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      <span style={{
        fontFamily: "var(--font-runic)",
        letterSpacing: "0.4em",
        fontSize: 14,
        color: color || "var(--ink-500)",
      }}>{glyphs}</span>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

// ====== Eyebrow ======
function Eyebrow({ children, color }) {
  return (
    <div style={{
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: color || "var(--huginn-700)",
      marginBottom: 8,
    }}>{children}</div>
  );
}

// ====== Badge ======
function Badge({ children, tone = "muninn" }) {
  const tones = {
    muninn: { background: "var(--muninn-100)", color: "var(--muninn-800)" },
    huginn: { background: "var(--huginn-100)", color: "var(--huginn-800)" },
    cream:  { background: "var(--cream-200)", color: "var(--ink-800)" },
    ink:    { background: "var(--ink-900)", color: "var(--cream-50)" },
    gold:   { background: "#F3E4BE", color: "#6A4E15" },
    outline:{ background: "transparent", color: "var(--ink-800)", border: "1px solid var(--border-strong)" },
  };
  return (
    <span style={{
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "var(--r-pill)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      ...tones[tone],
    }}>{children}</span>
  );
}

// ====== Lucide icon ======
function Icon({ name, size = 18, color = "currentColor", strokeWidth = 1.75 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ nameAttr: "data-lucide", attrs: { stroke: color } });
  });
  return <i ref={ref} data-lucide={name} style={{ width: size, height: size, display: "inline-block", color, strokeWidth }} />;
}

Object.assign(window, { LogoMark, Wordmark, LogoLockup, Button, RuneDivider, Eyebrow, Badge, Icon });
