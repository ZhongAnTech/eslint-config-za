module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
};
