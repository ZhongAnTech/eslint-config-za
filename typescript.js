module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './rules/typescript',
    './configs/base',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
