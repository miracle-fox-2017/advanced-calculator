'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

let calculator = new Calculator();
console.log(calculator.add(5).add(5).substract(5).multiply(5).divide(5).squareRoot().square(3).wideCircle());
