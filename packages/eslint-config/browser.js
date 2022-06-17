module.exports = {
  extends: [
    './index.js',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],

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
  },
}
