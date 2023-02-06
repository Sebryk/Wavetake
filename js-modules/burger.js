export const burgerMenu = () => {
  const burger = document.querySelector('.icon');
  const navMenu = document.querySelector('.nav__menu');
  const mobileMenu = document.querySelector('.nav__list');
  const menuLinks = document.querySelectorAll('.nav__list-item');
  const body = document.querySelector('body');

  const toggleBurger = () => {
    mobileMenu.classList.toggle('nav--active');
    burger.classList.toggle('icon--active');
    body.classList.toggle('body__lock');
    navMenu.classList.toggle('nav__menu--shown');
  };

  const closeBurger = () => {
    mobileMenu.classList.remove('nav--active');
    burger.classList.remove('icon--active');
    body.classList.remove('body__lock');
    navMenu.classList.remove('nav__menu--shown');
  };

  burger.addEventListener('click', toggleBurger);

  navMenu.addEventListener('click', closeBurger);

  menuLinks.forEach((el) => el.addEventListener('click', closeBurger));
};
