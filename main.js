'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

let calc = new Calculator(0);
console.log(calc.add(50).substract(2).multiply(10).divide(2).square(2).squareRoot(2).circleCalc(2))
