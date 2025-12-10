module.exports = {
    content: [
        "./index.html",
        "./**/*.html",
        "./**/*.js",
        "./components/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["HelveticaNeueW23", "sans-serif"],
            },
            colors: {
                primary: "#FF7A00",
                black: "#000",
                white: "#fff",
                grayLight: "#F5F5F5",
                grayText: "#4d4d4d",
                border: "#E5E5E5"
            },
            boxShadow: {
                card: "0 6px 18px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [],
};
