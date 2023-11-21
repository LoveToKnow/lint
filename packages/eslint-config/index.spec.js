const fs = require('fs')
const path = require('path')

const { ESLint } = require('eslint')

async function getErrors(configFile, fileToTest) {
  const resolvedConfigFile = path.resolve(__dirname, configFile)
  const resolvedFileToTest = path.resolve(__dirname, fileToTest)

  // eslint-disable-next-line no-console
  // console.log(`Testing ${resolvedFileToTest} with ${resolvedConfigFile}`)

  const cli = new ESLint({
    overrideConfigFile: resolvedConfigFile,
    useEslintrc: false,
  })

  const result = await cli.lintText(fs.readFileSync(resolvedFileToTest, 'utf8'))
  return result
}

const CONFIG_FILE = {
  DEFAULT: './tests/default/.eslintrc.js',
  VUE: './tests/vue/.eslintrc.js',
  NUXT: './tests/nuxt/.eslintrc.js',
}

describe('Validate ESLint configs', () => {
  it.each([['./tests/default/.eslintrc.js', './tests/default/validfileA.js']])(
    `[VALID] load config %s in ESLint to validate correct file %s`,
    async (configFile, valiFileToTest) => {
      const output = await getErrors(configFile, valiFileToTest)
      expect(output[0].messages).toEqual([])
    }
  )
  it.each([
    [
      CONFIG_FILE.DEFAULT,
      './tests/default/errorfileA.js',
      ['no-console', 'constructor-super', 'prettier/prettier', 'semi'],
    ],
    // SKIPPING FOR NOW
    // [
    //   CONFIG_FILE.VUE,
    //   './tests/vue/errorVueA.vue',
    //   [
    //     'vue/no-async-in-computed-properties',
    //     'vue/no-dupe-keys',
    //     'prettier/prettier',
    //     'vue/comment-directive',
    //   ],
    // ],
    // [
    //   CONFIG_FILE.NUXT,
    //   './tests/nuxt/errorNuxtA.vue',
    //   ['nuxt/no-this-in-fetch-data'],
    // ],
    // [
    //   CONFIG_FILE.NUXT,
    //   './tests/nuxt/nuxt.config.js',
    //   ['nuxt/no-cjs-in-config'],
    // ],
  ])(
    `[INVALID] load config %s in ESLint to validate incorrect file %s with errors`,
    async (configFile, valiFileToTest, expectedRules) => {
      const output = await getErrors(configFile, valiFileToTest)
      // extract rules names from messages
      const rules = output[0].messages.map(({ ruleId }) => ruleId)

      expect(rules).toEqual(expectedRules)
    }
  )

  it.skip('test vue file', async () => {
    const output = await getErrors(CONFIG_FILE.VUE, './tests/vue/errorVueA.vue')
    // eslint-disable-next-line no-console
    // console.log(output.results[0].messages)
    const rules = output[0].messages.map(({ ruleId }) => ruleId)
    const expectedRules = [
      'vue/no-async-in-computed-properties',
      'vue/no-dupe-keys',
      'prettier/prettier',
      'vue/comment-directive',
    ]
    expect(rules).toEqual(expectedRules)
  })
})
