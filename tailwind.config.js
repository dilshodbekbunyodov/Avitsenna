/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'components/**/*.vue',
    'modules/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'tw-text-[#2ed083]',
    'tw-text-[#ff4343]',
    'text-[#ff4343]',
    'text-[#ff4343]',
    'tw-bg-black',
    'tw-bg-white',
    'tw-text-white',
    'tw-text-black'
  ],
  important: true,
  prefix: 'tw-',
}
