export const addDisabled = (arr) => {
  arr.forEach((elem) => {
    elem.disabled = true;
  })
};

export const removeDisabled = (arr) => {
  arr.forEach((elem) => {
    elem.disabled = false;
  })
};