import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Noto Serif JP", "serif"],
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary500: "#E8A6B7",
        primary700: "#A75379",
        fontBlack: "#464646",
      },
      screens: {
        // sm: "640px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "1280px",
        // => @media (min-width: 1440px) { ... }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "64px",
          lg: "88px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
