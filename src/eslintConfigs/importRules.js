module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'sort-keys-fix/sort-keys-fix': 2,
  },
};
