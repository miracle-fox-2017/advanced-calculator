'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calculator = new Calculator(10)
console.log(calculator.add(5).substract(3).multiply(2).divide(4))
