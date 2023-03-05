/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules : {
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-plusplus": "off",
    "consistent-return": "warn",
    "no-param-reassign": "warn"
    // "no-shadow": "off"
        // "no-semi": "warn"
  //   "no-console": "warn"
  
  }
}   
