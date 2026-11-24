/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0D2447',
          secondary: '#12325A',
          dark: '#08172D',
          light: '#1B4275',
        },
        teal: {
          primary: '#159C80',
          deep: '#087E68',
          light: '#E7F7F2',
          subtle: '#F0FAF7',
          dark: '#066150',
        },
        surface: {
          light: '#F5F8FC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        content: {
          primary: '#14243B',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        advisory: {
          send: '#16A34A',
          'send-light': '#DCFCE7',
          hold: '#DC2626',
          'hold-light': '#FEE2E2',
          repermission: '#D97706',
          'repermission-light': '#FEF3C7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'regtech': '0 4px 20px -2px rgba(13, 36, 71, 0.08), 0 2px 6px -1px rgba(13, 36, 71, 0.04)',
        'regtech-hover': '0 10px 25px -3px rgba(13, 36, 71, 0.12), 0 4px 10px -2px rgba(13, 36, 71, 0.06)',
        'regtech-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.4), 0 4px 12px -2px rgba(21, 156, 128, 0.15)',
        'teal-glow': '0 0 25px -5px rgba(21, 156, 128, 0.3)',
      }
    },
  },
  plugins: [],
}
