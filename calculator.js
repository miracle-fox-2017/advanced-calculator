'use strict'
class Calculator {
  //write your code here
  constructor(data) {
    this.data = data;
  }
  add(tambah) {
    this.data = this.data + tambah;
    return this
  }
  substract(kurang) {
    this.data = this.data - kurang;
    return this
  }
  multiply(kali) {
    this.data = this.data * kali;
    return this
  }
  divide(bagi) {
    this.data = this.data / bagi;
    return this
  }
  square(pangkat) {
    this.data = Math.pow(this.data, pangkat);
    return this
  }
  squareRoot() {
    this.data = Math.sqrt(this.data);
    return this
  }
  piKonstanta() {
    this.data = Math.PI * this.data;
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// var calculator = new Calculator(2);

// console.log(calculator.add(5).multiply(2));

module.exports = {
  Calculator
}