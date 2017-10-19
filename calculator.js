'use strict'

class Calculator {
  //write your code here
  constructor(num = 0) {
    this.num = num
    return this
  }

  add(input = 0) {
    this.num += input
    return this
  }

  substract(input = 0) {
    this.num -= input
    return this
  }

  multiply(input = 1) {
    this.num *= input
    return this
  }

  divide(input = 1) {
    this.num /= input
    return this
  }

  square(input = 2) {
    this.num = Math.pow(this.num, input)
    return this
  }

  squareRoot() {
    this.num = Math.sqrt(this.num)
    return this
  }

  kelilingLingkaran() {
    this.num = `keliling lingkaran dengan jari-jari ${this.num} adalah ${(Math.PI * 2 * this.num).toFixed(2)}`
    return this.num
  }

  luasLingkaran() {
    this.num = `luas lingkaran dengan jari-jari ${this.num} adalah ${(Math.PI * Math.pow(this.num, 2)).toFixed(2)}`
    return this.num
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator(3)
console.log(calculator.add(4).substract(5).multiply(6).divide(3).square(2).squareRoot())

var lingkaran = new Calculator(7)
console.log(lingkaran.kelilingLingkaran())

var lingkaran = new Calculator(7)
console.log(lingkaran.luasLingkaran())

module.exports = {
  Calculator
}
