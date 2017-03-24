module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __ENV__: true,
    __DEVELOPMENT__: true,
    __CONFIG__: true,
    __DEBUG__: true,
    __DEVTOOLS__: true,
    __ALLOW_ISOMORPHIC_PROXY__: true,
    webpackIsomorphicTools: true,
    logger: true,
  },
  rulesLinks: [
    'https://github.com/eslint/eslint/tree/master/docs/rules',
    'https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules',
    'https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules',
    'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules',
  ],
};
