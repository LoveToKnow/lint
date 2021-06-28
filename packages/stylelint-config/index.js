module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  defaultSeverity: 'warning',
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
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // Tailwind
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /tailwind/,
          /apply/,
          /layer/,
          /variants/,
          /responsive/,
          /screen/,
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
  },
}
