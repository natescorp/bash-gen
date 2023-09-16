module.exports = {
  rules: {
    'jest/expect-expect': [2, { assertFunctionNames: ['expect', 'executeTestCase'] }],
    'jest/no-duplicate-hooks': [2],
    'jest/no-standalone-expect': [2],
    'jest/no-test-callback': [2],
    'jest/no-truthy-falsy': [2],
    'jest/no-try-expect': [2],
    'jest/prefer-called-with': [2],
    'jest/prefer-strict-equal': [2],
    'jest/prefer-to-be-null': [2],
    'jest/prefer-to-be-undefined': [2],
    'jest/prefer-to-contain': [2],
    'jest/prefer-to-have-length': [2],
  },
};
