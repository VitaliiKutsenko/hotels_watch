import { $el } from '../../../../../../../services/services';
import './qualitySection.scss';

export const QualitySection = (elem = null, { name, info }) => {
  const section = $el('section', { className: 'quality_section' });
  const titleEl = $el('h4', {
    className: 'quality_section__title',
    textContent: name,
  });
  const infoEl = $el('p', {
    className: 'quality_section__info',
    innerText: info,
  });
  const buttonEl = $el('button', {
    className: 'quality_section__catalog-button',
    textContent: 'СМОТРЕТЬ КАТАЛОГ',
  });

  section.append(titleEl, infoEl, buttonEl);

  if (elem) {
    elem.append(section);
  }

  return section;
};
