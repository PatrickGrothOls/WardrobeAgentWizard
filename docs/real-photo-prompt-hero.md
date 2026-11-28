# Real-photo hero and direct prompt handoff

## Scope

Patrick approved the real-photo “Made for this room” direction and requested the
prompt-insert call to action. Implement that hero using the photo-only derivative
and real HTML text. Connect the primary action directly to the existing prefilled
ChatGPT desktop chat; retain copy and readable-prompt fallbacks for other agents.
Keep the page free of cards and generated wardrobe imagery.

## Work packages

- [x] Inspect current source, approved photo and existing native handoff.
- [x] Build the approved photographic hero with a working prompt-insert CTA.
- [x] Check clipboard/fallback behavior and existing model routes.
- [x] Capture and inspect phone, tablet and desktop; check adjacent sizes.
- [ ] Publish and verify the live page and handoff targets.

## Current state

Branch `codex/real-photo-prompt-hero` starts from fresh origin/main
`2097bfbd02c7f8145a0a8168ddc684850fdd88bb`. The approved photo-only derivative is
1168x940. Implementation and local checks are complete; publication is pending. No image generation is used in this pass.

## Design and interaction basis

Preserve the selected photographic composition: headline at 89/940 of image height
and 34/1168 from its right edge. Title size follows 70/1168 of displayed width.
The hero fits the whole photo within the first desktop viewport, with no cover
crop, mask, frame or raised surface. At tablet/phone sizes, put the copy below the
photo so the wardrobe remains visible and controls retain 55px touch targets.
Use the existing 13/21/34/55/89px spacing family. Keep the supporting before photo;
the finished photo already has the main stage and need not be repeated.

Both launch links receive the exact same encoded starter prompt. Pressing the
button opens a fresh desktop chat; the visitor sends it. No prompt is submitted
by this page. A separate link leads to the existing copy/read setup flow.

## Audit log

1. Patrick selected the authentic photo treatment, then requested the prompt-insert
   call to action. This authorizes implementation of the selected composition and
   direct handoff rather than another image-only mockup.
2. Verified local application metadata: installed ChatGPT desktop registers the
   existing `codex` URL scheme. Preserve its already-tested `new?prompt=` route;
   do not invent an undocumented universal-agent or web-prefill route.
3. Use the approved original-derived image, not the generated style reference or
   baked-in presentation text. Original wardrobe and contents are retained. The
   edit recipe records crop, perspective/colour cleanup and 1.332% cloned wall edge.

## Verification and proportions

Production build passed. Existing large model-chunk warning is unchanged. Privacy
scan: zero findings. Actual click and keyboard targets resolve to the same encoded
starter prompt as the setup launch link. Other-agent scroll, real clipboard copy,
denied-clipboard selected-text fallback and JavaScript-disabled readable-prompt
fallback passed. Legacy exploded-model routing passed. No new chat was launched
and no prompt sent by these browser tests; the existing native route is reused.

Checks at 760/761, 1024/1025 and a short 1440x700 viewport had no overflow. Phone
and desktop checks with 200% text passed; enlarged text uses copy below the photo.
Reduced-motion behavior passed. Final phone, tablet, desktop, small, landscape
and full-page captures were opened and reviewed. This is Chrome viewport proof,
not physical-device or Safari acceptance.

The approved photo composition takes precedence over a generic whitespace ratio.
Desktop uses the full photograph with the selected title inset (89/940 vertically,
34/1168 horizontally) and title scale (70/1168 of image width). All controls remain
at least 55px tall. No clipping, cover crop, masks, frames or content cards. For
short wide windows, the image may scroll at natural aspect ratio to keep overlaid
controls away from the furniture. Small layouts move copy below the image.

| Viewport | Full photo pixels | Photo width / height fill | Photo area / viewport | Outside photo bounds | CTA top / height |
| --- | --- | --- | --- | --- | --- |
| 390x844 | 390.00x313.86 | 100.0% / 37.2% | 37.2% | 62.8% | 522.95px / 55px |
| 820x1180 | 820.00x659.92 | 100.0% / 55.9% | 55.9% | 44.1% | 899.02px / 55px |
| 1440x1000 | 1242.55x999.98 | 86.3% / 100.0% | 86.3% | 13.7% | 304.39px / 55px |

The complementary area is outside the image rectangle, not estimated text ink or actual page whitespace. The entire 1168x940 approved photo is preserved in every layout. All touched code files are below the 150-line review threshold.
