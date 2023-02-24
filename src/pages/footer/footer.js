import { $el } from '../../services/services';
import { FooterList } from './components/footerList';
import './footer.scss';
import { Logo } from '../../components/logo/logo';
import logoWhite from './../../../public/pics/logo/EllipseWhite.svg';

export const Footer = (elem = null) => {
  const footer = $el('footer', { className: 'footer' });
  const contacts = $el('ul', { className: 'footer_contacts' });
  const phone = $el('a', {
    href: 'tel:8 (499) 450-47-97',
    textContent: '8 (499) 450-47-97',
  });
  const email = $el('a', {
    href: 'mailto:info@conquest.watch.ru',
    textContent: 'info@conquest.watch.ru',
  });

  contacts.append(Logo(footer, logoWhite), phone, email);
  footer.append(contacts);
  FooterList(footer);
  elem.append(footer);
};
