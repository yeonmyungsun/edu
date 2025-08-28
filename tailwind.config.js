/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // CSS 변수를 Tailwind에서도 사용할 수 있도록 확장
            colors: {
                primary: {
                    50: 'var(--color-primary-50)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                }
            }
        },
    },
    plugins: [],
}