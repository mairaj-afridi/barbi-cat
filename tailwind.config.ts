import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        comfortaa:["Comfortaa","inter"],
       carter :["Carter One","inter"],
      },
      colors: {
        brand: "#419bfe",
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
          off: "#0e0e0e",
        },
        yellow: {
          main: "#ffa64b",
        },
      },
    },
  },
  plugins: [],
};
export default config
