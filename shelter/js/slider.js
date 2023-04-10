// import { petCards } from "./common.js";

const petC = document.querySelectorAll('.card');

const btnArrowLeft = document.querySelector('.arrow-left');
const btnArrowRight = document.querySelector('.arrow-right');
const cardsContainer = document.querySelector('.cards-container');

let prev = undefined;
let prevMove = undefined;
let curArr = [];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomData = (data) => {
  let resultRandomData = [...data];
  for (let i = petC.length - 1; i >= 0; i--) {
    let randomNumber = getRandomNumber(0, resultRandomData.length - 1);
    let temp = resultRandomData[randomNumber];
    resultRandomData[randomNumber] = resultRandomData[i];
    resultRandomData[i] = temp;
  }

  return resultRandomData;
}

function fillCards(arr) {
  for (let i = 0; i < petC.length; i++) {
    let cardImg = document.querySelectorAll('.pets__img')[i];
    let cardName = document.querySelectorAll('.card-name')[i];
    cardImg.src = arr[i].img;
    cardName.textContent = arr[i].name;
  }
}

window.addEventListener('load', () => {
  let res = randomData(pets);
  
  for (let i = 0; i < petC.length; i++) {
    let cardImg = document.querySelectorAll('.pets__img')[i];
    let cardName = document.querySelectorAll('.card-name')[i];
    cardImg.src = res[i].img;
    cardName.textContent = res[i].name;
    curArr.push(res[i]);
  }
});

btnArrowRight.addEventListener('click', () => {
  cardsContainer.classList.add('animation-right');
  doMove('right');
});

btnArrowLeft.addEventListener('click', () => {
  cardsContainer.classList.add('animation-left');
  doMove('left');
});

cardsContainer.addEventListener('animationend', () => {
  cardsContainer.classList.remove('animation-right');
  cardsContainer.classList.remove('animation-left');
});

function doMove(move) {
  /* Если первый клик */
  if (prev === undefined) {
    prev = curArr;
    let result = []
    for (let i = 0; i < pets.length; i++){
      if (curArr.findIndex(x => x === pets[i]) === -1) {
        result.push(pets[i]);
      }
    }
    curArr = randomData(result).slice(0,3);
    prevMove = move;
  } else {
    /* Клик по той же кнопке */
    if (prevMove === move) {
      prev = curArr;
      let result = []
      for (let i = 0; i < pets.length; i++) {
        if (curArr.findIndex(x => x === pets[i]) === -1) {
          result.push(pets[i]);
        }
      }
      curArr = randomData(result).slice(0,3);
    } else { // Клик по другой кнопке
      let temp = curArr
      curArr = prev;
      prev = temp;
      prevMove = move;
    }
  }
  fillCards(curArr);
}