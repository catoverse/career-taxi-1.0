module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1880px",
    },
    fontFamily: {
      serif: ["arial", "serif"],
    },
    fontSize: {
      headOne: "80px",
      headTwo: "50px",
      headThree: "32px",
      headFour: "24px",
      bodyOne: "18px",
      bodyTwo: "16px",
      bodyThree: "14px",
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        yellow: "#ffc033",
        orange: "#FF9900",
        creame: "#F9F6F1",
      },
      width: {
        750: "750px",
      },
    },
  },
};
