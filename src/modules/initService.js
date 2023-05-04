import { API_URL } from "./api.js";
import { addPreload, removePreload } from './preload.js';
import { renderPrice } from './renderPrice.js';
import { renderService } from './renderService.js';

export const initService = () => {


  const priceList = document.querySelector('.price__list');
  const reserveFieldsetService = document.querySelector('.reserve__fieldset_service');

  priceList.textContent = '';
  addPreload(priceList);

  reserveFieldsetService.textContent = '';
  addPreload(reserveFieldsetService);
  reserveFieldsetService.innerHTML = '<legend class="reserve__legend">Услуга</legend>';




  fetch(`${API_URL}/api`)
    .then(response => response.json())
    .then(data => {
      renderPrice(priceList, data);
      removePreload(priceList);
      return data;
    })
    .then(data => {
      renderService(reserveFieldsetService, data)
      removePreload(reserveFieldsetService);
    })
  ;

}