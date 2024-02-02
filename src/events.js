import { Eventcardbasic } from "./eventcardbasic.js";
import { Eventcarddetail } from "./evantcarddetail.js";
import { loadData } from "./api.js";


export const responseDataPreparation = async () => {

    const eventsList = await loadData();
    // console.log(eventsList);
    let oneEventDetail = eventsList[0];
    console.log(eventsList);

    for (let i = 0; i < 6; i++) {
        let oneEventDetail = eventsList[i];
        const eventcardbasic = new Eventcardbasic(oneEventDetail);
        document.querySelector(".containerEventList").appendChild(eventcardbasic.element);
    }



}


















