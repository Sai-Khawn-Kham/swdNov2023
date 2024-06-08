//String
    console.dir(String);
    //length property
    // substring(indexStart,indexEnd)
    // slice(indexStart,indexEnd)
    // search("keyword")
    // replace("find","replace")
    // toUpperCase()
    // toLowerCase()
    // trim()
    // padStart(targetLength,"padString")
    // padEnd(targetLength,"padString")
    // split(separator,limit)
    let st = new String("     Khawn Kham     ");
    console.log(st.substring(3,7));
    console.log(' ');




//Number
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
    let num = 123.456;
    console.log(num.toString());
    console.log(Number.parseInt(num));
    console.log(" ");




//Object
    console.dir(Object);
    // keys()
    // values()
    // hasOwn()
    const obj = {a:'aa',b:'bb',c:'cc'};
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.hasOwn(obj,"a"));
    console.log(' ');




//Function
    console.dir(Function)
    // bind()
    // apply()
    // call()
    // arguments
    const fun = new Function('a','b','return a+b');
    console.log(fun(1,5));
    console.log(fun.bind(null,1,5));
    console.log(fun.bind(null,1,5).apply());
    console.log(fun.call(null,1,5));
    function fun2(a,b){
        console.log(arguments);
        return a+b;
    }
    console.log(fun2(1,5,4,8,6,9));
    function sumArg(){
        let total = 0;
        for( let x of arguments){
            total += x;
        }
        return total;
    }
    console.log(sumArg(1,2,3,4,5,6));
    console.log(' ');




//Array
    console.dir(Array);
    // length property
    // spread syntax (expression)
    // isArray()
    // includes() case sensitive
    // indexOf()
    // slice()
    // splice()
    // concat()
    // sort() edit array
    // reverse() edit array
    // toString()
    // join()
    // push()
    // pop()
    // shift()
    // unshift()
    const fruits = ['apple','mango','pineapple','banana','lemon'];
    console.log(fruits.sort());
    console.log(fruits.toString());
    console.log(fruits.join('-'));
    console.log(fruits.reverse());
    console.log(fruits);