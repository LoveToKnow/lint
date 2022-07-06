// prettier-ignore

const c = class {
  constructor() {
    console.log(super());
  }
}

export { c as Hello }
