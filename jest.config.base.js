module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: false,
}
