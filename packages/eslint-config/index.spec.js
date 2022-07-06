const fs = require('fs')
const path = require('path')

const eslint = require('eslint')

function getErrors(configFile, fileToTest) {
  const CLIEngine = eslint.CLIEngine

  const resolvedConfigFile = path.resolve(__dirname, configFile)
  const resolvedFileToTest = path.resolve(__dirname, fileToTest)

  // eslint-disable-next-line no-console
  // console.log(`Testing ${resolvedFileToTest} with ${resolvedConfigFile}`)

  const cli = new CLIEngine({
    configFile: resolvedConfigFile,
  })

  return cli.executeOnText(fs.readFileSync(resolvedFileToTest, 'utf8'))
}

describe('Validate ESLint configs', () => {
  it.each([['./tests/default/.eslintrc.js', './tests/default/validfileA.js']])(
    `load config %s in ESLint to validate correct file %s`,
    (configFile, valiFileToTest) => {
      const output = getErrors(configFile, valiFileToTest)
      expect(output.results[0].messages).toEqual([])
    }
  )
  it.each([
    ['./tests/default/.eslintrc.js', './tests/default/errorfileA.js', 3],
    ['./tests/vue/.eslintrc.js', './tests/vue/errorVueA.vue', 2],
    // skipped Nuxt config for now
    // ['./tests/nuxt/.eslintrc.js', './tests/nuxt/errorNuxtA.vue', 3],
  ])(
    `load config %s in ESLint to validate incorrect file %s with %d errors`,
    (configFile, valiFileToTest, errorCount) => {
      const output = getErrors(configFile, valiFileToTest)
      expect(output.results[0].errorCount).toEqual(errorCount)
    }
  )
})
