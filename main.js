'use strict'

const { Calculator } = require("./calculator.js")

let calc = new Calculator(9)
calc.add(2).substract(1).multiply(10).divide(5).square(2).squareRoot().circle().circumference(5)
console.log(calc.number)

let calcCasio = new Calculator(10)
calc.add(2).substract(0).multiply(10).divide(5).square(2).squareRoot().circle().circumference(10)
console.log(calcCasio.number)
