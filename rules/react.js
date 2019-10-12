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

    // 不建议使用弃用方法
    'react/no-deprecated': 'warn',

    // 组件内方法需按指定顺序排序
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],

    // react hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
