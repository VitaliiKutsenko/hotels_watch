import watch1 from './../../public/pics/popular/watch_1.png';
import watch2 from './../../public/pics/popular/watch_3.png';
import watch3 from './../../public/pics/popular/watch_4.png';
import qualityIMG from './../../public/pics/quality/photo_banner.png';
import news1 from './../../public/pics/news/photo_1.png';
import news2 from './../../public/pics/news/photo_2.png';
import news3 from './../../public/pics/news/photo_3.png';
import facebook from './../../public/pics/news/facebook_icon.svg';
import instagram from './../../public/pics/news/instagram_icon.svg';
import twitter from './../../public/pics/news/twitter_icon.svg';

const RUB = '&#8381';

export const headerSchema = ['Каталог', 'Акции', 'Доставка', 'Контакты'];
export const collectionsSchema = [
  {
    name: 'Весна/Лето 2019',
    type: 'Коллекция',
    info: 'Швейцарские часы в наличии в Москве\n' + 'и с доставкой по всему миру',
    presentationInfo: {
      price: '22 000',
      sign: RUB,
      additional: '28 мм диаметр',
    },
  },
];

export const popularsModelSchema = [
  {
    label: 'RADO',
    price: `65 300`,
    currency: RUB,
    img: watch1,
  },
  {
    label: 'BVLGARI',
    price: `81 700`,
    currency: RUB,
    img: watch2,
  },
  {
    label: 'BVLGARI',
    price: `72 700`,
    currency: RUB,
    img: watch3,
  },
];

export const qualitySchema = [
  {
    name: 'Подлинное качество',
    info: `Все часы производятся в Швейцарии и имеют
     сертификаты качества. Настоящие швейцарские
      часы — это предмет гордости и престижа.`,
    img: qualityIMG,
  },
];

export const newsSchema = [
  {
    title: 'Следите за нашими новостями',
    info: `Подписывайтесь на @conquest_watch в соцсетях 
    и узнавайте о новинках и акциях первыми.`,
    gallery: {
      photos: [{ news1 }, { news2 }, { news3 }],
      socialNetworks: [{ instagram }, { facebook }, { twitter }],
    },
  },
];

export const footerSchema = [
  {
    title: 'о компании',
    section: [
      {
        label: 'Our shops',
        text: 'Наши магазины',
      },
      {
        label: 'vacancy',
        text: 'Вакансии',
      },
      {
        label: 'certificate',
        text: 'Сертификаты',
      },
      {
        label: 'comment',
        text: 'Отзывы',
      },
    ],
  },
  {
    title: 'покупателям',
    section: [
      {
        label: 'catalog',
        text: 'Каталог товаров',
      },
      {
        label: 'How to order?',
        text: 'Как заказать?',
      },
      {
        label: 'faq',
        text: 'FAQ',
      },
      {
        label: 'for clients',
        text: 'Корпоративным клиентам',
      },
    ],
  },
  {
    title: 'оплата и доставка',
    section: [
      {
        label: 'Our shops',
        text: 'Способы оплаты',
      },
      {
        label: 'Payment',
        text: 'Время доставки',
      },
      {
        label: 'repairs',
        text: 'Гарантии и ремонт',
      },
      {
        label: 'return',
        text: 'Возврат и компенсация',
      },
    ],
  },
];
