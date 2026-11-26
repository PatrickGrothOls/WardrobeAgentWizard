# Calmer wardrobe site and complete finished photograph

## Scope

Patrick supplied a new finished-wardrobe photograph and explicitly requested that
it not be cut off. He also requested more simplicity and calm. Use the complete
image in the hero and after state; simplify the existing page rather than adding
another art direction. Keep the starter prompt, copy fallback and model links.

Branch `codex/calm-wardrobe-site` starts from current origin/main
`579496f759de3c2e33da00a2eb9f44656f0517a8` in a new isolated worktree.

## Work packages

- [x] Inspect the current page, supplied photograph and existing launch behavior.
- [x] Preserve the original photo and create a full-frame web derivative.
- [x] Simplify type, image framing, section colours and repeated content.
- [x] Verify the complete photo at phone, tablet and desktop sizes.
- [x] Verify the starter/copy fallback and preserved model routing.
- [ ] Publish and verify the public files and behavior.

## Current state

Original photo is preserved in the chat's `launch/calm-wardrobe-site/` artifact
directory. The new web derivative remains 1280x960, including the full original
frame. Existing photos and originals are retained. No generative retouching,
cropping, analytics, furniture geometry or database changes are included.

Implementation and local checks are complete; publication is pending. Removed
the diagonal masks, decorative slash, oversized display weight, colour-block
backgrounds and repeated workshop section. The photo opens at its full resolution
when selected. The copyable starter prompt and model route are unchanged.

## Design basis

The complete photograph is the dominant visual. Use a 38.2/61.8 text/photo grid
at wide sizes and a stacked layout on phones. Body text stays readable; headings
step down to the 34/55px range with lighter weight. Existing 8/13/21/34/55/89px
spacing tokens provide a quieter rhythm. Photos use their intrinsic aspect
ratios with no clipping, forced cover boxes or text overlays. Keep one light
page background and a restrained primary action.

## Verification and proportions

| Chrome viewport | Hero text / photo tracks | Full photo rendering | Horizontal overflow |
| --- | --- | --- | --- |
| 390x844 | Stacked, 348px | 348x261px | None |
| 820x1180 | 274.234 / 443.75px | 443.75x332.813px | None |
| 1440x1000 | 486.984 / 788.016px | 788.016x591px | None |

The wide hero tracks divide available width 38.2/61.8. Before/after image widths
divide 0.5625/1 to match their portrait/landscape proportions at the same height
without cropping either. The supplied photograph remains exactly 4:3 in both
uses at every tested size. Image and figure clip paths are `none`.

Final phone, tablet, desktop, 320px and landscape captures were inspected, plus a
full desktop page. These are browser-size checks, not physical-device or Safari
acceptance. Body text is 18px, section headings 34px, main heading at most 55px,
labels 14px, controls at least 55px high. Spacing retains the existing Fibonacci
tokens. Text contrast measures 14.19:1 for body and 5.57:1 for secondary copy;
the secondary button boundary measures 3.51:1.

Production build and actual browser handoff checks passed: encoded desktop
prompt, start anchor, clipboard contents, setup disclosure, old exploded-model
redirect, and denied-clipboard selected-text fallback. Private-file scan: zero
findings. No dependency inputs or furniture logic changed.

## Audit log

1. Patrick explicitly chose the new photo and prohibited cutting it off. Replace
   final-result imagery and social preview while keeping its entire frame.
2. Interpret calm as reduced type weight/scale, straight image edges, fewer colour
   shifts and less repeated storytelling. Preserve onboarding behavior.
3. Confirmed the entire 1280x960 source frame survives web optimization and both
   rendered placements. Compared all responsive views; no framing adjustment is
   needed. Kept the old photo assets for existing links and rollback.
