# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

All projects are standalone single-file HTML apps — no build step, no framework, no package manager. Open any file directly in a browser. Deployed on Vercel from GitHub (`angelo-ifi/prototype-gallery`), served from the `Prototype Gallery/` root directory.

To open a file after edits:
```
powershell -Command "Start-Process firefox 'file:///C:/Users/User/Desktop/Claude/<Project>/<file>.html'"
```

## Projects

| Folder | Entry Point | Description |
|---|---|---|
| `Prototype Gallery/` | `home.html` | Hub showcasing all prototypes |
| `The Four Horsemen/` | `index.html` | Click-through comic reader (10 PNG pages) |
| `Away from Home/` | `v2.html` | RPG-style interactive fiction, 16-bit aesthetic |
| `Manga/` | `story.html` | Animated comic strip reader |
| `CRU Interactive Audience Map/` | `index.html` | Interactive spiritual-journey audience map |
| `Country Prayer Videos/` | — | Placeholder |

## Prototype Gallery (`home.html`)

- 8 cards rendered from `defaults[]`, `links[]`, `thumbnails[]` arrays in the script
- Card titles are hardcoded and non-editable; body fields (Audience, Problem, Questions, If This Works) are `contenteditable` and save to `localStorage` key `prototype-hub-data`
- Feedback per card saves to `localStorage` key `prototype-hub-feedback`
- To add a prototype: update `links[]`, `thumbnails[]`, `defaults[]`, and set `status: "wip"`
- Design: Inter font, `#0c0c0c` background, white light-themed cards, orange (`#ff6a00`) Play Demo button, star field canvas + scanline overlay
- `index.html` is a meta-redirect to `home.html` (required for Vercel)

## CRU Interactive Audience Map (`index.html`)

- All data in `const STAGES` — keyed by stage ID (e.g. `open`, `seeking`)
- Each stage can have an `img` property (relative path) shown at the top of the Overview tab
- Side panel has 4 tabs: Overview (quote + glance bullets + optional image), Movement, Engage, Talk
- Sprites use `position: absolute; transform: translate(-50%, -100%)` — `pos.x/pos.y` mark the feet
- Sprite positions, thought bubble directions, and stage colors are all in `STAGES`

## Manga (`story.html`)

- Navigation via `goTo(n)` — never manipulate slides directly
- Slide entrance transitions set via `data-in` attribute; CSS handles the rest
- `TOTAL` is auto-derived from DOM — no manual count needed
- Audio (page-turn SFX) is Web Audio API only, no audio files

## Git & Deploy

- Remote: `https://github.com/angelo-ifi/prototype-gallery.git`
- Push: `cd "C:/Users/User/Desktop/Claude" && git add . && git commit -m "..." && git push`
- Vercel auto-deploys on push to `main`, root directory set to `Prototype Gallery/`
