const base = require('../../jest.config.base.js')

const { name } = require('./package')

module.exports = {
  ...base,
  displayName: name,
  rootDir: '.',
  moduleFileExtensions: ['js', 'json', 'vue'],
  // testMatch: [`<rootDir>/packages/${name}/**/*.spec.js`],
}
