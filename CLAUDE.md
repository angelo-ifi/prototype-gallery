# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

All projects are standalone single-file HTML apps — no build step, no framework, no package manager. Open any file directly in a browser. Deployed on Vercel from GitHub (`angelo-ifi/prototype-gallery`), served from the repo root.

To open a file after edits:
```
powershell -Command "Start-Process firefox 'file:///C:/Users/User/Desktop/Claude/<Project>/<file>.html'"
```

## Projects

| Folder | Entry Point | Description |
|---|---|---|
| `Prototype Gallery/` | `home.html` | Hub showcasing all prototypes |
| `The Four Horsemen/` | `index.html` | Click-through comic reader |
| `Away from Home/` | `v2.html` | RPG-style interactive fiction (active dev — ignore `index.html`) |
| `Manga/` | `story.html` | Animated comic strip reader |
| `CRU Interactive Audience Map/` | `index.html` | Interactive spiritual-journey audience map |
| `Country Prayer Videos/` | — | Placeholder |

## Prototype Gallery (`home.html`)

- 8 cards rendered from three parallel arrays in the script: `links[]`, `thumbnails[]`, `defaults[]`
- To add/update a prototype: edit all three arrays at the same index, set `status: "wip"`
- Card content (Audience, Problem, Questions, If This Works) is hardcoded in `defaults[]` — **not editable at runtime**, no localStorage for content
- Feedback button opens a Google Form in the shared lightbox (`https://forms.gle/13HTGExSugDuu8cJA`)
- Special per-card buttons injected via `i === N` conditionals in the card render loop (e.g. V1 button on card 1)
- Demo links open in a shared `#modal` lightbox — `openModal(src, title)` switches between `<iframe>` and `<video>` based on `.mp4` extension; YouTube links use `youtube.com/embed/` format
- Design: Inter font, `#0c0c0c` background, white cards, orange (`#ff6a00`) accent, star field canvas + scanline overlay
- `index.html` is a meta-redirect to `home.html` (required for Vercel routing)

## Away from Home (`v2.html`)

- Multi-screen setup flow: Name/Gender → Country → Field of Study → Opening Scene
- All screens are in the same HTML file, shown/hidden via `style.display`
- Player state accumulates in the `player` object across screens
- Audio: Web Audio API only — `playType()` for name input keystrokes, `playSelect()` (chime) for selections, `playMutter()` per character during dialogue typewriter effect
- Opening scene: sunrise image fades in, then `showDialogue(0)` triggers after 2.6s; story branches via `story[]` node array
- Dev nav bar fixed to bottom for jumping between screens during development
- Flag images use `flagcdn.com/w80/<cc>.png` (not emoji — Windows doesn't render country flag emoji)
- sound-test.html and font-test.html are dev-only audition pages, not part of the game

## CRU Interactive Audience Map (`index.html`)

- All data in `const STAGES` — keyed by stage ID (e.g. `open`, `seeking`)
- Side panel has 4 tabs: Overview, Movement, Engage, Talk
- Sprites: `position: absolute; transform: translate(-50%, -100%)` — `pos.x/pos.y` mark the feet
- Sprite positions, thought bubble directions, and stage colors are all in `STAGES`

## Manga (`story.html`)

- Navigation via `goTo(n)` — never manipulate slides directly
- Slide entrance transitions set via `data-in` attribute; CSS handles the rest
- `TOTAL` is auto-derived from DOM — no manual count needed
- Audio: Web Audio API only, no audio files

## Git & Deploy

- Remote: `https://github.com/angelo-ifi/prototype-gallery.git`
- Git root is `C:/Users/User/Desktop/Claude` — run all git commands from there
- Push: `git add <files> && git commit -m "..." && git push`
- Vercel auto-deploys on push to `main`, root directory set to repo root (not `Prototype Gallery/`)
- Always backup `home.html` to `home.backup.html` before large changes
