//there is a problem to use arrow fun in object. this represent window instead of object

//single line auto return
const run = () => "this is run";
console.log(run());

const sum = (x,y) => x+y;
console.log(sum(2,3));



//multiple line
const sumo = (x,y) => {
    console.log(x);
    console.log(y);
    return x+y;
};
console.log(sumo(3,3));



//rest parameters
const restpara = (x,y,...para) => {
    return para;
};
console.log(restpara(1,2,3,4,'a'));