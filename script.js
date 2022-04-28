const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const resetBtn = document.getElementById('resetBtn');

one.addEventListener('click', turn);
two.addEventListener('click', turn);
three.addEventListener('click', turn);
four.addEventListener('click', turn);
five.addEventListener('click', turn);
six.addEventListener('click', turn);
seven.addEventListener('click', turn);
eight.addEventListener('click', turn);
nine.addEventListener('click', turn);
resetBtn.addEventListener('click', reset);

//Rule: 
//-if you only need one (ex: gameBoard) use module
//-if you need multiples (ex: players) create them with factories

function reset() {
  one.textContent = "";
  two.textContent = "";
  three.textContent = "";
  four.textContent = "";
  five.textContent = "";
  six.textContent = "";
  seven.textContent = "";
  eight.textContent = "";
  nine.textContent = "";
};

function turn(e) {
  if (e.target.innerText === "") {
    switch (e.target.id) {
      case 'one':  
      one.textContent = "1";
        break;
      case 'two':
        two.textContent = "2";
        break;
      case 'three':
        three.textContent = "3";
        break;
      case 'four':
        four.textContent = "4";
        break;
      case 'five':
        five.textContent = "5";
        break;
      case 'six':
        six.textContent = "6";
        break;
      case 'seven':
        seven.textContent = "7";
        break;
      case 'eight':
        eight.textContent = "8";
        break;
      case 'nine':
        nine.textContent = "9";
        break;
    } 
  } 
};

//MODULE FUNCTIONS
const Gameboard = (function() {
  'use strict';

  const gameboard = [];

})();

const Gameplay = (function() {
  'use strict';

})();

//FACTORY FUNCTIONS
const Player = () => {
  const sayHello = () => console.log('hello!');
  return { sayHello };
};