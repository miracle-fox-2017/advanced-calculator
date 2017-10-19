'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
  }
  add (angka) {
    this.number = this.number + angka;
    return this
  }
  substract (angka) {
    this.number = this.number - angka;
    return this
  }
  multiply (angka) {
    this.number = this.number * angka;
    return this
  }
  divide (angka) {
    this.number = this.number / angka;
    return this
  }
  square (angka) {
     this.number = Math.pow(this.number, angka)
     return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  pi (){
    this.number = Math.PI * this.number
    return this
  }
}
var kalkulator = new Calculator(2);

console.log(kalkulator.add(5).substract(6).multiply(8).divide(2).square(2).squareRoot(2).pi());


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
//
// module.exports = {
//   Calculator
// }
