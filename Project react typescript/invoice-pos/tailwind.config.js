/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
// const defaultTheme = require('tailwindcss/defaultTheme');
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      // 	sans: ['Concert One', 'cursive', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
});
