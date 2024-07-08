import { addBtn,textInput,listGroup,deleteAll,doneAll } from "./selectors.js";
import { addBtnHandler,textInputHandler,listGroupHandler,deleteAllHandler,doneAllHandler } from "./handlers.js";

const listener = () => {
    addBtn.addEventListener("click", addBtnHandler);
    textInput.addEventListener("keyup", textInputHandler);
    listGroup.addEventListener("click", listGroupHandler);
    deleteAll.addEventListener("click", deleteAllHandler);
    doneAll.addEventListener("click", doneAllHandler);
};

export default listener;