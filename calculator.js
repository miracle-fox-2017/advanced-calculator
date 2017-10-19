'use strict'

class Calculator {
  //write your code here
  constructor(number) {
    this.number = number
    this.phi = 3.14
  }
  add(angka) {
    this.number += angka
    return this
  }
  substract(angka) {
    this.number -= angka
    return this
  }
  multiply(angka) {
    this.number *= angka
    return this
  }
  divide(angka) {
    this.number /= angka
    return this
  }
  square(angka) {
    this.number = Math.pow(this.number, angka)
    return this
  }
  squareRoot() {
    this.number = Math.sqrt(this.number)
    return this
  }
  circle() {
    this.number = this.phi * this.number * this.number
    return this
  }
  circumference(diameter) {
    this.number = this.phi * diameter
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
