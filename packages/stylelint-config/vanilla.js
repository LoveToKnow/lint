module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-nesting-depth': 3,
    'selector-max-id': 1,
    'selector-class-pattern': [
      /^[a-z0-9\-_]+$/,
      {
        message:
          'Selector should be written in lowercase with hyphens and underscores (selector-class-pattern)',
      },
    ],

    'selector-max-compound-selectors': 3,
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
    'no-descending-specificity': true,
  },
  defaultSeverity: 'warning',
}
