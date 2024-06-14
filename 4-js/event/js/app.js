const body = document.querySelector("body")
const heading = document.querySelector("#heading");
const eventPara = document.querySelector("#eventPara");
const eventPara2 = document.querySelector("#eventPara2");
const link = document.querySelector("#link");
const this1 = document.querySelector("#this1");
const this2 = document.querySelector("#this2");
const thisInnerText = document.querySelector("#thisInnerText");
const Btn = document.querySelector("#Btn");

// event parameter
eventPara.addEventListener("click", (event) => {
    console.log(event);
});
eventPara2.addEventListener("click", (e) => {
    console.log(e);
});

// e.preventDefault()
link.addEventListener("click", (event) => {
    alert("hello");
    event.preventDefault();
});

// this keyword
this1.addEventListener("click", () => { console.log(this)});
this2.addEventListener("click", function(){console.log(this)});
thisInnerText.addEventListener("click", function(){console.log(this.innerText)});
Btn.addEventListener("click", function(){console.log(body.innerText)});



//===============================================================================

const addEvent = document.querySelector("#addEvent");
const removeEvent = document.querySelector("#removeEvent");

// add or remove event listener
const showClick = () => {
    console.log("U click");
};
addEvent.addEventListener("click", showClick);
removeEvent.addEventListener("click", () => {
    addEvent.removeEventListener("click",showClick);
});

// event parameter's target
// document.addEventListener("click",(e) => {console.log(e.target);
//     e.stopPropagation
// })



//===================================================================

const aa = document.querySelector("#aa");
const bb = document.querySelector("#bb");
const cc = document.querySelector("#cc");
const dd = document.querySelector("#dd");

aa.addEventListener(
    "click",
    (e) => {
        console.log("u click aa");
    },
    true
);

bb.addEventListener(
    "click",
    (e) => {
        e.stopPropagation();
        console.log("u click bb");
    },
    true
);

cc.addEventListener(
    "click",
    (e) => {
        console.log("u click cc");
    },
    true
);

dd.addEventListener(
    "click",
    (e) => {
        console.log("u click dd");
    },
    true
);



// =====================================================================

const textInput = document.querySelector("#textInput");
const listGroup = document.querySelector("#listGroup");
const lists = document.querySelectorAll(".list");

textInput.addEventListener("change",() => {
    const createList = document.createElement("li");
    createList.innerText = textInput.value;
    textInput.value = "";
    listGroup.append(createList);
})
// lists.forEach((l) => {
//     l.addEventListener("click", () => {
//         console.log(l.innerText);
//     });
// });
listGroup.addEventListener("click", (e) => {
    console.log(e.target.innerText);
})



// ===========================================================

const playGround = document.querySelector("#playGround");
const textInput2 = document.querySelector("#textInput2");

const mouseEvents = ["click","mouseover","mousemove","mouseout"];
const keyboardEvents = ["keydown","keyup"];

// mouseEvents.forEach( (val) => {
//     playGround.addEventListener(val,() => {
//         console.log("U ", val);
//     })
// })

keyboardEvents.forEach((val) => {
    textInput2.addEventListener(val, () => {
        console.log("U ", val);
    })
})