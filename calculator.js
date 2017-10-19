'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (addnum) {
    this.number += addnum
    return this
  }
  substract (mines) {
    this.number -= mines;
    return this
  }
  multiply (multi) {
    this.number *= multi;
    return this;
  }
  divide (divi) {
    this.number/= divi;
    return this;
  }
  square (Pangkat) {
    this.number = Math.pow(this.number,Pangkat)
    return this;
  }
  squareRoot (){
    this.number = Math.sqrt(this.number)
    return this
  }
  constaPi(){
    this.number = Math.PI *(this.number + this.number)
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
//

module.exports = {
  Calculator
}
