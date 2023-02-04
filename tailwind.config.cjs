/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xxsm: "250px",
            xsm: "360px",
            sm: "600px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        // colors: {
        //     primary: "green",
        // },
        extend: {},
    },
    plugins: [],
};
