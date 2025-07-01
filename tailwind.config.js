/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#D33F49',
          orange: '#F1AA19',
          cyan: '#0AA866',
          blue: '#227DAC',
          gray: '#495159',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        secondary: {
          red: '#E3ACB0',
          orange: '#F8DFAD',
          cyan: '#ADD5C5',
          blue: '#A3C6D8',
          gray: '#EEEEEE',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(13, 148, 136, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(13, 148, 136, 0.8)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontFamily: {
        sans: ['Glacial Indifference', 'Inter', 'system-ui', 'sans-serif'],
  // or keep Inter as default and add custom
  custom: ['Glacial Indifference', 'sans-serif'],
      },
    },
  },
  plugins: [],
};