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
console.log(num.toFixed());
console.log(num.toPrecision());
console.log(Number.parseFloat(num.toFixed(1)));
console.log(" ");

