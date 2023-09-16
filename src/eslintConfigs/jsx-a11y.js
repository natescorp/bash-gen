module.exports = {
  rules: {
    'jsx-a11y/anchor-is-valid': [
      0,
      {
        components: ['a'],
        specialLink: ['href'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0],
  },
};
