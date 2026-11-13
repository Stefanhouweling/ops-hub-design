# Ops Hub — design sample

A mobile-first operations dashboard for two camp directors. This public copy is for visual design work only.

**All names, numbers, dates and events in this project are fictional sample data.** They do not describe a real camp, real people, real bookings or real finances. Do not treat them as facts, and do not add real personal or financial information to this repo.

## Preview

Open `index.html` in a browser (double-click the file, or drag it into a window). There is no build step. Light and dark mode follow the system setting.

`preview-mobile.png` is a 390×844 snapshot of the home screen.

## What's in the files

- `index.html` — layout, CSS and behaviour
- `data.js` — all copy and figures, in one `OPS_HUB_DATA` object
- `preview-mobile.png` — phone-sized screenshot of the current look

When you restyle the page, **keep the `data.js` object shape and field names unchanged** so a private copy can drop in real data later. You can change the sample wording and figures inside those fields; do not rename the keys or restructure the arrays.

## Design brief for ChatGPT

You are styling a mobile-first operations dashboard for two camp directors (Alex and Sam in the sample data). Please iterate on the aesthetics only.

Keep the existing components and behaviour working:

- Approval cards with an Approve button (it copies a phrase; nothing is sent from the page)
- An All / Alex / Sam owner filter that shows and hides items
- A handover countdown ring in the hero
- A team / bot status grid (tap a card for details)
- A calendar timeline
- A revenue chart and key figures
- Light and dark mode (follow `prefers-color-scheme`)

Keep the `data.js` structure and field names unchanged. All content is loaded from `window.OPS_HUB_DATA` — do not hard-code new copy into `index.html`. The sample data is fictional; do not replace it with real names, emails, dollar figures or private details.
