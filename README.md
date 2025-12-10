# Nandan MR — Portfolio

This repository contains a small multi-page portfolio site for Nandan MR. It includes:

- `index.html` — homepage (projects, skills, contact)
- `resume.html` — printable resume
- `about.html` — short bio
- `assets/css/styles.css` — styles
- `assets/js/script.js` — small jQuery helpers

Preview locally
---------------
Open `index.html` in a browser directly, or run a simple HTTP server (recommended):

PowerShell (if Python 3 installed):

```powershell
python -m http.server 8000
# then open http://localhost:8000/
```

Hosting (GitHub Pages)
----------------------
1. Create a repository on GitHub and push this project.
2. Option A — GitHub Pages (manual):
   - In repository settings, enable GitHub Pages and choose the `main` branch (or `gh-pages` if you prefer).
3. Option B — Automatic (GitHub Actions):
   - A sample workflow `.github/workflows/deploy.yml` is included; push to GitHub and the action will deploy to `gh-pages` branch.

Hosting (Netlify)
-----------------
- Drag & drop the project folder or connect the GitHub repository to Netlify and deploy — Netlify will serve `portfolio.html` at the site root.

Notes
-----
- This site uses jQuery from CDN. If you need an entirely offline setup, replace CDN script with a local copy.
- Want me to push and configure GitHub Pages for you? I can create a git remote and push if you provide the repository URL or give me permission to run git commands locally.
