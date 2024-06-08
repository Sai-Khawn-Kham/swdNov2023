//math object contains static properties and methods for mathematical constant and function
// example math.PI for 22/7 (3.142)


console.dir(Math);
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