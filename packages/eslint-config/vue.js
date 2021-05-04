module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', './index.js'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
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
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
      },
    ],
  },
}
