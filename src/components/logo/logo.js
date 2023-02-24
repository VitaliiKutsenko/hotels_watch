import { $el } from '../../services/services';
import './logo.scss';
import logoDefault from '../../../public/pics/logo/Ellipse123.svg';

export const Logo = (elem = null, logo = logoDefault) => {
  const container = $el('div', { className: 'logo' });
  const label = $el('img', {
    className: 'logo_label',
    alt: 'logo',
    src: logo,
  });

  const logoImg = $el('span', {
    className: 'logo_content',
    textContent: 'CONQUEST',
  });

  container.append(label, logoImg);

  if (elem) {
    elem.append(container);
  }

  return container;
};
