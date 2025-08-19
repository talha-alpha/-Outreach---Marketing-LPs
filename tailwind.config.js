/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        grotesque: ['"Basement Grotesque"'],
        sans: ['"Basement Grotesque"'],
        archivo: ['"Archivo"'],
      },
      fontSize: {
        54: "54px",
        56: "56px",
      },
      gap: {
        56: "56px",
        72: "72px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      letterSpacing: {
        tightest: "-0.125rem", // -2px
      },
      padding: {
        custom: "112px", // 122px ÷ 16 = 7.625rem
        60: "60px",
      },
      width: {
        '564': '564px',
        '700': '700px',
        '848': '848px',
        '1280': '1280px',
      },
      backgroundImage: {
        "teal-gradient":
          "linear-gradient(180deg, rgba(17, 94, 89, 0.2) 0%, #115E59 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
