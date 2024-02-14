# Next.js Starter Kit

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=nextjs,ts,tailwind)](https://skillicons.dev)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: conventional_commits](https://img.shields.io/badge/semantic--release-conventional_commits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

A lightweight and simple Next.js starter kit. Made to simplify and accelerate your Next.js project set up. This Next.js starter kit is configured to use Typescript and Tailwind CSS.

By [@anaryaputra](https://www.anaryaindika.com/)

</div>

## Features

- Find problems in your codes.
- Format your codes to follow [Airbnb Javascript](https://github.com/airbnb/javascript) and [Airbnb Typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) style guide.
- Automatically sort and group imports.
- Automatically sort Tailwind CSS classes.
- Lint your codes before making commit.
- Lint your commit message to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guideline.
- Provide assistance to make commit message.
- Automate release workflow on push to main branch or by dispatching the workflow, including determine the next version number strictly following the [Semantic Versioning](https://semver.org/) and generate changelog.

## Dependecies In Summary

This starter kit is equipped with:

- Next.js 14 with App Router.
- React 18.
- Typescript.
- Tailwind CSS.
- ESLint.
- Prettier.
- Husky.
- Commitizen.
- Commitlint.
- Lint-staged.

## Use This Starter Kit

### 1. Create repository from this starter kit

1. Click 'Use this template' button in this starter kit repository main page.
   ![Alt text](https://docs.github.com/assets/cb-77734/mw-1440/images/help/repository/use-this-template-button.webp)

2. Select 'Create a new repository'.

For more detailed how to create repository from a template, visit [create a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

### 2. Clone the created repository

### 3. Go to the project directory

```bash
  cd your_project_path
```

### 4. Install dependencies.

```bash
  pnpm install
```

### 5. Run the development server.

```bash
  pnpm run dev
```

## Committing

This starter kit is using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) message guidelines. Make sure your commit message follow the guidelines. To make things easier, you can use Commitizen to help you create a commit by running this command.

```bash
  pnpm run cz-commit
```

## Versioning

This starter kit uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) and [Github Actions](https://docs.github.com/en/actions) for automating your release workflow. It follows the [Semantic Versioning](https://semver.org/) guidelines for releasing version number.

## Customizing

### Customizing Style Guide

By default, this starter kit uses Airbnb Style Guide. If you want to turn off the style guide or use another style guide, follow steps below.

1. Go to [.eslintrc.js](.eslintrc.js) file.
2. Comment or remove "airbnb" and "airbnb-typescript" from extends.

### Customizing Import Sort and Group

To customize the order and group of import modules, edit Simple Import Sort rules in [.eslintrc.js](.eslintrc.js) file to your preferences.

### Customizing Pre-Commit Workflow

To customize the pre-commit workflow, edit [pre-commit](.husky/pre-commit) to your preferences.

### Customizing Release Workflow

To customize the release workflow, edit [release.yml](.github/workflows/release.yml) and [release.config.js](release.config.js) to your preferences.
