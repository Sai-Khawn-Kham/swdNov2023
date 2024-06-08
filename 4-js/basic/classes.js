//a class is like a blueprint or template for creating objects with shared characteristics(properties) and behaviors(methods)
class Name{     //name start with capital letter
    a="aaa";    //property
    b(){    //method
        return "this is b";
    }
}
const x = new Name();   //instance
console.log(x);
console.log(x.b());




//constructor method(default method)
class Car{
    constructor(inputModel,inputBrand){
        this.model = inputModel;
        this.brand = inputBrand;
    }
}
const y = new Car("netaV","Neta");      //data initialize
console.log(y);
const z = new Car("Bz4x","Toyota");
console.log(z);




//access modifiers(private and public method)
class A{
    a = "aaa";      //public property
    #b = "private b";   //private property
    c(){    //public method
        return "this is c"
    };
    useb(){     //public method
        return `call ${this.#b}`
    }
}
const a = new A();
console.log(a);
console.log(a.a);
// console.log(a.#b);       // error
console.log(a.c());
console.log(a.useb());




//static property and static method
//they can be used without instance
class B{
    static a = "static aa";
    static b(){
        return "this is static method b";
    }
}
console.log(B.a);
console.log(B.b());




//Inheritance
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{       //extends
    constructor(name,age,uni){
        super(name,age);            //super
        this.university = uni;
    }
}
const p1 = new Person('aye aye',19);
console.log(p1);
const st1 = new Student('mg mg',20,'ucsl');
console.log(st1);




//Encapsulation
class A{
    #a=5;
    getA(){     //getter method
        return `the number is ${this.#a}`;
    }
    setA(newvalue){     //setter method
        this.#a = newvalue;
        console.log(`You set the number to ${this.#a}`);
    }
}
const aa = new A();
console.log(aa);
console.log(aa.getA());
aa.setA(10);
console.log(aa.getA());