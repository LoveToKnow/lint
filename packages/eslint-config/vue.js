module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier', './index.js'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'UNIQUE',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'SLOT',
          'OTHER_DIRECTIVES',
          'TWO_WAY_BINDING',
          'CONTENT',
          'OTHER_ATTR',
          'EVENTS',
        ],
      },
    ],
    'vue/no-v-html': 'warn',
  },
}
