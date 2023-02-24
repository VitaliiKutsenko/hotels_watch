export const $el = (element, options = {}) => {
  const el = document.createElement(element);

  for (let [keys, values] of Object.entries(options)) {
    if (keys in el) {
      el[keys] = values;
    }
  }

  return el;
};
