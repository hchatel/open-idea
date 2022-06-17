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

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## SvelteKit : Good to know

### Add module import alias

To add nome new folder route alias, first add it into `svelte.config.cjs`

```js
const config = {
    kit: {
        vite: {
            resolve: {
                alias: {
                    $components: path.resolve('./src/components'),
                    $models: path.resolve('./src/models'),
                    $screens: path.resolve('./src/screens'),
                    $utils: path.resolve('./src/utils'),
                },
            },
        },
    },
};
```

For Typescript project, also add it into `tsconfig.json` and make sure it matches previously defined aliases.

```json
{
    "compilerOptions": {
        // ...
        "paths": {
            "$components": ["src/components/index"],
            "$components/*": ["src/components/*"],
            "$lib": ["src/lib"],
            "$lib/*": ["src/lib/*"],
            "$models/*": ["src/models/*"],
            "$screens": ["src/screens"],
            "$screens/*": ["src/screens/*"],
            "$utils/*": ["src/utils/*"]
        }
    }
}
```

# TODO

Fix `yarn lint` and `yarn check`
