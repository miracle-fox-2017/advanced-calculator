'use strict'

const Calculator=require("./calculator.js");

// execute function on calculator.js in here
const calculator=new Calculator(10);
console.log(calculator.add(20).substract(5).multiply(2).divide(5).square(2).squareRoot());
