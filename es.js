module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/es',
    './rules/import',
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
};
