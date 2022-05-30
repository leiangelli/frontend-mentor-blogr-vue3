/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "plugins": [ 
    "css"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:css/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    'space-before-function-paren': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    camelcase: 'off',
    'comma-dangle': 'error',
    'default-case': 'error',
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "object-curly-spacing": ['error', 'always'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'no-alert': 'off',
    'no-await-in-loop': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-loop-func': 'error',
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'error',
    'no-shadow': 'error',
    'no-useless-catch': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'require-await': 'error',
    'template-curly-spacing': 'off',
    'no-labels': 'off',
    'space-after-keywords': 'always'
  }
}
