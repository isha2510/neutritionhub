// jest.config.js
module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': './jest-transform-stub.js',
    },
  };
  