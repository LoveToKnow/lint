const prettierConfig = require('@lovetoknow/prettier-config')

module.exports = {
  extends: [
    '@nuxtjs/eslint-config',
    require.resolve('@lovetoknow/eslint-tailwind-config'),
    'plugin:prettier/recommended', // this one needs to be after the nuxt one
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['vuejs-accessibility'],
  rules: {
    'nuxt/no-this-in-fetch-data': 'error',
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
}
