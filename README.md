# Permission Protocol test repository

Sample content only. This repository has no deployment workflows and needs no
production credentials. Create your own copy with GitHub's **Use this template**
button; Permission Protocol never needs organization membership or a repository
creation token.

## Choose visibility

A public copy contains only these samples. GitHub Free supports required checks
on public repositories. Private copies require GitHub Pro, Team, or Enterprise
Cloud for rulesets. Choose explicitly; Permission Protocol never changes visibility.
[GitHub plan requirements](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Try a real hold

1. Return to your Permission Protocol workspace's Overview or Protection page.
2. Install the GitHub App using **Only select repositories**, selecting this copy.
   Organization owners may need to approve access. Signing into PP, installing
   the App, selecting a repository, and becoming an eligible signer are separate steps.
3. Import the App-pinned required-check ruleset supplied by Protection for your
   default branch. Template creation and installation do not create protections.
   Have PP read GitHub to verify the configuration.
4. Choose **Create my first test PR**. The harmless change adds
   `.github/permission-protocol-onboarding.md` on a disposable branch. The example
   `.permission-protocol.yml` requires a human signature for that path.
5. Observe the pending required check before signing. Review the exact commit and
   policy reason in PP, sign with your eligible account and passkey, and inspect
   the receipt. Check GitHub again to verify the same commit's result.
6. **Close the test PR without merging.** Do not enable auto-merge. A receipt
   records a decision; it does not prove a merge or deployment occurred.

To create the PR manually, add that Markdown file with this one line on a **new
branch**, then open a non-draft PR against your default branch:

```text
Permission Protocol onboarding check. Close this pull request after verification.
```

Return to Protection and check the PR. The normal webhook, policy, signing,
receipt, and App status paths process it.

## Continue with your application

Choose **Protect a real repository** in the same PP workspace. Add that repository
through GitHub, review its own policy and signers, verify its required check, and
run a fresh disposable approval flow. This test receipt authorizes only its exact
repository and commit. It never establishes protection for your application.

Keep this copy for experiments, or delete it yourself through GitHub settings when
you no longer need it. Repository deletion is a separate destructive owner action;
PP does not delete customer repositories.
