## SET UP


### VS Code
Download: https://code.visualstudio.com/

Extensions (install inside VS Code):
- Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Browse more extensions: https://marketplace.visualstudio.com/VSCode

---

### Node.js
Download: https://nodejs.org/en

- Click the **LTS** version (recommended for most users)
- Run the installer and click through with the defaults
- Confirm it worked — open your terminal and run:

```text
node --version
```
You should see a version number, for example: `v22.17.0`


---

### Git


Download: https://git-scm.com/

**Mac:**
1. Check if you have homebrew installed. Run `brew --version`
2. Download [homebrew](https://brew.sh/) if you don't have it already
3. Then run `brew install git`
4. Run `git --version` again to confirm

**Windows:**
1. Download from https://git-scm.com/ and run the installer
2. Click through the defaults with one exception — when asked to choose a default editor, select **Visual Studio Code**
3. Finish the install
4. Open VS Code, then open the terminal
5. Click the dropdown arrow next to the `+` in the terminal panel → select **Git Bash** → set it as the default profile
6. Run `git --version` to confirm


### Git global config (everyone does this — Mac and Windows)
Tell Git who you are. Use the same email as your GitHub account:

```bash
git config --global user.name "FirstName LastName"
git config --global user.email "yourEmail@example.com"
```
IMPORTANT: Use the same email as your GitHub account.
Good to know: To override for a specific repo, run the same commands without `--global` inside that repo's folder.

This only needs to be done once per computer.

---


### GitHub account

1. Go to https://github.com and create a free account
2. Use the same email you used in the git config step above


### Personal Access Token (PAT)

GitHub requires a token instead of your password for git operations. You only set this up once.

1. Log into GitHub and go to **Settings** (click your profile photo → Settings)
2. Scroll down and click **Developer settings** (bottom of the left sidebar)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name (e.g. "my laptop")
6. Set expiration to **No expiration** (or 90 days if you prefer)
7. Check the **repo** checkbox under scopes and all admin access
8. Click **Generate token** at the bottom
9. **Copy the token now — you won't be able to see it again**

When you push to GitHub for the first time, Git will ask for your username and password:
- Username: your GitHub username (this is your handle, not your email)
- Password: paste your PAT (not your GitHub account password)

Your computer will save it automatically after the first time — you won't be asked again.


### SSH (optional - if you did PAT, you don't need this)

step by step guide:

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
