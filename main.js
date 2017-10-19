'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator();

calc.add(2).multiply(2).add(6).multiply(10);

console.log(calc.getResult());

console.log(calc.getHistories());
