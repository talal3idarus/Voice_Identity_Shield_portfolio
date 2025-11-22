/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C853',
        accent: '#00FF88',
        dark: '#0A0F1C',
        bg: '#101418',
        card: '#182028',
        border: '#1F2F35',
        success: '#00FF88',
        warning: '#FFD43B',
        error: '#FF4D4D',
        text: {
          primary: '#E8F1E9',
          secondary: '#9BAEA0',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'Rubik', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 200, 83, 0.5), 0 0 30px rgba(0, 255, 136, 0.5)',
        'glow-sm': '0 0 10px rgba(0, 200, 83, 0.3)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.12), 0 12px 32px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}

