'use strict'

class Calculator {
  constructor (angkaPertama) {
    this.angkaPertama = angkaPertama;
    this.hasil = 0;
  }
  add (tambah) {
    if(this.hasil === 0){
      this.hasil = this.angkaPertama + tambah
    }
    else {
      this.hasil = this.hasil + tambah
    }
    return this
  }
  substract (kurang) {
    if(this.hasil === 0){
      this.hasil = this.angkaPertama - kurang
    }
    else {
      this.hasil = this.hasil - kurang
    }
    return this
  }
  multiply (kali) {
    if(this.hasil === 0){
      this.hasil = this.angkaPertama * kali
    }
    else {
      this.hasil = this.hasil * kali
    }
    return this
  }
  divide (bagi) {
    if(this.hasil === 0){
      this.hasil = this.angkaPertama / bagi
    }
    else {
      this.hasil = this.hasil / bagi
    }
    return this
  }
  square (pangkat) {
    if(this.hasil === 0){
      this.hasil = Math.pow(this.angkaPertama, pangkat)
    }
    else {
      this.hasil = Math.pow(this.hasil, pangkat)
    }
    return this
  }
  squareRoot () {
    if(this.hasil === 0){
      this.hasil = Math.sqrt(this.angkaPertama)
    }
    else {
      this.hasil = Math.sqrt(this.hasil)
    }
    return this
    }
}

var kalkulator = new Calculator(6)
console.log(kalkulator.substract(1).add(3).square(2).squareRoot().hasil)

var kalkulator = new Calculator(8)
console.log(kalkulator.substract(4).add(1).square(2).add(3).hasil)

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
