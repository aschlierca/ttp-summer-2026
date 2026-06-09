# Assignment 04: Git Collaborative Workflow

## Goal

Practice the team-based Git workflow used on engineering teams: pull latest `main`, branch from `main`, commit focused changes, push a feature branch, open a pull request, review teammate code, merge, delete the branch, and pull again. You will practice this workflow while building a small DOM-powered classroom tool.

## Objectives

You will practice:

- Cloning a shared repository.
- Adding collaborators.
- Creating GitHub issues from user stories.
- Creating one feature branch per issue.
- Keeping local `main` in sync with remote `main`.
- Opening pull requests with useful descriptions.
- Linking PRs to issues with `closes #`.
- Reviewing teammate pull requests.
- Resolving small merge conflicts.
- Using event handling and DOM manipulation in a shared codebase.
- Deploying the final project with GitHub Pages.

## Problem

In groups of two or three, build **Team Task Board**, a lightweight task tracker for workshop work. The app should let users add tasks, move tasks between columns, filter visible tasks, and update counts.

Create or use a shared repository with:

```text
team-task-board/
  index.html
  styles.css
  script.js
  README.md
  .gitignore
```

One teammate should create the repository and add the others as collaborators. Everyone should clone the same repository.

## Required Interface

The app must include:

- [ ] A valid HTML document.
- [ ] A linked `styles.css`.
- [ ] A linked `script.js` using `defer`.
- [ ] A form for adding a task.
- [ ] Inputs for task title, owner, and priority.
- [ ] Three columns: `To Do`, `In Progress`, and `Done`.
- [ ] A visible count for each column.
- [ ] A filter control for priority or owner.
- [ ] Buttons on each task to move it forward, move it backward, and delete it.

Use fictional names and safe placeholder data.

## GitHub Setup

Before coding:

- [ ] Create the repository on GitHub.
- [ ] Add all teammates as collaborators.
- [ ] Create a GitHub Project board or use GitHub Issues directly.
- [ ] Create one issue for each user story below.
- [ ] Assign each issue to a teammate.
- [ ] Add labels such as `html`, `css`, `javascript`, `bug`, or `enhancement`.

## User Stories

Convert these into GitHub issues:

- [ ] As a user, I can view a three-column task board.
- [ ] As a user, I can submit a form to add a new task.
- [ ] As a user, I can move a task from To Do to In Progress.
- [ ] As a user, I can move a task from In Progress to Done.
- [ ] As a user, I can move a task backward if its status changes.
- [ ] As a user, I can delete a task.
- [ ] As a user, I can see task counts update when the board changes.
- [ ] As a user, I can filter tasks by priority or owner.
- [ ] As a user, I can use the app on a mobile-width screen.

## Required Team Workflow

For every issue, follow this loop:

```bash
git switch main
git pull
git switch -c feature/readable-issue-name
# make changes
git status
git diff
git add .
git commit -m "type: short useful message"
git push -u origin feature/readable-issue-name
```

Then on GitHub:

- [ ] Open a pull request.
- [ ] Include `closes #<issue-number>` in the PR description.
- [ ] Explain what changed.
- [ ] Explain how to test it.
- [ ] Request a review from a teammate.
- [ ] Wait for review before merging.
- [ ] Merge the PR.
- [ ] Delete the remote branch.

Then locally:

```bash
git switch main
git pull
```

Do not start the next feature from an outdated `main`.

## JavaScript Requirements

In `script.js`:

- [ ] Store tasks in an array of objects.
- [ ] Each task should have `id`, `title`, `owner`, `priority`, and `status`.
- [ ] Render tasks from the array.
- [ ] Use `createElement()` and `textContent` for user-entered text.
- [ ] Add a `submit` listener to the form.
- [ ] Use `event.preventDefault()` on form submit.
- [ ] Use event delegation on the board container for task action buttons.
- [ ] Use `event.target` or `.closest("button")` to detect the clicked action.
- [ ] Update the data array first, then re-render the board.
- [ ] Update counts after every render.

## Collaboration Checkpoints

During the workshop, complete these collaboration actions:

- [ ] Each teammate opens at least one pull request.
- [ ] Each teammate reviews at least one teammate's pull request.
- [ ] At least one PR receives a requested change before merge.
- [ ] At least one issue is closed automatically by a merged PR.
- [ ] The team resolves at least one small conflict intentionally or naturally.

For the conflict practice, two teammates may both edit the same line in `README.md`, then resolve the conflict together in VS Code. Commit the resolution with a message like:

```text
chore: resolve README conflict
```

## Pull Request Template

Use this structure in each PR description:

```md
## What

Briefly describe the change.

## Why

Closes #issue-number.

## How to test

1. Pull the branch.
2. Open `index.html`.
3. Try the user behavior.

## Screenshots

Add screenshots for visible UI changes.
```

## Common Gotchas

- Pull before branching. This prevents many avoidable conflicts.
- Branches should be short-lived and tied to one issue.
- `main` should stay deployable.
- If you forget `closes #`, the issue will not auto-close.
- If a teammate merged changes, your local `main` does not know until you pull.
- Event delegation works because events bubble from child elements to parent elements.
- `event.target` may be a nested span or icon later. `.closest("button")` is safer.
- Do not attach a new listener to every task on every render.
- Do not use `innerHTML` with user-submitted task titles.

## Industry Standards

- Make small PRs.
- Review code, not the person.
- Distinguish blockers from small suggestions.
- Respond to every review comment.
- Include testing steps in PR descriptions.
- Keep secrets and local-only files out of the repository.
- Use branch names that communicate intent, such as `feature/add-task-form` or `fix/mobile-board-layout`.
- Keep shared `main` clean. Avoid force pushing shared branches.

## Stretch Challenges

If your team finishes early:

- [ ] Save tasks to `localStorage`.
- [ ] Add priority badges with distinct styles.
- [ ] Add keyboard support: pressing `Escape` clears the form.
- [ ] Add a search input for task titles.
- [ ] Disable impossible actions, such as moving a To Do task backward.
- [ ] Add a short animated transition when a task changes columns.
- [ ] Add branch protection to require PRs before merging into `main`.

## Finished Checklist

Before submitting, verify:

- [ ] The app works locally.
- [ ] The app is deployed with GitHub Pages.
- [ ] Every teammate has contributed commits.
- [ ] Every teammate has reviewed a pull request.
- [ ] Issues are linked to pull requests.
- [ ] The repository history shows feature branches and focused commits.
- [ ] The final `main` branch contains the completed app.
- [ ] The README includes project description, team members, setup steps, and deployed URL.
