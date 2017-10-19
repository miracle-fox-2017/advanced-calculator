'use strict'

class Calculator {
  //write your code here
  constructor (angkaPertama, angkaKedua) {
    this.angkaPertama = angkaPertama;
    this.angkaKedua = angkaKedua;
    this.hasil = 0;
  }
  add () {
    this.hasil = this.angkaPertama + this.angkaKedua;

    console.log(`Penjumlahan : ${this.hasil}`);
    return this;
  }

  upgradeAdd(upAngka){
    this.hasil += upAngka;

    console.log(`Ditambah : ${upAngka} = ${this.hasil}`);

    return this;
  }

  substract () {
    this.hasil = this.angkaPertama - this.angkaKedua;
    console.log(`Pengambilan : ${this.hasil}`);
    return this.hasil;
  }

  upSubstract(subAngka){
    this.hasil -= subAngka;
    console.log(`Diambil : ${subAngka} = ${this.hasil}`);
    return this;
  }

  multiply () {
    this.hasil = this.angkaPertama * this.angkaKedua;
    console.log(`Perkalian : ${this.hasil}`);
    return this.hasil;
  }

  upMultiply(mulAngka){
    this. hasil *= mulAngka;
    console.log(`Dikali : ${mulAngka} = ${this.hasil}`);
    return this
  }

  divide () {
    this.hasil = this.angkaPertama / this.angkaKedua;
    console.log(`Pembagian : ${this.hasil}`)
    return this.hasil;
  }

  upDivide(divAngka){
    this.hasil /= divAngka;
    console.log(`Dibagi : ${divAngka} = ${this.hasil}`);
    return this
  }

  square () {
    this.hasil = Math.pow(this.angkaPertama, this.angkaKedua);
    console.log(`Pangkat : ${this.hasil}`)
    return this.hasil;
  }

  upSquare(sqAngka){
    this.hasil = Math.pow(this.hasil,sqAngka);
    console.log(`Dipangkat : ${sqAngka} = ${this.hasil}`);
    return this;
  }

  squareRoot () {
    this.hasil = this.angkaPertama + this.angkaKedua;
    console.log(`Akar Pangkat : ${this.hasil}`)
    return this.hasil;
  }
  upSquareRoot(sqrAngka){
    this.hasil = Math.sqrt(this.hasil, sqrAngka);
    console.log(`Diakar Pangkat : ${sqrAngka} = ${this.hasil}`);
    return this;
  }
}

// console.log(angka.add().upSquare(2));




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
