module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  // add the custom rules here
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
