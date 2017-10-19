// 'use strict'

class Calculator {
  //write your code here
  constructor (number = 1) {
    this.hasil = number;
    this.konstanta = Math.PI;
  }
  add (number) {
    this.hasil += number;
    return this;
  }
  substract (number) {
    this.hasil -= number;
    return this;
  }
  multiply (number) {
    this.hasil *= number;
    return this;
  }
  divide (number) {
    this.hasil /= number
    return this;
  }
  square (number) {
    this.hasil = Math.pow(this.hasil, 2);
    return this;
  }
  squareRoot (number) {
    this.hasil = Math.sqrt(this.hasil);
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

let cal = new Calculator(0);

cal.add(7).substract(4).multiply(4).divide(3).square(2).squareRoot(4);





