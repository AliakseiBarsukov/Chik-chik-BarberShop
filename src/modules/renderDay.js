import { API_URL } from "./api.js";
import { addPreload, removePreload } from './preload.js';


export const renderDay = (wrapper, data, mount) => {

  const year = new Date().getFullYear();


    data.forEach((day) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    label.innerHTML = `
    <input class="radio__input" type="radio" name="day" value="${day}">
      <span class="radio__label">${new Intl.DateTimeFormat('ru-RU', {
        month: 'long', 
        day: 'numeric',
      }).format(new Date(year, mount, day))}</span>
    `;

    wrapper.append(label);
  })
}