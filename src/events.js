import { Eventcardbasic } from "./eventcardbasic.js";
import { Eventcarddetail } from "./evantcarddetail.js";


export const responseDataPreparation = () => {

    const eventsList = [
        {
            "id": 1,
            "name": "PRAGUE CARNIVAL (MASOPUST) - FESTIVAL & PARADE",
            "date": "2022-02-26",
            "description": "Prague Carnival (Masopust) traces its roots back to medieval times...",
            "image_url": "http://www.progetto.cz/wp-content/uploads/2015/10/33-Masopust.jpg"
        },
        {
            "id": 2,
            "name": "ICE RINK BY CHARLES BRIDGE",
            "date": "2022-02-15",
            "description": "Open-air ice rink right next to Charles Bridge...",
            "image_url": "https://www.praguest.com/images/sampledata/sports/iceskating/ovocnytrh/estate-theatre.jpg"
        }
    ];

    let oneEventDetail = eventsList[0].name;
        console.log(oneEventDetail);

}














