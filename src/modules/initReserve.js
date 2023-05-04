import { API_URL } from "./api.js";
import { addDisabled, removeDisabled } from "./disabled.js";
import { renderSpec } from "./renderSpec.js";
import { addPreload, removePreload } from './preload.js';
import { renderMonth } from "./renderMonth.js";
import { renderDay } from "./renderDay.js";
import { renderTime } from "./renderTime.js";


export const initReserve = () => {
  const reserveForm = document.querySelector('.reserve__form');
  const fieldspecJs = document.querySelector('.fieldspec_js');
  const {fiedservice, fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn } = reserveForm;

  addDisabled([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);

  reserveForm.addEventListener('change', async event => {
    const target = event.target;


    if (target.name === 'service') {
      addPreload(fieldspecJs);

      addDisabled([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);

      const response = await fetch(`${API_URL}/api?service=${target.value}`)
      const data = await response.json();

      fieldspec.innerHTML = '<legend class="reserve__legend">Специалист</legend>';

      renderSpec(fieldspec, data);
      removeDisabled([fieldspec]);
    }


    if (target.name === 'spec') {

      addDisabled([fielddata, fieldmonth, fieldday, fieldtime, btn]);
      addPreload(fieldmonth);

      const response = await fetch(`${API_URL}/api?spec=${target.value}`)
      const data = await response.json();
      fieldmonth.textContent = '';

      renderMonth(fieldmonth, data);
      removeDisabled([fielddata, fieldmonth]);
      removePreload(fieldmonth);
    }


    if (target.name === 'month') {

      addDisabled([fieldday, fieldtime, btn]);
      addPreload(fieldday);

      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${target.value}`
      );
      const data = await response.json();
      fieldday.textContent = '';

      renderDay(fieldday, data, target.value);
      removeDisabled([fieldday]);
      removePreload(fieldday);
    }


    if (target.name === 'day') {

      addDisabled([fieldtime, btn]);
      addPreload(fieldtime);

      const response = await fetch(
        `${API_URL}/api?spec=${reserveForm.spec.value}&month=${reserveForm.month.value}&day=${target.value}`
      );
      const data = await response.json();
      fieldtime.textContent = '';

      renderTime(fieldtime, data);
      removeDisabled([fieldtime]);
      removePreload(fieldtime);
    }

    if (target.name === 'time') {
      removeDisabled([btn]);
    }
  })


  reserveForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(reserveForm);
    const json = JSON.stringify(Object.fromEntries(formData));

    const response = await fetch(`${API_URL}api/order`, {
      method: 'POST',
      body: json,
    });

    const data = await response.json();

    addDisabled([
      fiedservice, 
      fieldspec, 
      fielddata, 
      fieldmonth, 
      fieldday, 
      fieldtime, 
      btn
    ]);

    const accses = document.createElement('p');
    accses.classList.add('reserve__accses');
    accses.textContent = `
    Спасибо! 
    Ваша бронь №${data.id}!
    Ждем вас ${new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      day: 'numeric',
    }).format(new Date(`${data.month}/${data.day}`))},
    время ${data.time}
    `;

    reserveForm.append(accses);
  });

}