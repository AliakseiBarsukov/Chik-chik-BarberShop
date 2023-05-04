export const renderService = (wrapper, data) => {

  const labels = data.map(item => {
    const label = document.createElement('label');
    label.classList.add('radio');

    label.innerHTML = `
      <input class="radio__input" type="radio" name="service" value="${item.id}">
      <span class="radio__label">${item.name}</span>
    `;
    return label;
  })
  wrapper.append(...labels);
}