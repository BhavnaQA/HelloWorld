// context sharing

const { setWorldConstructor } = require("@cucumber/cucumber");

class Addition {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.value = 0;
  }

  setValues(a, b) {
    this.x = a;
    this.y = b;
  }

  add() {
    this.value = this.x + this.y;
  }

  result() {
    return this.value;
  }
}

setWorldConstructor(Addition)
