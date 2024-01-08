import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      oliver: "#31352E",
      pewter: "#EBEBE8",
      sagegreen: "#D1E2C4",
      olive: "#778A35",
      sage: "#C1C2AD",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
