/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      mobile: { max: "768px" },
    },
    extend: {
      colors: {
        bgmain: "#F3F5F6",
        bgbox: "#F8F8F8",
        purple: "#4D49B4",
        purplelight: "#837EFF",
        black: "#16113D",
        graylarge: "#8F92A5",
        graymedium: "#CDCFDB",
        graysmall: "#F2F2F2",
        green: "#3BBE8A",
        orange: "#EF8566",
      },
      spacing: {
        "18px": "18px",
        "135px": "135px",
        "19vw": "19vw",
        "28vw": "28vw",
      },
      flexBasis: {
        "3/7": "44%",
        "4/7": "55%",
      },
      backgroundImage: {
        attention: "url(../img/attention.png)",
      },
    },
  },
  plugins: [],
};
