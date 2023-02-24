import { $el } from '../../../services/services';
import './popular.scss';
import { ModelsList } from './components/modelsList/modelsList';

export const Popular = (elem = null) => {
  const container = $el('article', { className: 'popular' });
  const title = $el('h3', {
    className: 'popular_title',
    textContent: 'Популярные модели',
  });
  const link = $el('a', {
    className: 'popular_link',
    href: '#',
    textContent: 'Смотреть все',
  });

  container.append(title, link);
  ModelsList(container);

  if (elem) {
    elem.append(container);
  }

  return container;
};
