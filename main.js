'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(5)
// result() disimpan terakhir

// tambah/kurang/kali/bagi
console.log('5 + 5 * 5 - 25 / 5');
console.log(`Result = ${calculator.add(5).multiply(5).substract(25).divide(5).result()}`);
console.log();

// perpangkatan
console.log(`${calculator.result()} pangkat 2`);
console.log(`Result = ${calculator.square(2).result()}`);
console.log();

// akar pangkat
console.log(`Akar pangkat dari ${calculator.result()}`);
console.log(`Result = ${calculator.squareRoot().result()}`);
