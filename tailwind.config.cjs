const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            transitionProperty: {
                width: "width",
                widthPos: "width, left, top, bottom, right",
                forceNone: "none !important",
            },
            animation: {
                fade: "fadeIn 0.2s linear forwards",
                fadeLeftIn: "fadeLeftIn 0.25s linear forwards",
                fadeBottomUp: "fadeBottomUp 0.35s linear forwards",
            },
            animationDelay: {
                75: "75ms",
                150: "150ms",
                300: "300ms",
                500: "500ms",
                750: "750ms",
                1000: "1000ms",
            },
            keyframes: () => ({
                fadeIn: {
                    "0%": { opacity: "0%" },
                    "100%": { opacity: "100%" },
                },
                fadeLeftIn: {
                    "0%": {
                        transform: "translate(-40px, 0px)",
                        opacity: "0%",
                    },
                    "35%": {
                        transform: "translate(-24px, 0px)",
                    },
                    "50%": {
                        opacity: "40%",
                    },
                    "55%": {
                        transform: "translate(-12px, 0px)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                        opacity: "100%",
                    },
                },
                fadeBottomUp: {
                    "0%": {
                        transform: "translate(0px, 40px)",
                        opacity: "0%",
                    },
                    "35%": {
                        transform: "translate(0px, 24px)",
                    },
                    "50%": {
                        opacity: "40%",
                    },
                    "55%": {
                        transform: "translate(0px, 12px)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                        opacity: "100%",
                    },
                },
            }),
            fontFamily: {
                cascadiacode: [
                    "CascadiaCode",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    animationDelay: (value) => ({
                        animationDelay: value,
                    }),
                },
                { values: theme("animationDelay") }
            );
        }),
    ],
};
