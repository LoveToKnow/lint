module.exports = {
    extends: [
        './index.js',
        'plugin:node/recommended',
    ],
    plugins: ['node'],
    env: {
        node: true,
        es2022: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
    },
}
