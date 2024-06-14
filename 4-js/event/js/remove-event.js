const body = document.querySelector("body");
const clickTarget = document.querySelector("#clickTarget");
const mouseOverTarget = document.querySelector("#mouseOverTarget");

let toggle = false;
function makeBackgroundYellow(){
    body.style.backgroundColor = toggle ? "red" : "yellow";
    toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow);

mouseOverTarget.addEventListener("mouseover",()=> {
    clickTarget.removeEventListener("click",makeBackgroundYellow);
})