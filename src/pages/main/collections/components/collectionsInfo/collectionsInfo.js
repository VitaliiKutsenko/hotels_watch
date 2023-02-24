import { collectionsSchema } from '../../../../../schemas/schemas';
import { $el } from '../../../../../services/services';
import './collectionsInfo.scss';

export const CollectionInfo = (elem = null) => {
  const container = $el('article', { className: 'collections_info' });
  const button = $el('button', {
    className: 'collections_info__presents',
    innerText: 'Смотреть каталог',
  });

  const title = collectionsSchema.map(item => {
    const fragment = document.createDocumentFragment();

    const title = $el('h2', {
      className: 'collections_info__title',
      textContent: `${item.name}`,
    });
    const type = $el('h4', {
      className: 'collections_info__type',
      textContent: `${item.type}`,
    });
    const info = $el('p', {
      className: 'collections_info__info',
      innerText: `${item.info}`,
    });

    fragment.append(title, type, info);

    return fragment;
  });

  container.append(...title, button);

  if (elem) {
    elem.append(container);
  }

  return container;
};
