const heading = document.getElementById('heading');
const para = document.getElementsByTagName('p');
// const list = document.getElementsByClassName('item');
const listGroup = document.querySelector('#unor');
const list = document.querySelectorAll('ul>li');
const textInput = document.querySelector('#textInput');
const btn = document.querySelector('#btn');
const changeBtn = document.querySelector('#changeBtn');
const headingSmaller = document.querySelector('#headingSmaller');
const headingLarger = document.querySelector('#headingLarger');

console.log(heading);
console.log(para);
console.log(list);
console.log(textInput);
console.log(btn);

console.log(heading.innerText);
console.log(listGroup.innerText);
console.log(listGroup.innerHTML);

list[1].innerText="edit by js"

listGroup.innerHTML += "<li>added by js</li>";

function changeTitle(){
    heading.innerText = textInput.value;
    textInput.value = "";
}

// btn.onclick = changeTitle;
// btn.addEventListener("click",changeTitle);

changeBtn.onclick = () => {
    heading.style.color = "green";
    heading.style.textAlign = "center";
    heading.style.backgroundColor = "yellow";
    heading.style.padding = "10px 20px";
};

headingSmaller.onclick = () => {
    const current = parseInt(heading.style.fontSize);
    heading.style.fontSize = `${current-5}px`;
};

headingLarger.onclick = () => {
    const current = parseInt(heading.style.fontSize);
    heading.style.fontSize = `${current+5}px`;
};


