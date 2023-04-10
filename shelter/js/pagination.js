const btnFirst = document.querySelector('.btn-first');
const btnPrevious = document.querySelector('.btn-previous');
const btnCurrent = document.querySelector('.btn-current');
const btnNext = document.querySelector('.btn-next');
const btnLast = document.querySelector('.btn-last');
const petCrd = document.querySelectorAll('.card');

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomData = (data) => {
  let resultRandomData = [...data];
  for (let i = resultRandomData.length - 1; i >= 0; i--) {
    let randomNumber = getRandomNumber(0, resultRandomData.length - 1);
    let temp = resultRandomData[randomNumber];
    resultRandomData[randomNumber] = resultRandomData[i];
    resultRandomData[i] = temp;
  }

  return resultRandomData;
}

const getCardsData = () => {
  const randomCards = randomData(pets);
  const result = [];
  let i = 0;
  while (i < 2) {
    i++;
    result.push(...randomCards);
    result.push(randomCards[0]);
    result.push(...randomData(randomCards.slice(1, 4)));
    result.push(...randomData(randomCards.slice(4, 7)));
    result.push(randomCards[7]);
    result.push(...randomData(randomCards.slice(0, 2)));
    result.push(...randomData(randomCards.slice(2, 5)));
    result.push(...randomData(randomCards.slice(5)));
  }
  return result;
}

let pageNumber;

const data = getCardsData();

let cardPerPage;
let currSectionIdx;
let isLast;
let currentShowed;

const isVisible = (element) => {
  let offset = element.parentElement.offsetTop + element.parentElement.clientHeight;
  return element.offsetTop < offset;
};

function fillCards() {
  btnCurrent.textContent = pageNumber;
  currentShowed = data.slice(currSectionIdx, cardPerPage + currSectionIdx);
  for (let i = 0; i < petCrd.length && i < cardPerPage; i++) {
    let cardImg = document.querySelectorAll('.pets__img')[i];
    let cardName = document.querySelectorAll('.card-name')[i];
    cardImg.src = currentShowed[i].img;
    cardName.textContent = currentShowed[i].name;
  }
}

function enableButtons(btn) {
  btn.classList.remove('disabled');
  btn.classList.add('active');
}

function disableButtons(btn) {
  btn.classList.add('disabled');
  btn.classList.remove('active');
}

const onFirst = () => {
  if (pageNumber === 1) return;
  isLast = false;
  currSectionIdx = 0;
  pageNumber = 1;
  fillCards();
  enableButtons(btnNext);
  enableButtons(btnLast);
  disableButtons(btnFirst);
  disableButtons(btnPrevious);
};

const onPrev = () => {
  if (pageNumber === 1) return;
  pageNumber--;
  currSectionIdx -= cardPerPage;
  if (pageNumber === 1) {
    disableButtons(btnPrevious);
    disableButtons(btnFirst);
  }
  if (isLast) {
    isLast = false;
    enableButtons(btnNext);
    enableButtons(btnLast);
  }
  fillCards();
};

const onNext = () => {
  if (isLast) return;
  if (pageNumber === 1) {
    enableButtons(btnFirst);
    enableButtons(btnPrevious);
  }
  pageNumber++;
  currSectionIdx += cardPerPage;
  if (currSectionIdx + cardPerPage >= data.length) {
    disableButtons(btnLast);
    disableButtons(btnNext);
    isLast = true;
  }
  fillCards();
};

const onLast = () => {
  if (isLast) return;
  isLast = true;
  disableButtons(btnLast);
  disableButtons(btnNext);
  currSectionIdx = data.length - cardPerPage;
  if (pageNumber === 1) {
    enableButtons(btnPrevious);
    enableButtons(btnFirst);
  }
  pageNumber = Math.round(data.length / cardPerPage);
  fillCards();
};

const onResize = () => {
  cardPerPage = 0;
  for (const card of petCrd) {
    cardPerPage += isVisible(card);
  }
  onFirst();
};

const startListening = () => { 
  window.onresize = onResize;
  btnFirst.addEventListener('click', onFirst);
  btnPrevious.addEventListener('click', onPrev);
  btnNext.addEventListener('click', onNext);
  btnLast.addEventListener('click', onLast);
};

startListening();
onResize();
