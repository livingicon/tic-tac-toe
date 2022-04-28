'use strict';

//FACTORY FUNCTION
const createPlayer = (name, symbol) => {
  return { name, symbol };
};

//MODULE FUNCTIONS
//1. Gameboard Module
const Gameboard = (function() {

  const cells = document.querySelectorAll('.cell');

  const gameBoard = ["", "", "", "", "", "", "", "", ""];

  const renderGameBoard = function() {
    for (let i = 0; i < gameBoard.length; i++) {
    cells[i].textContent = gameBoard[i];
    }
  };

  return { gameBoard, renderGameBoard, cells };

})();

//2. Gameplay Module
const Gameplay = (function() {

  let roundCounter = 1;
  const playerX = createPlayer('Player One', 'X');
  const playerO = createPlayer('Player Two', 'O');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');

  const addEvents = () => {
    if (roundCounter === 1) {
      Gameboard.cells.forEach((cell) => {
        cell.addEventListener('click', turn);
      })
    }
  };

  const resetGame = () => {
    roundCounter = 1;
    for (let i = 0; i < Gameboard.gameBoard.length; i++) {
      if (Gameboard.gameBoard[i].textContent !== "") {
        Gameboard.gameBoard[i] = "";
      }
    }
    Gameboard.renderGameBoard();
    addEvents();
  };

  const removeEvents = () => {
    Gameboard.cells.forEach((cell) => {
        cell.removeEventListener('click', turn);
    });
  }

  startBtn.addEventListener('click', addEvents);
  resetBtn.addEventListener('click', resetGame);

  const turn = (e) => {
    if (e.target.innerText === "") {
      if (roundCounter % 2 === 0) {
        Gameboard.gameBoard[e.target.getAttribute("data-value")] = playerO.symbol;
        roundCounter += 1;
        Gameboard.renderGameBoard();
        winner();
      } else {
        Gameboard.gameBoard[e.target.getAttribute("data-value")] = playerX.symbol;
        Gameboard.renderGameBoard();
        roundCounter += 1;
        winner();
      }
    } 
  };

  const winner = () => {
    if (Gameboard.gameBoard[0] === Gameboard.gameBoard[1] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[2] && 
      Gameboard.gameBoard[0] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[3] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[3] === Gameboard.gameBoard[5] && 
      Gameboard.gameBoard[3] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[6] === Gameboard.gameBoard[7] &&
      Gameboard.gameBoard[6] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[6] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[0] === Gameboard.gameBoard[3] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[6] && 
      Gameboard.gameBoard[0] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[1] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[1] === Gameboard.gameBoard[7] && 
      Gameboard.gameBoard[1] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[2] === Gameboard.gameBoard[5] &&
      Gameboard.gameBoard[2] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[2] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[0] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[0] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (Gameboard.gameBoard[2] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[2] === Gameboard.gameBoard[6] && 
      Gameboard.gameBoard[2] !== "") {
      console.log("Winner");
      removeEvents();
    } else if (roundCounter === 10) {
      console.log("Tie");
      removeEvents();
    }
  };

  return { }; //anything?

})();