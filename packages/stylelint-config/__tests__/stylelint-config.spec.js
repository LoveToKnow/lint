const config = require('..')
const fs = require('fs')
const path = require('path')
const stylelint = require('stylelint')

const validCss = fs.readFileSync(
  path.resolve(__dirname, './valid.css'),
  'utf-8'
)
const invalidCss = fs.readFileSync(
  path.resolve(__dirname, './invalid.css'),
  'utf-8'
)
const tailwindCss = fs.readFileSync(
  path.resolve(__dirname, './tailwind.css'),
  'utf-8'
)

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

  describe('tailwind css', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        code: tailwindCss,
        config,
      })
    })

    it('flags no warnings', () => {
      return result.then(data => {
        expect(data.results[0].warnings).toHaveLength(0)
      })
    })
  })
})
