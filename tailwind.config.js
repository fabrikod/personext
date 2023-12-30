/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#444444;',
        'primary-2': '#000000;',
        'primary-3': '#737373;',
        'primary-4': '#373737;',
        'primary-6': '#656874',
        'primary-7': '#F7F9FF',
        'primary-8': '#1E1E1E',
        'panel-menu': '#EAECF0',
        'active-menu': '#0E1B3D',
        'darkmode-base-1': '#08080E',
        'darkmode-border': '#222229',
        'darkmode-title': '#F2F2F2',
        'darkmode-text': '#888895',
        'darkmode-chip': '#BFBFBF',
        'circle-red': '#D04D4D',
        'circle-green': '#42BE65',
        'base-1': '#F9F9F9;',
        'base-2': '#FFFFFF;',
        'base-3': '#F7F7F7;',
        'base-4': '#F7F9FF',
        'base-5': '#EBECF0',
        'base-6': '#2C2C2D',
        'base-7': '#D9D9D9',
        'button-press': '#E4E5EA',
        'button-hover': '#F6F6F6',
        input: '#B1B1B1',
      },
      backgroundImage: {
        'lineer-light': 'linear-gradient(180deg, #FFF 0%, #FCFBFB 100%)',
        'lineer-card': 'linear-gradient(180deg, #08080E 0%, #0C0C11 100%)',
        'lineer-nav-link': 'linear-gradient(180deg, #08080E 0%, #12121D 100%)',
        'hover-lineer': 'linear-gradient(180deg, #08080E 0%, #21212F 100%)',
        'active-lineer': 'linear-gradient(180deg, #10101B 0%, #2A2A3A 100%)',
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
      screens: {
        xs: '480px',
      },
      animation: {
        loading: 'spin 1s linear infinite',
        'fade-in-out': 'fade-in-out 1s linear 1',
      },
      keyframes: {
        'fade-in-out': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  important: false,
  plugins: [],
}
