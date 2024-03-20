import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Raleway Variable', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                bg: '#0c0c0c',
                fg: '#121212',
            },
        },
    },
    plugins: [],
}
