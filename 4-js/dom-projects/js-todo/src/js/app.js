// selector
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const allTask = document.querySelector("#allTask");
const doneTask = document.querySelector("#doneTask");

// process
textInput.focus();
const addList = () => {
    // mount list to listGroup
    // console.log(textInput.value);
    listGroup.append(createNewList(textInput.value));
    textInput.value = null; // clear input
    updateTaskTotal();
};

const updateTaskTotal = () => {
    // count list and update
    const listTotal = document.querySelectorAll(".list"); // select all element with class="list"
    // console.log(listTotal); // output: nodelist (arr like object)
    allTask.innerText = listTotal.length;
};

const updateDoneTask = () => {
    // count done task and update
    const doneList = document.querySelectorAll(".list input:checked").length;
    doneTask.innerText = doneList;
};

const createNewList = (currentTask) => {
    // create new list
    const list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = `
    <div class="flex justify-between border-2 border-stone-950 mb-3 p-3">
        <div class="flex gap-3">
            <input type="checkbox" class="checkInput disabled:opacity-30 accent-stone-950">
            <p class="font-mono my-auto listPara">${currentTask}</p>
        </div>
        <div class="flex gap-2 duration-500 translate-x-96 twoBtn">
            <button id="" class="editBtn border-2 disabled:opacity-30 border-stone-950 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>
            <button id="" class="deleteBtn border-2 border-stone-950 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pointer-events-none" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
    `;

    // const checkInput = list.querySelector(".checkInput");
    // const listPara = list.querySelector(".listPara");
    // const deleteBtn = list.querySelector(".deleteBtn");
    // const twoBtn = list.querySelector(".twoBtn");
    // const editBtn = list.querySelector(".editBtn");

    // list.addEventListener("mouseover", () => {
    //     twoBtn.classList.replace("translate-x-96","translate-x-0");
    // });
    // list.addEventListener("mouseout", () => {
    //     twoBtn.classList.replace("translate-x-0","translate-x-96");
    // });

    // checkInput.addEventListener("click", () => {
    //     updateDoneTask();
    //     listPara.classList.toggle("line-through");
    //     list.classList.toggle("opacity-70");
    //     list.classList.toggle("scale-90");
    //     list.classList.add("duration-200");
    //     // list.classList.toggle("rotate-90");
    //     // list.classList.toggle("origin-top-left");
    //     checkInput.checked ? editBtn.setAttribute("disabled", true) : editBtn.removeAttribute("disabled");
    // });

    // editBtn.addEventListener("click", () => {
    //     editBtn.setAttribute("disabled", true);
    //     checkInput.setAttribute("disabled", true);
    //     const currentText = listPara.innerText;
    //     listPara.classList.add("hidden");
    //     const newTextInput = document.createElement("input");
    //     newTextInput.className = "border font-mono border-stone-950 h-6 focus:outline-none my-auto px-2 py-1";
    //     newTextInput.value = currentText;
    //     listPara.after(newTextInput);
    //     newTextInput.focus();

    //     newTextInput.addEventListener("blur", () => {
    //         editBtn.removeAttribute("disabled");
    //         checkInput.removeAttribute("disabled");
    //         // console.log("edit finish");
    //         listPara.innerText = newTextInput.value;
    //         listPara.classList.remove("hidden");
    //         newTextInput.remove();
    //     });

    // });

    // deleteBtn.addEventListener("click", () => {
    //     if (window.confirm("Are you sure to delete this task?")) {
    //         list.remove();
    //     }
    // });

    return list;
};

const listGroupHandler = (e) => {
    const list = e.target.closest(".list");
    const checkInput = list.querySelector(".checkInput");
    const listPara = list.querySelector(".listPara");
    const deleteBtn = list.querySelector(".deleteBtn");
    const twoBtn = list.querySelector(".twoBtn");
    const editBtn = list.querySelector(".editBtn");
    // console.log(list);
    list.addEventListener("mouseover", () => {
        twoBtn.classList.replace("translate-x-96", "translate-x-0");
    });
    list.addEventListener("mouseout", () => {
        twoBtn.classList.replace("translate-x-0", "translate-x-96");
    });
    if (e.target.classList.contains("editBtn")) {
        // console.log("u edit");
        editBtn.setAttribute("disabled", true);
        checkInput.setAttribute("disabled", true);
        const currentText = listPara.innerText;
        listPara.classList.add("hidden");
        const newTextInput = document.createElement("input");
        newTextInput.className =
            "border font-mono border-stone-950 h-6 focus:outline-none my-auto px-2 py-1";
        newTextInput.value = currentText;
        listPara.after(newTextInput);
        newTextInput.focus();

        newTextInput.addEventListener("blur", () => {
            editBtn.removeAttribute("disabled");
            checkInput.removeAttribute("disabled");
            // console.log("edit finish");
            listPara.innerText = newTextInput.value;
            listPara.classList.remove("hidden");
            newTextInput.remove();
        });
    }
    if (e.target.classList.contains("deleteBtn")) {
        // console.log("u delete");
        if (window.confirm("Are you sure to delete this task?")) {
            list.remove();
        }
        updateDoneTask();
        updateTaskTotal();
    }
    if (e.target.classList.contains("checkInput")) {
        // console.log("you click on checkbox");
        updateDoneTask();
        listPara.classList.toggle("line-through");
        list.classList.toggle("opacity-70");
        list.classList.toggle("scale-90");
        list.classList.add("duration-200");
        // list.classList.toggle("rotate-90");
        // list.classList.toggle("origin-top-left");
        checkInput.checked
            ? editBtn.setAttribute("disabled", true)
            : editBtn.removeAttribute("disabled");
    }
};

// event
// addBtn.onclick = addList;
// add onclick=addList() attr value in html
addBtn.addEventListener("click", addList);
textInput.addEventListener("change", addList);

listGroup.addEventListener("click", listGroupHandler);
