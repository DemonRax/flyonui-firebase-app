const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flyonui/flyonui.js'],
    plugins: [
        require('flyonui'),
        require('flyonui/plugin'),
        addDynamicIconSelectors(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
                ],
            },
        },
    },
    flyonui: {
        themes: ['dark', 'light', 'luxury'],
        // themes: ['dark', 'light', 'gourmet', 'corporate', 'luxury', 'soft'],
    },
};
