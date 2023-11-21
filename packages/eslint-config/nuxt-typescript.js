module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', require.resolve('./nuxt.js')],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
