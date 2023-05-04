import { API_URL } from "./api.js";
import { addPreload, removePreload } from './preload.js';


export const renderTime = (wrapper, data) => {

    data.forEach((time) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    label.innerHTML = `
    <input class="radio__input" type="radio" name="time" value="${time}">
      <span class="radio__label">${time}</span>
    `;

    wrapper.append(label);
  })
}