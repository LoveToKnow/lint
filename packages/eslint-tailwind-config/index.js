module.exports = {
  extends: ['tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  // add the custom rules here
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
