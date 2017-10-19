'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num2) {
    this.number += num2
    return this
  }
  substract (num2) {
    this.number -= num2
    return this
  }
  multiply (num2) {
    this.number *= num2
    return this
  }
  divide (num2) {
    this.number /= num2
    return this
  }
  square (num2) {
    this.number = Math.pow(this.number, num2)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  result() {
    return this.number
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
