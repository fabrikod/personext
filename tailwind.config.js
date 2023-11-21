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
        'primary-4': '#373737;',
        'primary-5': '#F9F9F9;',
        'primary-6': '#656874',
        'primary-7': '#F7F9FF',
      },
      backgroundColor: {
        'base-1': '#F9F9F9;',
        'base-2': '#FFFFFF;',
        'base-3': '#F7F7F7;',
        'base-4': '#F7F9FF',
        'base-5': '#EBECF0',
        'base-6': '#2C2C2D',
        'base-7': '#D9D9D9',
      },
      stroke: {
        'primary-1': '#444444;',
      },
      boxShadow: {
        card: '0px 0px 5px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'primary-1': '#EAECF0',
      },
      fontFamily: {
        'proxima-nova': 'Proxima Nova',
        'ibm-plex-sans': 'IBM Plex Sans',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  important: false,
  plugins: [],
}
