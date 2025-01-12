/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Dark background
        secondary: "#475569", // Secondary elements
        accent: "#38BDF8", // Accent color
      },
    },
  },
  plugins: [],
};
