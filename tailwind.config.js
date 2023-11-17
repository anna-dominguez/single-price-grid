/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        brightYellow: 'hsl(71, 73%, 54%)',
        lightGray: 'hsl(204, 43%, 93%)',
        grayishBlue: 'hsl(218, 22%, 67%)',
      },
    },
  },
  plugins: [],
}
