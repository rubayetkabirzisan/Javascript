# JavaScript Practice Repository

This repository contains JavaScript practice files organized by day.

## Structure

- `Day 1/` through `Day 7/` — daily JavaScript exercise scripts.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run a script, for example:
   ```bash
   node "Day 1/script.js"
   ```

## Notes

- `package.json` defines the project dependencies.
- `package-lock.json` and `node_modules/` should not be committed to git.

## Fixing accidental commits

If `node_modules/` or `package-lock.json` were committed by mistake, remove them from the repository with:

```bash
git rm -r --cached node_modules
git rm --cached package-lock.json
git commit -m "Remove node_modules and package-lock from repo"
git push origin main
```

Then add them to `.gitignore` so they are not tracked in the future.
