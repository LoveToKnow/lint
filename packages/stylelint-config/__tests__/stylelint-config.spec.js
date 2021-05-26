const config = require('..')
const fs = require('fs')
const stylelint = require('stylelint')

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8')
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8')

describe('stylelint-config', () => {
  describe('flags no warnings with valid css', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        code: validCss,
        config,
      })
    })

    it('did not error', () => {
      return result.then(data => {
        expect(data.errored).toBeFalsy()
      })
    })

    it('flags no warnings', () => {
      return result.then(data =>
        expect(data.results[0].warnings).toHaveLength(0)
      )
    })
  })

  describe('flags warnings with invalid css', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        code: invalidCss,
        config,
      })
    })

    it('flags 2 warnings', () => {
      return result.then(data => {
        expect(data.results[0].warnings).toHaveLength(2)
      })
    })
  })
})
