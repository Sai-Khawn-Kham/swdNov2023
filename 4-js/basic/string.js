//declare string
let st1 = 'khawn kham';
let st2 = 'I\'m 5\' 11" tall';

//template string
let st3 = `Khawn Kham is 6' 2" tall`;
let st4 = `I am ${2024-2001} years old.`;




console.dir(String);
// length property
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
let st5 = new String("     Hello! Sai Khawn Kham     ");
console.log(st5.substring(3,7));
console.log(st5[6]);
console.log(st5.length);
console.log(st5.toUpperCase());
console.log(st5.toLowerCase());
console.log(st5.trim().toLowerCase().replace("hello","hi"));
console.log(" ");