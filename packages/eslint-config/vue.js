const vueA11y = require('eslint-plugin-vuejs-accessibility')

// Take all accessibility rules, but set them as warning only!
// and add `vuejs-accessibility/` prefix to the rule name
const a11yAsWarning = Object.keys(vueA11y.rules).reduce(
  (rules, ruleName) =>
    Object.assign({}, rules, { [`vuejs-accessibility/${ruleName}`]: 1 }),
  {}
)

// Vue.js Rules
const vueRules = {
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
      html: { normal: 'always', void: 'always' },
    },
  ],
  // Disabling some rules
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-indent': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/singleline-html-element-content-newline': 'off', // not very friendly with prettier and the printWidth option
}

module.exports = {
  extends: [
    require.resolve('./index.js'),
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['vuejs-accessibility'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: { ...vueRules, ...a11yAsWarning },
}
