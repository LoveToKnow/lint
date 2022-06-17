module.exports = {
    overrides: [
        {
            files: ['*.spec.js', '*.test.js'],
            env: {
                jest: true,
            },
            extends: ['plugin:jest/recommended'],
            plugins: ['jest'],
        },
    ],
}
