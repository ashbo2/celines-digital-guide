# Celine's Digital Guide

A training site and reference guide for using a computer and iPhone confidently. Live on GitHub Pages.

## How it's organized

| File | What's in it |
|---|---|
| `index.html` | Page shell: top bar (Home, text size) and the list of content files to load |
| `app.js` | Navigation, saved progress, text size, read-aloud, "think it through" questions, "Can you spot it?" screens |
| `styles.css` | All styling (v1 mock-screen styles at the top, v2 layout and accessibility at the bottom) |
| `content/start-here.js` … `content/safety.js` | Lessons, one file per part, in the order listed in `index.html` |
| `content/tasks.js` | "How do I…?" quick-help cards |
| `content/pages.js` | My Accounts, Help & Resources, and the Cheat Sheet |

Addresses: `#/` home · `#/learn` all lessons · `#/lesson/<id>` · `#/howto` · `#/howto/<id>` · `#/accounts` · `#/help` · `#/cheatsheet`

## Editing

- **Change a lesson:** find its `id` in the matching `content/*.js` file and edit the HTML inside the backticks.
- **Add a lesson:** add `{ id: "...", title: "...", html: \`...\` }` to a module's `lessons` list. Lesson order = order in the file.
- **Add a quick-help card:** copy an entry in `content/tasks.js`. `lessons: [...]` links to related lesson ids.
- **Building blocks you can use in lesson HTML:** `.analogy`, `.key-concept`, `.tip-box`, `.warning-box`, `.steps`, `.pattern-card`, `.compare`, `.quiz` (gentle question), `.spot` (Can you spot it?), plus the v1 mock screens (`.browser-mockup`, `.win-window`, `.iphone`, …). Mock screens automatically get a "Practice picture" label.

## Design rules

- Every Everyday Tasks lesson uses four steps: **the pattern → her real example → same pattern at a different company → her turn on a made-up company**, so she learns to handle providers she's never seen.
- No scores and no red X's. Wrong answers get a gentle nudge and a "Show me" button.
- Text is at least 18px. No constant animation. Buttons are at least 48px tall.

## Privacy

This repo and site are **public**. Never add passwords, account numbers, addresses, or family phone numbers. The guide teaches her to find official phone numbers herself, except AARP's fraud helpline.

Progress and text size are saved in her browser (localStorage), so they're per-device and per-browser.
