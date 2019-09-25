module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
    './rules/vue',
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
};
