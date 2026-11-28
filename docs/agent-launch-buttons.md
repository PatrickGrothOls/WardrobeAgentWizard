# Claude and Codex launch buttons

## Scope

Replace the single agent CTA with two equally weighted, logo-labelled launch
buttons. Preserve the approved real photograph, composition, starter prompt,
copy fallback and model routes. No analytics or database changes.

## Work packages

- [x] Confirm the existing Codex handoff and documented Claude Cowork handoff.
- [x] Add two provider buttons to the hero and setup section.
- [x] Build and exercise both prompt targets, keyboard and copy fallbacks.
- [x] Capture and inspect phone, tablet and desktop after the final change.
- [ ] Publish and verify the public build.

## Current state

Isolated branch `codex/agent-launch-buttons` starts at current origin/main
`4e2a065248eb6217958e0ce851bfa0e7167ad734`. Implementation, build and local
browser checks passed. Final captures visually reviewed; publication pending.

## Audit log

1. Patrick requested two buttons, each with its own logo: Claude and Codex.
   This directly authorizes replacing the single launcher while preserving
   the approved page.
2. Use `claude://cowork/new?q=...` for the filesystem-capable Claude surface.
   [Anthropic documents this as a prefilled, unsent Cowork composer](https://support.claude.com/en/articles/14729294-open-claude-desktop-with-a-link).
   Keep the already verified `codex://new?prompt=...` destination for Codex.
3. Provider symbols are identification on the two destinations. Claude SVG is
   from Simple Icons (CC0); Codex SVG from Lobe Icons (MIT, licence included).
   No provider logos are used as product branding.

## Proportions and verification

The approved full photograph remains the dominant mass. Equal button heights
and matching padding express equal choices. Reuse existing Fibonacci tokens:
55px tap targets, 21px logo and horizontal padding, 8px icon gap, 13px button
gap. Responsive measurements and reviewed captures will be recorded here.

| Viewport | Photo dimensions | Photo fill x / y | Photo area / remaining area | Two buttons |
| --- | --- | --- | --- | --- |
| 390x844 | 390x313.86 | 100% / 37.2% | 37.2% / 62.8% | 124.91x55 and 120.33x55 |
| 820x1180 | 820x659.92 | 100% / 55.9% | 55.9% / 44.1% | 124.91x55 and 120.33x55 |
| 1440x1000 | 1242.55x999.98 | 86.3% / 100% | 86.3% / 13.7% | 124.91x55 and 120.33x55 |

The remaining area is outside the photograph, not a measurement of text ink.
Both controls share the same 55px height, 21px padding and 13px gap. The full
1168x940 approved image retains its ratio without clipping.

Chrome checks covered exact encoded prompts in all four links, actual mouse
and keyboard targets intercepted before native launch, loaded logos, actual
clipboard copying, denied clipboard and JavaScript-disabled fallback,
320px width, landscape, adjacent breakpoints, 200% text and reduced motion.
All passed. Build passed with the existing model chunk size notice. Touched
source files are below 150 lines. No native app was launched or prompt sent;
these checks establish the link targets, not fresh native-app acceptance.

Reviewed captures and measurements are in the Codex artifact directory
`launch/agent-launch-buttons/` for this chat. No source media changed.
