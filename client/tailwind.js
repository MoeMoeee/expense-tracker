/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    // ...
    'lg:text-right',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
}
