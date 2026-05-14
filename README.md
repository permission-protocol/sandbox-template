# Permission Protocol Sandbox Template

This is a public sandbox repository for trying Permission Protocol without putting a real production repo at risk.

The repo looks like a small Node billing service: it has a billing API entrypoint in `src/api/billing.ts`, a database migration in `migrations/`, API docs in `docs/`, and GitHub workflows that make the pull request checks feel real. The point is to show the Permission Protocol activation loop quickly: AI can move fast, but consequential changes still need explicit human authority.

## What This Demonstrates

Permission Protocol reads `.pp-policy.yml` and applies the required GitHub check:

- `docs/**`, markdown files, and `src/lib/utils.ts` are safe paths that auto-clear when tests pass.
- `.github/workflows/**`, `migrations/**`, and `src/api/billing.ts` are protected paths that require a human signer.
- blocked patterns like unsafe migrations or hardcoded secrets are denied until the diff is fixed.

The required check appears in GitHub as **Permission Protocol**. The API status context is `permission-protocol/approval`.

## Demo Pull Requests

Sandbox onboarding creates two AI-authored PRs from `pp-demo-bot`:

- `docs: clarify API auth flow` touches `docs/api.md` only, so it auto-clears.
- `feat: add staging deploy trigger` touches `.github/workflows/permission-protocol.yml` and `src/api/billing.ts`, so it is held for signing.

After signing the held PR, you get your first authority receipt and the GitHub check turns green. That is the "speed with brakes" moment: routine AI changes keep moving, but changes to deploy, billing, and migrations require a named human decision.

## Files To Notice

- `.pp-policy.yml` is the starter policy you edit as your rules mature.
- `.github/workflows/permission-protocol.yml` installs the Permission Protocol gate.
- `src/api/billing.ts` is intentionally protected because billing logic is consequential.
- `migrations/` is protected because schema changes need rollback discipline.
- `docs/api.md` is intentionally safe so documentation-only PRs can move quickly.

## Try It

Use this repository as a template, connect it from the Permission Protocol dashboard, and follow the sandbox flow. Once the aha lands, graduate to a real repository from the dashboard and keep the same policy shape.

## Why This Exists

AI-generated pull requests should not force teams to choose between speed and control. Permission Protocol gives teams a visible approval layer for consequential agent work, with receipts that prove who authorized what.

Learn more at [permissionprotocol.com](https://permissionprotocol.com).
