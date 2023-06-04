module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // no trailing spaces
    'no-trailing-spaces': 'error',
    // no multiple empty lines
    'no-multiple-empty-lines': 'error',
    // no multiple spaces in a row
    'no-multi-spaces': 'error',
    // no semi-colons
    semi: ['error', 'never'],
    // no trailing commas
    'comma-dangle': ['error', 'never']
  }
}
