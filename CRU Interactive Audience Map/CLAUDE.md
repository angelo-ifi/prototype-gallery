# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page interactive recreation of [audiencemap.cru.org](https://audiencemap.cru.org/map/) — a spiritual-journey audience segmentation tool by Cru (Campus Crusade for Christ International). The map displays 12 audience stages as human sprites overlaid on an illustrated fantasy-style map image, with thought bubbles and a slide-in detail panel.

## Stack

- **Single file: `index.html`** — all HTML, CSS, and JavaScript in one file. No build step, no framework, no dependencies except Google Fonts.
- The map background is a raster image: `Images/Screenshot 2026-03-12 at 10-07-13 Map - Audience Map.png`
- Open directly in a browser — no server needed.

## Architecture (all inside `index.html`)

### Data
`const STAGES` — a JS object keyed by stage ID (e.g. `hostile`, `unaware`). Each entry contains:
```js
{
  name, color, category,
  pos: { x, y },   // percentage position over the map image
  dir,             // thought bubble direction: "above" | "below" | "left"
  pose,            // sprite arm/mouth variant name
  hasBoat,         // optional: true renders the character in a rowboat (used by Unaware, Seeking)
  quote, def, glance[], insights[{t,b}], movement[], pray[], plan[], cautions[]
}
```

### Sprite rendering
- `spriteArms(pose)` / `spriteMouth(pose)` — return SVG fragments for the stick figure, keyed by pose name
- `boatArms(pose)` — same as `spriteArms` but coordinates offset to center at x=27 (used inside the wider boat SVG viewBox)
- `buildSprite(key)` — returns a full SVG string; branches on `s.hasBoat` to render either a standard stick figure (viewBox 40×56) or a boat scene (viewBox 54×72)

### Sprite positioning
Sprites use `position: absolute` with `transform: translate(-50%, -100%)` — so `pos.x / pos.y` percentages mark the **feet** of the figure on the map image. Adjust `pos.x` / `pos.y` in `STAGES` to reposition any character.

### Thought bubbles
CSS-only hover reveal. Direction controlled by `data-dir` attribute on `.sprite-wrapper`:
- `above` (default) — bubble above, tail points down
- `below` — bubble below, tail points up
- `left` — bubble floats left of sprite, tail points right

### Side panel
Clicking a sprite calls `openPanel(key)`, which populates 4 tabs (Overview, Insights, Movement, Engage) from `STAGES[key]` data and slides in `.side-panel`. Panel header background uses the stage color.

## The 12 Stages & Colors

| Stage | Hex | Sprite pose |
|---|---|---|
| Hostile | `#7c8da5` | defensive |
| Unaware | `#593649` | confused (boat) |
| Uninterested | `#73a2ac` | relaxed |
| Open | `#e09c2a` | curious |
| Seeking | `#4b5fc2` | searching (boat) |
| Unclear | `#c2528b` | scratching |
| Dual | `#bc1e51` | juggling |
| Professing | `#6895c9` | hands_folded |
| Growing | `#60d3aa` | reading |
| Grounded | `#2f377f` | standing |
| Engaged | `#4f8eb5` | reaching |
| Multiplying | `#3abfb1` | celebrating |
