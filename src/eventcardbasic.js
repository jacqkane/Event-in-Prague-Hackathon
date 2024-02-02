
export class Eventcardbasic {
    constructor(eventsList) {
        this.eventsList = eventsList;


        this.element = null;
        this.createStartingElement();
    }

    createStartingElement = () => {
        this.prepareStaticHtml();
        this.attachStaticEventListeners();
        this.updateDynamicValues();
    }

    prepareStaticHtml = () => {
    }

    attachStaticEventListeners = () => {
    }

    updateDynamicValues = () => {

    }

}