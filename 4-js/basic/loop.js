//for loop
for(let i=1;i<=10;i++){
    console.log(i);
    if(i===4){continue;}    //skip this step
    if(i===8){break;}   //stop the loop
}




//Array
const a=['a','b','c'];
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
for(let x of a){    // for of
    console.log(x);
}
for(let x in a){    // for in
    console.log(x);
}




//Object
const obj={ax:'aaa',by:'bbb',cz:'ccc'};
// for(let i=0;i<obj.length;i++){
//     console.log(obj[i]);
// }
// for(let x of obj){
//     console.log(x);
// }
for(let x in obj){
    console.log(x,obj[x]);
}




//while loop
let x=1;
while(x<10){
    console.log(x);
    x++;
}

//do while loop
let y=0;
do{
    console.log(y);
    y++;
}
while(y<5);