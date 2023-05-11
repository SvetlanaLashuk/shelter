const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const headerNav = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.menu__link');

/* Открытие закрытие меню по иконке */
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  headerNav.classList.toggle('active');
});

/* Закрытие по клику на пункт меню */
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    headerNav.classList.toggle('active');
  });
});

/* Закрытие по клику вне меню */
headerNav.addEventListener('click', (e) => {
  if (!e.target.closest('.header__menu')) {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    headerNav.classList.remove('active');
  }
});