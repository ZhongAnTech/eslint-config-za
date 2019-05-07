module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './configs/base',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
