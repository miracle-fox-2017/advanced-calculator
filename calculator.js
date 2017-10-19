'use strict'

class Operation
{
  constructor(numLeft, operation, numRight = '')
  {
    const pi = 3.14;
    this.numLeft = numLeft;
    this.operation = operation;
    this.numRight = numRight;
  }

  getNumLeft()
  {
    return this.numLeft;
  }
  getOperation()
  {
    return this.operation;
  }
  getNumRight()
  {
    return this.numRight;
  }
}

class Calculator {
  //write your code here
  constructor ()
  {
    this.result = 0;
    this.histories = [];
  }
  add (numRight)
  {
    this.histories.push(new Operation(this.result, "add", numRight));
    this.result += numRight;
    return this;
  }
  substract (numRight)
  {
    this.histories.push(new Operation(this.result, "substract", numRight));
    this.result -= numRight;
    return this;
  }
  multiply (numRight)
  {
    this.histories.push(new Operation(this.result, "multiply", numRight));
    this.result *= numRight;
    return this;
  }
  divide (numRight)
  {
    if (numRight === 0 || this.result === 0)
    {
      console.log("cannot divide 0");
    }
    else
    {
      this.histories.push(new Operation(this.result, "divide", numRight));
      this.result /= numRight;
    }
    return this;
  }
  square (numRight)
  {
    let temp = this.result;
    this.histories.push(new Operation(this.result, "square", numRight));
    for (var i = 0; i < numRight; i++)
    {
      this.result *= temp;
    }
    return this;
  }
  squareRoot ()
  {
    history.push(new Operation(this.result, "sqrt"));
    this.result = Math.sqrt(this.result); // saya tidak tahu rumus menghitung akar
    return this;
  }
  reset ()
  {
    this.result = 0;
    this.histories = [];
    return this;
  }
  getResult()
  {
    return this.result;
  }
  getHistories()
  {
    return this.histories;
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
