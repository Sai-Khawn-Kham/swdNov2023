let myNumbers = [1,3,4,6,7]; //declare array
console.log(myNumbers[0]);
console.log(myNumbers[1]);

//for loop
for(let i=0; i<5; i++){
    console.log(i);
}

//for of loop used in arrays
for(let number of myNumbers){
    console.log(number);
}

//for in loop used in object
let myCar = {
    "make" : "Honda",
    "year" : "2015",
    "model" : "Accord"
};
for(let key in myCar){
    console.log(key);
    console.log(myCar[key]);
}

//while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}

//do while loop
let k=0;
do{
    console.log(k);
    k++;
}
while(k<3);

let colors = ['red','blue','green','white'];
console.log(colors);

colors.push('yellow');
console.log(colors);

let lastColor = colors.pop();
console.log(lastColor);

let firstColor = colors.shift();
console.log(firstColor);

console.log(colors);
colors.unshift('gray');