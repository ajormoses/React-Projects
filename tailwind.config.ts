/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      instrumentSans: ["Instrument Sans", "sans-serif"],
    },
    extend: {
      colors: {
        lightGray: "#FAFAFA",
        primary: "#633CFF",
        purpleHover: "#BEADFF",
        darkGray: "#333333",
        grey: "#737373",
        border: {
          primary: "#D9D9D9",
        },
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
        slowBounce: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        activeSelection: "0px 0px 32px 0px #633CFF40",
      },
      animation: {
        slideFadeIn: "slideFadeIn 0.4s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out",
        "slow-bounce": "slowBounce 4s infinite", // Slow bounce animation
        spin: "spin 1s linear infinite",
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
