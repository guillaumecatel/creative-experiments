/**
 * @typedef {import('prettier').Config} Config
 */

/** @type {Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
