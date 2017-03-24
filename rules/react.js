module.exports = {
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-bracket-location': ['error', { selfClosing: 'props-aligned', nonEmpty: 'after-props' }],
    'react/no-array-index-key': 'warn',
  },
};
