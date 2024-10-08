// Get references to HTML elements
const cells = document.querySelectorAll(".cells");
const statusText = document.querySelector("#status");
const reset = document.querySelector("#reset");

// Define the winning combinations
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

statusText.textContent = `${currentPlayer}'s turn`; // Set initial player turn

// Initialize the game
initializeGame();

function initializeGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      cellClicked(i);
    });
  }

  reset.addEventListener("click", restartGame);
}

function cellClicked(cellIndex) {
  if (options[cellIndex] === "" && running) {
    updateCell(cells[cellIndex], cellIndex);
  }
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
  checkWinner();
  if (running) {
    changePlayer();
  }
}

function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const conditions = winConditions[i];
    const cellA = options[conditions[0]];
    const cellB = options[conditions[1]];
    const cellC = options[conditions[2]];

    if (cellA === "" || cellB === "" || cellC === "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes("") && !roundWon) {
    statusText.textContent = 'Draw!';
    running = false;
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}
