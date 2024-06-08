const fruits = ['apple','mango','banana','lemon'];     // declare array

console.log(fruits);   // accessing array

console.log(fruits[0]);    // accessing first array element

console.log(fruits[fruits.length-1]);     // accessing last array element 

fruits[1]="pineapple";     //overwrite element (overwrite and reassign are not the same)

fruits[10] = "orange";     //create empty element (hole)

fruits.push("strawberry");     //avoid create hole(empty element)
fruits[fruits.length] = "blueberry";      //avoid create hole(empty element)

//array construction
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);




//for-of and for-in
const arr3=['a','b','c'];
for(let x of arr3){
    console.log(x);
}

for(let x in arr3){
    console.log(x);
}




//Array prototype methods
    // length property
    // toString()
    // join()
    // push()
    // pop()
    // shift()
    // unshift()
    // sort() edit array
    // reverse() edit array

//Popular Array Methods
    // isArray()
    // includes() case sensitive
    // indexOf()
    // slice()
    // splice()
    // concat()
    // spread syntax (expression)

    // map(callBackFn,thisArg)
    // filter()
    // find()
    // findIndex()
    // reduce()
    // some()
    // every()




//Destructuring 
const [x,y,z] = ['aaa','bbb','ccc','ddd'];
console.log(x,y,z);
console.log(' ');




//Array Iteration
    // for of loop
    // expression
    // arr.forEach(callBackFun,thisArg)
    // callBackFn te ma currently process element(el), index of current element(index), array(a)
    // arr.forEach(() => )
    // arr.forEach((el,index,a) => )
    fruits.forEach((x,i,arr)=>console.log(x));