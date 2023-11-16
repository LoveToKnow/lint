module.exports = {
  extends: [require.resolve('./index.js')],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
