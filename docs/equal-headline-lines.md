# Equal headline lines

## Scope

Implement Patrick's exact two-line direction: “Made for the room” followed by
“NOT for the masses”. Both lines have the same type size, weight, tracking and
line height; the second retains the approved terracotta accent.

## Tasks

- [x] Replace the subtitle treatment with two equal heading lines.
- [x] Build and inspect actual phone, tablet, desktop and laptop layouts.
- [ ] Publish and verify the live page.

## Current state

Isolated branch `codex/equal-headline-lines` starts from current origin/main
`aca1fc6927a397f224567477e39b973d72bcded3`.

## Audit log

1. Patrick explicitly required one line per phrase, uppercase NOT and equal
   sizes. Remove the previous small subtitle and manual internal line break.
2. Size the whole heading from its available copy-column width, with both
   line spans inheriting the same size. Retain the existing 42px headline cap,
   image proportions, provider buttons and prompt destinations.

## Verification

Production build passed. Real Chrome confirms exactly two single-line phrases, identical font size/weight/tracking/line height, adjacent line boxes, no text clipping or horizontal overflow, clear CTA separation and unchanged prompt URLs at 320px, phone, tablet, desktop, laptop, narrow desktop and landscape sizes. Enlarged phone text also remains within bounds. Final device captures reviewed.

The copy column controls the heading: font size is 10% of its width, capped at the existing 42px token. Both spans inherit that one value. Existing 55px touch targets and photo geometry stay unchanged. Photo fill at 390x844 is 100% horizontal / 37.2% vertical and area; at 820x1180, 100% / 55.9%; at 1440x1000, 86.3% / 100%, or 86.3% area. Short desktops retain the existing 1:.618 column split. All touched source files are below 150 lines. No app launched or prompt sent.
