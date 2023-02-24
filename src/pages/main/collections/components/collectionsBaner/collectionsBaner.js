import { $el } from '../../../../../services/services';
import './collectionsBaner.scss';
import clock from '../../../../../../public/pics/baner/watch_main.png';
import { collectionsSchema } from '../../../../../schemas/schemas';

export const CollectionsBanner = (elem = null) => {
  const container = $el('div', { className: 'collections_banner' });
  const circle = $el('div', { className: 'collections_banner__circle' });
  const [{ price, sign, additional }] = collectionsSchema.map(item => item.presentationInfo);

  const prices = $el('div', {
    className: 'collections_banner__price',
    innerHTML: `${price} ${sign}`,
  });
  const info = $el('div', {
    className: 'collections_banner__info',
    textContent: additional,
  });

  const img = $el('img', {
    className: 'collections_banner__img',
    alt: 'collections',
    src: clock,
  });

  container.append(circle, prices, img, info);

  if (elem) {
    elem.append(container);
  }

  return container;
};
