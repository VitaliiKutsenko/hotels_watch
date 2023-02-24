import './style/index.scss';
import { Header } from './pages/header/header';
import { Main } from './pages/main/main';
import { Footer } from './pages/footer/footer';

export const root = document.querySelector('#root');
Header(root);
Main(root);
Footer(root);
