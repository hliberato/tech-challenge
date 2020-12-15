module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(leaflet))'],
  watchPathIgnorePatterns: ['node_modules'],
  testMatch: [
    '<rootDir>/tests/unit/specs/*.spec.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.svg$': '<rootDir>/tests/unit/configs/fileTransformer.js'
  }
}
