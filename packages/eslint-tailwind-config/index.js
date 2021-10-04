module.exports = {
  extends: ['tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  // add the custom rules here
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
