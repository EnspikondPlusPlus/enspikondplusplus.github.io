# Agent Guidelines for al-folio (v1.x)

**This file is the authoritative entry point for coding agents working in this repo.** Read it before making any change. It is intentionally short and tool-neutral; it links to the one place each longer-form fact lives.

This repo is a **personal site built from the `al-folio` v1.x template**, not the upstream starter. The demo content, the starter test suite (`test/`), and the maintainer workflows have been removed; what is left is a single about page. All runtime — layouts, includes, Sass, Liquid tags, filters, feature JS — still lives in versioned gems published under [`al-org-dev`](https://github.com/al-org-dev), so the routing rules below still apply. The `docs/` guides were written for the upstream starter and have not been re-scoped.

## Route your change

Find your change on the left; edit only what is on the right.

| Your change                                                                                                              | Goes in                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Dependency pin, plugin activation, feature flag                                                                          | this repo: `Gemfile` **and** `_config.yml` (both — see below)                                                 |
| Site content and data files                                                                                              | this repo: `_pages`, `_data`                                                                                  |
| Documentation                                                                                                            | this repo: `docs/` (long-form) or this file (agent rules)                                                     |
| A layout, include, or Sass partial                                                                                       | the owning gem — start with `al_folio_core`                                                                   |
| A Liquid tag or filter, or what a tag renders                                                                            | the gem that registers it — see the [delegation table](docs/ARCHITECTURE.md#wrapper-to-tag-to-gem-delegation) |
| Feature behavior (search, math, charts, comments, cookies, icons, CV, distill, analytics, images, newsletter, citations) | that feature's gem — see [`docs/BOUNDARIES.md`](docs/BOUNDARIES.md)                                           |
| Component/unit test for gem-owned behavior                                                                               | the owning gem, not here                                                                                      |
| A feature with no existing owner                                                                                         | open a plugin proposal issue first, then a standalone plugin repo                                             |

[`docs/BOUNDARIES.md`](docs/BOUNDARIES.md) is the authoritative area-to-gem table. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) explains how the pieces connect.

## Stop sign

**If your change would create any of these paths in this repo, it belongs in a gem instead:**

```
_layouts/   _includes/   _sass/   _scripts/   assets/tailwind/   tailwind.config.js   assets/webfonts/
```

Prefer config and content over shadowing gem files, and never add a local Tailwind or CSS build pipeline here. Unlike the upstream starter, **this repo is a personal site, so a deliberate local override is legal** — if config and content genuinely cannot express the change, shadow the gem-owned path and record it with `bundle exec al-folio upgrade overrides audit`. See [local overrides: your site vs. this repo](docs/ARCHITECTURE.md#local-overrides-your-site-vs-this-repo).

(The `npm run lint:style-contract` check that used to enforce this was removed along with `test/`.)

## Three failures that produce no error message

Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md#failure-modes-that-produce-no-error-message) for the full explanation. The short version:

1. **Features fail silently.** A feature renders only when its gem is loaded _and_ its flag is on _and_ the page opts in. Otherwise the Liquid tag emits an empty string — no warning, no error.
2. **`Gemfile` and `_config.yml` are two lists that must agree.** A plugin in only one of them is inert. Adding or removing a plugin means editing both. Repo dirs use hyphens (`al-folio-core`); gem/plugin ids use underscores (`al_folio_core`).
3. **This site's baseurl is empty and must stay that way.** It is published as a user page at `https://enspikondplusplus.github.io`, so `_config.yml` keeps `baseurl:` present but blank and a plain `bundle exec jekyll build` is correct — that is what `deploy.yml` runs. Passing `--baseurl /al-folio` (as the upstream docs do) would render every asset and link one path segment too low. Dev server is at `http://localhost:4000/`.

## Validated local command set

Run from the repo root, in this order:

```bash
bundle install
npm ci
npm run lint:prettier
bundle exec jekyll build
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
docker compose up -d
curl -fsS http://127.0.0.1:8080/ >/dev/null
docker compose logs --tail=80
docker compose down
```

CI runs `deploy.yml`, `prettier.yml` and `upgrade-check.yml`; nothing else. Docker notes: `bin/entry_point.sh` serves from container-local `/tmp/_site` to avoid host bind-mount write deadlocks, and it runs `git restore Gemfile.lock` on start — commit `Gemfile.lock` changes before bringing the container up, or they will be discarded.

## Before you open a PR

- Keep site work here; route runtime behavior to the owning plugin repo.
- Run `npm run lint:prettier` (Prettier with `@shopify/prettier-plugin-liquid`, `printWidth: 150`). `npx prettier . --write` fixes formatting.
- Keep docs aligned with v1 ownership, and keep each fact in one place — link rather than restate.
- If you create or keep local overrides of plugin-owned files, run `bundle exec al-folio upgrade overrides audit` and commit `.al-folio-overrides.yml` after review.

## Further reading

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how the starter and gems fit together, silent failure modes, the v1 config contract, local overrides.
- [`docs/BOUNDARIES.md`](docs/BOUNDARIES.md) — authoritative area-to-gem ownership table and PR triage playbook.
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) — contributor workflow and agent tooling.
- [`docs/README.md`](docs/README.md) — index of all user and maintainer guides.
- `.agents/skills/al-folio-bootstrap/SKILL.md` — new-site setup workflow.
- `.agents/skills/al-folio-v1-migration/SKILL.md` — customized-fork migration and override drift auditing.
- `.codex/skills` and `.claude/skills` are symlinks to `.agents/skills` for agent-specific discovery.
