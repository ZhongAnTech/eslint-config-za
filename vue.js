module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './rules/vue',
    './configs/base',
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
};
