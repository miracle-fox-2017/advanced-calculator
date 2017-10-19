'use strict'

class Calculator {

  constructor () {
    this.hasil = 0;
  }

  add(nilaitambah) {
    this.hasil = this.hasil + nilaitambah;
    return this;
  }

  substract (nilaikurang) {
    this.hasil = this.hasil - nilaikurang;
    return this;
  }
  multiply (nilaikali) {
    this.hasil = this.hasil * nilaikali;
    return this;
  }

  divide (nilaibagi) {
    this.hasil = this.hasil / nilaibagi;
    return this;
  }

  square (nilaipangkat) {
    this.hasil = Math.pow(this.hasil,nilaipangkat);
    return this;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
