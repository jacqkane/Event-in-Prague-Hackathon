import { responseDataPreparation } from "./events.js";


export class Eventcardbasic {
    constructor(eneEventDetail) {

        this.id = eneEventDetail.id;
        this.name = eneEventDetail.name;
        this.description = eneEventDetail.description;
        this.image_url = eneEventDetail.image_url;


        this.element = null;
        this.createStartingElement();
    }

    createStartingElement = () => {
        this.prepareStaticHtml();
        this.attachStaticEventListeners();
        this.updateDynamicValues();
    }

    prepareStaticHtml = () => {
        const containerEventList = document.querySelector('.containerEventList');
        const eventCardBasic = document.createElement('div');
        eventCardBasic.classList.add('eventCardBasic');
        containerEventList.appendChild(eventCardBasic);
        const eventCardBasic_name = document.createElement('div');
        eventCardBasic_name.classList.add('eventCardBasic_name');
        eventCardBasic_name.textContent = this.name;
        eventCardBasic.appendChild(eventCardBasic_name);
        const eventCardBasic_btn = document.createElement('button');
        eventCardBasic_btn.textContent = 'More';
        eventCardBasic_btn.classList.add('eventCardBasic_btn');
        eventCardBasic.appendChild(eventCardBasic_btn);

    }

    attachStaticEventListeners = () => {
    }

    updateDynamicValues = () => {

    }

}