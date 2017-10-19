'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(5)
console.log(calc.add(5).substract(5).multiply(2).divide(2).square(3).squareRoot())
