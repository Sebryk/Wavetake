import { data } from './data.js';

export const popUp = () => {
  const thumbnailItem = document.querySelectorAll('.thumbnail__item');
  const popupWindow = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup__close');
  const video = document.querySelectorAll('.popup__video');
  const body = document.querySelector('body');

  const showVideo = () => {
    thumbnailItem.forEach(el =>
      el.addEventListener('click', () => {
        el.id;
        for (let i = 0; i < video.length; i++) {
          if (el.id == i + 1) {
            video[i].classList.add('popup__video--show');
          }
        }
      })
    );
  };

  showVideo();

  const openPopup = id => {
    popupClose.classList.add('popup__close--show');
    popupWindow.classList.add('popup--show');
    body.classList.add('body__lock');
  };

  const closePopup = () => {
    popupClose.classList.remove('popup__close--show');
    popupWindow.classList.remove('popup--show');
    body.classList.remove('body__lock');
    video.forEach(el => stopVideo(el));
    video.forEach(el => el.classList.remove('popup__video--show'));
  };

  const stopVideo = video => {
    if (video.classList.contains('popup__video--show')) {
      const saveAttribute = video.getAttribute('src');
      video.setAttribute('src', '');
      video.setAttribute('src', saveAttribute);
    }
  };

  thumbnailItem.forEach(el => el.addEventListener('click', openPopup));

  popupWindow.addEventListener('click', closePopup);

  popupClose.addEventListener('click', closePopup);
};
