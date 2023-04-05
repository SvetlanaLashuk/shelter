const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

/* Открытие закрытие меню по иконке */
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

/* Закрытие по клику на пункт меню */
menu.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('lock');
});

/* Закрытие по клику вне меню */
// menu.addEventListener('click', () => {
//   if (!e.target.closest('.header__nav')) {
//     burger.classList.remove('active');
//     menu.classList.remove('active');
//     body.classList.remove('lock');
//   }
// });