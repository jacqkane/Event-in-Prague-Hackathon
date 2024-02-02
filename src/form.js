export class ModalWindow {
    constructor() {//input widget name when ready access properties eg. eventwidget.name
        this.name = 'name'
        this.img = 'img'
        this.description = 'description'
        this.modalWindow = null

        this.createStarterModal();
    }

    createStarterModal = () => {
        this.prepareModal()
    }

    prepareModal = () => {
        const modalWindow = document.createElement('div')
        modalWindow.className = 'modal_window';

        this.modalWindow = modalWindow
    }
}