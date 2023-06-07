const defaultTheme = require("tailwindcss/defaultTheme");
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inria Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6366f1",
          secondary: "#4040ed",
          accent: "#ae40f2",
          "base-100": "#ffffff",
          neutral: "#14151b",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },

  plugins: [daisyui],
};

module.exports = config;
