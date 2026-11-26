# Editorial site publication

## Scope

Publish the image-led editorial redesign without changing the existing viewer,
private download receipts or issue-reporting workflow. Source branch:
`codex/editorial-wardrobe-site`. Publication branch: `codex/editorial-pages-publish`.

## Tasks

- [x] Build and inspect the redesign at phone, tablet and desktop sizes.
- [x] Verify starter handoff, clipboard fallback and old model links.
- [x] Prepare production output and the self-hosted font licence.
- [ ] Publish and verify public bytes and browser behavior.

## Current state

Reviewed production output is prepared. Exact source revision is recorded in
`build-info.json`. No analytics, dependencies or database changes are included.

## Audit log

1. Patrick requested image generation and a portfolio aesthetic. Source and
   publication use new worktrees; existing work and previous assets are retained.
2. Production output includes only deployable page files, images, font and licences.
