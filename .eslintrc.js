module.exports = {
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['./src/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
    {
      files: ['./src/**/*spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['./src/**/mocks/*.ts'],
      rules: {
        // makes working with mock stores easier
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'plugin:vue/recommended',
    'prettier/vue',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
  ],
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: true,
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 'error',
    'no-useless-constructor': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'standard/computed-property-even-spacing': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    'vue/max-len': [
      'error',
      {
        code: 200,
        ignoreHTMLAttributeValues: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-template-curly-in-string': 'off',
    'no-case-declarations': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    indent: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase'],
        filter: {
          regex: '^\\$_',
          match: true,
        },
      },
    ],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-empty-function': 0,
  },
  plugins: ['import', 'prettier', '@typescript-eslint', 'eslint-plugin-vue'],
  settings: {
    polyfills: ['fetch'],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
