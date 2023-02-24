import { footerSchema } from '../../../schemas/schemas';
import { $el } from '../../../services/services';
import './footerList.scss';

export const FooterList = (elem = null) => {
  const footerList = footerSchema.map(item => {
    const { title, section } = item;
    const footerList = $el('ul', {
      className: 'footer-list',
      textContent: title,
    });
    const items = section.map(items => {
      const lists = $el('li', { className: 'footer-list_item' });

      lists.append(
        $el('a', {
          className: 'footer-list_item__link',
          href: '#',
          textContent: items.text,
        })
      );

      return lists;
    });

    footerList.append(...items);

    return footerList;
  });

  elem.append(...footerList);
};
