import { API_URL } from "./api.js";
import { addPreload, removePreload } from './preload.js';


export const renderMonth = (wrapper, data) => {

  const year = new Date().getFullYear();

    data.forEach((item) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    label.innerHTML = `
    <input class="radio__input" type="radio" name="month" value="${item}">
      <span class="radio__label">${new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
      }).format(new Date(year, item))}</span>
    `;

    wrapper.append(label);
  })
}