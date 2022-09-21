module.exports = {
  root: true,

  env: {
    node: true,
    browser: true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13
  },

  plugins: [
    '@typescript-eslint'
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],

  rules: {
    // ts
    '@typescript-eslint/type-annotation-spacing': 2,
    // js
    'array-callback-return': [ 2, { allowImplicit: true, checkForEach: true } ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-body-style': [ 2, 'as-needed' ],
    'array-bracket-spacing': [ 2, 'always', { singleValue: false, arraysInArrays: false } ],
    'arrow-spacing': 2,
    'block-spacing': [ 2, 'always' ],
    'comma-dangle': [ 2, 'never' ],
    'comma-spacing': 2,
    'computed-property-spacing': [ 2, 'always' ],
    'dot-notation': 2,
    'eol-last': [ 2, 'always' ],
    'implicit-arrow-linebreak': 2,
    indent: [ 2, 2, { SwitchCase: 1 } ],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'max-len': [ 2, 120, 2,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-await': 2,
    'no-unused-expressions': 0,
    'no-multiple-empty-lines': [ 2, { max: 1 } ],
    'no-multi-spaces': 2,
    'no-new-object': 2,
    'no-trailing-spaces': [ 2, { ignoreComments: true } ],
    'no-await-in-loop': 2,
    'no-duplicate-imports': 2,
    'no-promise-executor-return': 2,
    'no-self-compare': 2,
    'no-template-curly-in-string': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [ 2, 'always', { objectsInObjects: false } ],
    'padding-line-between-statements': [ 2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
      { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: [ 'case', 'default' ], next: '*' }
    ],
    'prefer-const': [ 2, { destructuring: 'all' } ],
    'quote-props': [ 2, 'as-needed' ],
    quotes: [ 2, 'single' ],
    'rest-spread-spacing': 2,
    semi: [ 2, 'never' ],
    'space-before-function-paren': 2,
    'switch-colon-spacing': 2,
    'yield-star-spacing': 2,

    // vue
    'vue/attributes-order': 2,
    'vue/max-attributes-per-line': [ 2, {
      singleline: 2
    } ],
    'vue/script-indent': [ 2, 2, { baseIndent: 1, switchCase: 1 } ],
    'vue/require-explicit-emits': 2,
    'vue/no-v-html': 2,
    'vue/block-tag-newline': [ 2, {
      singleline: 'always',
      maxEmptyLines: 1
    } ],
    'vue/custom-event-name-casing': [ 2, 'kebab-case' ],
    'vue/html-comment-content-spacing': [ 2, 'always' ],
    'vue/html-comment-indent': [ 2, 1 ],
    'vue/new-line-between-multi-line-property': 2,
    'vue/next-tick-style': [ 2, 'callback' ],
    'vue/no-duplicate-attr-inheritance': 2,
    'vue/no-empty-component-block': 2,
    'vue/no-invalid-model-keys': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-reserved-component-names': [ 2, { disallowVue3BuiltInComponents: true } ],
    'vue/no-this-in-before-route-enter': 2,
    'vue/no-use-computed-property-like-method': 2,
    'vue/padding-line-between-blocks': 2,
    'vue/prefer-prop-type-boolean-first': 2,
    'vue/prefer-separate-static-class': 2,
    'vue/require-name-property': 2,
    'vue/v-on-function-call': 2,
    'vue/component-name-in-template-casing': [ 2, 'PascalCase' ]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
  ],

  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.{json}',
      messageSyntaxVersion: '^9.0.0'
    }
  }
}
