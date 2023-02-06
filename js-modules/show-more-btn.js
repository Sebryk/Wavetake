export const showMoreBtn = () => {
  const showMoreBtn = document.querySelector('.works__btn');
  const thumbnailItemsCount = document.querySelectorAll('.thumbnail__item').length;
  const windowWidth = window.innerWidth;
  let items;

  items = windowWidth >= 1500 ? 12 : windowWidth >= 1000 ? 9 : windowWidth >= 640 ? 6 : 3;

  items >= thumbnailItemsCount && (showMoreBtn.style.display = 'block');

  showMoreBtn.addEventListener('click', () => {
    items += windowWidth >= 1500 ? 12 : windowWidth >= 1000 ? 9 : windowWidth >= 640 ? 6 : 3;

    const thumbnailItems = Array.from(document.querySelectorAll('.thumbnail__item'));
    const visibleItems = thumbnailItems.slice(0, items);

    visibleItems.forEach(el => el.classList.add('visible'));

    visibleItems.length === thumbnailItemsCount && (showMoreBtn.style.display = 'none');
  });
};
