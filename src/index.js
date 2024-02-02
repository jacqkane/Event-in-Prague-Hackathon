//the importing for Jacq's file
import { ModalWindow } from "./form";
import { loadData } from "./api";
// end of Jacq's file

import { responseDataPreparation } from "./events.js";
loadData();
responseDataPreparation ();
