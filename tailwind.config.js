/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      }
    },
  },
  plugins: [],
}

