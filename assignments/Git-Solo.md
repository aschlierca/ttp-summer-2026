# Assignment 03: Git Solo Workflow

## Goal

Practice the solo Git workflow from project creation through deployment. You will initialize a local repository, make small commits, connect to GitHub, use branches and pull requests, link issues, and deploy a static site with GitHub Pages.

## Objectives

You will practice:

- Explaining the difference between Git and GitHub.
- Moving work through the working directory, staging area, and repository.
- Using `git status` and `git diff` before committing.
- Writing focused commit messages.
- Creating a remote repository on GitHub.
- Pushing local commits to `origin`.
- Creating GitHub issues and feature branches.
- Opening and merging pull requests.
- Linking pull requests to issues with `closes #`.
- Setting up `.gitignore`.
- Deploying a static site with GitHub Pages.

## Problem

Create and deploy a small personal reference site called **Developer Field Notes**. The site should collect commands, habits, and reminders that you want available during bootcamp.

Create a local folder named `developer-field-notes` with:

```text
developer-field-notes/
  index.html
  styles.css
  README.md
  .gitignore
```

This is a Git assignment first and a web page second. The page can be simple, but your Git history should show professional habits.

Important: create this project in your personal bootcamp workspace, not inside another Git repository. If you run `git status` before `git init` and see information about an existing repository, move somewhere else before starting.

## Required Site Content

Your static page must include:

- [ ] A heading with the site name.
- [ ] A section explaining the difference between Git and GitHub.
- [ ] A section showing the daily loop: edit, stage, commit, push.
- [ ] A list of at least eight Git commands with short explanations.
- [ ] A section for "Things I should not commit" that mentions `.env`, secrets, `node_modules`, and `.DS_Store`.
- [ ] A footer with your name or GitHub username.

Your `README.md` must include:

- [ ] Project name.
- [ ] Short description.
- [ ] Link to the deployed GitHub Pages site.
- [ ] List of features.
- [ ] One thing you learned about Git.

Your `.gitignore` must include:

```text
.DS_Store
node_modules/
.env
.env.local
```

## Assignment Tasks

### Part 1: First-Time Git Check

Run these commands and confirm your setup:

- [ ] `git --version`
- [ ] `git config --global user.name`
- [ ] `git config --global user.email`
- [ ] `git config --global init.defaultBranch`

If your name, email, or default branch are missing, configure them before continuing.

### Part 2: Initialize the Repo

- [ ] Create the `developer-field-notes` folder.
- [ ] Add `index.html`, `styles.css`, `README.md`, and `.gitignore`.
- [ ] Run `git init`.
- [ ] Run `git status`.
- [ ] Stage only `.gitignore`.
- [ ] Commit it with a focused message.
- [ ] Stage and commit the initial HTML and README.
- [ ] Stage and commit the initial CSS separately.

You should have at least three commits by the end of this part.

### Part 3: Connect to GitHub

- [ ] Create a new empty repository on GitHub.
- [ ] Add it as your remote named `origin`.
- [ ] Verify the remote with `git remote -v`.
- [ ] Push your local `main` branch to GitHub.
- [ ] Refresh GitHub and confirm your files are visible.

### Part 4: Issues and Branches

Create three GitHub issues:

- [ ] Add command reference section.
- [ ] Add "do not commit" safety section.
- [ ] Improve responsive styling.

For each issue:

- [ ] Pull latest `main`.
- [ ] Create a feature branch with a readable name.
- [ ] Make the change.
- [ ] Run `git status`.
- [ ] Run `git diff`.
- [ ] Commit the change.
- [ ] Push the branch.
- [ ] Open a pull request.
- [ ] Include `closes #<issue-number>` in the PR description.
- [ ] Merge the pull request on GitHub.
- [ ] Return to local `main` and pull.

By the end, all three issues should be closed through merged PRs.

### Part 5: Inspect History

Run:

- [ ] `git log --oneline`
- [ ] `git log --oneline --graph --all`
- [ ] `git branch --all`

Take a screenshot or copy the output into a notes section in your `README.md` under a heading named `Git Practice Evidence`.

### Part 6: Deploy

Deploy the site with GitHub Pages:

- [ ] Go to repository Settings
- [ ] Click Pages in the left sidebar
- [ ] Under Build and deployment, click the Source dropdown and select Deploy from a branch
- [ ] Under Branch, select main and keep the folder as / (root)
- [ ] Click Save
- [ ] Wait a minute or two for the deployment to finish
- [ ] Refresh the page — GitHub will show you your live URL at the top
- [ ] Copy that URL and add it to your README.md
- [ ] Commit and push the README update

GitHub Pages URL format:

```text
https://<username>.github.io/<repo-name>
```

## Common Gotchas

- Git is local. GitHub is remote. They are related but not the same tool.
- `git status` tells you where you are and what Git expects next.
- A file is not in a commit just because it exists in your editor. It must be staged first.
- A commit is a snapshot of staged work, not automatically everything in your folder.
- If `git push` fails because the remote has new commits, pull before pushing.
- Do not run `git init` inside a folder that is already inside another Git repository.
- Adding a file to `.gitignore` does not untrack it if Git already tracks it.
- Never commit secrets. If a secret is pushed, consider it leaked and rotate it.

## Industry Standards

- Commit early and often.
- Keep each commit focused on one logical change.
- Read `git diff` before committing.
- Use descriptive branch names like `feature/command-reference`.
- Use PR descriptions that explain what changed, why, and how to test.
- Use `.gitignore` at the start of the project.
- Prefer `git revert` over history-rewriting commands on shared or pushed work.

## Stretch Challenges

If you finish early:

- [ ] Add screenshots to your README.
- [ ] Add a branch protection rule requiring pull requests before merging.
- [ ] Use `git add -p` to stage only part of a file.
- [ ] Add an `.env.example` file with fake placeholder values.
- [ ] Create a GitHub Project board and connect your three issues.
- [ ] Add one intentionally broken branch, then recover using `git status`, `git diff`, and `git restore`.

## Finished Checklist

Before submitting, verify:

- [ ] Your GitHub repository is public or shared with the instructional team.
- [ ] Your GitHub Pages link works.
- [ ] Your repository has multiple focused commits.
- [ ] Your three issues were closed by pull requests.
- [ ] Your `.gitignore` includes the required entries.
- [ ] Your README includes the deployed URL.
- [ ] Your work has been pushed to GitHub.
