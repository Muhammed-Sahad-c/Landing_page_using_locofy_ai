/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "neutral-black": "#263238",
        "text-gray-300": "#d9dbe1",
        "neutral-silver": "#f5f7fa",
        forestgreen: "#4caf4f",
        "neutral-grey": "#717171",
        "neutral-d-grey": "#4d4d4d",
        gray: "#18191f",
      },
      spacing: {},
      fontFamily: {
        "body-regular-body-3": "Inter",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "17xl": "36px",
      "13xl": "32px",
      "9xl": "28px",
      "5xl": "24px",
      "45xl": "64px",
      "25xl": "44px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
