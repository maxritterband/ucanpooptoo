# UCanPoopToo — modernized site

A modernized rebuild of ucanpooptoo.com, a free educational resource for parents of
children with encopresis. Plain static HTML/CSS/JS — no build step, no framework —
ready for GitHub Pages.

## Structure

```
ucanpooptoo/
├── index.html                ← What is Encopresis? (home)
├── possible-causes.html
├── parent-tips.html          ← Tips for Parents (index linking all posts below)
├── faq.html
├── find-a-pediatric-gi.html
├── resources.html
│
├── <60 rebuilt blog posts>   ← every original post, faithfully reformatted:
│     • 24 tip / "Encopresis Expert" posts (linked from parent-tips.html)
│     • 30 research-citation pages
│     • research index pages, solution, disclaimers
│
└── assets/
    ├── css/styles.css        ← whole design system (edit variables at top to re-skin)
    ├── js/main.js            ← mobile menu + auto year
    ├── img/                  ← logo, hero photo, post images
    └── media/                ← 44 audio recordings (the Expert Chat .mp3s)
```

## How the blog archive works
There's no database. Each old post is its own static page built on the shared shell,
and `parent-tips.html` is a hand-coded list linking to them. Audio recordings play
via native HTML5 `<audio>` players. All cross-links between posts were rewritten to
the new flat filenames so they resolve on the new site.

## Deploy on GitHub Pages
Upload the **contents** of this folder to the repo root (so `index.html` and `assets/`
sit side by side), then Settings → Pages → Deploy from branch → main / root.

## Editing
- Colors/fonts: variables at the top of `assets/css/styles.css`
- Add a post to the index: add an `<li><a href="slug.html">Title</a></li>` in `parent-tips.html`
