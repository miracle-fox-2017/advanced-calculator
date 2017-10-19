'use strict'

class Calculator {

  constructor (start, result) {
    this.start=start;
    this.result='';
  }
  add (counter) {
    if(this.result.toString.length===0){
      this.result=this.start+counter
    }
    else{
      this.result+=counter

    }
    return this
  }
  substract (counter) {
    if(this.result.toString.length===0){
      this.result=this.start-counter
    }
    else{
      this.result-=counter

    }
    return this

  }
  multiply (counter) {
    if(this.result.toString.length===0){
      this.result=this.start*counter
    }
    else{
      this.result= this.result*counter

    }
    return this
  }
  divide (counter) {
    if(this.result.toString.length===0){
      this.result=this.start/counter
    }
    else{
      this.result=this.result/counter

    }
    return this
  }
  square (pangkat) {
    if(this.result.toString.length===0){
      this.result=Math.Pow(this.start,pangkat)
    }
    else{
      this.result=Math.Pow(this.result,pangkat)

    }
    return this
  }
  squareRoot () {
    if(this.result.toString.length===0){
      Math.sqrt(this.start)
    }
    else{
      Math.sqrt(this.result)
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

module.exports = {
  Calculator
}
