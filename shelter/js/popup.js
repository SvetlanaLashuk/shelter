// import { petCards } from "./common.js";

const popup = document.querySelector('.popup');
const petCards = document.querySelectorAll('.card');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupImage = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupText = document.querySelector('.popup__text');
const popupList = document.querySelector('.popup__list');

/* Открытие модального окна при клике на карточку */
petCards.forEach((card) => {
  card.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.classList.add('lock');

    const petName = card.querySelector('.card-name');
    const selectedPet = pets.find(pet => pet.name === petName.textContent);

    popupImage.innerHTML = `<img src="${selectedPet.img}" alt="${selectedPet.name}">`;
    popupTitle.textContent = selectedPet.name;
    popupSubtitle.textContent = `${selectedPet.type} - ${selectedPet.breed}`;
    popupText.textContent = selectedPet.description;

    /* Удаление дочерних элементов */
    popupList.replaceChildren();

    for (let feature in selectedPet.features) {
      const li = document.createElement('li');
      li.classList.add('popup__list-item');
      li.innerHTML = `<span>${feature[0].toUpperCase() + feature.slice(1)}: </span>${selectedPet.features[feature]}`;
      popupList.append(li);
    }
  });
});

/* Закрытие модального окна по кнопке */
popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.classList.remove('lock');
});

/* Закрытие модального окна по клику вне его */
popup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup__body')) {
    popup.classList.remove('active');
    document.body.classList.remove('lock');
  }
});