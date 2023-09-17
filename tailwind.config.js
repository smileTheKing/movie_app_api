/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      textShadow: {
        sm: '0 1px 2px white',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      textUnderlineOffset: {
        3: '3px',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
   // require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
   
    
  ],
}

