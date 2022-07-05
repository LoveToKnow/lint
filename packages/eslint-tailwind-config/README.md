# `@lovetoknow/eslint-tailwind-config`

> LoveToKnow's Eslint default configuration for TailwindCSS

## Installation

```
npm install --save-dev @lovetoknow/eslint-tailiwind-config
```

## Usage

Create a `.eslintrc.js` file at the root of your project that contains:

```js
module.exports = require('@lovetoknow/eslint-tailwind-config')
```

## Default configuration

The default rules for `eslint-tailwind-config` are:

```js
 rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  }
```

## Official plugin documentation

Check out all of [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) configuration options.
Here you can find more advanced options.
