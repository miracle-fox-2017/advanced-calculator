'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
    this.Pi = 3.14;
    // wideCircle untuk luas lingkaran
    this.wideCircle = null
  }
  add(addNum) {
    this.num = this.num + addNum;
    return this
  }
  substract (subNum) {
    this.num -= subNum
    return this
  }
  multiply (mulNum) {
    this.num *= mulNum
    return this
  }
  divide (divNum) {
    this.num /= divNum
    return this
  }
  square(power) {
    this.num = Math.pow(this.num, power)
    return this
  }
  squareRoot (radius) {
    wideCircle = this.Pi * Math.pow(radius, 2)
    return this
  }

  print (){
    console.log(`current number = ${this.num}`);
    //jika ada luas  lingkaran maka output akan keluar
    if (this.wideCircle){
      console.log(`current wide Circle ${this.wideCircle}`);    
    }
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
var calculate = new Calculator(10);
calculate.print()
console.log(calculate)

module.exports = {
  Calculator
}
