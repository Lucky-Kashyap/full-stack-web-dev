/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      // pink: "#ffc0cb",
      // red: "#56f543",
      // red: {
      //   99: "#56f543",
      // },
      blue: {
        100: "#1fb6ff",
        200: "#1fb6ff",
        390: "#1fb6ff",
        600: "#1fb6ff",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    borderColor: {
      black: "#ffff00",
    },
    extend: {
      fontSize: {
        "10xl": "5rem",
      },
      fontWeight: {
        xl: 900,
      },
      screens: {
        hello: { min: "640px", max: "767px" },
      },
    },
  },
  plugins: [],
};
