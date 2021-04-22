const prettierConfig = require('@lovetoknow/prettier-config')

module.exports = {
  extends: ['eslint:recommended', 'eslint-config-prettier', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Best Practices
    curly: 'error',
    eqeqeq: 'error',

    // Variables
    'no-use-before-define': ['error', 'nofunc'],

    // Stylistic (although Prettier will handle most of it)
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'one-var': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],

    // ES6
    'arrow-body-style': ['error', 'as-needed'],
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'prefer-template': 'error',
    'generator-star-spacing': ['error', { before: true, after: false }],

    // common ones
    // biblio
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // wf
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // ydr

    // bib-service-projects
    'require-atomic-updates': 'warn',

    // ... more?

    // Prettier config
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
}
