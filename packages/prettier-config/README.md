# `@lovetoknow/prettier-config`

> LoveToKnow's Prettier configuration

## Installation

```
npm install --save-dev @lovetoknow/prettier-config prettier
```

## Usage

Create a `prettier.config.js` (or `.prettierrc.js`) file at the root of your project that contains:

```
module.exports = require('@lovetoknow/prettier-config');
```

## Enforced Rules

Check out all of Prettier's [configuration options](https://prettier.io/docs/en/options.html).

- **Print Width**

  Line wrap at 100 characters.

- **Tab Width**

  2 spaces per indentation-level.

- **Tabs**

  Indent lines with spaces, not tabs.

- **Semicolons**

  Never print semicolons at the ends of statements. Only when it's needed, put semicolors at the start of the next line.

  ```js
  const greeting = 'hi'
  ```

- **Quote**

  Use single quotes instead of double quotes wherever possible.

  ```js
  const quote = 'single quotes are better'
  ```

- **Trailing Commas**

  Use trailing commas wherever possible.

  ```js
  const obj = {
    a: 'hi',
    b: 'hey',
  }
  ```

- **Bracket Spacing**

  Print spaces between brackets in object literals.
  <!-- prettier-ignore -->
  ```js
  { foo: bar }
  ```

- **JSX Brackets**

  Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements) if the line is too long and the text wraps or there is no other rule controlling this behaviour, like [vue/max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html).

  <!-- prettier-ignore -->
  ```jsx
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}
  >
    Click Here
  </button>
  ```

- **Arrow Function Parentheses**

  Omit parens when possible.

  ```js
  x => x
  ```

- **HTML Whitespace Sensitivity**

  Respects whitespace the same way you would expect for inline elements in your HTML.

  See more info here: https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
