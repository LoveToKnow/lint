# `@lovetoknow/stylelint-config`

> LTK's default stylelint config.

Recommended: install a extension for your IDE/editor. Examples:

- VS Code: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## Getting started

### Installation

This is how you include it in a project

```
npm i -D @lovetoknow/stylelint-config stylelint-config-standard stylelint-config-sass-guidelines stylelint-config-prettier
```

### Usage

Add a `.stylelintrc.js` to the root of the project with the following content:

```js
module.exports = require('@lovetoknow/stylelint-config')
```

Alternatively, if you want to turn off some rules, you can do:

```js
module.exports = {
  extends: ['@lovetoknow/stylelint-config'],
  rules: {
    // ... your house, your rules
  },
}
```

See more on how to configure stylelint: https://stylelint.io/user-guide/configure
