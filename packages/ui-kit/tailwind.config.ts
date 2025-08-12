import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.ts",
    "./demo.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        azorath: ["Azorath", "system-ui", "sans-serif"],
        druktext: ["DrukTextCyr", "system-ui", "sans-serif"],
      },
      fontSize: {
        'sm': ['14px', { lineHeight: '20px' }],
        'md': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'h1': ['32px', { lineHeight: '40px' }],
        'h2': ['28px', { lineHeight: '36px' }],
        'h3': ['24px', { lineHeight: '32px' }],
        'h4': ['20px', { lineHeight: '28px' }],
        'h5': ['18px', { lineHeight: '24px' }],
        'h6': ['16px', { lineHeight: '20px' }],
      },
      colors: {
        primary: {
          DEFAULT: "#AFEB0F",
          foreground: "#292D30",
        },
        secondary: {
          DEFAULT: "#292D30",
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF",
        foreground: "#292D30",
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#6B7280",
        },
        text: {
          primary: "#292D30",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#AFEB0F",
          foreground: "#292D30",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#292D30",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#292D30",
        },
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#AFEB0F",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
