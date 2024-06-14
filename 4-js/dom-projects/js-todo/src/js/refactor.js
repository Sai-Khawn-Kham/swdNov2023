// selector
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const allTask = document.querySelector("#allTask");
const doneTask = document.querySelector("#doneTask");
// let count = 1;
const deleteAll = document.querySelector("#deleteAll");
const doneAll = document.querySelector("#doneAll");
const listTemplate = document.querySelector("#listTemplate");

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
    const list = listTemplate.content.cloneNode(true);
    list.querySelector(".list").id = "list" + Date.now();
    list.querySelector(".listPara").innerText = currentTask;
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
    const editBtn = currentList.querySelector(".editBtn");
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
    if (e.key == "Enter") {
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
const deleteAllHandler = (e) => {
    if (confirm("are you sure to remove all tasks?")) {
        const allList = listGroup.querySelectorAll(".list");
        allList.forEach((list) => list.remove());
    }
};
const doneAllHandler = (e) => {
    if (confirm("are you sure to done all task?")) {
        const allList = listGroup.querySelectorAll(".list");
        allList.forEach((list) => {
            checkList(list.id);
            list.querySelector(".checkInput").checked = true;
        });
    }
};

// listeners
addBtn.addEventListener("click", addBtnHandler);
textInput.addEventListener("keyup", textInputHandler);
listGroup.addEventListener("click", listGroupHandler);
deleteAll.addEventListener("click", deleteAllHandler);
doneAll.addEventListener("click", doneAllHandler);
