/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      colors: {
        border: "#B5B5B5",
        gray: "#909090",
        priGray: "#6C6C6C",
        secGray: "#FAFAFA",
        lightGray: "#EDEDED",
        secLightGray: "#F9F9F9",
        primary: "#211C24",
        darkPri: "#181313",
        rating: "#FFB547",
        darkBlue: "#17183B",
        darkGray: "#353535",
      },
      keyframes: {
        slideFadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideFadeIn: "slideFadeIn 0.4s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out",
      },
      // backgroundImage: {
      //   primary: "linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)",
      // },
      screens: {
        "1xl": "1440px",
      },
    },
  },
  plugins: [],
};
