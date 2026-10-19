# chriswatnee.com

Chris Watnee's personal site, live at https://chriswatnee.com. It's a small
static site: Eleventy 3, Nunjucks templates, plain CSS and a little vanilla JS.
No framework and no build tools beyond Eleventy. Keep it that way unless asked.
Favor plain, readable code over cleverness.

## Commands

- `npm start`: dev server at http://localhost:8080, with live reload
- `npm run build`: build into `_site/`

There are no tests or linters. Before finishing a change, run `npm run build`
and check the affected pages in the browser, at desktop width and at phone
width (the CSS breakpoint is 600px).

## Layout

- `src/_data/site.json`: site title, URL, default meta description
- `src/_data/nav.json`: header nav links. GitHub is always added last, in
  `header.njk`
- `src/_data/projects.json`: Projects page entries, newest first
- `src/_includes/header.njk`: the shared header. It marks the current page
  with `<span class="current-page" aria-current="page">` instead of a link
- `src/_includes/layouts/base.njk`: every page uses this layout. It builds
  `<title>` as "Page — Chris Watnee" from the page's `title` (the homepage has
  no `title`, so it's just "Chris Watnee"), and the description and Open Graph
  tags from the page's `description`, falling back to `site.json`
- `src/js/status.js`: the homepage fetches the latest status from
  `https://status.rodeo/api/users/chris/status` (the Status Rodeo project,
  github.com/chriswatnee/status-rodeo)
- Passthrough copies (`css`, `images`, `js`, `favicon.svg`) are listed in
  `eleventy.config.mjs`. A new static folder or file needs adding there

## Conventions

- Every page sets `layout`, `title` and `description` in front matter.
  Pages don't write their own header.
- Adding a project means adding an entry to the top of `projects.json`, not
  editing the Projects page. Fields: `name`, `url`, `description` (may contain
  simple HTML like `<code>`), `stack`, `source`. Describe the project in plain
  words, from its own README.
- Styles all live in `src/css/style.css`. Reuse the existing card style
  (`.status`, `.project`: 1px #ddd border, 12px radius) for boxed content.
- Keep the README's "How it's organized" and "Common changes" sections current
  when the structure changes.

## Workflow and deployment

- Work on a branch and open a pull request. Don't push to `main` directly
  unless asked.
- Cloudflare Pages (project `chriswatnee-com`) builds a preview for every pull
  request, and deploys every push to `main` to production.
- If a merge doesn't show up on the live site: first check that the merge
  commit has a "Cloudflare Pages" check on GitHub (if not, the push never
  reached Cloudflare; an empty commit on `main` retriggers it). If it deployed
  but the page is still old, the chriswatnee.com zone's cache needs purging in
  the Cloudflare dashboard.
