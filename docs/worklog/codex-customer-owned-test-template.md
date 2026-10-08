# Customer-owned onboarding template

Date: 2026-10-08
Branch: codex/customer-owned-test-template

## Objective

Let customers try a genuine held PR and human-signed receipt using sample code in their own GitHub account before exposing an application repository.

## Scope and dependencies

Companion to permission-protocol/app branch `codex/customer-onboarding-journey`.
The app pins this reviewed template's Git tree for its one-per-workspace sample repository allowance. Merge this template change before enabling that app flow; update the pin if template content changes during review.

## Changes

- Replace the unsupported `.pp-policy.yml` with a supported `.permission-protocol.yml` protected-path policy for the harmless onboarding note and sample billing code.
- Remove both workflows, including the old deploy-gate v1 workflow requiring a secret. Customer-owned test copies have no deployment automation or production credentials.
- Explain native template creation, visibility, repository selection, App-pinned branch rules, deliberate signing, manual recovery, cleanup without merging, and continuation to a real repository.

## Validation

- From the app worktree: `node node_modules/typescript/bin/tsc --project .preview/sandbox-template/tsconfig.json --noEmit` passed.
- Manual inspection confirms the new policy uses the app's supported v1 format and the onboarding path matches its safe test recipe.
- The template's existing echo-only lint/test scripts were not treated as validation.
- No customer installation, external test PR, branch-protection change or deployment was performed.

## Impact and risks

The normal webhook, policy, signer and scoped receipt flow remains authoritative. Installing the App alone does not protect a branch. Test receipt scope cannot authorize a different repository or commit; a receipt does not establish a merge or deployment. Copies of the previous template are deliberately not eligible for the new allowance pin.
