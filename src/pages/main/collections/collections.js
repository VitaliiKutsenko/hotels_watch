import { $el } from '../../../services/services';
import { CollectionInfo } from './components/collectionsInfo/collectionsInfo';
import { CollectionsBanner } from './components/collectionsBaner/collectionsBaner';
import './collections.scss';

export const Collections = (elem = null) => {
  const container = $el('div', { className: 'collections' });

  CollectionInfo(container);
  CollectionsBanner(container);

  if (elem) {
    elem.append(container);
  }

  return container;
};
