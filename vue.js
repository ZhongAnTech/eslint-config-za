module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './rules/vue',
  ].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: require.resolve('@babel/eslint-parser'),
  },
};
