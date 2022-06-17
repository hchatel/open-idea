import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: {
            optimizeDeps: {
                include: ['svelte-hero-icons'],
            },
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

export default config;
