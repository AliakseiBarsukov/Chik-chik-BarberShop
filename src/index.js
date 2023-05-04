import './index.html';
import './index.scss';
import { slider } from './modules/slider.js';
import { initService } from './modules/initService.js';
import { initReserve } from './modules/initReserve.js';


const init = () => {
  slider();
  initService();
  initReserve();
}


window.addEventListener('DOMContentLoaded', init)
