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
