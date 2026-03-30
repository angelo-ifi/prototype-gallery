# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow

- After every edit, open in Firefox: `start firefox "C:/Users/User/Desktop/Claude/Manga/story.html"`
- Before large changes, back up first: `cp story.html story.backup.html`
- No build step, no package manager — open the HTML file directly in a browser.

## story.html Architecture

Single-file app: all CSS and JS are embedded in `story.html`. Images are in `Test Images/`.

### Slide System

- All slides are `position: absolute; inset: 0` inside a fixed `#reader` container.
- Exactly one slide has class `active` at a time; inactive slides are `opacity: 0; pointer-events: none`.
- The `slides` array and `current` index in JS are the source of truth for navigation state.
- Each slide has a `data-in` attribute that selects its entrance transition (e.g. `in-right`, `in-fade`, `in-flash`, `in-top`). The transition map in JS pairs each with a corresponding exit class.

### Navigation

- Forward: click anywhere, `ArrowRight`, `Space`, `ArrowDown`
- Back: `← Back` button, `ArrowLeft`, `ArrowUp`, or swipe
- `goTo(n)` is the single function all navigation routes through — never call slide switching directly.
- `animating` flag prevents double-fires during transitions.

### HUD

- Progress dots, slide counter (`current + 1 / TOTAL`), back button, and click hint are all driven by `updateHUD()` — call it any time `current` changes.
- The back button is hidden on slide index `0`.

### Audio

- Page-turn SFX is synthesised via Web Audio API (no audio files). `playPageTurn()` generates filtered white noise with a bandpass sweep. `audioCtx` is lazy-initialised on first interaction to satisfy browser autoplay policy.

### Entrance Animations

- `.slide.active .anim-img` — image pop-in
- `.slide.active .anim-text` — text slide-up (delayed)
- `.slide.active .anim-sfx` — SFX slam-in (further delayed)
- These are CSS `@keyframes` triggered purely by the `.active` class; no JS timers needed.

## Design System (current)

- **Background**: `#f4f4f4` (light grey-white) — unified across body, all slides, and HUD
- **Text**: `#1a1a1a` (very dark grey)
- **Dim**: `#777777` for secondary UI elements
- **Accent**: dark red `#8b1a1a` used on panel number badges
- **Fonts**: `Reenie Beanie` (headings/`.scene-heading`, `.final-heading`) · `Short Stack` (all other text)
- **Color tokens**: edit `:root` variables only — do not hardcode colors outside of `:root`
- **Type sizes**: always `clamp(min, vw, max)` — never fixed `px` font sizes
- **Halftone overlay**: dark dots `rgba(0,0,0,.07)` on `body::after`, `z-index: 9000`
- **Scanlines**: `repeating-linear-gradient` on `#scanlines`, `z-index: 9100`

## Adding a New Slide

1. Add a `<div class="slide" id="slide-N" data-in="in-right">` block inside `#reader`.
2. Choose a layout class: `l-img-l` (image left 7fr/4fr), `l-img-r` (image right), `l-center` (centered single column).
3. Per-slide image size overrides go as inline `style="max-width:Xpx"` on the `.panel-wrap`.
4. `TOTAL` is derived from `querySelectorAll('.slide').length` — no manual count needed.

## Broader Project Context

All projects live under `C:/Users/User/Desktop/Claude/`. Each is a standalone single-file HTML app:

| Folder | Entry Point | Description |
|---|---|---|
| `Prototype Gallery/` | `home.html` | Hub showcasing prototypes; localStorage for feedback (`prototype-hub-data`, `prototype-hub-feedback`) |
| `The Four Horsemen/` | `index.html` | Click-through comic reader (10 PNG pages); same slide pattern as Manga |
| `Away from Home/` | `index.html` | RPG-style interactive fiction; `Press Start 2P` font, 16-bit aesthetic |
| `Manga/` | `story.html` | This project |
