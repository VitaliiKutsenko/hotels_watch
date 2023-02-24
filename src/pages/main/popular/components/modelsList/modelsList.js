import './modelsList.scss';
import { $el } from '../../../../../services/services';
import { popularsModelSchema } from '../../../../../schemas/schemas';

export const ModelsList = (elem = null) => {
  const container = $el('ul', { className: 'models-list' });
  const models = popularsModelSchema.map(model => {
    const { currency, img, label, price } = model;
    const container = $el('li', { className: 'models-list_item' });

    const modelName = $el('h4', {
      className: 'models-list_item__name',
      textContent: label,
    });
    const modelPrice = $el('p', {
      className: 'models-list_item__price',
      innerHTML: `${price} ${currency}`,
    });
    const imgWrapper = $el('div', { className: 'models-list_item__img-wrapper' });
    const modelIMG = $el('img', {
      className: 'models-list_item__img',
      alt: 'model',
      src: img,
    });

    imgWrapper.append(modelIMG);
    const link = $el('a', {
      className: 'models-list_item__link',
      href: '#',
      textContent: 'Подробнее',
    });

    container.append(modelName, modelPrice, imgWrapper, link);

    return container;
  });

  container.append(...models);

  if (elem) {
    elem.append(container);
  }

  return container;
};
