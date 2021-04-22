# eslint-config

Lovetoknow's [`ESLint`](https://eslint.org/) configuration.

Includes our [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js).

## Installation

1. Install all dependencies

   ```
   npm install --save-dev @lovetoknow/eslint-config@latest @lovetoknow/prettier-config babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier

   # or

   yarn add --dev @lovetoknow/eslint-config @lovetoknow/prettier-config babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier
   ```

2. Create an `.eslintrc.js` file at the root of your project with the following:

   ```js
   {
     extends: "@lovetoknow"
   }
   ```

3. Specify the environment: See [Specifying Environments](#specifying-environments) section.

   ```js
   {
     extends: ["@lovetoknow"], // can also be an Array
     env: {
       browser: true,
       node: true,
       jest: true,
     },
   }
   ```

If you want to override some rules, look at the section [Overriding Rules](#overriding-rules).

If you have issues with Prettier integration, refer to [Troubleshooting](#troubleshooting) section.

## Configurations

We export 3 ESLint configurations for your usage:

1. [Default](#default-config)
1. [Vue](#vue-config)
1. [Nuxt](#nuxt-config)

### Default Config

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": "@lovetoknow"
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### Vue Config

This is the recommended configuration for Vue projects.

Includes everything in the default config, plus environment specification and vue-specific rules with

- [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue)
- [`vue-eslint-parser`](https://github.com/mysticatea/vue-eslint-parser)

```sh
npm install --save-dev @lovetoknow/eslint-config @lovetoknow/prettier-config babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-vue
```

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": "@lovetoknow/eslint-config/vue"
}
```

### Nuxt Config

This is the recommended configuration for Nuxt projects.

Includes everything in the default config, plus environment specification and vue-specific rules, plus nuxt-specific rules with

- [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue)

```sh
npm install --save-dev @lovetoknow/eslint-config @lovetoknow/prettier-config babel-eslint eslint eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-vue
```

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": "@lovetoknow/eslint-config/nuxt"
}
```

## Specifying Environments

Our **default** config purposefully do not specify a certain environment as to not make any assumptions about your project. The only environment we do specify be default is `es6`. You can see all the [default settings here](https://github.com/LoveToKnow/lint/blob/master/packages/eslint-config/index.js).

Therefor, you should specify your project's environment yourself in your ESLint config. For example:

```json
{
  "extends": "@lovetoknow",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "cypress/globals": true
  }
}
```

View all available environments in the [ESLint Docs](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)

## Editor Integration & Autoformatting

Once you've installed the config, you probably want your editor to lint and fix your code for you.

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): `View → Extensions` then find and install ESLint
2. Reload the editor
3. In your VS Code user settings `Code/File → Preferences → Settings` or `CMD/CTRL + ,` click the `{}` icon in the top right corner to modify your `settings.json` file

   ```json
   // Format on save with Prettier rules
   "editor.formatOnSave": true,
   // Eslint
   // An array of language identifiers specify the files to be validated
   "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "vue",
    "vue-html"
   ],
   // Make sure you have Prettier installed too
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.quickSuggestions": {
      "strings": true
    }
   },
   ```

#### Prettier

We Recommended to have [_Prettier Extension_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed too, because this eslint config works with prettier rules and the prettier plugin.

You can find our Prettier configuration here: https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js.

## Pre-commit Hook

As another line of defense, if you want ESLint to automatically fix your errors on commit, you can use [`lint-staged`](https://github.com/okonet/lint-staged) with [`husky`](https://github.com/typicode/husky), which manages git hooks.

1. `npm install --save-dev lint-staged husky`
2. In your `package.json`:

   ```json
   {
     "lint-staged": {
       "*.js": ["eslint --fix", "git add"]
     },
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged"
       }
     }
   }
   ```

## Enforced Rules

Lovetoknow's ESLint config extends `eslint:recommended` which enables rules that report common problems, which are marked with check marks in the large [list of ESLint rules](https://eslint.org/docs/rules/).

The rules listed below are rules we have enabled on top of those enabled by `eslint:recommended`.

<details>
<summary>no-console</summary>

It's perfectly fine to use `console.log` during development, but you shouldn't use `console.log` in production code. If you _really_ need to print something to the console, use `console.warn` or `console.error`.

> Why? In JavaScript that's designed to be executed in the browser, it’s considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.

```js
// bad
console.log('bad')

// good
console.warn('Log a warn level message.')
console.error('Log an error level message.')
```

</details>

<details>
<summary>curly</summary>

Always use curly braces.

> Why? Omitting curly braces can decrease code clarity.

```js
// bad
if (foo) foo++

if (foo) {
  baz()
} else qux()

// good
if (foo) {
  foo++
}

if (foo) {
  baz()
} else {
  qux()
}
```

</details>

<details>
<summary>eqeqeq</summary>

Use `===` and `!==` over `==` and `!=`.

> Why? It's considered good practice to use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=`. The reason for this is that `==` and `!=` do type coercion which follows the rather obscure Abstract Equality Comparison Algorithm. For instance, the following statements are all considered true:
>
> - [] == false
> - [] == ![]
> - 3 == 03

TL;DR JavaScript is _**WILD**_

```js
// bad
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'

// good
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
```

</details>

<summary>no-use-before-define</summary>

Don't use constant variables before they are defined.

> Why? In JavaScript, prior to ES6, constiable and function declarations are hoisted to the top of a scope, so it’s possible to use identifiers before their formal declarations in code. This can be confusing and some believe it is best to always declare constant variables and functions before using them.
> In ES6, block-level bindings (`let` and `const`) introduce a “temporal dead zone” where a `ReferenceError` will be thrown with any attempt to access the constiable before its declaration.

```js
// bad
alert(a)
const a = 10

f()
function f() {}

// good
let a
a = 10
alert(a)

function f() {}
f(1)
```

</details>

<details>
<summary>brace-style</summary>

Be consistent with brace style for blocks. Keep `else` on the same line as the preceding curly brace.

<!-- prettier-ignore -->
```js
// bad
if (foo)
{
  bar()
} else {
  baz()
}

// good
if (foo) {
  bar()
} else {
  baz()
}
```

</details>

<details>
<summary>one-var</summary>

This rule enforces variables to be declared separately per scope.

<!-- prettier-ignore -->
```js
// bad
let one, two

// good
let one
let two
```

</details>

<details>
<summary>linebreak-style</summary>

This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.

Version control systems sometimes have special behavior for linebreaks. To make it easy for developers to contribute to your codebase from different platforms, you may want to configure your VCS to handle linebreaks appropriately.

If you use git, you may want to add a line to your .gitattributes file to prevent git from converting linebreaks in .js files:

```
*.js text eol=lf
```

<!-- prettier-ignore -->
```js
// bad
const a = 'a' // \r\n

// good
const a = 'a' // \n
```

</details>

<details>
<summary>arrow-body-style</summary>

Disallow the use of braces around arrow function body as needed. One-liners can be more readable!

<!-- prettier-ignore -->
```js
// bad
let foo = () => {
  return 0
}
let foo = () => {
  return {
    bar: {
      foo: 1,
      bar: 2,
    },
  }
}

// good
let foo = () => 0
let foo = (retv, name) => {
  retv[name] = true
  return retv
}
let foo = () => ({
  bar: {
    foo: 1,
    bar: 2,
  },
})
```

</details>

<details>
<summary>no-duplicate-imports</summary>

All imports from a single module should exist in a single import statement.

```js
// bad
import { merge } from 'module'
import something from 'another-module'
import { find } from 'module'

// good
import { merge, find } from 'module'
import something from 'another-module'
```

</details>

<details>
<summary>no-useless-constructor</summary>

Don't include useless class constructors that can be safely removed without changing how the class works.

```js
// bad
class A {
  constructor() {}
}

class A extends B {
  constructor(...args) {
    super(...args)
  }
}

// good

class A {
  constructor() {
    doSomething()
  }
}

class A extends B {
  constructor() {
    super('foo')
  }
}
```

</details>

<details>
<summary>prefer-template</summary>

Use template literals instead of string concatenation.

```js
// bad
const str = 'Hello,' + name + '!'
const str = 'Time: ' + 12 * 60 * 60 * 1000

// good
const str = 'Hello World!'
const str = `Hello, ${name}!`
const str = `Time: ${12 * 60 * 60 * 1000}`
```

</details>

<details>
<summary>generator-star-spacing</summary>

This rule aims to enforce spacing around the \* of generator functions.

```js
// bad

// good
function* generator() {}

var anonymous = function* () {}

var shorthand = { *generator() {} }
```

</details>

<details>
<summary>quotes</summary>

This rule enforces the consistent use of single quotes.

https://eslint.org/docs/rules/quotes

Template literals are allowed.

<!-- prettier-ignore -->
```js
// bad
const str = "asdf"

// good
const single = 'a string containing "double" quotes';
const double = "a string containing 'single' quotes";
const str = 'Hello World!'
const str = `Hello, ${name}!`
const str = `Time: ${12 * 60 * 60 * 1000}`

```

</details>

<details>
<summary>semi</summary>

This rule enforces consistent use of semicolons.

<!-- prettier-ignore -->
```js
// bad
const str = 'Hello,' + name + '!';
const str = 'Time: ' + 12 * 60 * 60 * 1000;

// good
const str = 'Hello World!'
const str = `Hello, ${name}!`
const str = `Time: ${12 * 60 * 60 * 1000}`

var name = "ESLint"
;(function() {
    // ...
})()


import b from "b"
;(function() {
    // ...
})()
import a from "a"
(function() {
    // ...
})()

```

</details>

## Overriding Rules

If you'd like to override any rules, you can add the rules to your `.eslintrc.js` file.

```js
{
  extends: ['@lovetoknow'],
  rules: {
    'no-console': 'off' // disables this rule
  }
}
```

## Troubleshooting

### Prettier

If it happens to you that with auto save you see the code being transformed twice and left with the red curly underline, what is happening is that you editor (or the prettier plugin) has some options set in the workspace (or the global configuration) that are different from:

our [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js).

- For example, `printWidth` might be set in your personal settings as `80` while we have it as `100`. That's why you're editor will say something like:

  ```
  Replace `⏎······' with '·'
  ```

You need to set your editor to the same rules we have in the [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js) in the current **workspace**.

### Jest

Make sure you added:

```
env: {
  jest: true,
}
```

In the `env` property of your `.eslintrc.js` file.

### Cypress

In order to make it work properly with Cypress, you need [`eslint-plugin-cypress`](https://www.npmjs.com/package/eslint-plugin-cypress).

And follow this guide: https://www.npmjs.com/package/eslint-plugin-cypress#usage
