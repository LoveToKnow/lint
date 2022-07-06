const vueConfig = require('./vue')
const tailwindConfig = require('@lovetoknow/eslint-tailwind-config')
const prettierConfig = require('@lovetoknow/prettier-config')

module.exports = {
  ...require('./index.js'),
  ...vueConfig,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    ...tailwindConfig.extends,
    ...vueConfig.extends,
  ],
  overrides: [...vueConfig.overrides],
  rules: {
    ...vueConfig.rules,
    ...tailwindConfig.rules,
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
}
