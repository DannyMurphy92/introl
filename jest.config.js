module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/web-client/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)$',

  roots: ['<rootDir>/src/web-client', '<rootDir>/webpack'],
  globals: {
    'vue-jest': {
      babelConfig: false,
    },
  },
};
