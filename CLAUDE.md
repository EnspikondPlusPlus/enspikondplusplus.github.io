# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

`AGENTS.md` (imported above) is the **authoritative** agent entry point: change routing, the stop sign for gem-owned paths, the three silent failure modes, and the validated command set. Keep it short and ecosystem-neutral. Cross-repo architecture — the wrapper/tag/gem delegation table, feature gating, the v1 config contract, local overrides — lives in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md); area-to-gem ownership lives in [`docs/BOUNDARIES.md`](docs/BOUNDARIES.md).

**Read those three before editing anything.** Everything below is Claude-specific or longer-form operational detail that does not belong in the short entry point. Do not restate facts from those files here — link to them.

## Daily dev loop

```bash
bundle install                                # ruby gems
bundle exec jekyll serve                      # dev server → http://localhost:4000/  (baseurl is blank here)
bundle exec jekyll build                      # production-style build to _site/
bundle exec al-folio upgrade apply --safe     # deterministic codemods (font-weight-* → font-*, remote→local URLs)
bundle exec al-folio upgrade overrides diff <path>    # then `overrides accept <path>` to acknowledge an override
```

The site is a single about page ([`_pages/about.md`](_pages/about.md), served at `/`) plus a 404 page. Re-enabling a feature that was stripped out (blog, publications, projects, CV, search, comments, …) means adding its gem back to **both** the `Gemfile` and the `plugins:` list in `_config.yml`, restoring the relevant config block, and adding the content collection — see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Optional toolchains

- **Responsive images.** `imagemagick.enabled: true` needs ImageMagick `convert` on `PATH`. Without it the build still succeeds; the `.webp` variants are just missing.
- **Manual deploy.** `bin/deploy` is the manual `gh-pages` build + purgecss + force-push path; CI normally deploys. `purgecss` is not a devDependency — install it with `npm install -g purgecss`.
- **No Python toolchain.** The Jupyter, RenderCV and Scholar-citation paths were removed along with their plugins, scripts and workflows.

## Docker serving model (v1-specific)

`docker compose up -d` bind-mounts the repo to `/srv/jekyll` and runs `bin/entry_point.sh`, which serves with `--force_polling --destination /tmp/_site`. The build output deliberately goes to **container-local `/tmp/_site`, not the bind-mounted `_site`** — writing `_site` back across the host bind mount caused write deadlocks. The container also `inotifywait`s `_config.yml` and restarts Jekyll on change (config edits aren't hot-reloaded by `--watch`). Verify with `curl -fsS http://127.0.0.1:8080/` (baseurl is blank on this site). `docker-compose-slim.yml` pulls a prebuilt `:slim` image instead of building locally.

**`bin/entry_point.sh` runs `git restore Gemfile.lock` on every (re)start.** Uncommitted `Gemfile.lock` changes are silently discarded — commit them before `docker compose up`, or re-run `bundle install` inside the container afterwards.

## CI gates

Three workflows remain; the starter's test suite and the maintainer automation (unit tests, visual regression, axe, link checkers, CodeQL, lighthouse, TOC/citation/screenshot bots, Docker image publishing) were deleted with the demo content.

- `deploy.yml` — production build (`JEKYLL_ENV=production bundle exec jekyll build`, blank baseurl) plus purgecss, then pushes `_site` to `gh-pages`. This is the one that matters.
- `prettier.yml` — Prettier with `@shopify/prettier-plugin-liquid` and `printWidth: 150`. Run `npm run lint:prettier` before pushing; `npx prettier . --write` fixes.
- `upgrade-check.yml` — `bundle exec al-folio upgrade audit`, on changes to `_config.yml`, `_data/`, `_pages/`, `assets/`, or the `Gemfile`.

## Gem version pins

`Gemfile` pins every `al-*` gem to an exact released version in `group :al_folio_plugins`, and `_config.yml` lists the same gems under `plugins:`. Only the gems this one-page site needs are still listed; note that gems in `group :jekyll_plugins` are auto-required by Bundler, so deactivating one of those means deleting it from the `Gemfile` too. `jekyll-scholar` is the exception that must stay: `al_folio_core`'s `page.liquid` and `post.liquid` reference `{% bibliography %}`, and Liquid parses untaken branches, so removing it breaks every page. Read the current pins from the `Gemfile` rather than trusting any version quoted in prose — including here. To test a gem fix against this site, repoint the `Gemfile` at a sibling checkout (`path:`, `git:`, or `branch:`) and `bundle install`; see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md#working-on-a-gem-alongside-the-starter). Revert the pin before committing.
