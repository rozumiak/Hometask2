/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                yellow150: "rgb(224, 235, 166)",
                blue60: "#e8eaf5",
                yellow160: "#faff93",
            },
        },
    },
    plugins: [],
};
