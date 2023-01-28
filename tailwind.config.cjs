/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        30: "repeat(30, minmax(0, 1fr))",
      },
      fontSize: {
        "2xs": [
          "0.6rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        timetable:
          "0 16px 20px -18px rgb(0 0 0 / 0.4), 0 28px 18px -6px rgb(0 0 0 / 0.2)",
        tab: "0 0px 16px -6px rgb(0 0 0 / 0.2), 0 16px 16px -12px rgb(0 0 0 / 0.4)",
        corner: "inset 2px -2px 5px -6px rgb(0 0 0 / 0.5)",
        button:"0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.2)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
