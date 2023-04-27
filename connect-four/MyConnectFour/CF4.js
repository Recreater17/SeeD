// Define constants for the number of rows and columns
const NUM_ROWS = 6;
const NUM_COLS = 7;

// Define constants for player colors and starting player
const PLAYER_1_COLOR = 'red';
const PLAYER_2_COLOR = 'blue';
const STARTING_PLAYER = 1;

// Initialize the game board and current player
let gameBoard = new Array(NUM_ROWS).fill().map(() => new Array(NUM_COLS).fill(0));
let currentPlayer = STARTING_PLAYER;

// Select the game board element and add a click event listener
const gameBoardElement = document.getElementById('game-board');
gameBoardElement.addEventListener('click', handleClick);

// Initialize the game board cells
for (let row = 0; row < NUM_ROWS; row++) {
  const tr = document.createElement('tr');
  for (let col = 0; col < NUM_COLS; col++) {
    const td = document.createElement('td');
    td.classList.add('cell');
    tr.appendChild(td);
  }
  gameBoardElement.appendChild(tr);
}

// Draw the initial game board
drawGameBoard();

// Handle clicks on the game board
function handleClick(event) {
  // Only handle clicks on the game board cells
  if (!event.target.classList.contains('cell')) {
    return;
  }
  

  // Get the column index of the clicked cell
  const col = Array.from(event.target.parentNode.children).indexOf(event.target);

  // Check if the column is full
  if (gameBoard[0][col] !== 0) {
    return;
  }

  // Drop the piece into the column
  for (let row = NUM_ROWS - 1; row >= 0; row--) {
    if (gameBoard[row][col] === 0) {
      gameBoard[row][col] = currentPlayer;
      drawGameBoard();
      switchPlayer();
      break;
    }
  }

  // Check if the game is over
  if (isGameOver()) {
    endGame();
  }
}

// Draw the game board
function drawGameBoard() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      const cell = gameBoardElement.children[row].children[col];
      const cellValue = gameBoard[row][col];
      cell.classList.remove(PLAYER_1_COLOR, PLAYER_2_COLOR);
      if (cellValue === 1) {
        cell.classList.add(PLAYER_1_COLOR);
      } else if (cellValue === 2) {
        cell.classList.add(PLAYER_2_COLOR);
      }
    }
  }
}

// Switch the current player
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Check if the game is over
function isGameOver() {
  // Check for a horizontal win
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS - 3; col++) {
      if (gameBoard[row][col] !== 0 &&
          gameBoard[row][col] === gameBoard[row][col + 1] &&
          gameBoard[row][col] === gameBoard[row][col + 2] &&
          gameBoard[row][col] === gameBoard[row][col + 3]) {
        return true;
      }
    }
  }

  // Check for a vertical win
  for (let row = 0; row < NUM_ROWS - 3; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gameBoard[row][col] !== 0 &&
          gameBoard[row][col] === gameBoard[row + 1][col] &&
          gameBoard[row][col] === gameBoard[row + 2][col] &&
          gameBoard[row][col] === gameBoard[row + 3][col]) {
        return true;
      }
    }
  }

  // Check for a diagonal win (top-left to bottom-right)
  for (let row = 0; row < NUM_ROWS - 3; row++) {
    for (let col = 0; col < NUM_COLS - 3; col++) {
      if (gameBoard[row][col] !== 0 &&
          gameBoard[row][col] === gameBoard[row + 1][col + 1] &&
          gameBoard[row][col] === gameBoard[row + 2][col + 2] &&
          gameBoard[row][col] === gameBoard[row + 3][col + 3]) {
        return true;
      }
    }
  }

  // Check for a diagonal win (bottom-left to top-right)
  for (let row = 3; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS - 3; col++) {
      if (gameBoard[row][col] !== 0 &&
          gameBoard[row][col] === gameBoard[row - 1][col + 1] &&
          gameBoard[row][col] === gameBoard[row - 2][col + 2] &&
          gameBoard[row][col] === gameBoard[row - 3][col + 3]) {
        return true;
      }
    }
  }

  // Check for a tie game
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gameBoard[row][col] === 0) {
        return false;
      }
    }
  }
  return true;
}

// End the game and declare the winner
function endGame() {
  gameBoardElement.removeEventListener('click', handleClick);
  const winner = currentPlayer === 1 ? 'Player 1' : 'Player 2';
  alert(`${winner} wins!`);
}

// Timer
let startTime;
let timerIntervalId;

function startTimer() {
  startTime = Date.now();
  timerIntervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerIntervalId);
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('timer').textContent = elapsedTime;
}


// When the game is won or tied:
stopTimer();
