'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(3)
console.log(calculator.add(4).substract(5).multiply(6).divide(3).square(2).squareRoot())

var lingkaran = new Calculator(7)
console.log(lingkaran.kelilingLingkaran())

var lingkaran = new Calculator(7)
console.log(lingkaran.luasLingkaran())