# UCanPoopToo — modernized site

A modernized rebuild of [ucanpooptoo.com](http://www.ucanpooptoo.com), a free
educational resource for parents of children with encopresis. Plain static
HTML/CSS/JS — no build step, no framework — so it drops straight onto GitHub Pages.

## What's here so far

```
ucanpooptoo/
├── index.html              ← Home ("What is Encopresis?")  ✅ done
├── assets/
│   ├── css/styles.css      ← the whole design system (edit variables at the top to re-skin)
│   ├── js/main.js          ← mobile menu toggle + auto copyright year
│   └── img/
│       ├── logo.png        ← original UCanPoopToo logo
│       └── nih-logo.gif    ← NIH funding logo (footer)
└── README.md
```

The header, footer, and nav are the shared "shell." When we build the other
pages, we copy that shell and drop in each page's content, so everything stays
consistent.

## Preview it locally

Just double-click `index.html`, or for a closer-to-real preview run a tiny server:

```
cd ucanpooptoo
python3 -m http.server 8000
# then open http://localhost:8000
```

## Put it on GitHub Pages

1. Create a repo (e.g. `ucanpooptoo`) and push these files to it.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → branch `main`, folder `/ (root)` → Save.
3. After a minute it's live at `https://<your-username>.github.io/ucanpooptoo/`.

(When you connect your real domain later, you'd add a `CNAME` file — we can do that when you're ready.)

## How to edit / "vibe code"

- **Change colors or fonts site-wide:** edit the variables at the top of `assets/css/styles.css`.
- **Change wording:** edit the text directly in the `.html` files.
- **Add a page:** copy an existing page, swap the `<main>` content, keep the header/footer.

Tell me what to change and I'll hand back updated files.

## Pages still to build

Mapped from the original site (faithful structure, modernized):

| Page | New file |
|---|---|
| Possible Causes | `possible-causes.html` |
| The Solution | `solution.html` |
| Find a Pediatric GI | `find-a-pediatric-gi.html` |
| Other Resources | `other-resources.html` |
| Tips for Parents (hub) | `parent-tips.html` |
| Proper Toilet Sitting | `proper-toilet-sitting.html` |
| Legs Need to Reach the Floor | `legs-need-to-reach-the-floor.html` |
| Tips for Laxative Use | `tips-for-laxative-use.html` |
| Tips for Taking Trips | `tips-for-taking-trips.html` |
| Treat Encopresis as a Team | `treat-as-a-team.html` |
| Working with Schools (504 Plan) | `working-with-schools-504.html` |
| Still Having Accidents? | `still-having-accidents.html` |
| Research Articles | `research-articles.html` |
| Clinical Trials | `clinical-trials.html` |
| FAQ | `faq.html` |
| Full Disclaimer | `disclaimer.html` |

The original also has dozens of individual research-citation pages and archived
"expert chat" transcripts — we can fold those into the Research section or
rebuild them later.
