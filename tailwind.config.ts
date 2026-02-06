import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1E293B',
        mist: '#ECF4FF',
        pearl: '#F5F9FF',
        azure: '#9AB7E7',
        lilac: '#C6B7F4'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif']
      },
      boxShadow: {
        glow: '0 20px 60px rgba(76, 104, 151, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
