'use strict'

class Calculator {
  //write your code here
  constructor (initialValue = 0) {
    this.initialValue = initialValue;
    this.pi = 3.14;
  }
  add (addValue) {
    this.initialValue += addValue;
    return this;
  }
  substract (subsValue) {
    this.initialValue -= subsValue;
    return this;
  }
  multiply (multValue) {
    this.initialValue *= multValue;
    return this;
  }
  divide (divValue) {
    this.initialValue /= divValue;
    return this;
  }
  square (sqValue) {
    this.initialValue = Math.pow(this.initialValue,sqValue);
    return this;
  }
  squareRoot () {
    this.initialValue = Math.sqrt(this.initialValue);
    return this;
  }
  circleCalc (r) {
    this.initialValue = (this.pi * (Math.pow(this.initialValue,2))).toFixed(2);
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

module.exports = {
  Calculator
}
