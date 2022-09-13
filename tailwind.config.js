/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
           "./src/**/*.{js,jsx,ts,tsx}",
           "./screens/**/*.{js,jsx,ts,tsx}",
           "./components/**/*.{js,jsx,ts,tsx}",
           "./router/**/*.{js,jsx,ts,tsx}",
           "./hooks/**/*.{js,jsx,ts,tsx}",
           "./constants/**/*.{js,jsx,ts,tsx}",
          ],
  theme: {
    colors: {
      'primary': {
        light: '#f8d16a',
        DEFAULT: '#fec223',
        dark: '#d49c01',
      },
      'gray': {
        light: '#F3F4F6',
        DEFAULT: '#7a8c8e',
        dark: '#263238',
      },
      'Neutral': {
        light: '#D4D4D8',
      },
      'black': '#000000',
      'white': '#FFFFFF',
      'warning' : 'rgb(254, 211, 58)',
      'success' : 'rgb(60, 213, 97)',
      'danger' : 'rgb(255, 93, 132)',
      'transparent': 'transparent',
    },
    extend: {},
  },
  plugins: ["tailwindcss-react-native/babel"],
}
