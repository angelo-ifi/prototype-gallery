# Angelo's Prototype Gallery

## What This Is
A homepage (`home.html`) that showcases up to 6 prototypes. Each card has editable fields, a thumbnail, a demo lightbox, and a structured feedback form. All edits and feedback save automatically to `localStorage`.

## Folder Structure
```
Desktop/Claude/
├── Prototype Gallery/
│   └── home.html          ← main file
└── The Four Horsemen/
    ├── index.html          ← comic viewer prototype
    └── page1–10.png
```

## Prototype Slots
| # | Title | Status | Link | Thumbnail |
|---|-------|--------|------|-----------|
| 01 | The Four Horsemen | WIP | `../The Four Horsemen/index.html` | `../The Four Horsemen/page1.png` |
| 02–06 | Empty | Placeholder | null | null |

To add a new prototype, update the `links[]` and `thumbnails[]` arrays in the script, and set `status: "wip"` in `defaults[]`.

## Card Fields (all editable inline)
- Title & Audience (in card header)
- Problem / Pain Point
- What We Built
- Walkthrough / Demo
- What We're Testing
- Questions for Advisors
- If This Works…

## Feedback Form (per card)
Two-tab panel: **Leave Feedback** / **Responses**

Questions:
- Would you pay for this? 👍/👎
- Was it easy to use? 👍/👎
- Would you recommend this? 👍/👎
- Should we keep building this? **GO** / **PIVOT** / **STOP**
- Any thoughts? (optional textarea)
- Name (optional, defaults to Anonymous)

## Design
- 16-bit retro aesthetic with Press Start 2P font
- Scanline background, star field
- Single accent color: `#00e5ff` (cyan)
- Title color: `#ff3ca0` (pink) with cyan drop shadow
- Cards: dark navy `#16213e`, white pixel borders, hard drop shadows
- Demo opens in a modal lightbox (iframe), closeable via ✕, backdrop click, or Escape

## localStorage Keys
- `prototype-hub-data` — card field content
- `prototype-hub-feedback` — feedback responses per prototype index

## Preferences
- Always backup to `home.backup.html` before big changes
- Auto-open Firefox after every revision
