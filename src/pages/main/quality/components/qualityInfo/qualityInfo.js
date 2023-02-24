import { $el } from '../../../../../services/services';
import './qualityInfo.scss';
import { qualitySchema } from '../../../../../schemas/schemas';
import { QualitySection } from './components/qualitySection/qualitySection';
import { QualityNavigation } from './components/qualityNav/qualityNav';

export const QualityInfo = (elem = null) => {
  const [{ name, info, img }] = qualitySchema;
  const container = $el('article', { className: 'quality_wrapper' });
  const qualityIMG = $el('img', {
    className: 'quality_wrapper__img',
    alt: 'quality',
    src: img,
  });

  container.append(qualityIMG);

  QualitySection(container, {
    name,
    info,
  });

  QualityNavigation(container);

  if (elem) {
    elem.append(container);
  }

  return container;
};
