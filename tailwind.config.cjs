const colors = require('tailwindcss/colors');
require('tailwindcss/plugin');

module.exports = {
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    plugins: [require('@tailwindcss/line-clamp')],
    purge: ['./src/**/*.svelte'],
    theme: {
        colors: {
            ...colors,
            gray: colors.warmGray,
            green: colors.lime,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
};
