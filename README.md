# Schema Editor

Italia OpenAPI Schema Editor devoped on [Swagger Editor](https://github.com/swagger-api/swagger-editor).

This repository uses [PNPM](https://pnpm.io) for packages management and [changesets](https://github.com/changesets/changesets) for monorepo versioning and publishing.

<div align="center">

![Build Status](https://github.com/par-tec/dati-semantic-schema-editor/actions/workflows/ci.yml/badge.svg)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

</div>

## Table of contents

- 💻 [Usage](#usage)
- 📋 [Development](#development)
- 📝 [Contributing](#contributing)
- ⚖️ [License](#license)

## Usage

To use Italia Schema Editor all you need to do is installing the `@italia/schema-editor` plugin and than use as follow:

XXX

## Development

### Installation

Ensure to have installed [PNPM](https://pnpm.io/installation) package manager.

Install node modules by running

```bash
pnpm install
```

### Running

Then simply execute

```bash
pnpm dev
```

to start all packages in development mode.

### Versioning and publishing

When developing a new feature or performing a new bugfix the version of the package(s) must be increased.
In order to process this correctly perform the following steps:

- Run `pnpm changeset` in the root of app in order to create a markdown containing the changes.

- Commit the generated files that are inside `.changeset` folder

- When the changesets files reach the "baseBranch" (actually "main"), a github action will generate a new PR with updated packages versions. Review the PR and approve merge.

- Once the PR is merged into the baseBranch, a github action will publish packages automatically.

## Contributing

Please, see [CONTRIBUTING.md](CONTRIBUTING.md) for more details on:

- using [pre-commit](CONTRIBUTING.md#pre-commit);
- following the git flow and making good [pull requests](CONTRIBUTING.md#making-a-pr).

## License

BSD 3-Clause License © [LICENSE](LICENSE)
