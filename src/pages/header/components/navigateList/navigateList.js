import './navigateList.scss';
import { $el } from '../../../../services/services';
import { headerSchema } from '../../../../schemas/schemas';

export const NavigateList = (elem = null) => {
  const container = $el('ul', { className: 'list' });
  const parseLi = headerSchema.map(item => {
    return $el('li', { innerText: item });
  });

  container.append(...parseLi);

  if (elem) {
    elem.append(container);
  }

  return container;
};
