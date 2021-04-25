module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier', 'stylelint-config-standard'],
  rules: {
    'selector-max-compound-selectors': 5,
    'max-nesting-depth': [
      5,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
    'order/order': [
      { type: 'at-rule', name: 'theme-is' },
      { type: 'at-rule', name: 'theme-not' },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
