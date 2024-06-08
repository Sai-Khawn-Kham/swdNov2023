//OOP Concept or Principle
    // 1 Inheritance
    // 2 Encapsulation
    // 3 Abstraction
    // 4 Polymorphism


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
//getter setter methods
//it the security and maintainability of the code
class A{
    #a=5;
    getA(){
        return `the number is ${this.#a}`;
    }
    setA(newvalue){
        this.#a = newvalue;
        console.log(`You set the number to ${this.#a}`);
    }
}
const a = new A();
console.log(a);
console.log(a.getA());
a.setA(10);
console.log(a.getA());
