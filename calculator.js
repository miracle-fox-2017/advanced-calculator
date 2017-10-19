'use strict'

class Calculator {
  //write your code here
  constructor (result) {
    this.result = result
  }
  add (num) {
    this.result += num
    return this
  }
  substract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    this.result *= num
    return this
  }
  divide (num) {
    this.result /= num
    return this
  }
  square (base) {
    this.result = Math.pow(this.result, base)
    return this
  }
  squareRoot (num) {
    this.result = Math.sqrt(num);
    return this
  }
  radius () {
    const pi = 3.14
    this.result = pi * (this.result * this.result)
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
var calc = new Calculator(0)
//console.log(calc.add(5))
//console.log(calc.multiply(3));
//console.log()
console.log(calc.add(3).multiply(3).substract(3).divide(2).square(2).squareRoot(2).radius())


module.exports = {
  Calculator
}
