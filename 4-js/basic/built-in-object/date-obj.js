//date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC
//as for built in obj you don't need to build it with class keyword just instance and use
//it have a lot of prototype methods and other
console.dir(Date);
console.log(Date.now());    //output: the time from Jan 1,1970 in milliseconds
console.log(" ");




const d = new Date(2001,2,12,10,34);
const dd = new Date();
//the output of d is the time we define
//the output of dd is now
console.log(d.toDateString());
console.log(d.toString());
console.log(" ");

// console.log(d.getDate());           //12
// console.log(d.getDay());            //1 monday
// console.log(d.getFullYear());       //2001
// console.log(d.getHours());          //10
// console.log(d.getMilliseconds());   //0
// console.log(d.getMinutes());        //34
// console.log(d.getMonth());          //2 march
// console.log(d.getSeconds());        //0
// console.log(d.getTime());           //984369840000
// console.log(' ');


//300 hours later
const d1 = new Date();
d1.setHours(d1.getHours()+300);
console.log(d1);
console.log(" ");


//4 months later
const d2 = new Date();
d2.setMonth(d2.getMonth()+4);
console.log(d2);
console.log(" ");


//learning time
let coursehour = 50;
let learnperday = 2;
let learnday = coursehour/learnperday;
const d3 = new Date();
d3.setDate(d3.getDate()+learnday);
console.log(d3);
console.log(" ");


//getDay getMonth
const daynames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const monthnames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const d4 = new Date(2001,2,12);
console.log(d4.toString());
console.log(daynames[d4.getDay()]);
console.log(monthnames[d4.getMonth()]);
console.log(" ");