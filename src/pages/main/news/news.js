import { $el } from '../../../services/services';
import { NewsSection } from './components/newsSection/newsSection';
import './news.scss';
import { NewsGallery } from './components/newsGallery/newsGallery';

export const News = (elem = null) => {
  const container = $el('article', { className: 'news' });

  NewsSection(container);
  NewsGallery(container);

  if (elem) {
    elem.append(container);
  }

  return container;
};
