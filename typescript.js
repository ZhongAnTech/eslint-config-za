module.exports = {
  extends: [
    './index',
    './rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
