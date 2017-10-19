'use strict'

const {Calculator} = require("./calculator.js")


let nambah = new Calculator(5);
console.log(nambah.add(5));

let ngurang = new Calculator(10);
console.log(ngurang.substract(3));

let kali = new Calculator(5);
console.log(kali.multiply(5));

let bagi = new Calculator(100);
console.log(bagi.divide(25));

let pangkat = new Calculator(10)
console.log(pangkat.square(5));

let akar = new Calculator(9);
console.log(akar.squareRoot())
