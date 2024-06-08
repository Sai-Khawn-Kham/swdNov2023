//switch statement
//switch use strict comparison (===)
let result1;
let expression = 2;
switch (expression) {
  case 1:
    result1 = "this is 1";
    break;
  case 2:
    result1 = "this is 2";
    break;
  case 3:
    result1 = "this is 3";
    break;
  default:
    result1 = "this is default";
}
console.log(result1);


//omit break
let result2;
let z = "b";
switch (z) {
  case "a":
    result2 = "a";
    break;
  case "b":
    result2 = "b";
  case "c":
    result2 = "c";
    break;
  default:
    result2 = "default";
}
console.log(result2 + " you forgot break keyword in case b");


//case use common code block
function day(d) {
  if (d > 6) {
    return "you enter fault number";
  }
  switch (d) {
    case 0:
    case 6:
      return "weekend";
      break;
    default:
      return "weekday";
  }
}
console.log(day(66));
