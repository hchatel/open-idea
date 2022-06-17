module.exports = {
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
    },
    plugins: ['svelte3', '@typescript-eslint'],
    root: true,
    rules: {
        // Typescript
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-use-before-define': [1],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.svelte'],
        },
        'svelte3/typescript': true,
    },
};