/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(71.5% 0.143 215.221)",
        secondary: "#64B5F6",
        silver: "#C0C0C0",
        dark: "#0F0F0F",
      },
       keyframes: {
        fall: {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(120vh)", opacity: "0" },
        },
    },
      animation: {
        fall1: "fall 2.5s ease-in-out 0s infinite",
        fall2: "fall 2.8s ease-in-out 0.2s infinite",
        fall3: "fall 3s ease-in-out 0.4s infinite",
        fall4: "fall 3.3s ease-in-out 0.6s infinite",
      },
  },
  plugins: [],
}
}
