import { data } from './data.js';

export const thumbnail = () => {
  const thumbnailGallery = document.querySelector('.thumbnail');
  const popupWindow = document.querySelector('.popup');
  let thumbnailItem;
  data.forEach(
    el =>
      (thumbnailGallery.innerHTML += thumbnailItem =
        `
      <div class="thumbnail__item" id="${el.id}">
        <picture>
        <source  class="thumbnail__img"  srcset=${el.imgUrlWebp} type="image/webp" >
        <img class="thumbnail__img" src=${el.imgUrlJpg} alt="${el.name} project cover image" type="image/jpeg" >
        </picture>
        <div class="thumbnail__content">
          <h4 class="thumbnail__title">${el.name}</h4>
          <p class="thumbnail__desc">${el.services}</p>
        </div>
      </div>`)
  );

  data.forEach(el =>
    popupWindow.insertAdjacentHTML(
      'beforeend',
      `<iframe class="popup__video" id="item-${el.id}" 
      title="vimeo-player" src="${el.videoUrl}"
      allowfullscreen></iframe> `
    )
  );
};
