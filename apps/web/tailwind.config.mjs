/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      // Bebas Neue - ОСНОВНОЙ И ЕДИНСТВЕННЫЙ шрифт сайта
      'sans': ['"Bebas Neue"', 'system-ui', 'sans-serif'],
      // Явный класс для Bebas Neue (для заголовков)
      'bebas': ['"Bebas Neue"', 'system-ui', 'sans-serif'],
      // Класс для Montserrat
      'montserrat': ['"Montserrat"', 'sans-serif'],
    },
    // Базовые размеры шрифтов (16px базовый)
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      screens: {
        // Mobile first (min-width)
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Desktop first (max-width) - используй эти для "уменьшения"
        'max-2xl': { 'max': '1535px' },
        'max-xl': { 'max': '1279px' },
        'max-lg': { 'max': '1023px' },
        'max-md': { 'max': '767px' },
        'max-sm': { 'max': '639px' },
      },
      colors: {
        // Tournament palette
        'tournament-orange': '#D85921',
        'tournament-dark': '#0F0F0F',
        'tournament-black': '#000000',
      },
      boxShadow: {
        'orange': '0 10px 40px rgba(216, 89, 33, 0.8)',
        'orange-xl': '0 12px 50px rgba(216, 89, 33, 0.7)',
        'orange-glow': '0 10px 40px rgba(216, 89, 33, 0.2), 0 0 20px rgba(216, 89, 33, 0.1)',
      },
      dropShadow: {
        'orange': '0 10px 40px rgba(216, 89, 33, 0.8)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
