function wakeTime(t, w) {
  if (t >= 8 && w == false) {
    return "You are beaten to death";
  } else {
    return "wake up earlier tomorrow";
  }
}
console.log(wakeTime(9, false));
console.log(wakeTime(7, true));


function goToSchool(pocketMoney) {
  if (pocketMoney < 200) {
    return "you don't have enough money please take a walk";
  } else {
    return "let me drive you to the school";
  }
}
console.log(goToSchool(150));
console.log(goToSchool(400));


function notEnoughMoney(pocketMoney) {
  if (pocketMoney < 400) {
    return "you are angry because you have to walk to school";
  } else {
    return "give a kiss and go to school";
  }
}
console.log(notEnoughMoney(300));


function time(t) {
  if (t > 10) {
    return "start teaching";
  }
  return "wait for students";
}
console.log(time(9));
console.log(time(10));
console.log(time(10.1));


function exam(m){
    if(m>=80){
        return "distinction"
    }
    if(m<40){
        return "fail";
    }
    if(m>=40){
        return "pass";
    }
}
console.log(exam(39));
console.log(exam(42));
console.log(exam(81));


function evenOdd(num) {
  if (num % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
}
console.log(evenOdd(14));
console.log(evenOdd(41));

function addnum(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return "one of them or both are not number";
}
console.log(addnum(2,'4'));
console.log(addnum(2,5));