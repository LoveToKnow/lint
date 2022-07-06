// prettier-ignore

const BaseHello = class {
  constructor(message) {
    this.message = message
  }
  sayHi() {
    return `Hello ${this.message}`
  }
}

const c = class extends BaseHello {}

const messager = new c('World')

// eslint-disable-next-line no-console
console.log(messager.sayHi())

export { c as Hello }
