/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Karla", "sans-serif"],
      },
      colors: {
        "primary": {
          "ori": "#FDAF7B",
        },
      },
    },
  },
  plugins: [],
}
