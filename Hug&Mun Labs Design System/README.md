# Hug&Mun Labs — Design System

> **Huginn** (thought) + **Muninn** (memory). Odin's two ravens who fly the world at dawn and return by dusk to whisper what they've seen. Our thesis: intelligent machines must pair reasoning with memory. Our brand follows.

---

## What this is

A complete design system for **Hug&Mun Labs**, an AI research lab. It covers voice, color, type, iconography, and UI kits for the surfaces we build (marketing site, chat/playground, research/blog).

The aesthetic is **warm literary + mythic Norse**: cream parchment, ink brown, deep Muninn purple, oxblood Huginn red, with subtle runic and pixel-art motifs. Loosely inspired by Claude's bookish warmth — visually distinct via the purple/red mythic palette.

## Sources

- `uploads/hugymun.png` — original full-color logo (two crows + "hug&mun LABS" wordmark). Preserved at `assets/logo-full-color.png`.
- No codebase, no Figma provided. Everything beyond the logo is an original system built on the brief: "two crows, AI lab, Princeton brown / UW purple / cream, maybe pixel/iOS-early or Odin references kept simple."

---

## Index

**Foundations**
- `README.md` — this file
- `colors_and_type.css` — all design tokens as CSS variables + semantic base styles
- `SKILL.md` — portable skill definition (works in Claude Code too)

**Assets** (`assets/`)
- `logo-full-color.png` — original saturated duo-crow mark
- `logo-mark-duo.svg` — simplified duo-crow (purple + red) for app icons
- `logo-mark-mono.svg` — monochrome ink version (default use)
- `logo-huginn.svg` / `logo-muninn.svg` — single-crow marks (red / purple)
- `pixel-crow-huginn.svg` / `pixel-crow-muninn.svg` — 16×16 pixel-art versions for favicons / retro moments
- `odin-eye.svg` — pixel-art Odin's-eye glyph (rare, for section headers / easter eggs)
- `rune-divider.svg` — decorative horizontal rule with runic glyphs

**UI kits** (`ui_kits/`)
- `website/` — marketing site (home, about, research)
- `chat/` — Hugr (chat playground) — web app with two assistant modes: Thought (fast) and Memory (deep)
- `research/` — long-form research paper / blog reading layout

**Previews** (`preview/`) — rendered design-system cards for the review tab

---

## Voice & Content Fundamentals

Hug&Mun writes like a **scholar with a sense of humor**: precise, unhurried, occasionally literary. We earn authority by being specific, never by being stiff.

### Tone dial
- **Primary voice:** warm, literary, measured. Full sentences. Commas used generously.
- **Secondary voice:** quiet wit — one mythic reference per page, not five. A raven winks, never squawks.
- **Avoid:** startup hype, breathless superlatives, "unlock," "empower," "game-changing," "10x." Also avoid academic jargon when a plain word works.

### Casing
- **Sentence case** for almost everything: page titles, buttons, nav items, section headers. "About the lab," not "About The Lab."
- **TITLE CASE + small caps** reserved for eyebrow labels and the logotype lockup.
- **lowercase** for the logo wordmark itself: *hug&mun* (not Hug&Mun, not HUG&MUN).

### Pronouns
- **"We"** for the lab. First-person plural, confident but not imperial.
- **"You"** for the reader. Direct, friendly. No "the user."
- No "I" except in signed essays.

### Examples

> **Yes**
> *"We build systems that think and remember. That's the whole pitch."*
> *"Two ravens, one mind. Hugr is our reasoning playground."*
> *"Memory is what makes intelligence more than a reflex."*

> **No**
> *"Unlock the power of next-generation AI cognition."*
> *"Our revolutionary platform empowers enterprises to..."*
> *"We are the leading pioneer in..."*

### Mythic references
Use sparingly. One per surface. Good: naming a feature "Hugr" or "Munr." Bad: filling a homepage with Norse sagas. The myth gives us a name and a thesis, not a costume.

### Emoji
**Never.** Not on marketing, not in UI, not in error messages. We have runes (ᚺ ᛗ) for decorative glyphs when we need one, and pixel-art crow icons for playful moments. That's the full emotional palette.

### Numbers, units, dates
- Spell out one through nine; numerals from 10 up. "We trained nine models; the tenth was the one."
- Dates: *April 18, 2026* in running copy. *2026-04-18* only in metadata.
- Use the en-dash for ranges (2024–2026), em-dash for asides — like this.

---

## Visual Foundations

### Palette philosophy
Cream paper is the canvas. Ink brown is the pen. **Muninn purple** is primary brand (memory, depth, study). **Huginn red** is accent only (thought, flash, emphasis). Aged gold appears rarely, on seals and runic moments.

Backgrounds are almost always `--cream-100` (`#F5EEDC`). Full dark surfaces use `--ink-900` or `--muninn-900`, never pure black.

### Type system
- **Display:** Fraunces — literary but contemporary, with optical size. Used for H1/H2.
- **Body:** Source Serif 4 — readable long-form serif, strong on screen. Paragraphs, H3–H4.
- **UI:** Inter — neutral sans, used for eyebrows, labels, buttons, small captions.
- **Mono:** JetBrains Mono — code, model names, technical tokens.
- **Runic:** Noto Sans Runic — decorative glyphs only (ᚺ ᛗ ᚢ). Never functional text.

All four are Google Fonts. If the user wants licensed alternates (e.g. Copernicus, Tiempos, GT America), flag as a substitution.

### Spacing, radii, shadows
- **Spacing** on a 4px base, with named tokens `--sp-1`…`--sp-10` (see css).
- **Radii** are restrained: default `4px`. We rarely go above `12px`. Pills exist for tags only. No heavy rounding — we're paper, not plastic.
- **Shadows** are warm (brown-tinted, not gray). Soft and short. Elevation is whispered, never announced.

### Backgrounds
- **Default:** solid cream. No gradients by default.
- **Hero moments:** cream with a subtle paper-noise texture (3–6% opacity SVG).
- **Dark sections:** `--muninn-900` with `--cream-50` text and a thin runic divider.
- **Never:** bluish-purple SaaS gradients. Never.

### Imagery
- Warm, slightly desaturated. Grain welcome.
- Ink-drawing or etching aesthetic preferred for editorial.
- Full-bleed photography reserved for team / places / paper hero images.
- Avoid generic 3D renders and stock abstract shapes.

### Animation
- **Default:** fade + 4–8px rise, 200ms `cubic-bezier(.22,1,.36,1)`.
- **Hover:** 120ms tint or underline thickening. No scale transforms on type.
- **Press:** 1–2px offset, no "squish." Buttons darken, not shrink.
- **Page transitions:** none unless asked. Link, don't perform.
- **Never:** bouncy springs, confetti, parallax scroll.

### Borders
1px hairlines in `--border` (`#E0D3B5`). Stronger at `--border-strong`. Dividers prefer hairline + optional rune accent (`<hr class="rune">`) for editorial rhythm.

### Cards
- Background: `--cream-50` (slight lift from default bg).
- Border: 1px `--border`.
- Radius: `--r-lg` (8px).
- Shadow: `--shadow-sm` at rest, `--shadow-md` on hover.
- No heavy drop shadows. Never a colored left-border accent — too webby.

### Layout rules
- Max text measure: 68ch for body, 34ch for display.
- Gutters: `--sp-6` mobile, `--sp-8`+ desktop.
- Prefer asymmetric two-column ("duality") layouts on hero + about sections. One column = Hugr, other = Munr, even when content is unrelated.
- Footers and headers are flat, no blur. Transparency + blur is banned except for one place: the chat app's composer shelf.

### Transparency & blur
Used **once**, in `ui_kits/chat/` composer shelf (backdrop-filter: blur(12px) over `--cream-100` at 80%). Everywhere else, solid colors.

### Hover / press states
- **Buttons primary:** hover darkens (muninn-700 → 800). Press darkens further + 1px inset shadow.
- **Buttons secondary:** hover adds `--cream-200` fill. Press adds a 1px ink border.
- **Links:** thicker underline on hover, slight color shift muninn-700 → 800.
- **Cards:** lift by 1px, shadow grows sm→md, 200ms.
- **No opacity-only hovers.** Always a color cue.

---

## Iconography

We use **Lucide** (CDN-linked) as our workhorse icon system — clean 1.5px stroke, good coverage, matches our understated tone. Lucide icons render at 20×20 by default in UI, 24×24 in marketing.

**Brand icons** are SVG:
- The two crows (full, single, pixel) — from `assets/`
- Rune glyphs — rendered with Noto Sans Runic webfont
- Odin's eye — `assets/odin-eye.svg`, used very rarely as a section-opener mark

**Pixel-art variants** exist for the crows at 16×16 — used for favicons, loading states, and occasional "easter egg" moments. This is our nod to the "iOS-early / pixel" reference from the brief.

**No emoji, ever.** If we need a small visual on a menu item, it's a Lucide glyph. If we need to mark a section of a long-form piece, it's a rune.

```html
<!-- Pattern -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="sparkles"></i>
<script>lucide.createIcons();</script>
```

---

## Substitutions flagged

- **Fonts:** Fraunces, Source Serif 4, Inter, JetBrains Mono, Noto Sans Runic — all Google Fonts. If you want the lab to use licensed fonts (Copernicus, Tiempos, GT America, Söhne, IBM Plex Serif etc.) please provide the files and I'll swap.
- **Logo:** the uploaded saturated logo is preserved as `logo-full-color.png`. I've drawn simplified SVG derivatives (`logo-mark-duo`, `logo-mark-mono`, etc.) for use in UI contexts where the saturated mark is too loud. Ideally a designer produces vector masters of the original — these SVGs are my best recreations, not traces.
- **Icon set:** Lucide via CDN. Swap for Phosphor or a custom set if preferred.

---

## How to use this system

1. Link `colors_and_type.css` at the top of any page.
2. Let semantic elements (`h1`, `p`, `code`, `.eyebrow`) pick up base styles.
3. Reach for tokens (`var(--muninn-700)`, `var(--sp-5)`) for everything custom.
4. Copy UI kit components from `ui_kits/<product>/` as starting points — they're not production code, they're high-fidelity reference.
5. When in doubt, ask: "would this feel at home in a Stripe Press book with ravens on the cover?" If yes, proceed.
