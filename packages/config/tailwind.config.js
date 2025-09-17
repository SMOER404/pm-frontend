/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../apps/client/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/admin/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui-kit/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        azorath: ["Azorath", "system-ui", "sans-serif"],
        druktext: ["DrukTextCyr", "system-ui", "sans-serif"],
        sans: ['Azorath', 'Inter', 'system-ui', 'sans-serif'],
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
        // Poizon Market Brand Colors
        primary: {
          DEFAULT: "#AFEB0F",
          foreground: "#292D30",
          50: '#f9fef0',
          100: '#f3fde0',
          200: '#e7fbc1',
          300: '#d4f693',
          400: '#bded5a',
          500: '#a5e12a',
          600: '#8bc817',
          700: '#6a9e14',
          800: '#547e16',
          900: '#466816',
        },
        secondary: {
          DEFAULT: "#292D30",
          foreground: "#FFFFFF",
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
        },
        // Legacy colors for backward compatibility
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
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
} 