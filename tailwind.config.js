/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        primary: {
          ori: "#FDAF7B",
        },
        secondary: {
          ori: "#FFFFFF",
        },
        dark: {
          primary: {
            ori: "#D67535",
          },
          secondary: {
            ori: "#250F00",
          },
        },
      },
    },
  },
  plugins: [],
};
