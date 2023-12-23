/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        vsm: "600px",
        vmd: "700px",
      },
      colors: {
        primary: "#9E00FF",
        dark: "#333333",
        "dark-light": "#787878",
        "light-gray": "#F5F5F5",
        white: "#ffffff",
      },
      spacing: {},
      boxShadow: {
        cards: "rgba(0, 0, 0, 0.03) 0px 10px 50px",
      },
    },
  },
  plugins: [],
};
