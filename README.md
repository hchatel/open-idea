# Open Idea

## Overview

This project is powered by [SvelteKit](https://kit.svelte.dev), along with:

-   [Typescript](https://www.typescriptlang.org/), the strongly typed programming language that builds on JavaScript
-   [Tailwind](https://tailwindcss.com/), the utility-first CSS framework
-   [Svelte Forms](https://svelte-forms-lib-sapper-docs), Formik inspired library for building forms easily in a Svelte project

## Getting started

### Fetch project codebase

To fetch this repo locally, run :

```bash
$ git@github.com:hchatel/open-idea.git
$ cd open-idea
```

### Install dependencies

```bash
$ yarn install
```

### Run the project locally

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

### Building the project

To create a production version of your app:

```bash
yarn build
```

You can preview the built app with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
