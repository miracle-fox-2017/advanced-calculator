'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.hasil = 0
    this.pi = 3.14
  }
  add (input) {
     this.hasil += input
     return this
  }
  substract (input) {
    this.hasil -= input
    return this
  }
  multiply (input) {
    this.hasil *= input
    return this
  }
  divide (input) {
    this.hasil /= input
    return this
  }
  square (input) {
    this.hasil = Math.pow(this.hasil, input)
    // console.log('-----setelah itu', this.hasil)
    return this
  }
  squareRoot() {
    this.hasil = Math.sqrt(this.hasil)
    // console.log('harusnyaAkarpangkat',Math.sqrt(this.hasil));
    return this
  }
  cirle(input){
    //pi r2
    this.hasil = this.pi * (Math.pow(input, 2))
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
