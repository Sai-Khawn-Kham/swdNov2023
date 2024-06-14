// 1 select
const result = document.getElementById('result');
const storeBtn = document.getElementById('storeBtn');
const clearBtn = document.getElementById('clearBtn');
const width = document.getElementById('width');
const breadth = document.getElementById('breadth');
const calculateBtn = document.getElementById('calculateBtn');
const recordList = document.getElementById('recordList');

// function
const area = (w,b) => w*b;

// event
calculateBtn.onclick = () => {
    const w = width.valueAsNumber;
    const b = breadth.valueAsNumber;
    const a = area(w,b);

    result.innerText = `${w}ft * ${b}ft = ${a}sqft`;

    width.value = "";
    breadth.value = "";
};

storeBtn.onclick = () => {
    recordList.innerHTML += `<li>${result.innerText}</li>`;
    result.innerText = "";
};

clearBtn.onclick = () => {
    result.innerText = "";
};