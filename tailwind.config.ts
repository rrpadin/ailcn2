import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1A3D',
        'navy-soft': '#1E3A6E',
        blue: '#3B82F6',
        'off-white': '#F8F9FB',
        muted: '#94A3B8',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-source-serif)'],
      },
    },
  },
  plugins: [],
};

export default config;
