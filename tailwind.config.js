/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'next': "url('../public/assets/nextbg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'wrist': '200px',
        'sm': '500px',   // Small screens (e.g. phones)
        'md': '768px',   // Medium screens (e.g. tablets)
        'lg': '1024px',  // Large screens (e.g. laptops)
        'xl': '1050px',  // Extra large screens (e.g. desktops)
        '2xl':'1054px',
      },
    },
  },
  plugins: [],
}
