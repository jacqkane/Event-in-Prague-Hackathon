import { responseDataPreparation } from "./events.js";
import { ModalWindow } from "./form.js";

export class Eventcardbasic {
    constructor(oneEventDetail) {

        this.id = oneEventDetail.id;
        this.name = oneEventDetail.name;
        this.description = oneEventDetail.description;
        this.image_url = oneEventDetail.image_url;

        this.eventCardBasic = null;
        this.eventCardBasic_name = null;
        this.eventCardBasic_btn = null;
        this.element = null;
        this.modalwindow = null;
        this.containerEventDetail = null;
        this.createStartingElement();
    }

    createStartingElement = () => {
        this.prepareStaticHtml();
        this.attachStaticEventListeners();
        this.updateDynamicValues();
    }

    prepareStaticHtml = () => {

        this.element = document.createElement('div');
        this.element.classList.add('eventCardBasic');

        const eventCardBasic_name = document.createElement('div');
        eventCardBasic_name.classList.add('eventCardBasic_name');
        eventCardBasic_name.textContent = this.name;
        this.element.appendChild(eventCardBasic_name);
        this.eventCardBasic_btn = document.createElement('button');
        this.eventCardBasic_btn.textContent = 'More';
        this.eventCardBasic_btn.classList.add('eventCardBasic_btn');
        this.element.appendChild(this.eventCardBasic_btn);

    }

    attachStaticEventListeners = () => {
        this.eventCardBasic_btn.addEventListener('click', () => {

            const popup = new ModalWindow(this.id, this.name, this.image_url, this.description);

            document.body.appendChild(popup.modalWindow);
            popup.modalWindow.style.position = "absolute";
            popup.modalWindow.style.left = "50%";
            popup.modalWindow.style.top = "50%";
            popup.modalWindow.style.transform = "translate(-50%, -50%)";
        })

    }

    updateDynamicValues = () => {

    }

}