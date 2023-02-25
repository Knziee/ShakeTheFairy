/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        // screens: {
        //     "3xl": "@media not all and (min-width: 1800px)",
        // },
        extend: {
            keyframes: {
                float: {
                    "0%": {
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        transform: "translatey(-10px)",
                    },
                    "100%": {
                        transform: "translatey(0px)",
                    },
                },
                shake: {
                    "0%": {
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        transform: "translatey(-30px)",
                    },
                    "100%": {
                        transform: "translatey(0px)",
                    },
                },
                shakePomu: {
                    "0%": {
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        transform: "translatey(-50px) ",
                    },
                    "100%": {
                        transform: "translatey(0px) ",
                    },
                },
            },
            animation: {
                floating: "float 3s ease-in-out infinite",
                shaking: "shake 0.1s  infinite",
                shakingPomu: "shakePomu 0.10s  infinite",
            },
        },
    },
    plugins: [],
};
