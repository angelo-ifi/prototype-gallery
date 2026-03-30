# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A homepage (`home.html`) showcasing 8 prototypes. Each card has editable body fields, a thumbnail, a demo lightbox, and a feedback button. Deployed on Vercel; Vercel root is the repo root, with `index.html` redirecting here.

## Prototype Slots

| # | Title | Link | Thumbnail |
|---|-------|------|-----------|
| 01 | The Four Horsemen – Animated Comic Zine | `../The Four Horsemen/index.html` | `Images/four-horsemen.png` |
| 02 | Away from Home – Text-based Adventure | `../Away from Home/v2.html` | `../Away from Home/Images/Screenshot...` |
| 03 | The Dream Between – Animated Comic Strip | `../Manga/story.html` | `Images/Manga.png` |
| 04 | CRU Audience Map – Interactive Infographics | `../CRU Interactive Audience Map/index.html` | `Images/Audience-map.png` |
| 05 | Country Prayer Videos | YouTube embed | `Images/country-prayer-videos.jpg` |
| 06–08 | Empty | null | null — shows "COMING SOON" |

To add/change a prototype: update `links[]`, `thumbnails[]`, and `defaults[]` in the script. Titles are hardcoded in `defaults[]` and rendered as static (non-editable) text. Set `status: "placeholder"` for empty slots.

## Card Fields

- **Title** — static, hardcoded in `defaults[]`
- **Body fields** (all `contenteditable`, save to `localStorage` key `prototype-hub-data`): Audience, Problem / Pain Point, Questions for Advisors, If This Works…

## Feedback & Demo

- **Feedback button** — opens Google Form (`https://forms.gle/13HTGExSugDuu8cJA`) in the shared lightbox
- **Play Demo button** — opens the prototype's `links[]` entry in the same lightbox
- `openModal(src, title)` — uses `<video>` for `.mp4` files, `<iframe>` for everything else (including YouTube embeds)
- Lightbox closes via ✕ button, backdrop click, or Escape key

## Per-Card Special Buttons

Injected via `i === N` conditionals inside the card render loop:
- Card 1 (Away from Home): V1 button → `openModal('../Away from Home/index.html', 'Away from Home — V1')`

## Design

- **Font**: Inter
- **Background**: `#0c0c0c` with scanline overlay and animated star field canvas
- **Cards**: white background, dark borders, dark text, hard drop shadows
- **Play Demo**: bold white text on orange (`#ff6a00`)
- **Feedback**: bold, dark background on hover

## Preferences

- Backup to `home.backup.html` before big changes
- `index.html` at repo root is a meta-redirect to `Prototype Gallery/home.html` — do not remove (required for Vercel)
