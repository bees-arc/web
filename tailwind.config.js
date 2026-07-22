/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
          accent: '#6366F1',
          accentHover: '#4F46E5',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          pink: '#EC4899',
          darkCard: '#18181B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Lora', 'sans-serif'],
        serif: ['Lora', 'serif'],
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
