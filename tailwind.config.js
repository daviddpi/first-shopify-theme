/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./layout/*.liquid",
        "./sections/*.liquid",
        "./snippets/*.liquid",
        "./templates/*.liquid",
        "./templates/customers/*.liquid",

    ],
    theme: {
        extend: {
            height: {
                '94': '22rem'
            }
        },
    },
    plugins: [],
}