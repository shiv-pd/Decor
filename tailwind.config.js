/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      screens: {
        'xs': '480px', // Custom extra small breakpoint
        'sm': '640px', // Default small breakpoint
        'md': '768px', // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2x extra-large breakpoint
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
    
    
  },
  plugins: [],
}

