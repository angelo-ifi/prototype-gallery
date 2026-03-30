# Angelo's Prototype Gallery

## What This Is
A homepage (`home.html`) that showcases 8 prototypes. Each card has editable body fields, a thumbnail, a demo lightbox, and a feedback form. Deployed on Vercel; served as the root directory.

## Prototype Slots

| # | Title | Status | Link | Thumbnail |
|---|-------|--------|------|-----------|
| 01 | The Four Horsemen – Animated Comic Zine Video and Website | WIP | `../The Four Horsemen/index.html` | `Images/four-horsemen.png` |
| 02 | Away from Home – A Text-based Adventure | WIP | `../Away from Home/v2.html` | `../Away from Home/Images/Screenshot...` |
| 03 | The Dream Between – Animated Comic Strip | WIP | `../Manga/story.html` | `Images/Manga.png` |
| 04 | CRU Audience Map – Interactive Infographics | WIP | `../CRU Interactive Audience Map/index.html` | `Images/Audience-map.png` |
| 05 | Country Prayer Videos | WIP | `../Country Prayer Videos/index.html` | `Images/country-prayer-videos.jpg` |
| 06–08 | Empty | Placeholder | null | null — shows "COMING SOON" |

To add/change a prototype: update `links[]`, `thumbnails[]`, and `defaults[]` in the script. Titles are hardcoded in `defaults[]` and rendered as static (non-editable) text.

## Card Fields

- **Title** — static, hardcoded in `defaults[]`
- **Body fields** (all `contenteditable`, save to localStorage): Audience, Problem / Pain Point, Questions for Advisors, If This Works…

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

- **Font**: Inter
- **Background**: `#0c0c0c` with scanline overlay and animated star field canvas
- **Cards**: white background, dark (`#1a1a2e`) borders, dark text, hard drop shadows
- **Play Demo button**: bold, white text on orange (`#ff6a00`)
- **Feedback button**: bold, dark background, white text on hover
- **Demo**: opens in a modal lightbox (iframe), closeable via ✕, backdrop click, or Escape

## localStorage Keys
- `prototype-hub-data` — card body field content
- `prototype-hub-feedback` — feedback responses per prototype index

## Preferences
- Backup to `home.backup.html` before big changes
- `index.html` is a meta-redirect to `home.html` — do not remove it (required for Vercel)
