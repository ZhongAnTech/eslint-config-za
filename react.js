module.exports = {
  extends: [
    './configs/base',
    'eslint-config-airbnb',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@babel/preset-react')],
    },
  },
};
