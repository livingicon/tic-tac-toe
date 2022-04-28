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

  // Variables
  let roundCounter = 1;
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const submitBtn = document.getElementById('submitBtn');

  // Methods
  const addEvents = () => { 
    //change?
    Gameboard.cells.forEach((cell) => {
      cell.addEventListener('click', turn);
    })
  };

  const removeEvents = () => {
    Gameboard.cells.forEach((cell) => {
        cell.removeEventListener('click', turn);
    });
  }

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => { 
    modal.style.display = "none";
    document.getElementById("addPlayers").reset();
  }

  const chooseOption = (e) => {
    e.preventDefault();
    console.log(roundCounter);
    if (roundCounter > 1) {
      resetGame(e);
    } else {
      e.preventDefault();
      turn(e);
    }
  };

  const resetGame = (e) => {
    roundCounter = 1;
    for (let i = 0; i < Gameboard.gameBoard.length; i++) {
      if (Gameboard.gameBoard[i].textContent !== "") {
        Gameboard.gameBoard[i] = "";
      }
    }
    Gameboard.renderGameBoard();
    turn(e)
  };

  const turn = (e) => {
    e.preventDefault();

    //must have logic to reset board if need be (reset game rewritten)
    const playerOneName = document.getElementById("playerOne").value;
    const playerTwoName = document.getElementById("playerTwo").value;
    if (!playerOneName || !playerTwoName) {
      alert("Both player names are required to play a game.")
      return false;
    } else {
      const playerX = createPlayer(playerOneName, 'X');
      const playerO = createPlayer(playerTwoName, 'O');
      document.getElementById("playerOne").defaultValue = playerX.name;
      document.getElementById("playerTwo").defaultValue = playerO.name;
      const play = document.getElementById("play");
      play.style.display = "none";
      
      closeModal()
      addEvents();
      if (e.target.innerText === "") {
        if (roundCounter % 2 === 0) {
          Gameboard.gameBoard[e.target.getAttribute("data-value")] = playerO.symbol;
          console.log(`${playerO.name}'s turn`);
          roundCounter += 1;
          Gameboard.renderGameBoard();
          winner(playerO);
        } else {
          Gameboard.gameBoard[e.target.getAttribute("data-value")] = playerX.symbol;
          console.log(`${playerX.name}'s turn`);
          Gameboard.renderGameBoard();
          roundCounter += 1;
          winner(playerX);
        }
      } 
    }
  };

  const winner = (playerX, playerO) => {
    if (Gameboard.gameBoard[0] === Gameboard.gameBoard[1] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[2] && 
      Gameboard.gameBoard[0] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[3] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[3] === Gameboard.gameBoard[5] && 
      Gameboard.gameBoard[3] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[6] === Gameboard.gameBoard[7] &&
      Gameboard.gameBoard[6] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[6] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[0] === Gameboard.gameBoard[3] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[6] && 
      Gameboard.gameBoard[0] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[1] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[1] === Gameboard.gameBoard[7] && 
      Gameboard.gameBoard[1] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[2] === Gameboard.gameBoard[5] &&
      Gameboard.gameBoard[2] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[2] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[0] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[0] === Gameboard.gameBoard[8] && 
      Gameboard.gameBoard[0] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (Gameboard.gameBoard[2] === Gameboard.gameBoard[4] &&
      Gameboard.gameBoard[2] === Gameboard.gameBoard[6] && 
      Gameboard.gameBoard[2] !== "") {
      console.log(`${playerX.name || playerO.name} is the winner`);
      removeEvents();
    } else if (roundCounter === 10) {
      console.log("Tie");
      removeEvents();
    }
  };

  // event listeners
  startBtn.addEventListener('click', openModal);
  resetBtn.addEventListener('click', openModal);
  submitBtn.addEventListener('click', chooseOption); //must be turn (not resetGame)
  closeBtn.addEventListener('click', closeModal);

// end Gameplay Module
})();


// TO DO:
// 3. And add player names and winner text