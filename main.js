'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

const pi = 3.14;
let angka = new Calculator(2, 2);
console.log(`Input Angka Pertama : ${angka.angkaPertama} \nInput Angka Kedua : ${angka.angkaKedua} `);

console.log(angka.add().upgradeAdd(4).upSubstract(1).upMultiply(2).upDivide(2).upSquare(2).upSquareRoot(2));
