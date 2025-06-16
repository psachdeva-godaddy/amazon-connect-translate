module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable rules causing issues
    'key-spacing': 'off',           // Disable space requirement for object keys
    'indent': 'off',               // Disable indentation rules
    'quotes': ['error', 'double'], // Allow double quotes
    'comma-dangle': 'off',         // Disable trailing comma rule
    'no-unused-vars': 'warn',      // Change unused vars to warning
  },
  // Add any other specific configurations
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}; 