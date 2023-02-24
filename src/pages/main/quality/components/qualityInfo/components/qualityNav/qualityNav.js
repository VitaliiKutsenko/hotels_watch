import { $el } from '../../../../../../../services/services';
import './qualityNav.scss';

export const QualityNavigation = (elem = null) => {
  let buttonState = 0;
  const counter = inc => {
    if (inc === 'inc') {
      buttonState++;
    } else if (inc === 'dec' && buttonState > 0) {
      buttonState--;
    }

    navBody.textContent = `${buttonState > 9 ? buttonState : '0' + buttonState}`;
  };

  const container = $el('nav', { className: 'quality_nav' });
  const leftButton = $el('button', {
    className: 'quality_nav__left',
    textContent: 'left',
  });
  const navBody = $el('div', {
    className: 'quality_nav__body',
    textContent: buttonState,
  });
  const rightButton = $el('button', {
    className: 'quality_nav__right',
    textContent: 'right',
  });

  leftButton.addEventListener('click', () => counter('dec'));
  rightButton.addEventListener('click', () => counter('inc'));

  container.append(navBody, leftButton, rightButton);

  return elem.append(container);
};
