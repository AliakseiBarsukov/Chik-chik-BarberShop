export const renderPrice = (wrapper, data) => {
  data.forEach((item) => {
    const priceItem = document.createElement('li');
    priceItem.classList.add('price__item');

    priceItem.innerHTML = `
      <span class="price__item-title">${item.name}</span>
      <span class="price__item-count">${item.price} руб</span>
    `;

    wrapper.append(priceItem);
  });
}