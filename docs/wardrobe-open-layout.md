# Open wardrobe landing layout

## Scope

Patrick rejected the card treatment. Remove boxed sections, photographic surrounds,
surface shadows and beveled controls while preserving the full photograph, content,
typography and onboarding. Use open composition and full-width tonal sections.
No new features, tracking, data or model changes.

## Work packages

- [x] Inspect the current source and identify every card-like wrapper.
- [x] Remove the wrappers and decorative depth from the landing page.
- [x] Build, inspect phone/tablet/desktop captures and check handoff behavior.
- [ ] Publish and verify the live page.

## Current state

Branch `codex/wardrobe-open-layout` starts from fresh origin/main
`eecf4a06963c13c19381b2f14c4833a3435b4e6a`. Implementation and local checks are complete; public verification is pending.
Existing media and other source branches are preserved.

## Composition

Keep the wide hero's 38.2/61.8 text-to-photograph division and its 55/89px spacing.
The real photo remains 4:3, unmasked and uncropped. Story images retain their
0.5625:1 width division to have equal height without cropping. Retain 13/21/34px
internal spacing and 55px controls. Gray section backgrounds span the viewport;
there are no rounded content containers, borders or framed image surfaces.

## Audit log

1. Patrick explicitly said no cards. Remove this treatment from the hero photo,
   story, model image and onboarding, rather than only reducing corner radii.
2. Preserve the refined type and existing content. Separate sections with broad,
   quiet tonal shifts and whitespace instead of floating boxes.
3. A fresh checkout initially failed due to disk space. Removed only generated
   dependencies and build output from this conversation's completed calm preview.
   Reused the current preview's identical locked dependency installation via a
   local ignored symlink; source and media were retained.

## Verification and proportions

Production build passed. Existing prompt prefill, clipboard contents, permission-
denied selected-text fallback, disclosure and legacy model routing checks passed.
The private-file scan returned zero findings. Dependency inputs and model output
are unchanged. No JavaScript was added. The existing large model-chunk warning
remains. All edited code files are below the 150-line review threshold.

Final phone, tablet, desktop, 320px, landscape and desktop full-page captures were
opened and reviewed. Both finished photo placements retain 1280x960 at 4:3, without
clipping. Across all captured sizes the hero-photo link, story grid, model image
link and onboarding container have no background, padding, corner radius or shadow.
Full-width backgrounds provide section separation. This is Chrome browser-size
verification, not physical-device or Safari acceptance.

The 38.2/61.8 hero division is retained; 13/21/34/55/89px existing spacing is used.
The table audits copy/photo bounding rectangles, not estimated text ink coverage.
Its complementary area includes gaps and unoccupied viewport space.

| Viewport | Hero text / photo tracks | Full photo | Copy + photo / viewport | Complement | Photo width / height fill |
| --- | --- | --- | --- | --- | --- |
| 390x844 | 348px | 348.00x261.00 | 59.5% | 40.5% | 89.2% / 30.9% |
| 820x1180 | 274.234px 443.75px | 443.75x332.81 | 28.6% | 71.4% | 54.1% / 28.2% |
| 1440x1000 | 486.984px 788.016px | 788.02x591.00 | 47.9% | 52.1% | 54.7% / 59.1% |
