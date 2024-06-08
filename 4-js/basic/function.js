//function statement or function declaration
function fun(parameter=2){
    return parameter*4;
    //the code behind return don't work
}
console.log(fun());     //because of default parameter
console.log(fun(4));




//function expression
const fun1 = function(){
    return `this is function`;
};
console.log(fun1());




//immediately invoked function expression
console.log(
    (function(){
        return `this is IIFE`;
    })()
);
console.log(
    `this is also ${
        (function(){
            return 'IIFE';
        })()
    }`
);




//Function prototype methods
    // bind()
    // apply()
    // call()
    // arguments




//Arrow Function
    //Syntax
    // () => ;
    // () => {};
    // (x,y,...rest) => {};




//higher order function and call back function
const f1 = function(){
    return 4;
}
const f2 = function(){
    return 5;
}
const r = function(x,y){
    return x*y;
}
console.log(r(f1(),f2()));
// f1 and f2 are call back function
// r is higher order function (HOF)