/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  //        primary: "#3B82F6",   // blue-500
  // secondary: "#9333EA", // purple-600
  // accent: "#2563EB",    // blue-600
  // light: "#F8FAFC",     // blue-50 / indigo-50 (light bg)
  // dark: "#111827",    
  primary: "#1684A7",   // Blue
  secondary: "#09A599", // Teal / Greenish
  accent: "#F6EC72",    // Yellow
  light: "#F6F6F6",     // Very light gray
  dark: "#0D3B4A",  
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}