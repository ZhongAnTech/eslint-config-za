module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
