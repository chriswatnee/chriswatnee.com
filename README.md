# chriswatnee.com

**Live: https://chriswatnee.com**

Chris Watnee's personal site. It shows his latest status from
[Status Rodeo](https://status.rodeo), the projects he's built, and a few photos.

It's a small static site built with [Eleventy](https://www.11ty.dev/), using
Nunjucks templates and plain CSS, with no framework.

## Running it locally

You need Node 22 or newer (see `.nvmrc`).

```sh
npm install
npm start
```

`npm start` serves the site at http://localhost:8080 and reloads it as you edit.
`npm run build` builds it into `_site/`.

## How it's organized

```
src/
  _data/
    site.json       site title, URL and default description
    nav.json        the links in the header nav
    projects.json   the projects on the Projects page, newest first
  _includes/
    header.njk      the shared site header and nav
    layouts/base.njk  the page layout: <head>, metadata, header
  index.njk         homepage (latest Status Rodeo status)
  projects/         Projects page
  photos/           Photos page
  css/style.css     all the styles
  js/status.js      fetches the latest status from Status Rodeo
  images/           photos
  favicon.svg
eleventy.config.mjs
```

## Common changes

**Add a project.** Add an entry to the top of `src/_data/projects.json`:

```json
{
  "name": "Project name",
  "url": "https://where-it-lives.example",
  "description": "One or two sentences on what it is.",
  "stack": "What it's built with",
  "source": "https://github.com/chriswatnee/repo"
}
```

The description can contain simple HTML such as `<code>`.

**Add a page.** Create `src/<name>/index.njk` with this front matter:

```yaml
---
layout: layouts/base.njk
title: Page name
description: One sentence for search results and link previews.
---
```

To show it in the header, add it to `src/_data/nav.json`. The nav highlights
the current page automatically.

## Deployment

The site is hosted on Cloudflare Pages (project `chriswatnee-com`), which is
connected to this repo:

- Every push to `main` deploys to production.
- Every pull request gets its own preview build, linked from the pull request.

Cloudflare builds the site with Eleventy and publishes `_site/`, using the Node
version in `.nvmrc`.

If a merged change doesn't show up on chriswatnee.com:

1. Check that Cloudflare deployed it. The commit on GitHub should have a green
   "Cloudflare Pages" check. If there's none, the push never reached Cloudflare,
   and pushing another commit to `main` triggers a new deploy.
2. If it deployed, open the page in a private window. If it's still old, purge
   the cache for the chriswatnee.com zone in the Cloudflare dashboard
   (Caching → Configuration → Purge Everything).
