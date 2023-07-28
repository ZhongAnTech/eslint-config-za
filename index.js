module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
  ].map(require.resolve),
  parser: require.resolve('@babel/eslint-parser'),
};
