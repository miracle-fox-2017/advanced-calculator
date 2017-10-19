'use strict'

const {Calculator} = require("./calculator.js")

var angka = new Calculator();

console.log(angka.add(4).substract(2).multiply(2).divide(2).square(3));
