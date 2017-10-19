'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    
    this.num = num
  }

  add (num) {

    this.num += num
    return this
  }

  substract (num) {
    this.num -= num
    return this
  }

  multiply (num) {
    
    this.num *= num
    return this
  }

  divide (num) {
    this.num /= num
    return this 
  }

  square (num) {
    this.num = Math.pow(this.num, num)
    return this
  }

  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
}

let a = new Calculator(1)
// a.add(2)
console.log(a.add(2).multiply(3).substract(1).num);

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
