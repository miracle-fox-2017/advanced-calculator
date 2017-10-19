'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.input = 0
    this.pi = 3.14
  }
  add (num1, num2) {
    this.input = num1 + num2 
    return this
  }
  substract (sub) {
    this.input -= sub
    return this
  }
  multiply (mul) {
    this.input *= mul
    return this
  }
  divide (div) {
    this.input /= div
    return this
  }
  square (sqr) {
    this.input = Math.pow(this.input, sqr)
    return this
  }
  squareRoot () {
    this.input = Math.sqrt(this.input)
    return this
  }

  luasLingkaran(jari) {
    this.input = pi
    this.square(2).multiply(this.pi)
    return this
  }

  print() {
    return `Hasil perhitungan = ${this.input}`
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calc = new Calculator()
console.log(calc.add(3,3).substract(4).multiply(2).divide(2).square(4).print())
console.log(calc.add(3,12).substract(4).multiply(2).square(4).print())


module.exports = {
  Calculator
}
