'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
    this.pi = Math.PI;
  }

  add (num) {
    this.number += num;
    return this;
  }

  substract (num) {
    this.number -= num;
    return this;
  }

  multiply (num) {
    this.number = this.number * num;
    return this;
  }

  divide (num) {
    this.number = this.number / num;
    return this;
  }

  square (num) {
    this.number = Math.pow(this.number, num);
    return this;
  }

  squareRoot (num) {
    this.number = Math.sqrt(num);
    return this;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let countNumber = new Calculator(5);
console.log(countNumber.add(4).substract(3).multiply(2).divide(3).square(3).squareRoot(4).number);
console.log(countNumber.pi)

module.exports = {
  Calculator
}
