'use strict'

class Calculator
{
  constructor (num)
  {
    this.number = num

  }
  add (addition)
  {
    this.number = this.number + addition
    return this;
  }
  substract (substractor)
  {
    this.number = this.number - substractor
    return this;
  }
  multiply (multiplier)
  {
    this.number = this.number * multiplier
    return this
  }
  divide (divider)
  {
    this.number = this.number / divider
    return this
  }
  square (squareup)
  {
    this.number = Math.pow(this.number,squareup)
    return this
  }
  squareRoot ()
  {
    this.number = Math.sqrt(this.number);
    return this;
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
