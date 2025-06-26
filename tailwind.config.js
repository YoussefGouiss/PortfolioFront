// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define custom animations
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      // Define the keyframes for those animations
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Define a custom drop shadow for the glow effect
      dropShadow: {
        'glow-cyan': '0 0 12px rgba(34, 211, 238, 0.6)', // Corresponds to cyan-400
        'glow-purple': '0 0 12px rgba(168, 85, 247, 0.5)', // Corresponds to purple-500
      },
    },
  },
  plugins: [],
}