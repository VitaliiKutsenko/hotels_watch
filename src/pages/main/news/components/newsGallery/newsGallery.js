import { $el } from '../../../../../services/services';
import { newsSchema } from '../../../../../schemas/schemas';
import './newsGallery.scss';

export const NewsGallery = (elem = null) => {
  const [
    {
      gallery: { photos },
    },
  ] = newsSchema;
  const container = $el('section', { className: 'news-gallery' });
  const separator = $el('div', { className: 'news-gallery__separator' });
  const gallery = photos.map((photo, index) => {
    const img = Object.keys(photo);

    return $el('img', {
      className: 'news-gallery_img',
      src: photo[img],
      alt: img,
    });
  });
  const [first, next, big] = gallery;

  separator.append(first, next);
  container.append(separator, big);

  if (elem) {
    elem.append(container);
  }

  return container;
};
