import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.ts",
    "./demo.tsx",
  ],
  presets: [require('../config/tailwind.config.js')],
};

export default config;
