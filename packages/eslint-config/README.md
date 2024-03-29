# `eslint-config`

Lovetoknow's [`ESLint`](https://eslint.org/) default configuration.

Includes our [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js).

Includes our [`ESLint-TailwindCSS configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/eslint-tailwind-config/index.js).

## Installation

1. Install all dependencies

   ```
   npm install --save-dev @lovetoknow/eslint-config@latest @lovetoknow/prettier-config @lovetoknow/eslint-tailwind-config @babel/eslint-parser eslint@7 eslint-config-prettier@7.2.0 eslint-plugin-prettier@3 prettier@2.3

   # or

   yarn add --dev @lovetoknow/eslint-config @lovetoknow/prettier-config @lovetoknow/eslint-tailwind-config @babel/eslint-parser eslint@7 eslint-config-prettier@7.2.0 eslint-plugin-prettier@3 prettier@2.3
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
1. [Typescript](#typescript-config)

### Default Config

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": "@lovetoknow"
}
```

#### Full example

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['@lovetoknow'],
  // add your custom rules here
  rules: {},
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### Vue Config

This is the recommended configuration for Vue projects.

Includes everything in the default config, plus environment specification and vue-specific rules.

```sh
npm install --save-dev @lovetoknow/eslint-config @lovetoknow/prettier-config @babel/eslint-parser eslint@8 eslint-config-prettier@8 eslint-plugin-prettier@5 prettier@3 eslint-plugin-vuejs-accessibility
```

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": ["@lovetoknow/eslint-config/vue"]
}
```

#### Full example

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['@lovetoknow/eslint-config/vue'],
  // add your custom rules here
  rules: {},
}
```

### Nuxt Config

This is the recommended configuration for Nuxt projects.

Includes everything in the default config, plus environment specification and vue-specific rules, plus nuxt-specific rules with:

- [`@nuxtjs/eslint-config`](https://github.com/nuxt/eslint-config/)

```sh
npm install --save-dev @lovetoknow/eslint-config @lovetoknow/prettier-config eslint@8 @babel/eslint-parser eslint-config-prettier@^8.23 eslint-plugin-prettier@5 prettier@3 @nuxtjs/eslint-config@12 @nuxtjs/eslint-config-typescript@12 eslint-plugin-tailwindcss eslint-plugin-vuejs-accessibility eslint-plugin-unicorn@49
```

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": ["@lovetoknow/eslint-config/nuxt"]
}
```

#### Full example

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['@lovetoknow/eslint-config/nuxt'],
  // add your custom rules here
  rules: {},
}
```

### Typescript Config

This is the recommended configuration for Vue projects.

Includes everything in the default config, plus environment specification and vue-specific rules.

```sh
npm install --save-dev @lovetoknow/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript
```

**In your `.eslintrc`:** (or `.eslintrc.js`)

```json
{
  "extends": ["@lovetoknow/eslint-config/typescript"]
}
```

#### Full example

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['@lovetoknow/eslint-config/typescript'],
  // add your custom rules here
  rules: {},
}
```

## Specifying Environments

Our **default** config purposefully do not specify a certain environment as to not make any assumptions about your project. The only environment we do specify be default is `es6`. You can see all the [default settings here](https://github.com/LoveToKnow/lint/blob/master/packages/eslint-config/index.js).

Therefor, you should specify your project's environment yourself in your ESLint config. For example:

```json
{
  "extends": ["@lovetoknow"],
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

### Default Rules

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

### Vue.js Rules

Same as in [Default Rules](#default-rules), plus some vue-specific rules:

<details>
<summary>vue/no-use-v-if-with-v-for</summary>

This rule is aimed at preventing the use of v-for directives together with v-if directives on the same element.

There are two common cases where this can be tempting:

- To filter items in a list (e.g. `v-for="user in users" v-if="user.isActive"`). In these cases, replace `users` with a new computed property that returns your filtered list (e.g. `activeUsers`).
- To avoid rendering a list if it should be hidden (e.g. `v-for="user in users" v-if="shouldShowUsers"`). In these cases, move the `v-if` to a container element (e.g. `ul`, `ol`).

See examples and more information here: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html#vue-no-use-v-if-with-v-for

</details>

<details>
<summary>vue/component-definition-name-casing</summary>

Limits the maximum number of attributes/properties per line to improve readability.

See examples and more information here: https://eslint.vuejs.org/rules/component-definition-name-casing.html#vue-component-definition-name-casing

</details>

<details>
<summary>vue/attributes-order</summary>

This rule aims to enforce ordering of component attributes. The default order is specified in the Vue.js Style Guide (opens new window)and is:

- `DEFINITION` e.g. 'is', 'v-is'
- `LIST_RENDERING` e.g. 'v-for item in items'
- `CONDITIONALS` e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
- `RENDER_MODIFIERS` e.g. 'v-once', 'v-pre'
- `GLOBAL` e.g. 'id'
- `UNIQUE` e.g. 'ref', 'key'
- `SLOT` e.g. 'v-slot', 'slot'.
- `TWO_WAY_BINDING` e.g. 'v-model'
- `OTHER_DIRECTIVES` e.g. 'v-custom-directive'
- `OTHER_ATTR` e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
- `EVENTS` e.g. '@click="functionCall"', 'v-on="event"'
- `CONTENT` e.g. 'v-text', 'v-html'

See examples and more information here: https://eslint.vuejs.org/rules/attributes-order.html#vue-attributes-order

</details>

<details>
<summary>vue/no-v-html</summary>

This rule reports all uses of v-html directive in order to reduce the risk of injecting potentially unsafe / unescaped html into the browser leading to Cross-Site Scripting (XSS) attacks.

See examples and more information here: https://eslint.vuejs.org/rules/no-v-html.html#vue-no-v-html

</details>

<details>
<summary>vue/html-self-closing</summary>

This rule aims to enforce the self-closing sign as the configured style.

See examples and more information here: https://eslint.vuejs.org/rules/html-self-closing.html

</details>

### Vue accessibility

All rules from the [Vue a11y plugin](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) are enforced and will be reported as warnings.

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

If it happens to you that with auto save you see the code being transformed twice and left with the red curly underline, what is happening is that you editor (or the prettier plugin) has some options set in the workspace (or the global configuration) that are different from our [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js).

- For example, `printWidth` might be set in your personal settings as `80` while we have it as `100`. That's why you're editor will say something like:

  ```
  Replace `⏎······' with '·'
  ```

You need to set your editor to the same rules we have in the [`Prettier configuration`](https://github.com/LoveToKnow/lint/blob/main/packages/prettier-config/index.js) in the current **workspace**.

Or, as an alternative, override the prettier config ([docs](https://prettier.io/docs/en/configuration.html#sharing-configurations)):

```diff
// .prettierrc.js
- module.exports = require('@lovetoknow/prettier-config')
+ module.exports = {
+  ...require('@lovetoknow/prettier-config'),
+  printWidth: 80,
+ }
```

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
