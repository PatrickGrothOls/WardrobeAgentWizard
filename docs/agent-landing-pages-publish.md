# Agent landing page publication

## Scope

Publish the reviewed landing page while preserving the interactive model, old
query links, licenses and existing Pages documentation. Source branch:
`codex/agent-landing-page`. Publication branch: `codex/agent-landing-pages-publish`.

## Tasks

- [x] Build and verify the landing page and preserved viewer.
- [x] Copy only production output; exclude responsive QA fixtures.
- [x] Preserve current Pages assets, licenses and documentation.
- [ ] Publish to gh-pages and verify the public page and model route.

## Current state

Production output is prepared from the reviewed source commit recorded in
`build-info.json`. No analytics service is installed. Publication is pending.

## Audit log

1. Patrick approved a Pages introduction and agent handoff, with GitHub directly
   available to technical audiences. Existing viewer content is preserved.
2. Used a new worktree from current origin/gh-pages; did not overwrite the existing
   showcase worktree or delete prior assets. QA fixtures are excluded.
