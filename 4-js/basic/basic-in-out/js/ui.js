const root = document.querySelector("#root");
root.id = "root";
root.classList.add("p-3");


const heading = document.createElement("h1");
root.append(heading);
// heading.innerText = "This is heading";
const text = document.createTextNode("this is heading");
heading.append(text)
heading.id = "heading";
heading.classList.add("font-serif","font-bold","text-2xl","text-center","bg-sky-500","py-3")


const imgDiv = document.createElement("div");
root.append(imgDiv);
imgDiv.id = "imgDiv";
imgDiv.classList.add("flex","gap-3","my-5");


const img1 = document.createElement("img");
imgDiv.append(img1);
img1.src = "./assets/images/poe-mamhe-thar-6.jpg"
img1.id = "img1";
img1.classList.add("h-32");
img1.alt="poe mamhe thar 6";


const img2 = document.createElement("img");
imgDiv.append(img2);
img2.src = "./assets/images/poe-mamhe-thar-7.jpg"
img2.id = "img2";
img2.classList.add("h-32");


const img3 = document.createElement("img");
imgDiv.append(img3);
img3.src = "./assets/images/landscape.svg"
img3.id = "img3";
img3.classList.add("h-32");


const para = document.createElement("p");
root.append(para);
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas esse illum, voluptate nostrum saepe molestiae quidem iusto architecto blanditiis?";
para.id = "p1";
para.classList.add("mb-4");


const listGroup = document.createElement("ul");
root.append(listGroup);
listGroup.id = "listGroup";
listGroup.classList.add();


const createList = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    li.id = "list";
    li.classList.add("p-2","mb-2","border")
    return li;
}
listGroup.prepend(createList("apple"));
listGroup.prepend(createList("banana"));
listGroup.prepend(createList("lemon"));
listGroup.prepend(createList("mango"));


const selectEle = document.createElement("select");
root.append(selectEle);
selectEle.id = "selectEle";
// selectEle.classList.add("my-3");
selectEle.className = "my-5 bg-slate-700";

const opt1 = new Option("option 1","opt1");
selectEle.append(opt1);
const opt2 = new Option("option 2","opt2");
selectEle.append(opt2);
const opt3 = new Option("option 3","opt3","default","selected");
selectEle.append(opt3);
