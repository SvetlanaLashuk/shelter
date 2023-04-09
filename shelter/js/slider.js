const btnArrowLeft = document.querySelector('.arrow-left');
const btnArrowRight = document.querySelector('.arrow-right');
const cards = document.querySelectorAll('.card');


let randomArray = [];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function fillData(card) {
//   cardImg.src = card.img;
// }

window.addEventListener('load', () => {
  //let rarr = 
  //while (cards.length)


  for (let i = cards.length - 1; i >= 0; i--) {
    let randomNumber = getRandomNumber(0, 7);
    randomArray.push(randomNumber);
  }

  console.log(randomArray);

  for (let j = 0; j < cards.length; j++) {
    let cardImg = document.querySelectorAll('.pets__img')[j];
    let cardName = document.querySelectorAll('.card-name')[j];
    console.log(j);
    //for (let i = 0; i < randomArray.length; i++) {
      cardImg.src = pets[randomArray[j]].img;
      cardName.textContent = pets[randomArray[j]].name;
      console.log(pets[randomArray[j]].name);
    //}
  }

});