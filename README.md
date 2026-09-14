# GBSA Scoreboard

Scoreboard / bracket app for the **GBSA — Gladiator Band Spikeball Association** (Hialeah Gardens High School band). This is a spikeball scoring app, not pickleball, despite how it gets remembered.

## What's here

Two build targets from the same app:

- **`index.html`** — the standalone single-file version. Open it directly in a browser; no build step, no server.
- **Lakebed capsule** — `client/index.tsx` (UI), `server/index.ts` (actions/storage), `shared/appHtml.ts` (shared HTML shell). Built and deployed with the Lakebed CLI.

## Live deploy

- https://quiet-field-97b8b1e0ad.lakebed.app — an **anonymous** Lakebed deploy (deploy id `dep_wOeH7BjqC1vkZB3h`). Anonymous deploys expire unless claimed with the token in `.lakebed/deploy.json`.

`.lakebed/` and `.herenow/` are gitignored on purpose: both contain deploy/publish state including claim tokens. Rebuild or re-deploy from the source files above instead of committing that state.
