/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'size': 'height, width',
        'position': 'top, bottom',
        'visibility': 'opacity, visibility',
        'shadow': 'drop-shadow',
      },
      transitionDuration: {
        '400': '400ms',
      },
      dropShadow: {
        'custom': '0 4px 6px rgba(183, 113, 229, 0.5)', // Your existing custom shadow
        'custom-purple': '0 4px 6px rgba(183, 113, 229, 1)', // Purple shadow with higher opacity
        'custom-purple2': '0 10px 6px rgba(183, 113, 229, 0.5)'
      },
    },
  },
  plugins: [],
}

