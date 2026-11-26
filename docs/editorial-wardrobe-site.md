# Editorial wardrobe site redesign

## Scope

Patrick rejected the first consumer landing page and asked for image generation
and an aesthetically accomplished graphic-design portfolio treatment of the
whole site and its sections. Preserve the existing starter-prompt handoff and
working model viewer. This is a presentation redesign, not a new furniture app.

Branch `codex/editorial-wardrobe-site` starts at current public origin/main
`b00b1d9f3d061ed63c128a7ae802a23f078f565c` in its own worktree.

## Work packages

- [x] Inspect the published source, real photography and design instructions.
- [x] Generate three distinct complete-page art directions with the built-in tool.
- [x] Save the concepts and prompts in the chat's persistent artifact directory.
- [x] Select a working direction and implement its section compositions responsively.
- [x] Preserve and verify desktop prefill, copy fallback and old model links.
- [x] Compare final phone, tablet and desktop captures against the working concept.
- [ ] Build, review and publish the redesign; verify the public result.

## Current state

Generated concepts are in `launch/editorial-redesign/` under the chat's Codex
artifact directory. A: editorial furniture magazine. B: burgundy design gallery.
C: cobalt object-design studio. A is the stated working assumption after leaving
the optional preference question open; Patrick has not explicitly selected it.
The page now follows A's editorial typography, diagonal photography and black
closing section. The existing starter controller and model route are intact.

Generated composites are concepts, not photographic evidence. Implementation
must retain the untouched real build photos as evidence and label any generated
object illustration as illustrative. No invented outcomes, testimonials or usage
statistics. No analytics or databases are added.

## Proportions and visual review

The dominant relationship is the photographic diagonal against the headline's
paper field. The photograph's rectangle occupies 50% of the desktop hero; its
40% triangular cut removes 20% of that rectangle. Visible photo area is therefore
40% of the hero and paper area 60%, close to the 38/62 reference. This mask also
keeps black typography off the photograph's dark books at tablet sizes.

| Token or relationship | Derivation / implementation |
| --- | --- |
| Spacing | 8, 13, 21, 34, 55, 89px Fibonacci tokens |
| Display ceiling | 144px Fibonacci step; fluid with available width |
| Room heading ceiling | 68px, approximately 42px times phi |
| Body / lead | 18px editorial body; 21px lead; labels at least 14px |
| Controls | At least 55px high; 21px primary-action type |
| Desktop photo | 720 / 1440px rectangle; visible area 40%; full hero height |
| Tablet photo | 410 / 820px rectangle; visible area 40%; full hero height |
| Phone | Stack; full-width photo with a shallow 13% diagonal cut |

Final production captures were opened and inspected at 390x844, 820x1180 and
1440x1000. Additional checks at 320x760, 844x390 and 761x1000 found no horizontal
overflow or clipped heading/paragraph/action bounds. The phone display measured
48.75px, tablet 74.21px, desktop 130.32px. The story and full-page compositions
were compared with concept A. Browser-size checks do not establish physical
phone or Safari acceptance.

The Inter Tight font is self-hosted, with its SIL OFL included in source and
public output. It creates no runtime request to Google Fonts. Typography and
controls live in `editorial-theme.css`; page compositions and breakpoints live
in `landing.css`. Both files remain coherent and below the 150-line review gate.

## Validation

- [x] Production build passed; unchanged large-model chunk warning remains.
- [x] Existing viewer suite: 89 tests passed, zero failed.
- [x] Inspected all three final responsive captures and the full desktop page.
- [x] Handoff/disclosure regression checks and private-file scan.
- [ ] Source publication and public byte/runtime verification.

## Audit log

1. Patrick explicitly requested a new aesthetic through image generation. Use a
   new branch from current origin/main and preserve the first publication.
2. Generated distinct whole-page architectures before writing replacement CSS;
   keep the real wardrobe recognizable in each direction.
3. Prepared the worktree and dependencies while the optional direction question
   is open. Functionality and public hosting remain unchanged at this stage.
4. Implemented A as an explicitly stated working assumption. Replaced concept
   imagery of an empty room with the real before photo; retained real part and
   finished-wardrobe evidence and the qualified separate digital example.
5. Render review found excess tablet height, overly tight type, a model-background
   seam and caption overlap. Corrected those issues and recaptured all three
   sizes. Adjusted the diagonal to protect text contrast over the real photo.
6. Browser checks passed for encoded desktop prompt, start anchor, actual clipboard
   contents, setup disclosure, old model redirect and selected-text fallback when
   clipboard permission is denied. Private-file scan: zero findings.
