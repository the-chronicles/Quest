/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonts: {
        custom: ["Inter", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
      },
    },
  },
  plugins: [],
}

