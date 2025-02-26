import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27445D",
        secondary: "#497D74",
        accent: "#71BBB2",
        background: "#EFE9D5",
      },
    },
  },
  plugins: [],
} satisfies Config;
