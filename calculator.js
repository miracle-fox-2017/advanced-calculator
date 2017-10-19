'use strict'

class Calculator {
  constructor (angka) {
    this.angka = angka

  }
  add (angkaKeDua) {
    this.angka = this.angka + angkaKeDua
    return this
  }
  substract (angkaKeDua) {
    this.angka = this.angka - angkaKeDua
    return this
  }
  multiply (angkaKeDua) {
    this.angka = this.angka * angkaKeDua
    return this
  }
  divide (angkaKeDua) {
    this.angka = this.angka / angkaKeDua
    return this
  }
  square (angkaKeDua) {
    this.angka = Math.pow(this.angka,angkaKeDua)
    return this
  }
  squareRoot () {
    this.angka = Math.round(Math.sqrt(this.angka))
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
// let akar = new Calculator(9);
// console.log(akar.squareRoot())

module.exports = {
  Calculator
}
