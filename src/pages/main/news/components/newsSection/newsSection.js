import { $el } from '../../../../../services/services';
import { newsSchema } from '../../../../../schemas/schemas';
import './newsSection.scss';

export const NewsSection = (elem = null) => {
  const [
    {
      title,
      info,
      gallery: { socialNetworks },
    },
  ] = newsSchema;
  const container = $el('section', { className: 'news-section' });

  const newsTitle = $el('h4', {
    className: 'news-section_title',
    innerText: title,
  });
  const newsInfo = $el('p', {
    className: 'news-section_info',
    innerText: info,
  });
  const socialList = $el('ul', { className: 'news-section_list' });
  const socials = socialNetworks.map(social => {
    const [keys] = Object.keys(social);

    const newsLists = $el('li', { className: `news-section_list__item ${keys}` });

    const img = $el('img', {
      alt: keys,
      src: social[keys],
    });

    newsLists.append(img);

    return newsLists;
  });

  socialList.append(...socials);

  container.append(newsTitle, newsInfo, socialList);

  if (elem) {
    elem.append(container);
  }

  return container;
};
