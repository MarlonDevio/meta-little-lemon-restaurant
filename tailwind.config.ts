import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*./{js,ts,jsx,tsx,mdx}',
    './src/ui/containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'color-cream': 'rgb(var(--color-cream))',
        'color-yellow-light': 'rgb(var(--color-yellow-light))',
        'color-yellow-dark': 'rgb(var(--color-yellow-dark))',
        'color-yellow-darker': 'rgb(var(--color-yellow-darkest))',
        'color-lime': 'rgb(var(--color-lime))',
        'color-darkest': 'rgb(var(--color-darkest))'
      },
      boxShadow: {
        'inset-lime': 'inset 0px 0px 1px 3px rgb(var(--color-lime))',
        'inset-hover-lime': 'inset 0px 0px 50px 20px lime'
      },
      gridTemplateRows: {
        sixBySix: 'repeat(6, min-content)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.test-btn': {
          backgroundColor: '#1F1F1F'
        }
      });
    })
  ]
};
export default config;
