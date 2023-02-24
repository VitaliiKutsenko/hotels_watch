import { $el } from '../../../services/services';
import './quality.scss';
import { QualityInfo } from './components/qualityInfo/qualityInfo';

export const QualityDecoration = (elem = null) => {
  const decoration = $el('div', { className: 'quality_decoration' });
  const bigCircle = $el('div', { className: 'quality_big-circle' });
  const lowCircle = $el('div', { className: 'quality_low-circle' });

  return elem.append(decoration, bigCircle, lowCircle);
};

export const Quality = (elem = null) => {
  const container = $el('article', { className: 'quality' });

  QualityDecoration(container);
  QualityInfo(container);

  if (elem) {
    elem.append(container);
  }

  return container;
};
