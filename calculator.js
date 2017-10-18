class Calculator {
  constructor(numb) {
    this.numb = numb;
  }

  add(num) {
    this.numb + num;
    return this;
  }

  substract(num) {
    this.numb - num;
    return this;
  }

  multiply(num) {
    this.numb * num;
    return this;
  }

  divide(num) {
    this.numb / num;
    return this;
  }

  square(num) {
    Math.pow(this.numb, num);
    return this;
  }

  squareRoot() {
    Math.sqrt(this.numb);
    return this;
  }
  
  pi() {
    return Math.PI * this.numb;
  }
}

const calculate = new Calculator(7);
console.log(calculate.add(6).substract(5).multiply(4).divide(3).square(2).squareRoot().pi());