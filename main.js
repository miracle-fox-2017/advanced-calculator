'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let MyCalculator = new Calculator();

//RUN CODE
MyCalculator.add(1); //1
MyCalculator.add(2); //3
MyCalculator.substract(1); //2
MyCalculator.multiply(11); //22
MyCalculator.divide(2); //11
MyCalculator.square(); //121
MyCalculator.squareRoot(); //11
console.log(MyCalculator.showAnswer());

//clear
MyCalculator.clear();

//RUN CODE Chain
MyCalculator.add(1).add(2).substract(1).multiply(11).divide(2).square().squareRoot(); //11
console.log(MyCalculator.showAnswer());

//clear
MyCalculator.clear();

//pangkat 3^3.... math pow
MyCalculator.add(3).pow(3); //27
console.log(MyCalculator.answer);

//clear
MyCalculator.clear();

//menghitung keliling lingkaran dengan r = 7
//rumus keliling adalah r x 2 x pi
MyCalculator.add(7).multiply(2).multiply(MyCalculator.pi);
console.log(MyCalculator.answer);

//clear
MyCalculator.clear();
