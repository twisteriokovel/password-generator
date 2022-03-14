module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // js
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'no-console': process.env.NODE_ENV  === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-cycle': 'off',
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    'object-curly-spacing': [
      2,
      'always',
      { objectsInObjects: false }
    ],
    'prefer-const': ['error', { 'destructuring': 'all' }],
    'no-return-await': 0,
    'no-unused-expressions': 0,
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-new': 0,
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'no-prototype-builtins': 0,
    'handle-callback-err': 0,
    'valid-typeof': 2,
    'dot-notation': 2,
    'quote-props': ['error', 'consistent'],

    // vue
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2
      },
      'multiline': {
        'max': 2
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/attribute-hyphenation': 0,
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 2
  }
}