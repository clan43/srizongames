/** @type {import('tailwindcss').Config} */
export default {
  // Enables dark mode with a custom class (e.g., .dark) for toggling
  darkMode: 'class', // Use 'class' instead of 'selector' for better clarity

  // Specifies the file paths where Tailwind should scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Add custom themes or extend existing themes here if needed
    },
  },

  plugins: [
    // Add any Tailwind plugins you need here
  ],
}
