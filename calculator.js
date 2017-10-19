'use strict'

class Calculator {
  //write your code here
  constructor (hasil = 0) {
    this.hasil = hasil
    this.pi = 3.14
  }

  add (tambah) {
    this.hasil+=tambah
    return this
  }
  substract (kurang) {
    this.hasil-= kurang
    return this
  }
  multiply (kali) {
    this.hasil*=kali
    return this
  }
  divide (bagi) {
    this.hasil/=bagi
    return this
  }
  square (kuadrat) {
    this.hasil = Math.pow(this.hasil, kuadrat)
    return this
  }
  squareRoot (akar) {
    this.hasil = Math.sqrt(this.hasil, akar)
    return this
  }

  luasLingkaran(jari) {
    this.hasil = jari
    this.square(2).multiply(this.pi)
    return this
  }

  print() {
    return `Hasil perhitungan = ${this.hasil}`
  }


}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

var hitung = new Calculator()
var luasLingkaran = new Calculator()

hitung.add(20).substract(2).square(2).squareRoot(2)
luasLingkaran.luasLingkaran(10)
console.log(hitung.print());
console.log(luasLingkaran.print());



module.exports = {
  Calculator
}
