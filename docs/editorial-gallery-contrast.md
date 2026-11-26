# Editorial gallery text contrast

## Scope

Complete the final accessibility review of the editorial redesign. Branch
`codex/editorial-gallery-contrast` starts from the merged design on origin/main.

## Tasks

- [x] Measure the small gallery label against its background.
- [x] Darken the contextual accent without changing the page composition.
- [x] Build and recapture phone, tablet and desktop layouts.
- [ ] Publish and verify the final public stylesheet.

## Current state

The gallery accent was 3.22:1 against its sage background. The contextual accent
is now #8f2416, measuring 4.68:1. This also fixes its hovered text link. The
primary action remains 4.60:1. Starter logic, model geometry and layout are unchanged.

## Audit log

1. The final numerical check found a real small-text contrast failure. Correct it
   as part of the authorized design review; preserve the selected visual direction.
