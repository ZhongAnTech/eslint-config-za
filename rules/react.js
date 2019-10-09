module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],

    // react hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
