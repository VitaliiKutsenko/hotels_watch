import './navigateTools.scss';
import { $el } from '../../../../services/services';
import search from '../../../../../public/pics/header/Vector.svg';
import basket from '../../../../../public/pics/header/Vector-1.svg';
import like from '../../../../../public/pics/header/Vector-2.svg';

const images = [
  {
    src: search,
    alt: 'search',
  },
  {
    src: like,
    alt: 'like',
  },
  {
    src: basket,
    alt: 'basket',
  },
];

export const NavigateTools = (elem = null) => {
  const container = $el('div', { className: 'nav_tools' });

  const toolsImg = images.map(({ src, alt }) => {
    const wrapper = $el('div', { className: 'img_wrapper' });
    const counter = $el('div', { className: 'img_state' });

    const img = $el('img', {
      className: 'nav_tools__item',
      alt,
      src,
      id: alt,
    });

    img.addEventListener('click', e => {
      if (e.target.id === 'like') {
        const additionalItem = e.target.previousSibling;

        additionalItem.classList.toggle('show');

        if (additionalItem.className.includes('show')) {
          additionalItem.textContent = '1';
        } else {
          additionalItem.textContent = '';
        }
      }
    });

    wrapper.append(counter, img);

    return wrapper;
  });

  container.append(...toolsImg);

  if (elem) {
    elem.append(container);
  }

  return container;
};
