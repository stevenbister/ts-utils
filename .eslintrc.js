/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    // we're using vitest which has a very similar API to jest
    // (so the linting plugins work nicely), but it means we have to explicitly
    // set the jest version.
    settings: {
        jest: {
            version: 27,
        },
    },
};
