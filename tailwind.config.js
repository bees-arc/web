/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Spread all Tailwind defaults, excluding deprecated aliases
      ...(({ lightBlue, warmGray, trueGray, coolGray, blueGray, ...rest }) => rest)(colors),
      // Override indigo fully so no default #4338CA leaks through hover states
      indigo: {
        50: '#E6F7FF',
        100: '#BAE7FF',
        200: '#7ECBFF',
        300: '#40A9FF',
        400: '#1890FF',
        500: '#00b1f8',
        600: '#00b1f8',
        700: '#00b1f8',
        800: '#008ec7',
        900: '#006b96',
        950: '#004764',
      },
    },
    extend: {
      colors: {
        outcrowd: {
          bg: '#FAFAFD',
          surface: '#FFFFFF',
          card: '#F4F4F8',
          text: '#0D0F12',
          muted: '#64748B',
          subtle: '#94A3B8',
          border: 'rgba(15, 23, 42, 0.08)',
          accent: '#00b1f8',
          accentHover: '#008ec7',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          pink: '#EC4899',
          darkCard: '#18181B',
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
        display: ['var(--font-outfit)', 'Lora', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
