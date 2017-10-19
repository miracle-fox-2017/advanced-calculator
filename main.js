'use strict'

const {Calculator} = require("./calculator.js")
const calculator =  new Calculator()
const calculatorSquare =  new Calculator()

// execute function on calculator.js in here
console.log('awal', calculator.add(2).multiply(9).divide(2).hasil)
console.log('pangkat', calculatorSquare.add(2).multiply(9).divide(2).square(2).hasil);
