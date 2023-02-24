import './header.scss';
import { NavigateList } from './components/navigateList/navigateList';
import { $el } from '../../services/services';
import { NavigateTools } from './components/navigationTools/navigateTools';
import { Logo } from '../../components/logo/logo';

export const Header = (elem = null) => {
  const header = $el('header', { className: 'header' });

  Logo(header);
  NavigateList(header);
  NavigateTools(header);

  elem.append(header);
};
