const fs = require('fs')
const path = require('path')

const eslint = require('eslint')

function getErrors(configFile, fileToTest) {
  const CLIEngine = eslint.CLIEngine

  // eslint-disable-next-line no-console
  console.log({ __dirname, configFile, fileToTest })

  const resolvedConfigFile = path.resolve(__dirname, configFile)
  const resolvedFileToTest = path.resolve(__dirname, fileToTest)

  // eslint-disable-next-line no-console
  console.log(`Testing ${resolvedFileToTest} with ${resolvedConfigFile}`)

  const cli = new CLIEngine({
    configFile: resolvedConfigFile,
  })

  return cli.executeOnText(fs.readFileSync(resolvedFileToTest, 'utf8'))
}

describe('Validate ESLint configs', () => {
  it.each([['.eslintrc.js', './tests/validfileA.js']])(
    `load config %s in ESLint to validate correct file %s`,
    (configFile, valiFileToTest) => {
      const output = getErrors(configFile, valiFileToTest)
      expect(output.results[0].messages).toEqual([])
    }
  )
  it.each([['.eslintrc.js', './tests/errorfileA.js', 1]])(
    `load config %s in ESLint to validate incorrect file %s with %d errors`,
    (configFile, valiFileToTest, errorCount) => {
      const output = getErrors(configFile, valiFileToTest)
      expect(output.results[0].errorCount).toEqual(errorCount)
    }
  )
})
