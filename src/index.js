//the importing for Jacq's file
import { ModalWindow } from "./form";
import { loadData } from "./api";

// const modalWindow1 = new ModalWindow()
// document.body.appendChild(modalWindow1.modalWindow);

// console.log(modalWindow1.form);
// console.log(modalWindow1.button);
// end of Jacq's file

import { responseDataPreparation } from "./events.js";
loadData();
responseDataPreparation ();
