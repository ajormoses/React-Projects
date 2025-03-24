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
        lightGray: "#EDEDED",
        secLightGray: "#F9F9F9",
        primary: "#211C24",
        darkPri: "#181313",
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
