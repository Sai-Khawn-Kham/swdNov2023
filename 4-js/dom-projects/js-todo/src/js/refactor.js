// selector
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const allTask = document.querySelector("#allTask");
const doneTask = document.querySelector("#doneTask");
// let count = 1;

// action (business logic)
textInput.focus();

const updateTaskTotal = () => {
    const listTotal = document.querySelectorAll(".list");
    allTask.innerText = listTotal.length;
};
const updateDoneTask = () => {
    const doneList = document.querySelectorAll(".list input:checked").length;
    doneTask.innerText = doneList;
};
const createNewList = (currentTask) => {
    const list = document.createElement("div");
    list.id = "list" + Date.now();
    // list.id = "list" + count++;
    list.classList.add("list");
    list.innerHTML = `
    <div class="flex animate__zoomIn animate__animated justify-between border-2 border-stone-950 mb-3 p-3">
        <div class="flex gap-3">
            <input type="checkbox" class="checkInput disabled:opacity-30 accent-stone-950">
            <p class="font-mono my-auto listPara">${currentTask}</p>
        </div>
        <div class="flex gap-2 duration-500 twoBtn">
            <button id="" class="editBtn active:scale-75 duration-200 border-2 disabled:opacity-30 border-stone-950 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>
            <button id="" class="deleteBtn active:scale-75 duration-200 border-2 border-stone-950 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pointer-events-none" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
    `;
    return list;
};

// action (application logic)
const addList = (text) => {
    listGroup.append(createNewList(text));
    textInput.value = null;
    updateTaskTotal();
};
const checkList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const checkInput = currentList.querySelector(".checkInput");
    const listPara = currentList.querySelector(".listPara");
    updateDoneTask();
    listPara.classList.toggle("line-through");
    currentList.classList.toggle("opacity-70");
    currentList.classList.toggle("scale-90");
    currentList.classList.add("duration-200");
    checkInput.checked
        ? editBtn.setAttribute("disabled", true)
        : editBtn.removeAttribute("disabled");
};
const editList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const checkInput = currentList.querySelector(".checkInput");
    const listPara = currentList.querySelector(".listPara");
    const editBtn = currentList.querySelector(".editBtn");
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
    const editEvent = ["blur", "keyup"];
    editEvent.forEach((val) => {
        newTextInput.addEventListener(val, (e) => {
            if (val == "blur") {
                editBtn.removeAttribute("disabled");
                checkInput.removeAttribute("disabled");
                listPara.innerText = newTextInput.value;
                listPara.classList.remove("hidden");
                newTextInput.remove();
            }
            if (val == "keyup") {
                if (e.key == "Enter") {
                    editBtn.removeAttribute("disabled");
                    checkInput.removeAttribute("disabled");
                    listPara.innerText = newTextInput.value;
                    listPara.classList.remove("hidden");
                    newTextInput.remove();
                }
            }
        });
    });
};
const deleteList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    if (window.confirm("Are you sure to delete this task?")) {
        currentList.classList.add("animate__animated", "animate__hinge");
        currentList.addEventListener("animationend", () => {
            currentList.remove();
            updateDoneTask();
            updateTaskTotal();
        });
    }
};

// handler
const addBtnHandler = (e) => {
    // console.log(textInput.value.trim() ? true : false);
    // console.log(textInput.value.trim());
        if (textInput.value.trim() != "") {
            addList(textInput.value);
        } else {
            alert("Input task");
    }
};
const textInputHandler = (e) => {
    // console.log(textInput.value.trim() ? true : false);
    // console.log(textInput.value.trim());
    if(e.key == "Enter"){
        if (textInput.value.trim() != "") {
            addList(textInput.value);
        } else {
            alert("Input task");
        }
    }
};
const listGroupHandler = (e) => {
    const list = e.target.closest(".list");
    if (e.target.classList.contains("checkInput")) {
        checkList(e.target.closest(".list").id);
    }
    if (e.target.classList.contains("editBtn")) {
        editList(e.target.closest(".list").id);
    }
    if (e.target.classList.contains("deleteBtn")) {
        deleteList(e.target.closest(".list").id);
    }
};

// listeners
addBtn.addEventListener("click", addBtnHandler);
textInput.addEventListener("keyup", textInputHandler);
listGroup.addEventListener("click", listGroupHandler);