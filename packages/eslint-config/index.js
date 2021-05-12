const prettierConfig = require('@lovetoknow/prettier-config')

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Best Practices
    curly: 'error',
    eqeqeq: 'error',

    // Stylistic (although Prettier will handle most of it)
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'one-var': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],

    // ES6
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'prefer-template': 'error',

    // common ones
    // biblio
    semi: ['error', 'never'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],

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
