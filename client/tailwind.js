/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    'text-3xl', 
    'text-4xl', 
    'text-5xl', 
    'text-6xl',
    'text-right',
    'sm:text-3xl',
    'md:text-4xl', 
    'lg:text-5xl',
    'xl:text-6xl'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
}
