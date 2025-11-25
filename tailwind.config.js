module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(340, 30%, 85%)",
        input: "hsl(340, 30%, 85%)",
        ring: "hsl(340, 82%, 52%)",
        background: "hsl(340, 100%, 97%)",
        foreground: "hsl(340, 50%, 20%)",
        primary: {
          DEFAULT: "hsl(340, 82%, 52%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(340, 50%, 35%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(340, 100%, 95%)",
          foreground: "hsl(340, 50%, 25%)",
        },
        accent: {
          DEFAULT: "hsl(340, 100%, 95%)",
          foreground: "hsl(340, 50%, 25%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(340, 50%, 20%)",
        },
        success: "hsl(140, 51%, 51%)",
        warning: "hsl(45, 93%, 45%)",
        error: "hsl(356, 72%, 47%)",
        info: "hsl(211, 11%, 39%)",
      },
      fontFamily: {
        sans: ["Segoe UI", "Noto Sans", "Helvetica", "Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-in-out",
        "slide-down": "slide-down 300ms ease-in-out",
        "scale-up": "scale-up 200ms ease-in-out",
      },
    },
  },
  plugins: [],
}
