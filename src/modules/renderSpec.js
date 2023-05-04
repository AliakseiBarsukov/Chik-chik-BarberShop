import { API_URL } from "./api.js";
import { addPreload, removePreload } from './preload.js';


export const renderSpec = (wrapper, data) => {
  const fieldspecJs = document.querySelector('.fieldspec_js');


    data.forEach((item) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    label.innerHTML = `
    <input class="radio__input" type="radio" name="spec" value="${item.id}">
      <span class="radio__label radio__label_spec">
        <span>
          <img class="radio__img" src="${API_URL}${item.img}" alt="">
        </span>
      <span class="radio__name">${item.name}</span>
    </span>
    `;

    wrapper.append(label);
  })


  removePreload(fieldspecJs);
}
