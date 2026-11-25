# GitHub Pages entry point for WardrobeAgentWizard

## Scope

Branch `codex/agent-landing-page` starts at public `origin/main`
`c672fa5f64316a6fff27692822111bbb1d9a3633`. Make the Pages root explain the
real wardrobe project and hand visitors into their own AI agent. Preserve the
interactive CAD showcase and keep the repository directly accessible for HN.

## Work packages

- [x] Inspect existing Pages source, distribution instructions and approved media.
- [x] Verify GitHub Markdown strips desktop protocol links and requires an HTTPS handoff.
- [x] Build the landing page, agent launcher and copy-prompt fallback.
- [x] Preserve the existing model viewer and old exploded-view links.
- [x] Update the README entry point without removing its starter prompt.
- [x] Check responsive rendering, launch behavior, copy fallback and build output.
- [ ] Publish and verify the public Pages result.

## Current state

Source is isolated from the archive and existing worktrees. The built page uses
optimized copies of Patrick's before/finished photos and flat-pack evidence;
originals remain in Codex media. The existing interactive model lives at
`model.html`. Old root assembled/exploded query links redirect there.

Local verification is complete; publication is pending. The README has a linked
launch badge while retaining its visible starter prompt. No dependency or model
geometry changes were needed.

No analytics service is enabled. Pages can use a separate analytics service for
private page-view, referrer and button-event reporting; this is separate from
repo traffic and the existing version-only private download Form. No analytics
account, database, dashboard or tracking fields are created by this branch.

## Design and proportions

Retain the film's navy blueprint and orange accent. The dominant desktop hero
relationship is 38.2% introduction to 61.8% photo evidence; mobile stacks those
areas. Base body text is 16px, lead 21px, headings 42px and major display 68px
(42 times phi). Spacing uses 8, 13, 21, 34, 55 and 89px tokens. Interactive
targets use a minimum 55px height. Capture actual responsive measurements after
implementation. Keep copy and the photo readable instead of forcing whitespace.

### Rendered measurements, 2026-11-25

| Chrome viewport | Hero columns | Column shares | Actual photo width | Horizontal overflow |
| --- | --- | --- | --- | --- |
| 390 x 844 | 348px stacked | 100% | 348px | None |
| 820 x 1180 | 274.234px / 443.75px | 38.2% / 61.8% | 443.75px | None |
| 1440 x 1000 | 486.984px / 788.016px | 38.2% / 61.8% | 610px cap | None |

The grid ratio describes the introduction/photo tracks, not a whole-page
whitespace target. Desktop hero tracks occupy 88.5% of viewport width; the
55px track gap and two 55px margins occupy 11.5%. Body/lead/display sizes are
16/21/68px; tablet display is 34px and phone display 42px. Images retain their
original proportions. The 610px photo cap preserves legibility and visible
actions on ordinary desktop screens.

Final captures of the actual built page were opened and inspected at all three
sizes using temporary headless Chrome with a fresh profile. They are saved in
the chat's `launch/agent-landing-page/` artifact directory with measurements.
An additional phone capture verifies the start panel. These are browser-size
checks, not physical-phone or Safari verification.

### Verification

- Production build passed; the pre-existing large 3D chunk warning remains.
- Viewer tests: 89 passed, 0 failed.
- Private-file scan: 0 findings. Production npm audit: 0 vulnerabilities.
- Actual landing controller checks passed for encoded prompt, clipboard-denied
  fallback and old exploded-view routing.
- The desktop button opened ChatGPT and filled the exact prompt; it was not sent.
- The Copy button reported success after awaiting the clipboard write.
- Existing viewer loaded, applied the exploded query, switched to assembled,
  and displayed the doors when toggled.
- Vite preview adds gzip Content-Encoding to the already-compressed model;
  a plain static preview avoids double decompression and matches Pages serving.

## Audit log

1. Patrick requires the workflow to live inside each customer's AI agent. The
   site introduces and launches it; no furniture designer or account flow is
   added to the page.
2. Patrick distinguished HN's repository audience from consumer forums. Keep
   direct source/setup links prominent and preserve both distribution routes.
3. GitHub's actual Markdown API stripped the desktop custom-protocol link on
   2026-11-25. Use a normal HTTPS Pages link from the README, with a native
   desktop launch action and visible prompt fallback on the page.
4. Use only the documented desktop prefill route. Do not claim universal mobile
   deep-link support or a completed installation from a launch-button click.
5. Existing model previews are digital examples and not the finished white
   wardrobe. Label both honestly and preserve the viewer's qualification notes.
6. Completed the authorized landing/README route using four optimized image
   derivatives. The 3D payload is loaded only on the separate viewer route.
7. Verified the native desktop handoff and copy action without sending a prompt
   or starting an installation. No HN submission or external outreach was made.
