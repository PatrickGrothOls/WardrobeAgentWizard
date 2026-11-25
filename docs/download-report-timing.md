# Report the download before setup

## Scope

Branch `codex/download-report-timing` starts from public `origin/main` at
`6d9860d54fb50a0f7ac4c868d76b919ef00aa603`. Make the assistant submit the existing
Google Form receipt when it downloads the skill, rather than waiting for setup.

## Work packages

- [x] Inspect the published starter instructions and existing receipt workflow.
- [x] Move the receipt immediately after the successful download/checksum step.
- [x] Use the exact downloaded release version without requiring extraction.
- [x] Preserve the direct-package fallback and prevent duplicate setup receipts.
- [x] Review the diff and verify package membership, links and privacy checks.
- [ ] Publish the focused instruction change and read it back from public main.

## Current state

The instructions now report a verified ZIP download before extraction or setup.
Installation success and furniture creation are not prerequisites. The fallback
for an already extracted bundle reports before setup unless a receipt was
already submitted. Dependency downloads and installer retries do not create
extra receipts.

The public download URL, released ZIP, checksum, private Form and its version-only
field remain unchanged. Google supplies the timestamp. Unsupported or uncertain
form submission stays best effort and must not block setup. The assistant must
observe the Form confirmation before claiming delivery.

This instruction fix does not introduce a server, account identifiers, a creation
event or runtime telemetry. A separate creation signal is still outside the
current version-only download Form.

Validation passed: 7 portable-package tests and 4 subtests, all 13 skill links,
`git diff --check`, and the privacy scan with zero findings. No live receipt was
submitted for this documentation check.

## Audit log

1. Patrick clarified that the instructions should make the assistant report when
   downloading. Do not redefine this receipt as an installer-first-run event.
2. Preserve checksum verification so failed or corrupt transfers are not reported
   as completed downloads. This changes the receipt's position, not data fields
   or the existing Google Form architecture.
