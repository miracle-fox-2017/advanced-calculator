'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
    
  }
  add (input) {
    this.number += input
    return this
    
  }
  substract (input) {
    this.number -= input
    return this
  }
  multiply (input) {
    this.number *= input
    return this
    
  }
  divide (input) {
    this.number /= input
    return this
  }
  pangkat(input) {
    this.number = Math.pow(this.number, input)
    return this
  }
  Root (input) {
    this.number = Math.pow(this.number,(1/input))
    return this
  }
  circleArea(){
    this.number = this.number * this.number * Math.PI
    return this
  }
  print(){
    return this.number
  }
}

var casio = new Calculator(24)
console.log(casio.circleArea().result())



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
