import dataJson from '../data/data.json';

import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg';
import waffleMobile from '../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg';

const imageImports = {
  'image-waffle-thumbnail.jpg': waffleThumbnail,
  'image-waffle-mobile.jpg': waffleMobile,
  'image-waffle-tablet.jpg': waffleTablet,
  'image-waffle-desktop.jpg': waffleDesktop,
  // Добавьте остальные изображения
};

export const data = dataJson.map(item => {
  return {
    ...item,
    image: {
      thumbnail: imageImports[item.image.thumbnail.split('/').pop()],
      mobile: imageImports[item.image.mobile.split('/').pop()],
      tablet: imageImports[item.image.tablet.split('/').pop()],
      desktop: imageImports[item.image.desktop.split('/').pop()],
    },
  };
});
