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
  const submitBtn = document.getElementById('submitBtn');

  const addEvents = (e) => {
    if (modal.style.display === "block" && roundCounter === 1) {
      e.preventDefault();
      modal.style.display = "none";
      document.getElementById("addPlayers").reset();
      Gameboard.cells.forEach((cell) => {
        cell.addEventListener('click', turn);
      })
    } else if (modal.style.display === "none" && roundCounter === 1) {
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

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => { //SET THIS UP
    modal.style.display = "none";
    document.getElementById("addPlayers").reset();
  }

  startBtn.addEventListener('click', openModal); //make a new one for the submit form button
  resetBtn.addEventListener('click', resetGame);
  submitBtn.addEventListener('click', addEvents);
  closeBtn.addEventListener('click', closeModal);

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


// TO DO:
// 1. Add form player creation
// 2. Remove play button and instructions upon form submission
// 3. And add player names and winner text