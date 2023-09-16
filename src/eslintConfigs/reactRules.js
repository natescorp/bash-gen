module.exports = {
  rules: {
    'react-hooks/exhaustive-deps': [1],
    'react-hooks/rules-of-hooks': [2],
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: false,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: false,
      },
    ],
    'react/jsx-props-no-spreading': [2],
  },
};
