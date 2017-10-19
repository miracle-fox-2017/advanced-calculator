'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.hello = "My Calculator";
    this.pi = Math.PI;
    this.answer = 0;
  }
  add (num) {
    this.answer += num;
    return this;
  }
  substract (num) {
    this.answer -= num;
    return this;
  }
  multiply (num) {
    this.answer *= num;
    return this;
  }
  divide (num) {
    this.answer /= num;
    return this;
  }
  square () {
    this.answer = Math.pow(this.answer, 2);
    return this;
  }
  squareRoot (num) {
    this.answer = Math.sqrt(this.answer);
    return this;
  }
  pow (num) {
    this.answer = Math.pow(this.answer, num);
    return this;
  }
  round(){
    this.answer = Math.round(this.answer);
    return this;
  }

  showAnswer(){
    return this.answer;
  }

  clear(){
    this.answer = 0;
    console.log('========== clear ==========');
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
