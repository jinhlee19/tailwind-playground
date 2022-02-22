const tailwindcss = require('tailwindcss');
module.exports = {
  content: [
    './**/*.html',
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ],
}
