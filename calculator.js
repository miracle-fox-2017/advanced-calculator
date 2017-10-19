'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.hasil = angka
    this.konstantaPi = Math.PI
  }
  add (angkakedua) {
    this.hasil = this.hasil + angkakedua
    return this
  }
  substract (angkakedua) {
    this.hasil = this.hasil - angkakedua
    return this
  }
  multiply (angkakedua) {
    this.hasil = this.hasil * angkakedua
    return this
  }
  divide (angkakedua) {
    this.hasil = this.hasil / angkakedua
    return this
  }
  square (angkakedua) {
    //return this.hasil + this.angkaKedua
    this.hasil = Math.pow(this.hasil,angkakedua)
    return this
  }
  squareRoot () {
    //return this.hasil + this.angkaKedua
    this.hasil = Math.sqrt(this.hasil)
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
