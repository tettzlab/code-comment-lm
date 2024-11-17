import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-ignore': ['off'],
      '@typescript-eslint/camelcase': ['off'],
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }], // Enforce explicit return types on functions
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/interface-name-prefix': ['off'],
      // "@typescript-eslint/member-delimiter-style": [
      //   "error",
      //   { multiline: { delimiter: "none" } },
      // ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [
              'signature',
              'public-field', // = ['public-static-field', 'public-instance-field']
              'protected-field', // = ['protected-static-field', 'protected-instance-field']
              'private-field', // = ['private-static-field', 'private-instance-field']
              'constructor',
              'public-method', // = ['public-static-method', 'public-instance-method']
              'protected-method', // = ['protected-static-method', 'protected-instance-method']
              'private-method', // = ['private-static-method', 'private-instance-method']
            ],
            order: 'alphabetically',
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Disallow the use of 'any' type
      '@typescript-eslint/no-inferrable-types': ['off'],
      '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }], // Disallow unused variables
      '@typescript-eslint/no-use-before-define': ['off'],
      // "@typescript-eslint/semi": ["error", "never"],
      'array-bracket-spacing': ['error', 'never', { singleValue: false }],
      'arrow-body-style': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'], // Enforce consistent use of trailing commas
      'computed-property-spacing': ['error', 'never'],
      'func-style': ['warn', 'declaration'],
      'keyword-spacing': 'error',
      indent: ['error', 2], // Enforce consistent indentation (2 spaces)
      'linebreak-style': ['error', 'unix'], // Enforce consistent linebreak style
      'newline-before-return': 'off',
      'no-console': 'off', // Disallow console statements
      'no-extra-semi': 'error',
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
      'no-throw-literal': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': 'off',
      'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
      'prefer-arrow-callback': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }], // Enforce single quotes for strings
      'semi-spacing': ['error', { after: true, before: false }],
      'semi-style': ['error', 'first'],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }], // Require semicolons at the end of statements
    },
  },
]
