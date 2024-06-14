import { listGroup } from "./selectors.js";

export const updateTaskTotal = () => {
    const listTotal = document.querySelectorAll(".list");
    allTask.innerText = listTotal.length;
};
export const updateDoneTask = () => {
    const doneList = document.querySelectorAll(".list input:checked").length;
    doneTask.innerText = doneList;
};
export const createNewList = (currentTask) => {
    const list = listTemplate.content.cloneNode(true);
    list.querySelector(".list").id = "list" + Date.now();
    list.querySelector(".listPara").innerText = currentTask;
    return list;
};
export const addList = (text) => {
    listGroup.append(createNewList(text));
    textInput.value = null;
    updateTaskTotal();
};
export const checkList = (listId) => {
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
export const editList = (listId) => {
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
    newTextInput.addEventListener("blur", () => {
        editBtn.removeAttribute("disabled");
        checkInput.removeAttribute("disabled");
        listPara.innerText = newTextInput.value;
        listPara.classList.remove("hidden");
        newTextInput.remove();
    });
    newTextInput.addEventListener("keyup",(e) => {
        if (e.key == "Enter") {
            editBtn.removeAttribute("disabled");
            checkInput.removeAttribute("disabled");
            listPara.innerText = newTextInput.value;
            listPara.classList.remove("hidden");
            newTextInput.remove();
        }
    });
};
export const deleteList = (listId) => {
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
