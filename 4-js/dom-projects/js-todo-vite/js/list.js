export const tasks = ["To read JS Book","Sleep Early","Eat Yoga"];
import Swal from "sweetalert2";
import { listGroup } from "./selectors.js";
import { v4 as uuidv4 } from 'uuid';

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
    list.querySelector(".list").id = "list" + uuidv4();
    list.querySelector(".listPara").innerText = currentTask;
    return list;
};
export const addList = (text) => {
    listGroup.append(createNewList(text));
    textInput.value = null;
    // updateTaskTotal();
};
export const checkList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const checkInput = currentList.querySelector(".checkInput");
    const listPara = currentList.querySelector(".listPara");
    const editBtn = currentList.querySelector(".editBtn");
    // updateDoneTask();
    listPara.classList.toggle("line-through");
    // listPara.innerText = "you check list";
    currentList.classList.toggle("opacity-70");
    currentList.classList.toggle("scale-90");
    checkInput.checked
        ? editBtn.setAttribute("disabled", true)
        : editBtn.removeAttribute("disabled");
    console.log("you check list");
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
    // if (window.confirm("Are you sure to delete this task?")) {
    //     currentList.classList.add("animate__animated", "animate__hinge");
    //     currentList.addEventListener("animationend", () => {
    //         currentList.remove();
    //         // updateDoneTask();
    //         // updateTaskTotal();
    //     });
    // }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        // confirmButtonColor: "#3085d6",
        // cancelButtonColor: "d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if(result.isConfirmed){
            currentList.classList.add("animate__animated", "animate__hinge");
            currentList.addEventListener("animationend", () => {
                currentList.remove();
            });
        }
    });
};
