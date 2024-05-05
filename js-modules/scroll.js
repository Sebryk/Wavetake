export const scroll = () => {
  const navBar = document.querySelector('.header__nav');
  const scrollIcon = document.querySelector('.header__scroll');
  const navListItems = document.querySelectorAll('.nav__list-item');
  const sections = document.querySelectorAll('[data-id="section"]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navListItems.forEach(link => {
            let id = link.dataset.id;
            if (id === entry.target.id) {
              link.classList.add('nav__list-item--active');
            } else {
              link.classList.remove('nav__list-item--active');
            }
          });
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(section => observer.observe(section));

  /* -------- Scroll Icon Behavior and Navigation Shadow When Scrolling ------- */

  // window.scrollTo(0, 0);
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
      navBar.classList.add('header__nav--scroll');
      scrollIcon.style.left = '-155px';
    } else if (scroll < 30) {
      navBar.classList.remove('header__nav--scroll');
      scrollIcon.style.left = '20px';
    }
  });
};
