'use strict'

class Calculator {
    //write your code here
    constructor(angka){
        this.keliling="";
        this.start=angka;
        this.hasil="";
    }
    add(param){
        if(this.hasil.toString().length === 0){
            this.hasil=this.start + param;
        }else{
            this.hasil+=param;
        }
        return this;
    }
    substract(param){
        if(this.hasil.toString().length === 0){
            this.hasil=this.start - param;
        }else{
            this.hasil-=param;
        }
        return this;
    }
    multiply(param){
        if(this.hasil.toString().length === 0){
            this.hasil=this.start * param;
        }else{
            this.hasil*=param;
        }
        return this;
    }
    divide(param){
        if(this.hasil.toString().length === 0){
            this.hasil=this.start / param;
        }else{
            this.hasil/=param;
        }
        return this;
    }
    square(param){
        if(this.hasil.toString().length === 0){
            this.hasil=Math.pow(this.start,param);
        }else{
            this.hasil=Math.pow(this.hasil,param);
        }
        return this;
    }
    squareRoot(){
        if(this.hasil.toString().length === 0){
            this.hasil=Math.sqrt(this.start)
        }else{
            this.hasil=Math.sqrt(this.hasil);
        }
        return this;
    }
    kelLingkaran(){
        let jariJari="";
        if(this.hasil.toString().length === 0){
            jariJari=this.start;
        }else{
            jariJari=this.hasil;
        }
        this.keliling=(jariJari * 2) * 3.14;
        return this;
    }
    getResult(){
        return `Hasilnya adalah : ${this.hasil}`;
    }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator;
