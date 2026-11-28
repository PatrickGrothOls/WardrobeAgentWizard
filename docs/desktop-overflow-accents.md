# Desktop fit and warm accents

## Scope

Correct the reported desktop overflow and give Claude its terracotta palette.
Add restrained accents without changing the approved photograph, story,
prompt targets, reporting or model routes.

## Work packages

- [x] Inspect the live desktop page before changing the layout.
- [x] Correct the reproduced fit and header positioning problems.
- [x] Apply accessible Claude colors and restrained page accents.
- [x] Build, check relevant layouts and prompt links, inspect final captures.
- [ ] Publish and verify the live page.

## Current state

Branch `codex/desktop-overflow-accents` starts from current origin/main
`d14849765e845339434c5ef0f859a4db3568bd3b`. Existing hero at 1366x768 measures
1366x1099.34 because a short-height override disables the viewport fit. The
later `.shell` width rule also overrides the header's auto width at 1025px and
1200px. No horizontal document overflow reproduced at tested desktop sizes.
The reproduced photo-fit and header issues are corrected. No clarification was received during implementation; the checks below verify these concrete fixes.

## Audit log

1. Patrick requested a desktop overflow correction, Claude's own colors and
   more accent use. Preserve the selected composition and actual photograph.
2. Measure and fix the actual layout rules rather than hiding overflow.
3. Keep Claude's terracotta background with dark text for contrast. Use a
   deeper related terracotta for text links and small accent text; keep the
   Codex button monochrome. Native prompt destinations remain unchanged.
4. In short desktop windows, place the complete photograph beside the copy
   in the existing 1:.618 proportion. This prevents both image cropping and
   pushing the controls below a viewport-height image. Tall desktop windows
   retain the approved headline-over-wall composition.

## Proportions and checks

The dominant relationship remains the complete real photo and its supporting
copy. Keep the existing image aspect ratio and Fibonacci spacing tokens:
55px touch targets, 21px logo/padding, 13px gaps. Final measured fit, contrast
and responsive evidence will be recorded here.

## Final local verification

Production build and exact provider prompt checks passed. Mouse and keyboard targets were intercepted before native launch; no app opened or prompt sent. Copy, denied clipboard, JavaScript-disabled fallback, enlarged text and reduced motion passed. Complete photo fit, stable right-side header placement, title separation and zero horizontal overflow passed at 13 desktop sizes from 1025x720 to 1920x1080, including the short-height breakpoint and 1920x500. Final mobile, tablet, desktop and laptop captures were visually inspected.

Claude text contrast is 5.39:1, hover 6.56:1. Accent text is 6.78:1 on white and 6.23:1 on the light section background. All touched source files remain below 150 lines.

| Viewport | Complete photo | Axis fill x / y | Photo area / remaining area |
| --- | --- | --- | --- |
| 390x844 | 390.00x313.86 | 100.0% / 37.2% | 37.2% / 62.8% |
| 820x1180 | 820.00x659.92 | 100.0% / 55.9% | 55.9% / 44.1% |
| 1440x1000 | 1242.55x999.98 | 86.3% / 100.0% | 86.3% / 13.7% |
| 1366x768 | 844.25x679.44 | 61.8% / 88.5% | 54.7% / 45.3% |

Remaining area means outside the photo rectangle. Short desktops use the existing 1:.618 split: 61.8% photo column and 38.2% copy column. Reviewed evidence lives in this chats Codex artifact directory under `launch/desktop-overflow-accents/`.
