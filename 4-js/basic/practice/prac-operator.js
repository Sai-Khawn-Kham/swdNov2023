function enroll(exam, viva) {
  if (exam >= 60 && viva >= 60) {
    return "You pass the text";
  }
  return "You fail the test";
}
console.log(enroll(61, 70));

function vote(age, nationality) {
  if (age >= 18 && nationality == "myan") {
    return "You can vote for election";
  }
  return "You can't vote";
}
console.log(vote(18, "myan"));

function gotommsit(x) {
  if (x == "ybs65" || x == "ybs20") {
    return "you will arrive mmsit";
  }
  return "you will not arrive mmsit";
}
console.log(gotommsit("ybs20"));

function eat(x) {
  if (x == "hotpot" || x == "malashankaw") {
    return "you pi wa";
  }
  if (x == "ice cream") {
    return "u tet myoo";
  }
}
console.log(eat('ice cream'));
