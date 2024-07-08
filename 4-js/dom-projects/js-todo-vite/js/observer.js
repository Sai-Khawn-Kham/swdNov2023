import { updateDoneTask, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
    console.log("I'm observer");

    // watch listGroup
    const job = () => {
        console.log("u change in listGroup");
        updateTaskTotal();
        updateDoneTask();
    };
    const observerOptions = {
        childList: true,
        subtree: true,
        attributes: true,
    }
    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup,observerOptions);
}

export default observer;