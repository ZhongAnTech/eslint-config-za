module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
    './rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
