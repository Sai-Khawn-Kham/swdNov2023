// there are zero, positive integer, negative integer and float in JS number
// number system => binary, octal, decimal, hexadecimal




console.dir(Number);
// toString()
// toFixed()
// toPrecision()
// Number()
// parseFloat()
// parseInt()
// Math.random()
// Math.floor()
// Math.ceil()
console.log(' ');

//parseInt and parseFloat convert string to num
//but it can't convert when the num is not on the  front
console.log(Number.parseInt("230.12lb"));
console.log(Number.parseFloat("230.12lb"));
console.log(Number.parseFloat("lb 230.12"));
console.log(" ");

let num = 746.553;
console.log(num.toString());
console.log(num.toExponential(7));
console.log(num.toFixed(2));
console.log(Number.parseFloat(num.toFixed(1)));
console.log(" ");




console.dir(Math);
//math object contains static properties and methods for mathematical constant and function
// example math.PI for 22/7 (3.142)

console.log(Math.pow(2,3));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.1));
console.log(Math.abs(-500));
console.log(Math.min(1,2,3,5,8));
console.log(Math.max(1,2,3,5,8));
console.log(Math.random());
console.log(" ");

//random output is from 0.0 to 0.9
//with the multiple of 10
    //if we use floor the output is 0-9
    //if we use ceil the output is 1-10
    //how to define the random range to 0-10
let random = Math.random();
console.log(Number.parseFloat((random*10).toFixed()));
//without *10 output is 0-1
//with *10 output is 0-9
//toFixed convert 9.3 to 9 and 9.5 to 10

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}