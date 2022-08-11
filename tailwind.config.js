/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
           "./src/**/*.{js,jsx,ts,tsx}",
           "./screens/**/*.{js,jsx,ts,tsx}",
           "./components/**/*.{js,jsx,ts,tsx}",
           "./hooks/**/*.{js,jsx,ts,tsx}",
          ],
  theme: {
    colors: {
      'primary': {
        light: '#f8d16a',
        DEFAULT: '#fec223',
        dark: '#d49c01',
      },
      'gray': {
        light: '#d3dce6',
        DEFAULT: '#8492a6',
        dark: '#0e1724',
      },
      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: ["tailwindcss-react-native/babel"],
}
