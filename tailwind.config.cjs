/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            transitionProperty: {
                width: "width",
            },
            animation: {
                fade: "fadeIn 0.2s linear",
                fadeLeftIn: "fadeLeftIn 0.35s linear",
                fadeBottomUp: "fadeBottomUp 0.35s linear",
            },
            keyframes: () => ({
                fadeIn: {
                    "0%": { opacity: "0%" },
                    "100%": { opacity: "100%" },
                },
                fadeLeftIn: {
                    "0%": {
                        transform: "translate(-100%, 0px)",
                        opacity: "0%",
                    },
                    "35%": {
                        transform: "translate(-20%, 0px)",
                    },
                    "50%": {
                        opacity: "50%",
                    },
                    "55%": {
                        transform: "translate(-8%, 0px)",
                    },
                    "100%": {
                        transform: "translate(0%, 0px)",
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
                        transform: "translate(0px, 0%)",
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
    plugins: [],
};
