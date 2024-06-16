btnGreet.onclick = function(){
    let userInput = document.getElementById('userInput');
    let displayText = document.getElementById('displayText');
    let btnGreet = document.getElementById('btnGreet');

    userInput = parseInt(userInput.value); //parseInt() function parses string argument and return integer 
    console.log(userInput);

    //if else conditional statement
    if(userInput <12){
        displayText.innerHTML = 'Good Morning';
    }
    else {
        displayText.innerHTML = 'Good Afternoon';
    }
};

let btnBuyTicket = document.getElementById('btnBuyTicket');
btnBuyTicket.onclick = function(){
    let userAge = document.getElementById('userAge');
    let displayTicketFees = document.getElementById('displayTicketFees');
    userAge = parseInt(userAge.value);

    //if else nested if else
    if(userAge>65){
        displayTicketFees.innerHTML='You are a senior, pay $5';
    }
    else if(userAge>=18){
        displayTicketFees.innerHTML='You are an adult, pay $10';
    }
    else if(userAge>=10){
        displayTicketFees.innerHTML='You are a teenager, pay $8';
    }
    else{
        displayTicketFees.innerHTML='You are a child free';
    }
};

let selectProgrammingLang = document.getElementById('selectProgrammingLang');
selectProgrammingLang.onchange = function(){
    let selectedValue = selectProgrammingLang.value;
    //switch conditional statement ***don't forget break statement
    switch(selectedValue){
        case '1':
            displayOption.innerHTML='HTML and CSS';
            break;
        case '2':
            displayOption.innerHTML='JavaScript';
            break;
        case '3':
            displayOption.innerHTML='Python';
            break;
        default:
            displayOption.innerHTML='Don\'t know';
            break;
    }
}

//object literals
let myCar={
    color:'green',
    make:'ford',
    model:'mustang',
    enginType:'gasoline'
};
console.log(myCar);

function Car(color,make,model,engineType){
    this.color=color;
    this.make=make;
    this.model=model;
    this.engineType=engineType;
    this.startEngine=function(){
        console.log('Engine starting...');
    };
}
let car1=new Car('red','Toyota','Prius','Electric');
let car2 =new Car('blue','vw','Golf','Deisel');
console.log(car1,car2);

let myProducts = [
    { id: 1, name:'guitar', price: 150},
    { id: 1, name:'drum', price: 150 },
    { id: 1, name:'piano', price: 150 },
];
console.log(myProducts);