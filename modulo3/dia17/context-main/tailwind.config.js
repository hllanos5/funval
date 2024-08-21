/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {

        base: {
          primary: '#fff',
          secondary: '#e2e8f0',
          text: '#000'
        },

        dark: {
          primary: '#121212',
          secondary: '#212121',
          text: '#ffffff',
        },

        minimalist: {
          primary: '#f0f0f0',
          secondary: '#d8d8d8',
          text: '#333333',
        },

      }

    },
  },
  plugins: [],
  safelist: [

    {
      pattern: /bg-(base|dark|minimalist)-(primary|secondary|)/,
    },
    {
      pattern: /text-(base|dark|minimalist)-(text)/
    }
  ],

}