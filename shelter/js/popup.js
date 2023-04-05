const petCards = document.querySelectorAll('.slider-item');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');

/* Открытие модального окна при клике на карточку */
petCards.forEach((e) => {
  e.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.classList.add('lock');
  });
});

/* Закрытие модального окна по кнопке */
popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

/* Закрытие модального окна по клику вне его */
popup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__body')) {
    popup.classList.remove('active');
  }
});