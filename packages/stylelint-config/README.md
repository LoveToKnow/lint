# `@lovetoknow/stylelint-config`

> LTK's default stylelint config.

Recommended: install a extension for your IDE/editor. Examples:

- VS Code: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## Overview

We provide 2 configurations:

- Default: intended to be used in Vue/Nuxt projects.
- Vanilla: If you want to exclude vue related rules.

## Getting started

### Installation

This is how you include it in a project

```
npm i -D @lovetoknow/stylelint-config
```

### Usage

Add a `.stylelintrc.js` to the root of the project with the following content:

```js
module.exports = require('@lovetoknow/stylelint-config')
```

```js
// OR (for a non-Vue or non-Nuxt project, proposedly)
module.exports = require('@lovetoknow/stylelint-config/vanilla')
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
