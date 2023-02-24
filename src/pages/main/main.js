import { $el } from '../../services/services';
import { Collections } from './collections/collections';
import './main.scss';
import { Popular } from './popular/popular';
import { Quality } from './quality/quality';
import { News } from './news/news';

export const Main = (elem = null) => {
  const main = $el('main', { className: 'main' });

  Collections(main);
  Popular(main);
  Quality(main);
  News(main);
  elem.append(main);
};
