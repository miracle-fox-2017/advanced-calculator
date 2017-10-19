'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in her
var calculate = new Calculator(8)
console.log(calculate.add(2).substract(2).multiply(5).divide(2).square(2).squareRoot())
console.log(calculate.add(2).substract(5).multiply(2).divide(5).square(5).squareRoot())
console.log(calculate);
