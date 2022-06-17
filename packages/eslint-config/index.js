const prettierConfig = require('@lovetoknow/prettier-config')

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        './jest.js',
    ],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
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

        // Prettier config
        'prettier/prettier': [
            'error',
            {
                ...prettierConfig,
            },
        ],
    },
}
