# UCanPoopToo — modernized site

A modernized rebuild of [ucanpooptoo.com](http://www.ucanpooptoo.com), a free
educational resource for parents of children with encopresis. Plain static
HTML/CSS/JS — no build step, no framework — so it drops straight onto GitHub Pages.

## Pages (6 total)

| Page | File |
|---|---|
| What is Encopresis? (home) | `index.html` |
| Possible Causes | `possible-causes.html` |
| Tips for Parents | `parent-tips.html` |
| FAQ | `faq.html` |
| Find a Pediatric GI | `find-a-pediatric-gi.html` |
| Resources | `resources.html` |

## File structure

```
ucanpooptoo/
├── index.html
├── possible-causes.html
├── parent-tips.html
├── faq.html
├── find-a-pediatric-gi.html
├── resources.html
├── assets/
│   ├── css/styles.css   ← whole design system (edit the variables at the top to re-skin)
│   ├── js/main.js       ← mobile menu toggle + auto copyright year
│   └── img/             ← logo.png, nih-logo.gif
└── README.md
```

The header, footer, and navigation are identical on every page, so the site
feels like one consistent whole.

## Preview locally

Double-click `index.html`, or run a small server for a truer preview:

```
cd ucanpooptoo
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages  ← (this is the step that fixes the "unstyled" problem)

The whole point: `index.html` and the `assets` folder must sit **at the repo root**,
side by side. If they're missing or buried in an extra folder, the page loads with
no styling.

1. In your repo: **Add file → Upload files**.
2. Open the extracted `ucanpooptoo` folder and drag the items *inside* it
   (all the `.html` files **and** the `assets` folder) into the upload box together —
   not the `.zip`, and not the outer folder.
3. Commit.
4. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
5. After a minute it's live at `https://<your-username>.github.io/<repo>/`.

Your repo's file list should look exactly like the structure above.

## Editing / "vibe coding"

- **Colors & fonts site-wide:** edit the variables at the top of `assets/css/styles.css`.
- **Wording:** edit the text in each `.html` file.
- **FAQ:** each question is a `<details>` block in `faq.html`.

Tell me what to change and I'll hand back updated files.
