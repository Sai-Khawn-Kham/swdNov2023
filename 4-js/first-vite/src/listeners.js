import {addBtn} from "./selectors";
import {addBtnHandler} from "./handlers"

export const listener = () => {
    addBtn.addEventListener("click", addBtnHandler);
}