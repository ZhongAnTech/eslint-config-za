module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
};
