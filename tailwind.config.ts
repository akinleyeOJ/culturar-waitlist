import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF9F6",
          100: "#FFF5F0",
          500: "#FF8F66",
          600: "#FF7A52",
          700: "#F25C2E",
        },
        background: {
          secondary: "#FFF8F5",
        },
        text: {
          primary: "#1F1F1F",
          secondary: "#525252",
        },
      },
      fontFamily: {
        // Both utilities now use Syne
        serif: ['var(--font-syne)', 'sans-serif'], 
        sans: ['var(--font-syne)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;