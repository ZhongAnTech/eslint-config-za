module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
    './configs/base',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
