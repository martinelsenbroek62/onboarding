/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-1.28px",
    },
    screens: {
      tablet: "800px", // Your custom screen size (if needed)
      desktop: "1000px", //Some Sections require early stacking to maintain responsiveness
      xxs: "300px",
      xs: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1620px",
      laptop: "1460px",
    },
    fontFamily: {
      lato: ["var(--font-lato)", "sans-serif"],
      note: ["var(--font-note)", "serif"],
      BasisGrotesque: ["BasisGrotesque", "serif"],
      BEditorsNote: ["BEditorsNote", "serif"],
      EditorsNoteLight: ["EditorsNoteLight", "serif"],
      EditorsNoteThin: ["EditorsNoteThin", "serif"],
      Inter: ["Inter", "Inter"],
    },
    extend: {
      colors: {
        panther: {
          50: "#F7F7FC",
          100: "#F1F1F7",
          200: "#E7E7EE",
          300: "#D9D9E0",
          400: "#C4C4CC",
          500: "#A7A7B0",
          600: "#83838C",
          700: "#5A5A62",
          800: "#313136",
          850: "#1E1E21",
          900: "#0B0B0D",
        },
        azure: {
          100: "#EDF2F2",
          200: "#DAE0E0",
          300: "#C7D0D1",
          400: "#B4BEBF",
          500: "#A1ACAD",
          600: "#859394",
          700: "#687778",
          800: "#4C5A5C",
          900: "#333F40",
        },
        tripp: "#CEC7C2",
        beige: "#EAE1DA",
        creme: "#F2F2EE",
        dove: "#FBFAF9",
        anna: "#2DD7E5",
      },
    },
  },
};
