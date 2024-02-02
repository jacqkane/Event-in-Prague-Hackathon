import { formPost } from "./form_post"

export class ModalWindow {
    constructor(id, name, image_url, description) {//input widget name when ready access properties eg. eventwidget.name
        this.id = id
        this.name = name
        this.image_url = image_url
        this.description = description

        this.modalWindow = null
        this.button = null
        this.form = null
        this.close = null
        

        this.createStarterModal();
    }

    createStarterModal = () => {
        this.prepareModal()
        this.attachEventListeners()
        // this.updateDynamicValues()
    }

    prepareModal = () => {
        const modalWindow = document.createElement('div')
        modalWindow.className = 'modal_window';

        this.modalWindow = modalWindow

        this.updateDynamicValues()

        //get hold of other useful elements after HTML injected

        const button = this.modalWindow.querySelector('.submit')
        this.button = button

        const form = this.modalWindow.querySelector('.form')
        this.form = form

        const close = this.modalWindow.querySelector('.close')
        this.close = close

    }

    updateDynamicValues = () => {
        this.modalWindow.innerHTML =
        `
    <div class="close"><button>&times</button></div>    
    <div class="info">
        <h3 class="event_name">${this.name}</h3>
        <img src="${this.image_url}" alt="${this.name}">
        <p class="description">${this.description}</p>
    </div> 
    <div class="form_wrapper">
    <form method="post" class="form">
      <h2 class="form_head">Register for this Event!</h2>
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" /><br><br>
    
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" /><br><br>
    
      <label for="email">Email</label>
      <input type="text" name="email" id="email" /><br><br>
    
      <label for="phoneNumber">Phone Number</label>
      <input type="number" name="phoneNumber" id="phoneNumber" /><br><br>

      <label for="over18">I am over 18</label>
      <input type="checkbox" name="over18" id="over18" /><br><br>
      <button class="submit">Register!</button>
    </form></div>`
    }

    attachEventListeners = () => {
        this.button.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('click registered')
            console.log(this.createData(this.form)) //check data is available
            formPost(this.id, this.createData(this.form));
            this.modalWindow.style.display = "none";
        })

        this.close.addEventListener('click', () => {
            this.modalWindow.style.display = "none";
        })
    }

    createData = (form) => {
        return{
          firstName: form.querySelector('#firstName').value,
          lastName: form.querySelector('#lastName').value,
          email: form.querySelector('#email').value,
          phone: form.querySelector('#phoneNumber').value,
          adult: form.querySelector('#over18').value, 
        }
      }

    
}