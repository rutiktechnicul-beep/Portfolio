/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-2': '#0d0d12',
        ink: '#f4f4f7',
        muted: '#7a7a85',
        line: '#1a1a22',
        cyan: '#00FFFF',
        magenta: '#FF006E',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syncopate', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        brand: ['Major Mono Display', 'monospace'],
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(36px)', opacity: '0' },
        },
        blink: { '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
};
