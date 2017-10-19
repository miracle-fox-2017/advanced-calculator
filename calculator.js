'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.defaultNumber = 0
  }
  add (addNum) {
    this.defaultNumber += addNum
    return this
  }
  substract (addSubstract) {
    this.defaultNumber -= addSubstract
    return this
  }
  multiply (addMultiply) {
    this.defaultNumber *= addMultiply
    return this
  }
  divide (addDivide) {
    this.defaultNumber /= addDivide
    return this
  }
  square (addSquare) {
    this.defaultNumber = Math.pow(this.defaultNumber, addSquare);
    return this
  }
  squareRoot() {
    this.defaultNumber = Math.sqrt(this.defaultNumber)
    return this
  }
  wideCircle() {
    this.defaultNumber = Math.PI * (this.defaultNumber * this.defaultNumber)
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

module.exports = {
  Calculator
}
