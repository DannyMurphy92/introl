module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier', 'stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-max-compound-selectors': 5,
    'max-nesting-depth': [
      5,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
  },
};
