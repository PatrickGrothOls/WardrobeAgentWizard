# Wardrobe site finesse

## Scope

Refine the existing calm consumer landing page with the finesse and depth Patrick
requested, using Apple product pages as a reference. Preserve the complete supplied
finished photo, existing content, model routes and agent onboarding. No new features,
tracking, database or furniture changes.

Branch `codex/wardrobe-site-finesse` starts from fresh origin/main
`41718029ab14e08015ba9b2d76ea47d1fc0c6a9b` in an isolated worktree.

## Work packages

- [x] Inspect the live source and Apple product-page reference.
- [x] Refine typography, surfaces, photograph treatment and controls.
- [x] Build and check the existing onboarding interactions.
- [x] Inspect final phone, tablet and desktop captures and adjacent sizes.
- [ ] Publish and verify public page and assets.

## Current state

The previous version is calm but visually flat: square controls, visible section
rules and one undifferentiated surface. The refinement keeps the same content and
uses system typography, softened hierarchy, a floating photographic frame, subtle
surface separation and quiet pill controls. Implementation and local verification are complete; publication is pending.

## Design basis and proportions

The dominant relationship remains the hero's 38.2/61.8 text-to-photo division.
The photograph retains its intrinsic 4:3 ratio, with no object-fit crop or image
mask. A padded rounded frame adds depth outside the full image. Supporting sections
use lighter surface separation instead of adding information or decoration.

| Token | Existing value or derivation | Purpose |
| --- | --- | --- |
| Small / medium / large gap | 13 / 21 / 34px | Internal rhythm |
| Section gap | 55 / 89px | Separation without rules |
| Heading | 55px x sqrt(phi), maximum 69.96px | Hero hierarchy |
| Section heading | 34px x sqrt(phi), maximum 43.25px | Supporting hierarchy |
| Photo surround | 8px / 13px | Full-frame presentation |
| Surface radius | 21 / 34px | Quiet separation |
| Control height | 55px | Comfortable touch target |

Reference: https://www.apple.com/macbook-air/ (reviewed 2026-11-26).
The reference informs hierarchy and materials, without copying brand assets.
Responsive measurements and verification receipts will be recorded below.

## Audit log

1. Patrick explicitly requested finesse and depth without additional complexity,
   referring to an Apple website. Keep the existing story and flow; improve the
   presentation through type, light and surface treatment.
2. Preserve the entire real photograph. Add any framing outside its pixels rather
   than changing the crop, retouching it or generating another wardrobe.

## Verification

Production build passed. The existing prompt handoff, actual clipboard copy,
permission-denied copy fallback, disclosures and legacy model redirect passed in
isolated Chrome. Keyboard disclosure, reduced motion and 200% text checks passed.
Boundary widths 760/761, 1024/1025 and 1200/1201px have no horizontal overflow.
Private-file scan returned zero findings. The existing large model-chunk build
warning is unchanged; no dependency or model changes were made.

Final mobile, tablet, desktop, 320px, landscape and full-page screenshots were
opened and inspected. This is Chrome viewport proof, not physical-device/Safari
acceptance. Both finished photos retain their full 1280x960 source at 4:3 with
no clip path. Framing and shadows sit outside the image. The system font removes
an otherwise necessary font request. No new JavaScript was added.

| Viewport | Hero text / photo tracks | Full photo pixels | Overflow |
| --- | --- | --- | --- |
| 390x844 | 348px | 332.00x249.00 | None |
| 820x1180 | 274.234px 443.75px | 417.75x313.31 | None |
| 1440x1000 | 486.984px 788.016px | 762.02x571.50 | None |

At wide sizes the hero tracks divide 38.2/61.8 after the gap. Mobile stacks these
at natural height to keep the photo complete and the controls comfortably sized.
The following is an audit of rectangular copy/frame bounds, not estimated ink
coverage. Its complementary area includes gaps and unoccupied viewport space.

| Viewport | Copy + frame / viewport area | Complementary area | Frame width / viewport | Frame height / viewport |
| --- | --- | --- | --- | --- |
| 390x844 | 60.0% | 40.0% | 89.2% | 31.4% |
| 820x1180 | 28.9% | 71.1% | 54.1% | 28.8% |
| 1440x1000 | 48.3% | 51.7% | 54.7% | 59.8% |

3. Reviewed the finished composition at all captured sizes. The supplied photograph
   stays complete, including the door, ceiling and floor. Refined native disclosure
   markers into chevrons and retained keyboard behavior.
