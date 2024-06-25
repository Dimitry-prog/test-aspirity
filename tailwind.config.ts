import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ".shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: {
          DEFAULT: "#141414",
          secondary: "#232324",
        },
        text: {
          DEFAULT: "#E1E3E6",
          secondary: "#B0B1B6",
          tertiary: "#76787A",
        },
        border: {
          DEFAULT: "#363738",
        },
        green: {
          DEFAULT: "#25824F",
        },
        orange: {
          DEFAULT: "#FFB649",
        },
        red: {
          DEFAULT: "#DB4546",
        },
        white: "#FFFFFF",
        blue: {
          DEFAULT: "#0047BB",
        },
      },
      fontSize: {
        h4: [
          "34px",
          {
            lineHeight: "36px",
            fontWeight: "400",
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        h6: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        subtitle1: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        subtitle2: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        button: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
      },
      gridTemplateColumns: {
        table: "375px minmax(375px, 1fr) 152px",
      },
    },
  },
  plugins: [],
};
export default config;
