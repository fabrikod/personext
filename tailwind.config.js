/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#444444;',
        'primary-2': '#000000;',
        'primary-3': '#737373;',
        'primary-4': '#373737;'
      },
      backgroundColor: {
        'base-1': '#F9F9F9;',
        'base-2': '#FFFFFF;',
        'base-3': '#F7F7F7;',
      },
      boxShadow: {
        'card': '0px 0px 5px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        'proxima-nova': 'Proxima Nova'
      }
    },
  },
  important: false,
  plugins: [],
}
