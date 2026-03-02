# repo-template-web-cms-next

Generalized CMS-driven site template using Next.js and TypeScript.

## Status
- Stage: Draft
- Owner: <Owner>
- License: <License Name>
- Visibility: Public | Private | Internal
- Reason: <Why this visibility level is correct>
- Promotion criteria to Public: <What must be true before public release>

## What This Project Is
- A provider-agnostic CMS frontend skeleton.
- Includes neutral content contracts and adapter boundaries.

## Use This Template

1. Click **Use this template** on GitHub to create a new repository.
2. Rename package/module identifiers and update ownership metadata.
3. Review `.env.example` and update environment configuration for your target project.
4. Run validation and CI checks before first release.

## Quickstart

### Prerequisites
- Node.js 20+
- pnpm 10+

### Install
```bash
pnpm install
```

### Run
```bash
pnpm dev
```

### Checks
```bash
pnpm lint
pnpm test
pnpm typecheck
```

## Documentation
- [Overview](docs/overview.md)
- [Architecture](docs/architecture.md)
- [ADRs](docs/adr/)
- [Doctrine Snapshot](docs/doctrine/README.md)

## Validation
```bash
bash tools/validate-template.sh core
bash tools/validate-template.sh advisory
```

## Contributing
See `CONTRIBUTING.md`.
