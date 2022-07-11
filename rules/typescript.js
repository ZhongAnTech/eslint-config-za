module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off',

    /* ----------  增强规则  ---------- */
    /**
     * 下列规则基于 ESLint Core 实现
     * 部分规则需要关闭 ESLint 自身规则
     * 部分规则暂时可采用 ESLint 内建规则及编译时的静态检查
     */

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    /**
     * 通过编译阶段检查
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // indent: 'off',
    // '@typescript-eslint/indent': [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     VariableDeclarator: 1,
    //     outerIIFEBody: 1,
    //     FunctionDeclaration: {
    //       parameters: 1,
    //       body: 1,
    //     },
    //     FunctionExpression: {
    //       parameters: 1,
    //       body: 1,
    //     },
    //     CallExpression: {
    //       arguments: 1,
    //     },
    //     ArrayExpression: 1,
    //     ObjectExpression: 1,
    //     ImportDeclaration: 1,
    //     flatTernaryExpressions: false,
    //     ignoredNodes: [
    //       'JSXElement',
    //       'JSXElement > *',
    //       'JSXAttribute',
    //       'JSXIdentifier',
    //       'JSXNamespacedName',
    //       'JSXMemberExpression',
    //       'JSXSpreadAttribute',
    //       'JSXExpressionContainer',
    //       'JSXOpeningElement',
    //       'JSXClosingElement',
    //       'JSXText',
    //       'JSXEmptyExpression',
    //       'JSXSpreadChild',
    //     ],
    //     ignoreComments: false,
    //   },
    // ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],

    semi: 'off',
    '@babel/semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    // 'func-call-spacing': 'off',
    // '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': 'off',

    // 'no-magic-numbers': 'off',
    // '@typescript-eslint/no-magic-numbers': 'off',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    /* ----------  @typescript-eslint v2 BREAKING CHANGES.  ---------- */

    // prefer-interface -> consistent-type-definitions
    // '@typescript-eslint/prefer-interface': 'error',
    // no-triple-slash-reference -> triple-slash-reference
    // '@typescript-eslint/no-triple-slash-reference': 'error',
    // no-angle-bracket-type-assertion & no-object-literal-type-assertion -> consistent-type-assertions
    // '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    // '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'always',
        lib: 'always',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    /* ----------  rules  ---------- */

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: null,
      },
      {
        selector: 'variable',
        format: null,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
};
