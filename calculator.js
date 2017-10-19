'use strict'

class Calculator {
  //write your code here
  constructor (number = 1) {
    this.hasil = number;
  }
  add (number) {
    this.hasil += number;
    return this;
  }
  substract (number) {
    this.hasil -= number;
    return this;
  }
  multiply (number) {
    this.hasil *= number;
    return this;
  }
  divide (number) {
    this.hasil /= number
    return this;
  }
  square (number) {
    this.hasil = Math.pow(this.hasil, 2);
    return this;
  }
  squareRoot (number) {
    this.hasil = Math.sqrt(this.hasil);
    return this;
  }
  Konstanta() {
    this.hasil = Math.PI * this.hasil;
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
